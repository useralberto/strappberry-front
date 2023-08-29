import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useParams } from "react-router-dom";
import { Masthead } from "../../../components";
import { useAuth } from "../../../hooks";
import BaseLayout from "../../../layout/Base";
import { GetProduct } from "../../../services/Products";
import "./styles.scss";
export const Product = () => {
  const { addCartItem } = useAuth();
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    (async () => {
      const dataProduct = await GetProduct(id);
      const { data } = dataProduct.data;
      setDataProduct({ ...data });
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <Masthead title="Detalle del Producto"></Masthead>
      <div className="container mt-3 pt-3 pb-5">
        <section className="col-12 col-md-9 mx-auto productEntry pb-4">
          <div className="container">
            <section className="row gx-0">
              <div className="col-12 col-md-6">
                <section className="productEntry__contentImg text-center p-3">
                  <img
                    src={dataProduct.image}
                    alt={dataProduct.name}
                    width={198}
                    height={116}
                    className="img-fluid"
                  />
                </section>
              </div>
              <div className="col-12 col-md-6 p-3 text-end">
                <p className="productEntry__title mb-3">{dataProduct.name}</p>
                <p className="productEntry__price mt-0">
                  <CountUp
                    end={dataProduct.price}
                    separator=","
                    decimals={0}
                    duration={2}
                    decimal="."
                    prefix="$ "
                    suffix=" MXN"
                  />
                </p>
              </div>
            </section>
            <p className=" py-5 productEntry__description">
              {dataProduct.description}
            </p>
            <div className="text-center">
              <button
                className="btn-blue-strong px-5 py-2"
                onClick={() => addCartItem(dataProduct)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
