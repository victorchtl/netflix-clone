import axiosConfig from './axiosConfig';

const apiKey = '5306587ae7992068050630d6f04c4abd';

const language = 'en-US'


class TdmbService {

    // MOVIE

    getSearchMovies(search) {
        return axiosConfig.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&page=1&include_adult=false&query=${search}`)
    }

    getNowPlayingMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=${language}`)
    }

    getPopularMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}`)
    }

    getTopRatedMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=${language}`)
    }

    getUpcomingMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=${language}`)
    }

    getActionMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`)
    }

    getAdventureMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`)
    }

    getAnimationMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`)
    }

    getComedyMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`)
    }

    getDocumentaryMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`)
    }

    getHorrorMovies() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`)
    }

    getMovieDetails(id) {
        return axiosConfig.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`)
    }

    getMovieCollectionDetails(id) {
        return axiosConfig.get(`https://api.themoviedb.org/3/collection/${id}?api_key=${apiKey}&language=${language}`) 
    }

    // TV SHOW

    getPopularTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=${language}`)
    }

    getTopRatedTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=${language}`)
    }

    getOnTheAirTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=${language}`)
    }

    getAiringTodayTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=${language}`)
    }

    getActionAdventureTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&with_genres=10759`)
    }

    getAnimationTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&with_genres=16`)
    }

    getComedyTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&with_genres=35`)
    }

    getDocumentaryTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&with_genres=99`)
    }

    getFamilyTvShows() {
        return axiosConfig.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&with_genres=10751`)
    }

    getTvShowDetails(id) {
        return axiosConfig.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=${language}`)
    }

    getTvShowSeasonDetails(id, seasonNumber) {
        return axiosConfig.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${apiKey}&language=${language}`)
    }
}

export default new TdmbService();