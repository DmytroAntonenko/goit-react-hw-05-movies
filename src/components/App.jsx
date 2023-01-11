import { Route, Routes } from "react-router-dom";
import routes from '../routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from  './AppBar/AppBar';
import Home from 'pages/Home/Home';
import MoviesPage from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from  './Cast/Cast';
import Reviews from  './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path={routes.movies} element={<MoviesPage />} />
        <Route path={routes.movieDetails} element={<MovieDetails />}>
          <Route path={routes.cast} element={<Cast />} />
          <Route path={routes.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} />
      
    </div>
  );
};
