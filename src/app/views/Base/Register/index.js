import { Link } from "react-router-dom";
import { LoginAndRegistration } from "../../../partials";

export const Registration = () => {
  return (
    <LoginAndRegistration>
      <form className="col-11 col-md-8 col-lg-6 mx-auto  mt-5 mb-4">
        <div className="row gy-2">
          <section className="col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                placeholder=""
                className="form-control"
              />
              <label>Nombre</label>
            </div>
          </section>
          <section className="col-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                placeholder=""
                className="form-control"
              />
              <label>Email</label>
            </div>
          </section>

          <section className="col-12">
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                placeholder=""
                className="form-control"
              />
              <label>Contraseña</label>
            </div>
          </section>

          <section className="col-12">
            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirmPassword"
                placeholder=""
                className="form-control"
              />
              <label>Confirmar contraseña</label>
            </div>
          </section>

          <section className="text-end">
            <button className="btn-blue-strong px-5 py-2">Registrarse</button>
          </section>
        </div>
      </form>
      <div className="mt-auto text-center LoginAndRegistration__card--footer pt-4">
        <p className="mb-4 pb-1">
          ¿Ya tienes cuenta?
          <br />
          <Link to="/panel">Inicia sesión</Link>
        </p>
      </div>
    </LoginAndRegistration>
  );
};
