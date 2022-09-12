import { Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Carousel from '../components/shared/Carousel';
import LandingCarousel from '../components/shared/LandingTvAndMovies';
import CarouselSkeleton from '../components/skeletons/CarouselSkeleton';
import LandingCarouselSkeleton from '../components/skeletons/LandingCarouselSkeleton';
import tmdbService from '../services/tmdb.service';

function TvShows() {

  const { isLoading: isLoadingPopTv, isError: isErrorPopTv, error: errorPopTv, data: dataPopTv } = useQuery(['popularTvShows'], () => tmdbService.getPopularTvShows());
  const { isLoading: isLoadingNowTv, isError: isErrorNowTv, error: errorNowTv, data: dataNowTv } = useQuery(['nowPlayingTvShows'], () => tmdbService.getAiringTodayTvShows());
  const { isLoading: isLoadingUpcTv, isError: isErrorUpcTv, error: errorUpcTv, data: dataUpcTv } = useQuery(['upcomingTvShows'], () => tmdbService.getOnTheAirTvShows());
  const { isLoading: isLoadingTopTv, isError: isErrorTopTv, error: errorTopTv, data: dataTopTv } = useQuery(['topRatedTvShows'], () => tmdbService.getTopRatedTvShows());
  const { isLoading: isLoadingActTv, isError: isErrorActTv, error: errorActTv, data: dataActTv } = useQuery(['actionAdventureMovies'], () => tmdbService.getActionAdventureTvShows());
  const { isLoading: isLoadingAniTv, isError: isErrorAniTv, error: errorAniTv, data: dataAniTv } = useQuery(['animationMovies'], () => tmdbService.getAnimationTvShows());
  const { isLoading: isLoadingComTv, isError: isErrorComTv, error: errorComTv, data: dataComTv } = useQuery(['comedyMovies'], () => tmdbService.getComedyTvShows());
  const { isLoading: isLoadingFamTv, isError: isErrorFamTv, error: errorFamTv, data: dataFamTv } = useQuery(['familyMovies'], () => tmdbService.getFamilyTvShows());
  const { isLoading: isLoadingDocTv, isError: isErrorDocTv, error: errorDocTv, data: dataDocTv } = useQuery(['documentaryMovies'], () => tmdbService.getDocumentaryTvShows());

  return (

    <Container maxWidth={false} >

      {isLoadingPopTv && <LandingCarouselSkeleton />}
      {dataPopTv && <LandingCarousel type={'tv'} title={'Popular'} data={dataPopTv.data.results} />}

      {isLoadingNowTv && <CarouselSkeleton />}
      {dataNowTv && <Carousel type={'tv'} title={'Now Playing'} data={dataNowTv.data.results} />}

      {isLoadingUpcTv && <CarouselSkeleton />}
      {dataUpcTv && <Carousel type={'tv'} title={'Upcoming'} data={dataUpcTv.data.results} />}

      {isLoadingTopTv && <CarouselSkeleton />}
      {dataTopTv && <Carousel type={'tv'} title={'Top Rated'} data={dataTopTv.data.results} />}

      {isLoadingActTv && <CarouselSkeleton />}
      {dataActTv && <Carousel type={'tv'} title={'Action Adventure'} data={dataActTv.data.results} />}

      {isLoadingAniTv && <CarouselSkeleton />}
      {dataAniTv && <Carousel type={'tv'} title={'Animation'} data={dataAniTv.data.results} />}

      {isLoadingComTv && <CarouselSkeleton />}
      {dataComTv && <Carousel type={'tv'} title={'Comedy'} data={dataComTv.data.results} />}

      {isLoadingFamTv && <CarouselSkeleton />}
      {dataFamTv && <Carousel type={'tv'} title={'Family'} data={dataFamTv.data.results} />}

      {isLoadingDocTv && <CarouselSkeleton />}
      {dataDocTv && <Carousel type={'tv'} title={'Documentary'} data={dataDocTv.data.results} />}

    </Container>

  )
}

export default TvShows