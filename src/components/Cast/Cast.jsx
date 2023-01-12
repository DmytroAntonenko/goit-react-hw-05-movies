import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import placeholderAvatar from 'images/no-foto.png';
import { fetchMovieCast } from 'services/Api';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const getCast = await fetchMovieCast(movieId);

        setMovieCast(
          getCast.map(({ name, character, profile_path, id }) => ({
            image: profile_path,
            name,
            character,
            id,   
          }))
        );       
      } catch {
        console.log('error');
        toast.error("Нічого не знайдено!");
      }
    }
    
    getCast();
  }, [movieId]);

  return (
    <div  className="ContainerCastReviews">
    {movieCast && movieCast.length ? (
      <ul className="MovieCast">
        {movieCast.map(({ name, character, image, id }) => (
          <li key={id}>
            <img 
            src={
              image
                ? BASE_IMG_URL + image
                : placeholderAvatar
            }
            alt={'Foto ' + name} />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    ) : (
        <p className="AddText">We don't have the information about any actors.</p>
    )}
  </div>
  );
};

export default Cast;