import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../css/Carousel.css'
import { Box, Skeleton, Typography } from '@mui/material';

function CarouselSkeleton() {

    const skeletonArray = Array.from(Array(6).keys())

    return (
        <Box m={1} mt={3}>
            <Typography variant='h2' mb={1}>Category</Typography>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={3}
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
                    skeletonArray.map(item => (
                        <SwiperSlide key={item}>
                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                }}
                            >
                                <Skeleton variant='rectangular' width={'100%'} height={'100%'} sx={{ borderRadius: '3px' }}></Skeleton>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box >
    )
}

export default CarouselSkeleton