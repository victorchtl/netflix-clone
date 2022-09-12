import { Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Carousel from '../components/shared/Carousel.js'
import LandingCarousel from '../components/shared/LandingTvAndMovies.js'
import CarouselSkeleton from '../components/skeletons/CarouselSkeleton.js'
import LandingCarouselSkeleton from '../components/skeletons/LandingCarouselSkeleton.js'
import tmdbService from '../services/tmdb.service.js'

function Movies() {

  const { isLoading: isLoadingPopMovies, isError: isErrorPopMovies, error: errorPopMovies, data: dataPopMovies } = useQuery(['popularMovies'], () => tmdbService.getPopularMovies());
  const { isLoading: isLoadingNowMovies, isError: isErrorNowMovies, error: errorNowMovies, data: dataNowMovies } = useQuery(['nowPlayingMovies'], () => tmdbService.getNowPlayingMovies());
  const { isLoading: isLoadingUpcMovies, isError: isErrorUpcMovies, error: errorUpcMovies, data: dataUpcMovies } = useQuery(['upcomingMovies'], () => tmdbService.getUpcomingMovies());
  const { isLoading: isLoadingTopMovies, isError: isErrorTopMovies, error: errorTopMovies, data: dataTopMovies } = useQuery(['topRatedMovies'], () => tmdbService.getTopRatedMovies());
  const { isLoading: isLoadingActMovies, isError: isErrorActMovies, error: errorActMovies, data: dataActMovies } = useQuery(['actionMovies'], () => tmdbService.getActionMovies());
  const { isLoading: isLoadingAdvMovies, isError: isErrorAdvMovies, error: errorAdvMovies, data: dataAdvMovies } = useQuery(['adventureMovies'], () => tmdbService.getAdventureMovies());
  const { isLoading: isLoadingAniMovies, isError: isErrorAniMovies, error: errorAniMovies, data: dataAniMovies } = useQuery(['animationMovies'], () => tmdbService.getAnimationMovies());
  const { isLoading: isLoadingComMovies, isError: isErrorComMovies, error: errorComMovies, data: dataComMovies } = useQuery(['comedyMovies'], () => tmdbService.getComedyMovies());
  const { isLoading: isLoadingHorMovies, isError: isErrorHorMovies, error: errorHorMovies, data: dataHorMovies } = useQuery(['horrorMovies'], () => tmdbService.getHorrorMovies());
  const { isLoading: isLoadingDocMovies, isError: isErrorDocMovies, error: errorDocMovies, data: dataDocMovies } = useQuery(['documentaryMovies'], () => tmdbService.getDocumentaryMovies());

  return (
    <Container maxWidth={false}>

      {isLoadingPopMovies && <LandingCarouselSkeleton />}
      {dataPopMovies && <LandingCarousel type={'movie'} title={'Popular ok'} data={dataPopMovies.data.results} />}

      {isLoadingNowMovies && <CarouselSkeleton />}
      {dataNowMovies && <Carousel type={'movie'} title={'Now Playing ok'} data={dataNowMovies.data.results} />}

      {isLoadingUpcMovies && <CarouselSkeleton />}
      {dataUpcMovies && <Carousel type={'movie'} title={'Upcoming ok'} data={dataUpcMovies.data.results} />}

      {isLoadingTopMovies && <CarouselSkeleton />}
      {dataTopMovies && <Carousel type={'movie'} title={'Top Rated ok'} data={dataTopMovies.data.results} />}

      {isLoadingActMovies && <CarouselSkeleton />}
      {dataActMovies && <Carousel type={'movie'} title={'Action ok'} data={dataActMovies.data.results} />}

      {isLoadingAdvMovies && <CarouselSkeleton />}
      {dataAdvMovies && <Carousel type={'movie'} title={'Adventure ok'} data={dataAdvMovies.data.results} />}

      {isLoadingAniMovies && <CarouselSkeleton />}
      {dataAniMovies && <Carousel type={'movie'} title={'Animation ok'} data={dataAniMovies.data.results} />}

      {isLoadingComMovies && <CarouselSkeleton />}
      {dataComMovies && <Carousel type={'movie'} title={'Comedy ok'} data={dataComMovies.data.results} />}

      {isLoadingHorMovies && <CarouselSkeleton />}
      {dataHorMovies && <Carousel type={'movie'} title={'Horror ok'} data={dataHorMovies.data.results} />}

      {isLoadingDocMovies && <CarouselSkeleton />}
      {dataDocMovies && <Carousel type={'movie'} title={'Documentary ok'} data={dataDocMovies.data.results} />}

    </Container>
  )
}

export default Movies