import { FormNewProduct, Masthead } from "../../../components";
import DashboardLayout from "../../../layout/Dashboard";
export const NewProduct = function () {
  return (
    <DashboardLayout>
      <Masthead title="Agregar Producto" />
      <FormNewProduct />
    </DashboardLayout>
  );
};
