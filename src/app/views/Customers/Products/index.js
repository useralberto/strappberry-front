import { GridProducts } from "../../../components";
import BaseLayout from "../../../layout/Base";
import "./styles.scss";
export const Products = () => {
  const categories = [
    {
      label: "Electrónicos",
      slug: "electronicos",
    },
    {
      label: "Ropa",
      slug: "ropa",
    },
    {
      label: "Calzado",
      slug: "calzado",
    },
    {
      label: "Line Blanca",
      slug: "linea-blanca",
    },
  ];
  return (
    <BaseLayout>
      <section className="productsCustomers py-3">
        <div className="container">
          <p>Agrega a tu carrito los artículos que deseas comprar</p>

          <ul className="productsCustomers__categories m-0 px-0 pt-3">
            {categories.map((category, index) => (
              <li key={index} className="me-4 my-2">
                <button className="py-3  px-4 productsCustomers__categories--category">
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <GridProducts />
      </section>
    </BaseLayout>
  );
};
