import css from './Pagination.module.css';

export const Pagination = ({
  currentPage,
  handlePrevPage,
  handleNextPage,
  totalPages,
}) => {
  return (
    <nav>
      <ul className={css.paginationList}>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            onClick={handlePrevPage}
            className="page-link"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            onClick={handleNextPage}
            className="page-link"
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};
