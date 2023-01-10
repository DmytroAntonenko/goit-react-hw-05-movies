import PropTypes from 'prop-types';
import { BiCameraMovie } from 'react-icons/bi';
import { NavLink, useLocation } from 'react-router-dom';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
    {movies.map(({ id, title }) => (
      <li className="MovieItem" key={id}>
        <BiCameraMovie  className="MovieIcon" size={32} />
        <NavLink to={{ pathname: `/movies/${id}`, state: { from: location } }}>
          {title}
        </NavLink>
      </li>
    ))}
  </ul> 
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;