import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormNewProduct, Masthead } from "../../../components";
import DashboardLayout from "../../../layout/Dashboard";
import { GetProduct } from "../../../services/Products";
export const EditProduct = function () {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState({});
  useEffect(() => {
    (async () => {
      const dataProduct = await GetProduct(id);
      const { data } = dataProduct.data;
      setDataProduct({
        ...data,
      });
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout>
      <Masthead title="Agregar Producto" />
      <FormNewProduct data={{ typeAction: "update", dataForm: dataProduct }} />
    </DashboardLayout>
  );
};
