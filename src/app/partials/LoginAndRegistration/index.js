import "./styles.scss";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const LoginAndRegistration = ({ children }) => {
  return (
    <section className="body">
      <div className="LoginAndRegistration py-3">
        <section className="container py-4">
          <div className="text-center mt-4">
            <Link to="/">
              <img
                src={Logo}
                alt="StrapBeery"
                className="img-fluid"
                width={240}
                height={61}
              />
            </Link>
          </div>
          <div className="col-12 col-md-7 col-lg-6 mx-auto">
            <div className="LoginAndRegistration__card my-5 p-3">
              {children}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
