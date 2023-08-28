import { Link } from "react-router-dom";
import { Cart } from "../../components";

import "../../../../node_modules/hamburgers/dist/hamburgers.min.css";

import "./styles.scss";
import CartLogo from "../../assets/cart.svg";
import Logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks";
export const Navbar = function ({ data }) {
  const { cartItems } = useAuth();
  const { setShowSiderBar, showSideBar, inDashboard } = data;
  return (
    <nav className="Navbar">
      <div className="container-fluid ps-0">
        <section className="row">
          <div className="col-4 col-md-3 col-lg-2 Navbar__logo py-3 px-4">
            <Link to="/">
              <img src={Logo} alt="StrappBerry" className="img-fluid " />
            </Link>
          </div>
          <div className="col-8 col-md-9 col-lg-10">
            <ul className="Navbar__menu h-100 ps-0 pe-md-3 m-0">
              <li className="Navbar__menu--item p-2 d-none d-md-block">
                Hola Karla
              </li>
              {inDashboard ? null : (
                <>
                  <li className="Navbar__menu--item cart p-2">
                    <div
                      data-items={cartItems.length}
                      className="Navbar__menu--cart__contentImg px-3"
                    >
                      <img
                        src={CartLogo}
                        alt="Cart"
                        className="img-fluid"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="Navbar__menu--cart p-3">
                      <Cart />
                    </div>
                  </li>
                </>
              )}
              <li className="ps-2 Navbar__menu--item d-block d-md-none ">
                {!showSideBar ? (
                  <button
                    className={`hamburger hamburger--collapse ${
                      showSideBar ? "is-active" : ""
                    }`}
                    onClick={() => setShowSiderBar(!showSideBar)}
                    type="button"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                ) : null}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};
