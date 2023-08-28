import { SideBard } from "../components";
import { Navbar } from "../partials";
const BaseLayout = function ({ children }) {
  const Links = [
    {
      label: "Productos",
      to: "/",
      end: false,
    },
  ];
  return (
    <section className="body">
      <div className="container-fluid ps-0">
        <div className="row">
          <section className="d-none d-md-block col-md-3 col-lg-2">
            <SideBard Links={Links} />
          </section>
          <section className="col-md-9 col-lg-10 px-lg-5">
            <Navbar></Navbar>
            <main>{children}</main>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BaseLayout;
