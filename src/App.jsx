import { Children, useEffect, useState } from 'react';

import Movie from '../components/Movie';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';

import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [pagination, setPagination] = useState(false);

  return (
    <div>
      <NavBar
        movieData={movieData}
        setMovieData={setMovieData}
        pageNum={pageNum}
        setPageNum={setPageNum}
        setPagination={setPagination}
      />
      <Movie
        movieData={movieData}
        setMovieData={setMovieData}
        pagination={pagination}
        setPagination={setPagination}
      >
        <Pagination
          pageNum={pageNum}
          setPageNum={setPageNum}
          movieData={movieData}
        />
      </Movie>
    </div>
  );
}

export default App;
