import { Link } from "react-router-dom";
import { LoginAndRegistration } from "../../../partials";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es requerido"),
    email: Yup.string()
      .email("Email inválido")
      .required("Este campo es requerido"),
    password: Yup.string().required("Este campo es requerido"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Este campo es requerido"),
  });

  const handleSubmit = (values) => {
    console.log("Valores enviados:", values);
    // Realiza aquí la lógica de registro
  };

  return (
    <LoginAndRegistration>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="col-11 col-md-8 col-lg-6 mx-auto  mt-5 mb-4">
          <div className="row gy-2">
            <section className="col-12">
              <div className="form-floating mb-3">
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder=""
                />
                <label>Nombre</label>
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </section>
            <section className="col-12">
              <div className="form-floating mb-3">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
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
                  name="password"
                  className="form-control"
                  placeholder=""
                />
                <label>Contraseña</label>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </section>
            <section className="col-12">
              <div className="form-floating mb-3">
                <Field
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder=""
                />
                <label>Confirmar contraseña</label>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </section>
            <section className="text-end">
              <button type="submit" className="btn-blue-strong px-5 py-2">
                Registrarse
              </button>
            </section>
          </div>
        </Form>
      </Formik>
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
