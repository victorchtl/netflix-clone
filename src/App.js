import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import { createTheme, CssBaseline, ThemeProvider, useScrollTrigger } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/nav/Footer';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import MovieDetails from './pages/MovieDetails';
import TvShowDetails from './pages/TvShowDetails';
import TvShowSeasonDetails from './pages/TvShowSeasonDetails';

function App() {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1
  });

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: trigger ? 'linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%)' : 'transparent',
            transition: 'all .3s ease-in-out'
          }
        }
      }
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#E40915'
      },
      background: {
        paper: '#141414',
        default: '#141414'
      }
    },
    typography: {
      h1: {
        fontWeight: 600
      },
      h2: {
        fontWeight: 600
      },
      h3: {
        fontWeight: 600
      },
      body1: {
        fontSize: '.8rem'
      }
    }
  });

  theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.3vw',
    },
  };

  theme.typography.h2 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.1vw',
    },
  };

  theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '.8vw',
    },
  };

  theme.typography.body2 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1vw',
    },
  };

  const queryClient = new QueryClient()


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="tv" element={<TvShows />} />
            <Route path="tv/:id" element={<TvShowDetails />} />
            <Route path="tv/:id/season/:id" element={<TvShowSeasonDetails />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
