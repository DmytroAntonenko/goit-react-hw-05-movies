import { PropTypes } from 'prop-types';
import placeholderPoster from 'images/no-poster.png';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
 
  return (
    <div  className="ContainerMovieCard">
      <div>
        <img
          src={
            poster_path
            ? BASE_IMG_URL + poster_path
            : placeholderPoster
          }
          alt={title ? title : name}
        />
      </div>
      <div>
      <h2>{title + '(' + release_date?.slice(0, 4) + ')'}</h2>
        <p>Use Score: {Math.round((vote_average / 10) * 100)}%</p>
        <h3>Overwiew</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieCard;