import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/Api';
import MoviesList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrandingMovies() {
      try {
        const getMovies = await fetchTrendingMovies();
        setMovies(
          getMovies.map(({ title, name, id }) => ({
            title: title ?? name,
            id: id,
          }))
        );
      } catch {
        toast.error('Нічого не знайдено, спробуйте ще раз!');
        return;
      }
    }
    getTrandingMovies();
  }, []);

  return (
    <>
      <h1 className="Title">Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;