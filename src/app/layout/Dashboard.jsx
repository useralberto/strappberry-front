import { Login, SideBard } from "../components";
import { useAuth } from "../hooks/useAuth";
const DashboardLayout = function ({ children }) {
  const { auth } = useAuth();
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
      <div className="container-fluid ps-0">
        <div className="row">
          <section className="d-none d-md-block col-md-3 col-lg-2">
            <SideBard Links={Links} />
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
