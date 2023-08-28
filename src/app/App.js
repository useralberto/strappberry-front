import { AuthProvider } from "./contexts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminViewsRouter, CustomersViewsRouter } from "./routers";

const TypesRouter = {
  admin: {
    pathParent: "/panel",
    childrens: AdminViewsRouter,
  },
  customers: {
    pathParent: "",
    childrens: CustomersViewsRouter,
  },
};

const SetRouter = (type) => {
  try {
    const { pathParent, childrens } = TypesRouter[type];
    return childrens.map((router, index) => (
      <Route
        key={index}
        exact={router.exact}
        path={`${pathParent ? pathParent : ""}${router.path}`}
        element={router.view}
      ></Route>
    ));
  } catch (Exception) {
    console.warn("Exception in SetRouter => " + Exception);
  }
};

const App = function () {
  const KeyRouters = Object.keys(TypesRouter);
  return (
    <AuthProvider>
      <Router>
        <Routes>{KeyRouters.map((i) => SetRouter(i))}</Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
