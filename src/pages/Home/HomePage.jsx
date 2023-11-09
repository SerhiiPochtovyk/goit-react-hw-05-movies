import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestTrendMovies } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    if (!trendMovies || trendMovies.length === 0) {
      const fetchTrendMovies = async () => {
        try {
          const { results } = await requestTrendMovies();
          setTrendMovies(results);
        } catch (error) {
          toast.error(error.message);
        }
      };

      fetchTrendMovies();
    }
  }, [trendMovies]);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <container>
        <h1 className="title.is-4">Trending movies</h1>
        <ul>
          {trendMovies.map(el => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} key={el.id}>
                  {el.title || el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </container>
    </div>
  );
};

export default HomePage;
