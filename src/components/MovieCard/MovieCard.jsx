import { PropTypes } from 'prop-types';
//---------------------------------------------//
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
    <>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
          }
          alt={title ? title : name}
        />
      </div>
      <div>
        <h2>
          {title ? title : name} ({release_date.slice(0, 4)})
        </h2>
        <p>Use Score: {Math.round((vote_average / 10) * 100)}%</p>
        <h3>Overwiew</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(item => item.name).join(' ,')}</p>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieCard;


// import { NavLink } from 'react-router-dom';
// import placeholder from '../../images/no-poster.png';
// import PropTypes from 'prop-types';

// const BASE_IMG_URL_1 = 'https://image.tmdb.org/t/p/w500';

// const MovieCard = ({
//   poster_path,
//   release_date,
//   title,
//   vote_average,
//   overview,
//   genres,
//   match,
//   location,
// }) => {
//   const genresUpdated = genres?.map(genre => genre.name).join(' ') || null;
//   const urlImgUpdated = poster_path
//     ? `https://image.tmdb.org/t/p/w500${poster_path}`
//     : BASE_IMG_URL_1;
//   const yearRelease = release_date ? release_date.split('-')[0] : null;
//   const userScore = vote_average ? vote_average * 10 : null;
//   return (
//     <>
//       <div className="ContainerMovie">
//         <img src={urlImgUpdated} alt={title} className="MovieImg" width="200" />
//         <div className="DescriptionMovie">
//           <h2>
//             {title} ({yearRelease})
//           </h2>
//           <p>User score {userScore}%</p>
//           <h3>Overview</h3>
//           <p>{overview}</p>
//           <h3>Genres</h3>
//           <p>{genresUpdated}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// MovieCard.propTypes = {
//   poster_path: PropTypes.string,
//   release_date: PropTypes.string,
//   title: PropTypes.string,
//   vote_average: PropTypes.number,
//   overview: PropTypes.string,
//   genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
// };
// export default MovieCard;