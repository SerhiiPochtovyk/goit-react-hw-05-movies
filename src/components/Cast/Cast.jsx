import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCasts } from 'services/api';
import noimage from '../../images/noimage.svg';
import styles from './Cast.module.css'; 

const Cast = () => {
  const [fetchResultCast, setFetchResultCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        const result = await requestCasts(movieId);
        setFetchResultCast(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={styles['cast-container']}>
      {fetchResultCast?.cast?.length > 0 ? (
        <ul className={styles['cast-list']}>
          {fetchResultCast.cast.map((el) => (
            <li key={el.id} className={styles['cast-item']}>
              <div className={styles['cast-image']}>
                <img
                  src={
                    el.profile_path
                      ? `http://image.tmdb.org/t/p/w300${el.profile_path}`
                      : noimage
                  }
                  alt="Actor"
                  className={styles['actor-image']}
                />
              </div>
              <div className={styles['cast-details']}>
                <p className={styles['actor-name']}>{el.original_name}</p>
                <p className={styles['actor-character']}>Character: {el.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles['no-cast-info']}>No information about the film cast</p>
      )}
    </div>
  );
};

export default Cast;
