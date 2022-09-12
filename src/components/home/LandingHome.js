import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import netflixLogo from '../../assets/images/navbar_logo.png'
import SlideButtons from '../shared/SlideButtons.js'

function LandingHome({ type, title, data }) {

    function getAspectRatio(index) {
        if (index === 0) return '2'
        else if (index === 1 || index === 2) return '1'
        else return '16/9'
    }

    return (
        <Box m={1} mt={12}>
            <Typography variant='h2' mb={1}>{title}</Typography>
            <Grid container spacing={1}>
                {data.slice(0, 7).map(movie => (
                    <Grid item xs={data.indexOf(movie) === 0 ? 6 : 3}>
                        <Box
                            sx={{
                                position:'relative',
                                cursor: 'pointer',
                                '&:hover .itemOverlay': {
                                    display: 'flex',
                                    opacity: '1',
                                    transition: 'all .4s ease-in-out'
                                },
                                '&:hover .itemImg': {
                                    filter: 'brightness(.2)',
                                    transition: 'all .4s ease-in-out'
                                },

                            }}
                        >
                            <Box
                                className='itemOverlay'
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    opacity: '0',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 999,
                                    transition: 'all .4s ease-in-out'
                                }}
                            >
                                <Grid
                                    container
                                    p={2}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    justifyContent={'space-between'}
                                    alignItems={'space-between'}
                                >
                                    <Grid item>
                                        {type === 'movie' ?
                                            <Typography variant='h3'>{movie.title && movie.title.toUpperCase()}</Typography>
                                            :
                                            <Typography variant='h3'>{movie.name && movie.name.toUpperCase()}</Typography>
                                        }
                                    </Grid>
                                    <Grid item display={'flex'} justifyContent={'flex-end'}>
                                        <SlideButtons />
                                    </Grid>
                                </Grid>

                            </Box>
                            {movie.backdrop_path ?
                                <Box
                                    className='itemImg'
                                    component={'img'}
                                    src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}
                                    sx={{
                                        aspectRatio: getAspectRatio(data.indexOf(movie)),
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '3px',
                                        transition: 'all .4s ease-in-out'
                                    }}
                                />
                                :
                                <Box
                                    className='itemNoImg'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        aspectRatio: getAspectRatio(data.indexOf(movie)),
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '3px',
                                        transition: 'all .4s ease-in-out',
                                        background: 'black'
                                    }}
                                >
                                    <Box
                                        className='netflixLogo'
                                        component={'img'}
                                        src={netflixLogo}
                                        sx={{
                                            width: '50%',
                                            aspectRatio: '2',
                                            opacity: '.1'
                                        }}
                                    />
                                </Box>
                            }

                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default LandingHome