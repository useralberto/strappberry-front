import Headroom from "react-headroom";
import { useState } from "react";
import { Login } from "../components";
import { useAuth } from "../hooks/useAuth";
import { SideBar } from "../components";
import { Navbar } from "../partials";

const DashboardLayout = function ({ children }) {
  const { auth } = useAuth();
  const [showSideBar, setShowSiderBar] = useState(false);
  const Links = [
    {
      label: "Productos",
      to: "/panel",
      end: false,
    },
    {
      label: "Nuevo producto",
      to: "/panel/nuevo-producto",
      end: false,
    },
  ];

  if (!auth) return <Login />;

  return (
    <section className="body">
      <Headroom offset={100}>
        <Navbar
          data={{ setShowSiderBar, showSideBar, inDashboard: true }}
        ></Navbar>
      </Headroom>

      <div className="container-fluid ps-0">
        <div className="row ">
          <section
            className={`${
              showSideBar ? "sideBardMobil" : "d-none d-md-block"
            } col-md-3 col-lg-2 px-0`}
          >
            <SideBar data={{ Links, setShowSiderBar, showSideBar }} />
          </section>
          <section className="col-md-9 col-lg-10 px-5">
            <main>{children}</main>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
