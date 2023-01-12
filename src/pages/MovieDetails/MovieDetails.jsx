import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackButton from 'components/BackButton';
import MovieCard from 'components/MovieCard';
import { BiCameraMovie } from 'react-icons/bi';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

import { fetchMovieDetails } from 'services/Api';



const MovieDetails= () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const getMovieDetails = await fetchMovieDetails(movieId);
        // console.log(getMovieDetails)

        setMovieDetails(getMovieDetails);
      } catch {
        toast.error('Нічого не знайдено, спробуйте ще раз!');
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    
    <>
      <BackButton />
      <MovieCard movie={movieDetails}/>  
      <div className="ContainerCastReviews">
        <p className="AddText">Additional information</p>
          <ul>
            <li className="MovieItem">
              <BiCameraMovie  className="MovieIcon" size={32} />
              <NavLink state={location.state} to="cast">
                Cast
              </NavLink>
            </li>
            <li className="MovieItem">
              <BiCameraMovie  className="MovieIcon" size={32} />
              <NavLink state={location.state} to="reviews">
                Review
              </NavLink>
            </li>
          </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;