import { fetchSearchMovies} from 'services/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from 'components/SearchBar';
import MoviesList from 'components/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (!movieName) {
          return;
        }
        const getMovies = await fetchSearchMovies(movieName);
        setMovies(getMovies);
        if (getMovies.length === 0) {
          toast.warning("Нічого не знайдено. Введіть коректне значення!");
        }
      } catch {
        toast.warning("Нічого не знайдено. Введіть коректне значення!");
      }
    };
    getMovies();
  }, [movieName, setMovies]);

  const handleChangeQuery = name => {
    setSearchParams({ query: name });
  };
  return (
    <div className="MainSearchMovies">
      <SearchBar onSubmit={handleChangeQuery} />
      <MoviesList movies={movies} />
      
    </div>
  );
};

export default Movies;