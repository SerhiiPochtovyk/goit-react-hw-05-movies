import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { requestDetails } from 'services/api';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import styles from './MoviesDetails.module.css';
import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader/Loader';
import Reviews from 'components/Reviews/Reviews';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesDetails = () => {
  const [ResultMovieDetails, setResultMovieDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backMoviesPageRef = useRef(location.state?.from || '/');

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        const data = await requestDetails(movieId);
        setResultMovieDetails(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div>
      <Link className={styles.goBackButton} to={backMoviesPageRef.current || '/'}>
  Go back
</Link>


    

        {ResultMovieDetails && (
          <div key={ResultMovieDetails.id} className={styles.movieDetailsWrap}>
            <img
              src={`https://image.tmdb.org/t/p/w500${ResultMovieDetails.poster_path}`}
              alt={ResultMovieDetails.title}
              className={styles.movieDetailsImg}
            />
            <div className={styles.movieDetailsDescr}>
              <h1 className={styles.title_is_4}>{ResultMovieDetails.original_title}</h1>
              <p>User Score {ResultMovieDetails.popularity}</p>
              <h2>Overview</h2>
              <p>{ResultMovieDetails.overview}</p>
              <h3>Genres</h3>
              <ul className={styles.movieDetailsGenres}>
                {ResultMovieDetails.genres.map((genre) => (
                  <li key={genre.id} className={styles.movieDetailsGenre}>
                    {genre.title || genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3 className={styles.title_is_4}> Additional information</h3>
        <Link to="cast" className={styles.additionalInfoLink}>
  Cast
</Link>
<Link to="reviews" className={styles.additionalInfoLink}>
  Reviews
</Link>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetails;
