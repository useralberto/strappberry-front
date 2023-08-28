import { Masthead } from "../../../components";
import BaseLayout from "../../../layout/Base";
import "./styles.scss";
export const Product = () => {
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
                    src="https://picsum.photos/300"
                    alt="Product"
                    width={198}
                    height={116}
                    className="img-fluid"
                  />
                </section>
              </div>
              <div className="col-12 col-md-6 p-3 text-end">
                <p className="productEntry__title mb-3">Macbook M1</p>
                <p className="productEntry__price mt-0">$140 MXN</p>
              </div>
            </section>
            <p className=" py-5 productEntry__description">
              Lorem assumenda rem quia impedit dolores. Ducimus sequi itaque
              officiis neque officiis? Exercitationem ab blanditiis architecto
              eligendi corrupti. Velit recusandae assumenda pariatur nostrum
              odit dolorem! Unde dicta consequuntur debitis reprehenderit
            </p>
            <div className="text-center">
              <button className="btn-blue-strong px-5 py-2">
                Agregar al carrito
              </button>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
