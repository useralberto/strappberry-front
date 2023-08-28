import { Masthead, TableProducts } from "../../../components";
import DashboardLayout from "../../../layout/Dashboard";
import "./styles.scss";

const generateFakeData = (count) => {
  const fakeData = [];

  for (let i = 1; i <= count; i++) {
    fakeData.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 10,
      image: `https://picsum.photos/300?random=${i}`,
    });
  }

  return fakeData;
};

export const Products = function () {
  return (
    <DashboardLayout>
      <Masthead title="Productos" />
      <TableProducts data={generateFakeData(100)} />
    </DashboardLayout>
  );
};
