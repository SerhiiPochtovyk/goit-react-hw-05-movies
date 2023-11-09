import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestReviews } from 'services/api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [fetchResultReviews, setFetchResultReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const results = await requestReviews(movieId);
        setFetchResultReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.content}>
      <ul className={styles['review-list']}>
        {fetchResultReviews?.results?.length > 0 ? (
          fetchResultReviews.results.map((el) => (
            <li key={el.id} className={styles['review-item']}>
              <p className={styles['review-author']}>Author: {el.author}</p>
              {el.content ? <p className={styles['review-content']}>{el.content}</p> : <p className={styles['no-reviews']}>No reviews available</p>}
            </li>
          ))
        ) : (
          <li>
            <p className={styles['no-reviews']}>No reviews available</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
