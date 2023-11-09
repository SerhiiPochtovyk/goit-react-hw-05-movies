import React, { Suspense, lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import Loader from './Loader/Loader';
import styles from '../pages/stylePages.module.css';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = (props) => {
  return (
    <div className={styles.container}>
      <nav
        className={`${styles.navbar} is-warning`} 
        role="navigation"
        aria-label="dropdown navigation"
      >
        <Link className={styles['navbar-item']} to="/"> 
          Home
        </Link>
        <Link className={styles['navbar-item']} to="/movies"> 
          Movies
        </Link>
      </nav>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MoviesDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

App.propTypes = {
  somePropName: PropTypes.string,
  anotherProp: PropTypes.number,
};

export default App;
