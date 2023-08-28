import "./styles.scss";
//import Logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
export const SideBar = ({ data }) => {
  const { Links, setShowSiderBar, showSideBar } = data;
  return (
    <div className="SideBar p-4">
      <div className="row d-flex d-md-none">
        <section className="col-8">
          <p className="d-block d-md-none SideBar__user ">
            Hola <br />
            Karla
          </p>
        </section>
        <section className="col-4 ">
          <button
            className={`d-block d-md-none ms-auto hamburger hamburger--collapse ${
              showSideBar ? "is-active" : ""
            }`}
            onClick={() => setShowSiderBar(!showSideBar)}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </section>
      </div>

      <ul className="m-0 px-0  SideBar__menu">
        {Links.map((link, index) => (
          <li key={index} className="SideBar__menu--item my-3">
            <NavLink
              to={link.to}
              {...(link.end ? { end: true } : {})}
              className={"SideBar__menu--link py-2 "}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
