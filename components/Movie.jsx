import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Movie.module.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyYTE1NmI1OTcwOWZiYmE4YmExODVhNTdkMmYxMiIsInN1YiI6IjY1Nzc4MzNmZWM4YTQzMDBhYTZjOGE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kcp22DtjMrk9PYeexnalqR3aIU9J9IflyJPVg26leA4',
  },
};

function Movie({
  movieData,
  setMovieData,
  pagination,
  setPagination,
  children,
}) {
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
        options
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setMovieData(data);
      console.log(data);
      console.log(data.results.length);
    } catch (err) {
      console.error(`There was an error fetching moives, ${err}`);
    } finally {
      setIsLoading(false);
      setPagination(false);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className={styles.wholeContainer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          {movieData.results &&
            movieData.results.map((movie) => (
              <div className={styles.item} key={movie.id} id={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.img}
                />
                <p className={styles.text}>{movie.title}</p>
              </div>
            ))}
        </div>
      )}
      {pagination && children}
    </div>
  );
}

export default Movie;
