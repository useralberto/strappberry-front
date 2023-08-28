import Headroom from "react-headroom";
import { useState } from "react";
import { SideBar } from "../components";
import { Navbar } from "../partials";

const BaseLayout = function ({ children }) {
  const [showSideBar, setShowSiderBar] = useState(false);
  const Links = [
    {
      label: "Productos",
      to: "/",
      end: false,
    },
  ];
  return (
    <section className="body">
      <Headroom offset={100}>
        <Navbar
          data={{ setShowSiderBar, showSideBar, inDashboard: false }}
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
          <section className="col-md-9 col-lg-10 px-lg-5 pt-4">
            <main>{children}</main>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BaseLayout;
