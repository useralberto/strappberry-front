import { Products, NewProduct, EditProduct } from "../views/Admin";

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
  {
    path: "/producto/:id",
    view: <EditProduct />,
    exact: true,
  },
];
