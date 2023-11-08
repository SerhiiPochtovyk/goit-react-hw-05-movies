import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCasts } from 'services/api';

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
    <div className="cast-container">
      {fetchResultCast?.cast?.length > 0 ? (
        <ul className="cast-list">
          {fetchResultCast.cast.map((el) => (
            <li key={el.id} className="cast-item">
              <div className="cast-image">
                <img
                  src={`http://image.tmdb.org/t/p/w300${el.profile_path}`}
                  alt="Actor"
                  className="actor-image"
                />
              </div>
              <div className="cast-details">
                <p className="actor-name">{el.original_name}</p>
                <p className="actor-character">Character: {el.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-cast-info">No information about the film cast</p>
      )}
    </div>
  );
};

export default Cast;
