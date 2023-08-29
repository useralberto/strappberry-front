import { useEffect, useState } from "react";
import { GetCategories } from "../../services/ProductsCategories";
import { ToastContainer, toast } from "react-toastify";
import { NewProduct, UpdateProduct } from "../../services/Products";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Fileicon from "../../assets/file-image.svg";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "../../services/Token";

export const FormNewProduct = ({ data }) => {
  const navigate = useNavigate();
  const { dataForm, typeAction } = data;
  const [imagePreview, setImagePreview] = useState(null);
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const dataCategories = await GetCategories();
      const { data: Categories } = dataCategories;
      if (Categories.length > 0) {
        setProductCategories([...Categories]);
      }
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const convertToBase64 = (file) => {
  //return new Promise((resolve, reject) => {
  //const reader = new FileReader();
  //reader.onload = (event) => {
  //resolve(event.target.result);
  //};
  //reader.onerror = (error) => {
  //reject(error);
  //};
  //reader.readAsDataURL(file);
  //});
  //};

  const handleSubmit = async (values) => {
    //const image = await convertToBase64(values.image);
    const token = getToken();
    if (typeAction === "update") {
      const response = await UpdateProduct(
        dataForm.id,
        {
          name: values.name,
          price: values.price,
          description: values.description,
          image: values.image,
          category_id: values.category_id,
          quantity: values.quantity,
        },
        token
      );
      if (response.error) return toast.error(response.error);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/panel", { replace: true });
      }, 2000);

      return;
    }
    const response = await NewProduct(values, token);
    if (response.error) return toast.error(response.error);
    toast.success(response.data.message);
    setTimeout(() => {
      navigate("/panel", { replace: true });
    }, 2000);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    image: Yup.mixed().required("La imagen del producto es requerida"),
    category_id: Yup.string().required("Selecciona una categoría"),
    price: Yup.number()
      .min(1, "El precio debe ser mayor a 0")
      .required("El precio es requerido"),
    description: Yup.string(),
  });

  const handleImageChange = (event) => {
    if (event.target.value === "") return;
    setImagePreview(event.target.value);
    //const file = event.target.files[0];

    //if (file) {
    //const reader = new FileReader();
    //reader.onload = () => {
    //};
    //reader.readAsDataURL(file);
    //}
  };

  const Previe = function () {
    if (imagePreview) {
      return (
        <img
          src={imagePreview}
          alt="Uploaded"
          className="uploaded-image img-fluid"
        />
      );
    }
    if (dataForm.image)
      return (
        <img
          src={dataForm.image}
          alt="Uploaded"
          className="uploaded-image img-fluid"
        />
      );

    return (
      <>
        <div className="upload-icon">
          <img
            width={95}
            height={95}
            src={Fileicon}
            alt="Uploaded"
            className="img-fluid"
          />
        </div>
        <p className="upload-text mt-0">Carga tu imagen</p>
      </>
    );
  };

  if (Object.keys(dataForm).length === 0) return;

  return (
    <div className="FormNewProduct my-5 py-2">
      <Formik
        initialValues={dataForm}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="row gy-3 FormNewProduct__form">
            <section className="col-12 col-md-8">
              <div className="container">
                <div className="row">
                  <section className="col-sm-12">
                    <div className="form-floating mb-3">
                      <Field
                        type="text"
                        name="name"
                        autoComplete="off"
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
                  <section className="col-sm-12">
                    <div className="col-6">
                      <Field
                        as="select"
                        className="form-select mb-3"
                        name="category_id"
                      >
                        <option value="">Categoria</option>
                        {productCategories.map((category, index) => (
                          <option value={category.id} key={index}>
                            {category.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="category_id"
                      component="div"
                      className="error-message"
                    />
                  </section>
                  <section className="col-sm-12">
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <Field
                          min={1}
                          step="any"
                          type="number"
                          name="price"
                          className="form-control"
                          placeholder=""
                        />
                        <label>Precio</label>
                      </div>
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </section>
                  <section className="col-sm-12">
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <Field
                          min={1}
                          type="number"
                          name="quantity"
                          className="form-control"
                          placeholder=""
                        />
                        <label>Cantidad</label>
                      </div>
                      <ErrorMessage
                        name="quantity"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </section>
                  <section className="col-sm-12">
                    <div className="form-floating mb-3">
                      <Field
                        as="textarea"
                        name="description"
                        className="form-control"
                        placeholder=""
                        rows="5"
                        style={{ height: "131px" }}
                      />
                      <label>Descripción</label>
                    </div>
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error-message"
                    />
                  </section>
                  <section className="col-sm-12">
                    <div className="form-floating mb-3">
                      <Field
                        name="image"
                        className="form-control"
                        placeholder=""
                        onChange={(event) => {
                          handleImageChange(event);
                          formikProps.setFieldValue(
                            "image",
                            event.target.value
                          );
                        }}
                      />
                      <label>URl</label>
                    </div>
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="error-message"
                    />
                  </section>
                  <section className="col-12 col-md-6">
                    <div className="image-upload-container mt-3">
                      <label
                        htmlFor="image-input"
                        className="image-upload-box p-3"
                      >
                        {Previe()}
                      </label>
                      {/*<Field*/}
                      {/*type="file"*/}
                      {/*id="image-input"*/}
                      {/*name="newImage"*/}
                      {/*accept="image/jpg,.jpeg,.png,.svg"*/}
                      {/*onChange={(event) => {*/}
                      {/*handleImageChange(event);*/}
                      {/*formikProps.setFieldValue(*/}
                      {/*"image",*/}
                      {/*event.currentTarget.files[0]*/}
                      {/*);*/}
                      {/*}}*/}
                      {/*style={{ display: "none" }}*/}
                      {/*/>*/}
                    </div>
                  </section>
                </div>
              </div>
            </section>

            <div className="col-12 text-end mt-2">
              <button type="submit" className="btn-blue-strong px-5 py-3">
                Guardar producto
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};
