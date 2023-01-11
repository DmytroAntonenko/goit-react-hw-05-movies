import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackButton from 'components/BackButton';
import MovieCard from 'components/MovieCard';
import { BiCameraMovie } from 'react-icons/bi';
// import routes from 'routes';
import { useEffect, useState, useParams } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
// import {
//   Outlet,
//   useNavigate,
//   useParams,
//   Link,
//   useLocation,
// } from 'react-router-dom';

import { fetchMovieDetails } from 'services/Api';


// const BASE_IMG_URL_1 = 'https://image.tmdb.org/t/p/w500';
// const BASE_IMG_URL_2='https://image.tmdb.org/t/p/w300';

const MovieDetails= () => {
  const location = useLocation();
  // const [movie, setMovie] = useState(null);
  // const { movieId } = useParams();

  // useEffect(() => {
  //   fetchMovieDetails(movieId).then(data => {
  //     // console.log(data);
  //     setMovie(data);
  //   });
  // }, [movieId]);


//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState({});
//   const navigate = useNavigate();
//   const location = useLocation();
//   const backLinkHref = location.state.from;

//   useEffect(() => {
//     async function getMovieDetails() {
//       try {
//         const getMovieDetails = await fetchMovieDetails(movieId);
//         setMovieDetails(getMovieDetails);
//       } catch {
//         toast.error('Нічого не знайдено, спробуйте ще раз!');
//       }
//     }
//     getMovieDetails();
//   }, [movieId]);







  return (
    
    <>
        <BackButton />
        {/* <MovieCard /> */}
        
       
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