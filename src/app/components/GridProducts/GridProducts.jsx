import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Getproducts } from "../../services/Products";
import { GetCategories } from "../../services/ProductsCategories";
import { Pagination } from "../Pagination";
import { SelectLimit } from "../SelectLimit";

import "./styles.scss";
export const GridProducts = () => {
  const { addCartItem } = useAuth();
  const [data, setData] = useState([]);
  const pageSizeOptions = [20, 25, 50, 100];

  const [productCategories, setProductCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSizeOptions[0]);
  const [queryCategory, setQueryCategory] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const getproducts = async function (
    category = queryCategory,
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
      const dataCategories = await GetCategories();
      const { data: Categories } = dataCategories;
      if (Categories.length > 0) {
        setProductCategories([...Categories]);
      }
      getproducts();
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
    getproducts(queryCategory, parseInt(e.target.value), 1);
  };

  const ChagePage = (value) => {
    setCurrentPage(value);
    getproducts(queryCategory, itemsPerPage, value);
  };
  const ChangeCategory = (value) => {
    setQueryCategory(value);
    getproducts(value, itemsPerPage, currentPage);
  };

  return (
    <>
      <div className="container">
        <p>Agrega a tu carrito los artículos que deseas comprar</p>
        <ul className="productsCustomers__categories m-0 px-0 pt-3">
          <li className="me-4 my-2">
            <button
              className={`py-3  px-4 productsCustomers__categories--category ${
                queryCategory === "" ? "active" : ""
              }`}
              onClick={() => ChangeCategory("")}
            >
              Todos
            </button>
          </li>
          {productCategories.map((category, index) => (
            <li key={index} className="me-4 my-2">
              <button
                className={`py-3  px-4 productsCustomers__categories--category ${
                  queryCategory === category.slug ? "active" : ""
                }`}
                onClick={() => ChangeCategory(category.slug)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <section className="GridProducts py-5">
        <div className="container">
          <section className="row gy-4">
            {data.map((product, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 GridProducts__item"
                key={index}
              >
                <section className="GridProducts__card p-3">
                  <div className="GridProducts__card--head">
                    <Link to={`/producto/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        width={162}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="GridProducts__card--body">
                    <Link
                      className="nameAndPrice p-3 mt-2 mb-3"
                      to={`/producto/${product.id}`}
                    >
                      <p className="m-0 nameAndPrice__name">{product.name}</p>
                      <p className="mx-0 my-1 nameAndPrice__price">
                        <CountUp
                          end={product.price}
                          separator=","
                          decimals={0}
                          duration={2}
                          decimal="."
                          prefix="$ "
                          suffix=" MXN"
                        />
                      </p>
                    </Link>
                    <section className="text-center">
                      <button
                        className="btn-blue-strong px-4 py-2"
                        onClick={() => addCartItem(product)}
                      >
                        Agregar
                      </button>
                    </section>
                  </div>
                </section>
              </div>
            ))}
          </section>
          <section className="GridProducts__footer mt-4 mb-3 row gy-3">
            <div className="col-8 col-md-5 col-lg-3">
              <SelectLimit
                data={{
                  handleItemsPerPageChange,
                  itemsPerPage,
                  pageSizeOptions,
                }}
              />
            </div>
            <div className="GridProducts__footer--pagination col-12 col-lg-9">
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
    </>
  );
};
