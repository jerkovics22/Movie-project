import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyYTE1NmI1OTcwOWZiYmE4YmExODVhNTdkMmYxMiIsInN1YiI6IjY1Nzc4MzNmZWM4YTQzMDBhYTZjOGE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kcp22DtjMrk9PYeexnalqR3aIU9J9IflyJPVg26leA4',
  },
};
function SearchBar({ setMovieData, pageNum, setPageNum, setPagination }) {
  const [userInput, setUserInput] = useState('');

  async function fetchSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${userInput}&include_adult=false&language=en-US&page=${pageNum}`,
        options
      );

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setMovieData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setPagination(true);
    }
  }

  useEffect(() => {
    fetchSubmit();
  }, [pageNum]);

  function handleChange(e) {
    setUserInput(e.target.value);
    setPageNum(1);
  }

  return (
    <form onSubmit={(e) => fetchSubmit(e)}>
      <input
        type="text"
        placeholder="Find movie..."
        value={userInput}
        onChange={handleChange}
        className={styles.search}
      />
    </form>
  );
}

export default SearchBar;
