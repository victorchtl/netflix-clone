import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tmdbService from '../services/tmdb.service';

function MovieDetails() {

    let navigate = useNavigate();

    let params = useParams();

    const { isLoading, isError, data, error } = useQuery(['movieDetails', params.id], () => tmdbService.getMovieDetails(params.id))

    const collectionId = data?.data.belongs_to_collection?.id

    const { status, fetchStatus, data: collection } = useQuery(['collection', collectionId],
        () => tmdbService.getMovieCollectionDetails(collectionId),
        {
            enabled: !!collectionId,
        }
    )

    function timeConvert(time) {
        const num = time;
        const hours = (num / 60);
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "min";
    }

    return (
        <Container>
            {data &&
                <Grid container mt={12}>
                    <Grid item xs={4}>
                        <Box
                            component={'img'}
                            src={'https://image.tmdb.org/t/p/original' + data.data.poster_path}
                            sx={{
                                width: '100%',
                                aspectRatio: '.7',
                                objectFit: 'cover'
                            }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Stack ml={2}>
                            <Typography variant='h4'>{data.data.title}</Typography>
                            <Typography variant='button'>{data.data.release_date.substring(0, 4)}</Typography>
                            <Stack direction={'row'} spacing={1}>
                                {data.data.genres.map(element => (
                                    <Typography variant='caption' key={element.name}>{element.name}</Typography>
                                ))}
                            </Stack>
                            <Typography variant='caption'>{timeConvert(data.data.runtime)}</Typography>
                            <Typography variant='body1' mt={2}>{data.data.overview}</Typography>
                            {collection &&
                                <Box mt={3} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant='caption'>MOVIES FROM THE SAME SERIE</Typography>
                                    <Typography variant='caption'>View More</Typography>
                                </Box>
                            }
                            <Box mt={1} sx={{
                                overflowX: 'scroll', '&::-webkit-scrollbar': { height: '8px' }, '&::-webkit-scrollbar-thumb': {
                                    borderRadius: '2px',
                                    backgroundColor: 'rgba(0, 0, 0, .2)',
                                }
                            }}>
                                <Stack direction={'row'} spacing={1}>
                                    {collection && collection.data.parts.map(movie => {
                                        if (movie.id != params.id) {
                                            return <Stack key={movie.id}>
                                                <Box
                                                    onClick={() => navigate('/movie/' + movie.id)}
                                                    component={'img'}
                                                    src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
                                                    sx={{
                                                        aspectRatio: '.7',
                                                        width: '120px',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                <Typography
                                                    noWrap
                                                    onClick={() => navigate('/movie/' + movie.id)}
                                                    sx={{ cursor: 'pointer' }}
                                                    variant='caption'>
                                                    {movie.title}
                                                </Typography>
                                            </Stack>
                                        } else { }
                                    })
                                    }
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
            }
        </Container>
    )
}

export default MovieDetails