import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../css/Carousel.css'
import Carousel from './Carousel'
import SlideButtons from './SlideButtons';
import ColoredRating from './ColoredRating';

function LandingCarousel({ type, title, data }) {

    return (
        <>
            <Box
                mb={1}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                    width: '100%',
                    aspectRatio: '16/10',
                }}>

                <Box sx={{ height: '56px' }}></Box>

                <Box ml={5}>
                    <Box sx={{ maxWidth: '50%' }} spacing={2}>
                        {type === 'movie' ?
                            <Typography variant='h1'>{data[0].title}</Typography>
                            :
                            <Typography variant='h1'>{data[0].name}</Typography>
                        }
                        <Typography
                            mt={2}
                            variant='body2'
                            textAlign={'justify'}
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}
                        >
                            {data[0].overview}
                        </Typography>
                        <Box display={'flex'} mt={2}>
                            <Box mr={2}>{data[0].vote_average && <ColoredRating rating={data[0].vote_average} />}</Box>
                            
                            <SlideButtons />
                        </Box>
                    </Box>
                </Box>
                <Carousel type={type} title={title} data={data.slice(1)} />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    aspectRatio: '16/10',
                    background: 'linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(255,255,255,0) 100%)',
                    zIndex: -100,
                    display: 'flex'
                }}
            ></Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    aspectRatio: '16/10',
                    background: 'linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
                    zIndex: -100,
                    display: 'flex'
                }}
            ></Box>
            <Box
                component={'img'}
                src={'https://image.tmdb.org/t/p/original/' + data[0].backdrop_path}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    aspectRatio: '16/10',
                    objectFit: 'cover',
                    zIndex: -200,
                    display: 'flex'
                }}
            ></Box>
        </>
    )
}

export default LandingCarousel