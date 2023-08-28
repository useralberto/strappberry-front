import { Products, NewProduct } from "../views/Admin";

export const AdminViewsRouter = [
  {
    path: "",
    view: <Products />,
    exact: true,
  },
  {
    path: "/nuevo-producto",
    view: <NewProduct />,
    exact: true,
  },
];
