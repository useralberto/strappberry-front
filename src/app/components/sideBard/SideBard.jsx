import "./styles.scss";
import Logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
export const SideBard = ({ Links }) => {
  return (
    <div className="SideBard mt-2 p-4 ">
      <Link to="/">
        <img
          src={Logo}
          alt="StrappBerry"
          className="img-fluid"
          height={61}
          width={240}
        />
      </Link>
      <ul className="m-0 px-0 pt-5 SideBard__menu">
        {Links.map((link, index) => (
          <li key={index} className="SideBard__menu--item my-3">
            <NavLink
              to={link.to}
              {...(link.end ? { end: true } : {})}
              className={"SideBard__menu--link py-2 "}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
