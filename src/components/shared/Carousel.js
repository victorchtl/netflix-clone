import { Box, Button, Grid, IconButton, Modal, Skeleton, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../css/Carousel.css'
import SlideButtons from './SlideButtons';
import netflixLogo from '../../assets/images/navbar_logo.png'
import ColoredRating from './ColoredRating';
import { useNavigate } from 'react-router-dom';
import MovieModal from '../modals/MovieModal';

function Carousel({ type, title, data }) {

    const navigate = useNavigate()

    const [modalData, setModalData] = useState('1')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function openModal(id) {
        setModalData(id)
        setOpen(true)
    }

    return (
        <Box m={1} mt={3}>
        
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box mt={5} mr={2} ml={2}>
                    <MovieModal type={type} id={modalData} close={handleClose}/>
                </Box>
            </Modal>

            <Typography variant='h2' mb={1}>{title}</Typography>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    slidesPerGroup={3}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            slidesPerGroup: 3
                        },
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                            slidesPerGroup: 4
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                            slidesPerGroup: 5
                        },
                        1536: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                            slidesPerGroup: 6
                        }
                    }}
                >
                    {
                        data.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <Box
                                    // onClick={(e) => type === 'movie' ? navigate('/movie/' + slide.id) : navigate('/tv/' + slide.id)}
                                    sx={{
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
                                            <Grid item sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => openModal(slide.id)}>
                                                {type === 'movie' ?
                                                    <Typography variant='h3'>{slide.title && slide.title.toUpperCase()}</Typography>
                                                    :
                                                    <Typography variant='h3'>{slide.name && slide.name.toUpperCase()}</Typography>
                                                }
                                            </Grid>
                                            <Grid item display={{ xs: 'none', md: 'flex' }} justifyContent={'space-between'}>
                                                {slide.vote_average && <ColoredRating rating={slide.vote_average} />}
                                                <SlideButtons />
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    {slide.backdrop_path ?
                                        <Box
                                            className='itemImg'
                                            component={'img'}
                                            src={'https://image.tmdb.org/t/p/original/' + slide.backdrop_path}
                                            sx={{
                                                aspectRatio: '16/9',
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
                                                aspectRatio: '16/9',
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
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </Box >
    )
}

export default Carousel