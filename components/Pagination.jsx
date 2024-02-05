import styles from './Pagination.module.css';

function Pagination({ pageNum, setPageNum, movieData }) {
  function handlePage(newPage) {
    setPageNum(newPage);
  }
  return (
    <footer className={styles.btnContainer}>
      <button
        className={styles.btn}
        onClick={() => handlePage(pageNum - 1)}
        disabled={pageNum === 1}
      >
        Prev
      </button>

      {pageNum}
      <button
        className={styles.btn}
        onClick={() => handlePage(pageNum + 1)}
        disabled={pageNum === movieData.total_pages}
      >
        Next
      </button>
    </footer>
  );
}

export default Pagination;
