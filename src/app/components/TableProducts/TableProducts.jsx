import { useState } from "react";

//Assets
import DeleteIcon from "../../assets/delete.svg";
import EditIcon from "../../assets/edit.svg";
import Sort from "../../assets/sort.svg";
import Arrow from "../../assets/arrow.svg";

//Styles
import "./styles.scss";

export const TableProducts = ({ data }) => {
  const pageSizeOptions = [20, 25, 50, 100];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSizeOptions[0]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortField) {
      const valueA = a[sortField];
      const valueB = b[sortField];
      if (sortOrder === "asc") return valueA < valueB ? -1 : 1;
      return valueB < valueA ? -1 : 1;
    }
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = sortedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const HeadsTable = [
    { label: "Image", col: "2", onclick: "" },
    { label: "Nombre", col: "2", onclick: "name" },
    { label: "Precio", col: "2", onclick: "price" },
    { label: "Acciones", col: "6", onclick: "" },
  ];

  return (
    <section className="container my-4">
      <div className="TableProducts">
        <ul className="d-none d-md-flex row mx-0 p-0 mb-3 TableProducts__head">
          {HeadsTable.map((head, index) => (
            <li
              className={`TableProducts__head--item col-12 col-md-6 col-lg-${
                head.col
              } ${head.onclick ? "TableProducts__head--contentSort" : ""}`}
              key={index}
            >
              {head.label}
              {head.onclick && (
                <button
                  onClick={() => handleSort(head.onclick)}
                  className="ms-2 TableProducts__head--btn-sort"
                >
                  <img src={Sort} alt="Sort" className="img-fluid " />
                  <img src={Sort} alt="Sort" className="img-fluid" />
                </button>
              )}
            </li>
          ))}
        </ul>
        {currentPageData.map((item) => (
          <section
            className="row gx-0 py-3 py-lg-0 TableProducts__body"
            key={item.id}
          >
            <div className="col-12 col-lg-2 TableProducts__body--item">
              <img src={item.image} width={65} height={65} alt={item.name} />
            </div>
            <div className="col-12 col-lg-2 TableProducts__body--item">
              {item.name}
            </div>
            <div className="col-12 col-lg-2 TableProducts__body--item">
              {item.price}
            </div>
            <div className="col-12 col-lg-6 TableProducts__body--item">
              <button className="me-3 btn-blue-strong">
                <img
                  src={EditIcon}
                  width={19}
                  height={19}
                  alt="Edit"
                  className="img-flud me-2"
                />
                Editar
              </button>
              <button className="btn-blue-strong">
                <img
                  src={DeleteIcon}
                  width={19}
                  height={19}
                  alt="Edit"
                  className="img-flud me-2"
                />
                Eliminar
              </button>
            </div>
          </section>
        ))}

        <section className="TableProducts__footer mt-4 mb-3 row gy-3">
          <div className="col-8 col-md-5 col-lg-3">
            <form className="row blockLimit">
              <div className="col-6 col-lg-5">
                <select
                  onChange={handleItemsPerPageChange}
                  value={itemsPerPage}
                  className="form-select"
                  id="autoSizingSelect"
                >
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <label className="col-6 col-lg-7 col-form-label">
                Registros Visibles
              </label>
            </form>
          </div>
          <div className="col-12 col-lg-9 TableProducts__footer--pagination">
            <ul className="pagination m-0 p-0">
              <li className="m-2">
                {currentPage === 1 ? (
                  <button className="pagination__prev">
                    <img
                      src={Arrow}
                      alt="Arrow"
                      width={12}
                      className="img-fluid"
                    />
                  </button>
                ) : (
                  <button
                    className="pagination__prev"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="img-fluid"
                      width={12}
                    />
                  </button>
                )}
              </li>
              {[...Array(totalPages).keys()].map((page, index) => (
                <li key={index} className="pagination__item m-2">
                  <button
                    className={`pagination__btn ${
                      currentPage === page + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(page + 1)}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
              <li className="pagination__item m-2">
                {currentPage === totalPages ? (
                  <button className="pagination__next">
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="img-fluid"
                      width={12}
                    />
                  </button>
                ) : (
                  <button
                    className="pagination__next"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="img-fluid"
                      width={12}
                    />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};