import { FormNewProduct, Masthead } from "../../../components";
import DashboardLayout from "../../../layout/Dashboard";
export const NewProduct = function () {
  return (
    <DashboardLayout>
      <Masthead title="Agregar Producto" />
      <FormNewProduct
        data={{
          typeAction: "new",
          dataForm: {
            name: "",
            price: "",
            description: "",
            quantity: "",
            image: "",
            category_id: "",
            quantity: 1,
          },
        }}
      />
    </DashboardLayout>
  );
};
