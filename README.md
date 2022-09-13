# Netflix Clone

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

DEMO : [https://netflix-clone-6f7dc.web.app/](https://netflix-clone-6f7dc.web.app/)

A front end netflix clone made using the next technologies and data from TheMovieDataBase API.

Dependencies :

* [ReactJS](https://fr.reactjs.org/)
* [React Router](https://reactrouter.com/en/v6.3.0)
* [Redux](https://redux.js.org/)
* [ReactQuery](https://tanstack.com/query/v4)
* [Axios](https://axios-http.com/fr/)
* [Material UI](https://mui.com/)
* [Material Icons](https://mui.com/material-ui/icons/)
* [swiperJS](https://swiperjs.com/)
* [javascript-color-gradient](https://www.npmjs.com/package/javascript-color-gradient)
* [firebase](https://firebase.google.com/)

API : 

* [TheMovieDataBase](https://developers.themoviedb.org/3/getting-started/introduction)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- APP ARCHITECTURE -->
## Architecture

  ```bash
├── src
│   ├── assets
│   │   ├── images
│   ├── components
│   │   ├── home
│   │   ├── modals
│   │   ├── nav
│   │   ├── shared
│   │   ├── skeletons
│   ├── css
│   ├── features
│   ├── pages
│   ├── services
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features

- [x] Responsive UI
- [x] Swiper
- [x] skeleton display while data loading
- [x] Modal for data details
- [x] Rating adaptative color
- [x] http requests
- [x] time display converter function

### Swiper

```js
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
    <SwiperSlide ></SwiperSlide>        
</Swiper>
```

### Skeleton Display While Data Loading
#### (using ReactQuery and Material UI skeletons)

```js
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
    const {
        isLoading: isLoadingPopMovie,
        isError: isErrorPopMovie,
        error: errorPopMovie,
        data: dataPopMovie
        } = useQuery(['popularMovies'], () => tmdbService.getPopularMovies());
    const {
        isLoading: isLoadingNowMovie,
        isError: isErrorNowMovie,
        error: errorNowMovie,
        data: dataNowMovie
        } = useQuery(['nowPlayingMovies'], () => tmdbService.getNowPlayingMovies());
    return (
        <Container maxWidth={false}>
            {isLoadingPopTv && <LandingHomeSkeleton />}
            {dataPopTv && <LandingHome type={'tv'} title={'Popular Tv Shows'} data={dataPopTv.data.results} />}
            {isLoadingPopMovie && <CarouselSkeleton />}
            {dataPopMovie && <Carousel type={'movie'} title={'Popular Movies'} data={dataPopMovie.data.results} />}
        </Container>
    )
}

export default Home
```

### Rating adaptative color

```js
import React from 'react'
import Gradient from "javascript-color-gradient";
import CircularProgress from '@mui/material/CircularProgress';

function ColoredRating({ rating }) {

    const colorCellFromValue = (rating) => {
        return new Gradient()
            .setColorGradient('#f44336', '#ff9800', '#4caf50')
            .setMidpoint(98)
            .getColor((rating * 10) + 1);
    };

    return (
            <CircularProgress
                variant="determinate"
                value={rating * 10}
                sx={{ 
                    color: colorCellFromValue(rating),
                }}
            />
    )
}

export default ColoredRating
```

### Time Display Converter Function

```js
function timeConvert(time) {
    const num = time;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min";
}
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>






## Built With

<details>
  <summary>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</summary>
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Victor Chatel - victor.chatel@gmail.com

Project Link: [github.com/victorchtl/netflix-clone](https://github.com/victorchtl/netflix-clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



