import PropTypes from 'prop-types';

import { NavLink, useLocation } from 'react-router-dom';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
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