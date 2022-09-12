import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import tmdbService from '../services/tmdb.service'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

function TvShowSeasonDetails() {

    let navigate = useNavigate();

    let params = useParams();

    let location = useLocation();

    const tvShowId = location.pathname.split('/')[2]

    const tvShowSeasonId = location.pathname.split('/')[4]

    const { isLoading: isLoadingShow, isError: isErrorShow, data: dataShow, error: errorShow } = useQuery(['movieDetails', tvShowId], () => tmdbService.getTvShowDetails(tvShowId))

    const { isLoading, isError, data, error } = useQuery(['movieDetails', tvShowId, tvShowSeasonId], () => tmdbService.getTvShowSeasonDetails(tvShowId, tvShowSeasonId))

    return (
        <Container>
            {data && dataShow &&
                <>
                    <Grid container spacing={1} mt={12}>
                        <Grid item>
                            <Box onClick={() => navigate('/tv/' + tvShowId)} mr={2} sx={{cursor:'pointer', opacity:'.3', '&:hover':{opacity:'.5'}}}>
                                <ArrowBackRoundedIcon />
                            </Box>
                        </Grid>
                        {dataShow.data.seasons.map(season => (
                            <Grid item key={season.name}>
                                <Button
                                    onClick={() => navigate('/tv/' + tvShowId + '/season/' + season.season_number)}
                                    variant="outlined"
                                    size="small"
                                    sx={{ fontSize: '.7rem' }}
                                >
                                    {season.name}
                                </Button>
                            </Grid>
                        ))}

                    </Grid>
                    <Grid container mt={4}>
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
                                <Typography variant='h4'>{dataShow.data.name}</Typography>
                                <Typography variant='h5'>{data.data.name}</Typography>
                                <Typography variant='body1' mt={2}>{data.data.overview}</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </>
            }
        </Container>
    )
}

export default TvShowSeasonDetails