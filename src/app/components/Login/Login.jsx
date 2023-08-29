import { Link } from "react-router-dom";
import { LoginAndRegistration } from "../../partials";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginService } from "../../services/Auth";
import { useAuth } from "../../hooks";
import * as Yup from "yup";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { login } = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido")
      .required("Este campo es requerido"),
    password: Yup.string().required("Este campo es requerido"),
  });

  const handleSubmit = async (values) => {
    const { error, data, token } = await LoginService(values);
    if (error) return toast.error(error);
    await login({ ...data, token });
  };

  return (
    <LoginAndRegistration>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="FormLogin col-11 col-md-8 col-lg-6 mx-auto  mt-5 mb-4">
          <div className="row gy-2">
            <section className="col-12">
              <div className="form-floating mb-3">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  autoComplete="off"
                  placeholder=""
                />
                <label>Email</label>
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </section>
            <section className="col-12">
              <div className="form-floating mb-3">
                <Field
                  type="password"
                  autoComplete="off"
                  name="password"
                  placeholder=""
                  className="form-control"
                />
                <label>Contraseña</label>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </section>
            <section className="text-center">
              <button type="submit" className="btn-blue-strong px-5 py-2">
                Ingresar
              </button>
            </section>
          </div>
        </Form>
      </Formik>
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
