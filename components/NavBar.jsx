import SearchBar from './SearchBar';
import styles from './NavBar.module.css';

function NavBar({
  movieData,
  setMovieData,
  pageNum,
  setPageNum,
  setPagination,
}) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.title} onClick={refreshPage}>
        <h1>MOVIE PROJECT</h1>
      </div>

      <SearchBar
        movieData={movieData}
        setMovieData={setMovieData}
        pageNum={pageNum}
        setPageNum={setPageNum}
        setPagination={setPagination}
      />
    </nav>
  );
}

export default NavBar;
