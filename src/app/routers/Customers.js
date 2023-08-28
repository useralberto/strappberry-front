import { Registration } from "../views/Base";
import { Product, Products } from "../views/Customers";

export const CustomersViewsRouter = [
  {
    path: "",
    view: <Products />,
    exact: true,
  },
  {
    path: "/producto",
    view: <Product />,
    exact: true,
  },
  {
    path: "/registro",
    view: <Registration />,
    exact: true,
  },
];
