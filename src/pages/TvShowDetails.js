import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import tmdbService from '../services/tmdb.service';

function TvShowDetails() {

    let navigate = useNavigate();

    let params = useParams();

    const { isLoading, isError, data, error } = useQuery(['movieDetails', params.id], () => tmdbService.getTvShowDetails(params.id))

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
        if (rhours === 0) return rminutes + "min";
        else if (rminutes === 0) return rhours + "h";
        else return rhours + "h " + rminutes + "min";
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
                            <Typography variant='h4'>{data.data.name}</Typography>
                            <Typography variant='button'>{data.data.first_air_date.substring(0, 4)} - {data.data.in_production ? 'ON AIR' : data.data.last_episode_to_air.air_date.substring(0, 4)}</Typography>
                            <Stack direction={'row'} spacing={1}>
                                {data.data.genres.map(element => (
                                    <Typography variant='caption' key={element.name}>{element.name}</Typography>
                                ))}
                            </Stack>
                            <Typography variant='caption'>{'Episode ~ ' + timeConvert(data.data.episode_run_time[0])}</Typography>
                            <Grid container spacing={1} mt={1}>
                                {data.data.seasons.map(season => (
                                    <Grid item key={season.name}>
                                        <Button
                                            onClick={() => navigate('season/' + season.season_number)}
                                            variant="outlined"
                                            size="small"
                                            sx={{ fontSize: '.7rem' }}
                                        >
                                            {season.name}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant='body1' mt={2}>{data.data.overview}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
            }
        </Container>
    )
}

export default TvShowDetails