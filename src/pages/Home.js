import { Box, Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Carousel from '../components/shared/Carousel'
import LandingHome from '../components/home/LandingHome'
import LandingCarousel from '../components/shared/LandingTvAndMovies'
import CarouselSkeleton from '../components/skeletons/CarouselSkeleton'
import LandingCarouselSkeleton from '../components/skeletons/LandingCarouselSkeleton'
import LandingHomeSkeleton from '../components/skeletons/LandingHomeSkeleton'
import tmdbService from '../services/tmdb.service'

function Home() {

    const { isLoading: isLoadingPopMovie, isError: isErrorPopMovie, error: errorPopMovie, data: dataPopMovie } = useQuery(['popularMovies'], () => tmdbService.getPopularMovies());
    const { isLoading: isLoadingNowMovie, isError: isErrorNowMovie, error: errorNowMovie, data: dataNowMovie } = useQuery(['nowPlayingMovies'], () => tmdbService.getNowPlayingMovies());
    const { isLoading: isLoadingUpcMovie, isError: isErrorUpcMovie, error: errorUpcMovie, data: dataUpcMovie } = useQuery(['upcomingMovies'], () => tmdbService.getUpcomingMovies());
    const { isLoading: isLoadingTopMovie, isError: isErrorTopMovie, error: errorTopMovie, data: dataTopMovie } = useQuery(['topRatedMovies'], () => tmdbService.getTopRatedMovies());
    const { isLoading: isLoadingPopTv, isError: isErrorPopTv, error: errorPopTv, data: dataPopTv } = useQuery(['popularTvShows'], () => tmdbService.getPopularTvShows());
    const { isLoading: isLoadingNowTv, isError: isErrorNowTv, error: errorNowTv, data: dataNowTv } = useQuery(['nowPlayingTvShows'], () => tmdbService.getAiringTodayTvShows());
    const { isLoading: isLoadingUpcTv, isError: isErrorUpcTv, error: errorUpcTv, data: dataUpcTv } = useQuery(['upcomingTvShows'], () => tmdbService.getOnTheAirTvShows());
    const { isLoading: isLoadingTopTv, isError: isErrorTopTv, error: errorTopTv, data: dataTopTv } = useQuery(['topRatedTvShows'], () => tmdbService.getTopRatedTvShows());

    return (
        <Container maxWidth={false}>

            {/* {isLoadingPopTv && <LandingCarouselSkeleton />}
            {dataPopTv && <LandingCarousel type={'tv'} title={'Popular Tv Shows'} data={dataPopTv.data.results} />} */}

            {isLoadingPopTv && <LandingHomeSkeleton />}
            {dataPopTv && <LandingHome type={'tv'} title={'Popular Tv Shows'} data={dataPopTv.data.results} />}

            {isLoadingPopMovie && <CarouselSkeleton />}
            {dataPopMovie && <Carousel type={'movie'} title={'Popular Movies'} data={dataPopMovie.data.results} />}

            {isLoadingNowTv && <CarouselSkeleton />}
            {dataNowTv && <Carousel type={'tv'} title={'Now Playing Tv Shows'} data={dataNowTv.data.results} />}

            {isLoadingNowMovie && <CarouselSkeleton />}
            {dataNowMovie && <Carousel type={'movie'} title={'Now Playing Movies'} data={dataNowMovie.data.results} />}

            {isLoadingUpcTv && <CarouselSkeleton />}
            {dataUpcTv && <Carousel type={'tv'} title={'Upcoming Tv Shows'} data={dataUpcTv.data.results} />}

            {isLoadingUpcMovie && <CarouselSkeleton />}
            {dataUpcMovie && <Carousel type={'movie'} title={'Upcoming Movies'} data={dataUpcMovie.data.results} />}

            {isLoadingTopTv && <CarouselSkeleton />}
            {dataTopTv && <Carousel type={'tv'} title={'Top Rated Tv Shows'} data={dataTopTv.data.results} />}

            {isLoadingTopMovie && <CarouselSkeleton />}
            {dataTopMovie && <Carousel type={'movie'} title={'Top Rated Movies'} data={dataTopMovie.data.results} />}

        </Container>
    )
}

export default Home