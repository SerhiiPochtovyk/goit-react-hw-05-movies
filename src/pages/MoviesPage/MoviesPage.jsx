import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { requestMovies } from '../../services/api';
import noposter from '../../images/noposter.png';
import styles from './MoviesPage.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const [searchMovie, setsearchedMovie] = useState([]);
  const [params, setUseParams] = useSearchParams();
  const location = useLocation();

  const onSubmit = event => {
    event.preventDefault();
    setUseParams({ query: event.currentTarget.elements.inputQuery.value });
  };
  const queryValue = params.get('query');

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await requestMovies(queryValue);
        setsearchedMovie(results);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchMovies(queryValue);
  }, [queryValue]);

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <input
          className={`${styles.input} is-warning`}
          placeholder="search for a movie..."
          type="text"
          name="inputQuery"
          defaultValue={queryValue}
        />
        <button className={`${styles.button} is-success`} type="submit">
          search
        </button>
        <ul className={`${styles.moviesList}`}>
          {searchMovie.map(movie => (
            <li key={movie.id} className={`${styles.movieItem}`}>
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}
                className={`${styles.movieLink}`}
              >
                <div className={`${styles.movieOverlay}`}> 
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : `${noposter}`
                    }
                    alt={movie.title}
                    height="446px"
                    className={`${styles.poster}`} 
                  />
                  <div className={`${styles.movieInfo}`}> 
                    <h2 className={`${styles.movieTitle}`}> 
                      {movie.title || movie.name}
                    </h2>
                    <p className={`${styles.score}`}>Score: {movie.vote_average}</p> 
                    <h3 className={`${styles.moviesHeading}`}>Overview:</h3> 
                    <p className={`${styles.movieP}`}>{movie.overview}</p> 
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default MoviesPage;
