import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import tmdbService from '../../services/tmdb.service';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import ColoredRating from '../shared/ColoredRating';
import SlideButtons from '../shared/SlideButtons';

function MovieModal({ type, id, close }) {

    let navigate = useNavigate();

    const [isLike, setIsLike] = useState(false)
    const [isAdded2W, setIsAdded2W] = useState(false)

    const { isLoading, isError, data, error } = useQuery(['movieDetails', id], () => tmdbService.getMovieDetails(id))

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
        <Box sx={{ width: '100%', minHeight: '100vh', background: '#141414', borderRadius: '5px 5px 0 0' }}>

            {data &&
                <Box className='landing'>
                    <Box className='presentation'
                        sx={{
                            width: '100%',
                            aspectRatio: '16/9',
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gridTemplateRows: '2fr 1fr',

                        }}
                    >
                        <Box
                            m={1}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gridColumn: '1 / 2',
                                gridRow: '1 / 2',
                                zIndex: 999
                            }}>
                            <Box onClick={close} p={.5} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ background: '#141414', height: 'fit-content', borderRadius: '50%', cursor: 'pointer' }}>
                                <CloseRoundedIcon fontSize='large' />
                            </Box>
                        </Box>
                        <Box ml={5} sx={{
                            gridColumn: '1 / 2',
                            gridRow: '2 / 3',
                            zIndex: 999
                        }}>
                            <Box mb={2}>
                                <Typography variant='h1' color={'text.primary'}>{data.data.title}</Typography>
                            </Box>
                            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                                <Button variant="contained" size='small' startIcon={<PlayArrowRoundedIcon />}>
                                    Play
                                </Button>
                                <Box ml={2} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                                    <IconButton aria-label="add">
                                        {isAdded2W ?
                                            <AddCircleRoundedIcon />
                                            :
                                            <RemoveCircleRoundedIcon />
                                        }
                                    </IconButton>
                                </Box>
                                <Box ml={2} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                                    <IconButton aria-label="like">
                                        {isLike ?
                                            <FavoriteRoundedIcon />
                                            :
                                            <FavoriteBorderRoundedIcon />
                                        }
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>

                        <Box className='backgroundImg'
                            component={'img'}
                            src={'https://image.tmdb.org/t/p/original/' + data.data.backdrop_path}
                            sx={{
                                gridColumn: '1 / 2',
                                gridRow: '1 / 3',
                                width: '100%',
                                borderRadius: '5px 5px 0 0'
                            }}
                        />
                        <Box className='gradient'
                            sx={{
                                gridColumn: '1 / 2',
                                gridRow: '1 / 3',
                                width: '100%',
                                background: 'linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(255,255,255,0) 50%)'
                            }}
                        />
                    </Box>
                    <Box className='description' ml={5} mr={5}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                                <Box mr={1}><Typography variant='caption'>{data.data.release_date.substring(0, 4)}</Typography></Box>
                                <Box><Typography variant='caption'>{timeConvert(data.data.runtime)}</Typography></Box>
                            </Box>
                            <Typography>
                                Genres :
                                &nbsp;
                                {data.data.genres[0].name}
                                {data.data.genres.slice(1).map(genre => (
                                    ', ' + genre.name
                                ))}
                            </Typography>
                        </Box>
                        <Box mt={2} width={'60%'}>
                            <Typography variant='body1' textAlign={'justify'}>{data.data.overview}</Typography>
                        </Box>
                    </Box>
                </Box>
            }

            <Box ml={5} mr={5}>

                {collection &&
                    <Box mt={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant='h2'>From The Same Serie</Typography>
                            </Grid>
                            {collection.data.parts.map(movie => (
                                <Grid item sm={3} md={4} lg={5} xl={6}>
                                    <Box sx={{
                                        position: 'relative',
                                        '&:hover .itemImg': { filter: 'brightness(.2)' },
                                        '&:hover .itemOverlay': { opacity: '1' }
                                        }}>
                                        <Box
                                            className='itemImg'
                                            component={'img'}
                                            src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}
                                            sx={{
                                                width: '100%',
                                                aspectRatio: '16/9',
                                                borderRadius: '3px'
                                            }}
                                        />
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
                                                <Grid item sx={{ '&:hover': { textDecoration: 'underline' } }}>
                                                    {type === 'movie' ?
                                                        <Typography variant='h3'>{movie.title && movie.title.toUpperCase()}</Typography>
                                                        :
                                                        <Typography variant='h3'>{movie.name && movie.name.toUpperCase()}</Typography>
                                                    }
                                                </Grid>
                                                <Grid item display={{ xs: 'none', md: 'flex' }} justifyContent={'space-between'}>
                                                    {movie.vote_average && <ColoredRating rating={movie.vote_average} />}
                                                    <SlideButtons />
                                                </Grid>
                                            </Grid>

                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                }

            </Box>

        </Box>
    )
}

export default MovieModal