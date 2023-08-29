import { GridProducts } from "../../../components";
import BaseLayout from "../../../layout/Base";
import "./styles.scss";
export const Products = () => {
  return (
    <BaseLayout>
      <section className="productsCustomers py-3">
        <GridProducts />
      </section>
    </BaseLayout>
  );
};
