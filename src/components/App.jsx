import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import routes from '../routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from  './AppBar/AppBar';
// import Home from 'pages/Home/Home';
// import MoviesPage from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from  './Cast/Cast';
import Reviews from  './Reviews/Reviews';

const Home = lazy(() =>
  import('pages/Home/Home'),
);

const MoviesPage = lazy(() =>
  import('pages/Movies/Movies'),
);

const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails'),
);

const NotFound = lazy(() =>
  import('pages/NotFound/NotFound'),
);

export const App = () => {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route index element={<Suspense fallback={<h2>Loading ...</h2>}><Home /></Suspense>} />
        <Route path={routes.movies} element={<Suspense fallback={<h2>Loading ...</h2>}><MoviesPage /></Suspense>} />
        <Route path={routes.movieDetails} element={<Suspense fallback={<h2>Loading ...</h2>}><MovieDetails /></Suspense>}>
          <Route path={routes.cast} element={<Cast />} />
          <Route path={routes.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Suspense fallback={<h2>Loading ...</h2>}><NotFound /></Suspense>} />
      </Routes>
      <ToastContainer autoClose={2000} />
      
    </div>
  );
};
