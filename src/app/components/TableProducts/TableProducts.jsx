import { useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { SelectLimit } from "../SelectLimit";
//Assets
import DeleteIcon from "../../assets/delete.svg";
import EditIcon from "../../assets/edit.svg";
import Sort from "../../assets/sort.svg";
import { Getproducts } from "../../services/Products";

//Styles
import "./styles.scss";

export const TableProducts = () => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [data, setData] = useState([]);
  const pageSizeOptions = [20, 25, 50, 100];

  const [productCategories, setProductCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSizeOptions[0]);
  const [totalPages, setTotalPages] = useState(1);
  const getproducts = async function (
    category = "",
    limit = itemsPerPage,
    page = currentPage
  ) {
    const data = await Getproducts(category, limit, page);
    const { data: Products, last_page } = data.data;
    if (Products.length === 0) return;
    if (last_page) {
      setTotalPages(last_page);
    }
    setData([...Products]);
    return;
  };

  useEffect(() => {
    (async () => {
      getproducts();
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ChagePage = (value) => {
    setCurrentPage(value);
    getproducts("", itemsPerPage, value);
  };

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
    getproducts("", parseInt(e.target.value), 1);
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
        {sortedData.map((item) => (
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
            <SelectLimit
              data={{
                handleItemsPerPageChange,
                itemsPerPage,
                pageSizeOptions,
              }}
            />
          </div>
          <div className="col-12 col-lg-9 TableProducts__footer--pagination">
            <Pagination
              data={{
                currentPage,
                totalPages,
                ChagePage,
              }}
            />
          </div>
        </section>
      </div>
    </section>
  );
};
