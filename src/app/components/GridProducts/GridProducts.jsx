import { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { generateFakeData } from "../../views/Admin";
import { Pagination } from "../Pagination";
import { SelectLimit } from "../SelectLimit";

import "./styles.scss";
export const GridProducts = () => {
  const { addCartItem } = useAuth();
  const [data, setData] = useState([...generateFakeData(100)]);
  const pageSizeOptions = [20, 25, 50, 100];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSizeOptions[0]);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <section className="GridProducts py-5">
      <div className="container">
        <section className="row gy-4">
          {currentPageData.map((product, index) => (
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
                setCurrentPage,
              }}
            />
          </div>
        </section>
      </div>
    </section>
  );
};
