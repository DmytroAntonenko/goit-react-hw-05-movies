import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieReviews } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const getReviews = await fetchMovieReviews(movieId);

        setMovieReviews(
          getReviews.map(({ author, content, id }) => ({
            author: author,
            content: content,
            id: id,
          }))
        );
      } catch {
        toast.error("Нічого не знайдено!");
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div  className="ContainerCastReviews">
    {movieReviews && movieReviews.length ? (
      <ul>
      {movieReviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3 className="AddText">Author: {author}</h3>
          <p  className="Content" >{content}</p>
        </li>
      ))}
    </ul>
    ) : (
      <p className="AddText">No reviews for this movie.</p>
    )}
  </div>
  );
};

export default Reviews;