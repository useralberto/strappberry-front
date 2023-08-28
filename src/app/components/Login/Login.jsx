import { Link } from "react-router-dom";
import { LoginAndRegistration } from "../../partials";
import "./styles.scss";
export const Login = () => {
  return (
    <LoginAndRegistration>
      <form className="col-11 col-md-8 col-lg-6 mx-auto  mt-5 mb-4">
        <div className="row gy-2">
          <section className="col-12">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" placeholder="" />
              <label>Email</label>
            </div>
          </section>
          <section className="col-12">
            <div className="form-floating mb-3">
              <input type="password" placeholder="" className="form-control" />
              <label>Contraseña</label>
            </div>
          </section>
          <section className="text-center">
            <button className="btn-blue-strong px-5 py-2">Ingresar</button>
          </section>
        </div>
      </form>
      <div className="mt-auto text-center LoginAndRegistration__card--footer pt-4">
        <p className="mb-4 pb-1">
          ¿Aún no tienes cuenta?
          <br />
          <Link to="/registro">Registrate</Link>
        </p>
        <p>
          <a
            href="https://useralberto.github.io/portfolio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lucas Alberto Alonso Cruz
          </a>{" "}
          | <a href="mailto:lalonso.dev@gmail.com">lalonso.dev@gmail.com</a>
        </p>
      </div>
    </LoginAndRegistration>
  );
};
