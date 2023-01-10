import { Route, Routes } from "react-router-dom";
import routes from '../routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from  './AppBar/AppBar';
import Home from 'pages/Home/Home';
import MoviesPage from 'pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path={routes.movies} element={<MoviesPage />} />
      </Routes>
      <ToastContainer autoClose={2000} />
      {/* React homework template */}
    </div>
  );
};
