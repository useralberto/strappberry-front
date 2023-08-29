import Arrow from "../../assets/arrow.svg";

import "./styles.scss";
export const Pagination = ({ data }) => {
  const { currentPage, totalPages, ChagePage } = data;
  return (
    <ul className="pagination m-0 p-0">
      <li className="m-2">
        {currentPage === 1 ? (
          <button className="pagination__prev">
            <img src={Arrow} alt="Arrow" width={12} className="img-fluid" />
          </button>
        ) : (
          <button
            className="pagination__prev"
            onClick={() => ChagePage(currentPage - 1)}
          >
            <img src={Arrow} alt="Arrow" className="img-fluid" width={12} />
          </button>
        )}
      </li>
      {[...Array(totalPages).keys()].map((page, index) => (
        <li key={index} className="pagination__item m-2">
          <button
            className={`pagination__btn ${
              currentPage === page + 1 ? "active" : ""
            }`}
            onClick={() => ChagePage(page + 1)}
          >
            {page + 1}
          </button>
        </li>
      ))}
      <li className="pagination__item m-2">
        {currentPage === totalPages ? (
          <button className="pagination__next">
            <img src={Arrow} alt="Arrow" className="img-fluid" width={12} />
          </button>
        ) : (
          <button
            className="pagination__next"
            onClick={() => ChagePage(currentPage + 1)}
          >
            <img src={Arrow} alt="Arrow" className="img-fluid" width={12} />
          </button>
        )}
      </li>
    </ul>
  );
};
