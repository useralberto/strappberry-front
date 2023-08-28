import { useState } from "react";

import Fileicon from "../../assets/file-image.svg";

import "./styles.scss";

export const FormNewProduct = () => {
  const [itemCategory, setItemCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleItemSelected = function (e) {
    setItemCategory(e.target.value);
  };
  return (
    <div className="FormNewProduct my-5 py-2">
      <form className="row gy-3 FormNewProduct__form">
        <section className="col-12 col-md-8">
          <div className="container">
            <div className="row">
              <section className="col-sm-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="form-control"
                    placeholder=""
                  />
                  <label>Nombre</label>
                </div>
              </section>
              <section className="col-sm-12">
                <div className="col-6">
                  <select
                    className="form-select mb-3"
                    value={itemCategory}
                    onChange={handleItemSelected}
                  >
                    <option value="">Categoria</option>
                    <option value="electronicos">Electrónicos</option>
                    <option value="ropa">Ropa</option>
                    <option value="calzado">Calzado</option>
                    <option value="linea-blanca">Linea Blanca</option>
                  </select>
                </div>
              </section>
              <section className="col-sm-12">
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      min={1}
                      name="price"
                      type="number"
                      className="form-control"
                      placeholder=""
                    />
                    <label>Precio</label>
                  </div>
                </div>
              </section>
              <section className="col-sm-12">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder=""
                    rows="5"
                    style={{ height: "131px" }}
                  ></textarea>
                  <label>Descripción</label>
                </div>
              </section>
              <section className="col-12 col-md-6">
                <div className="image-upload-container mt-3">
                  <label htmlFor="image-input" className="image-upload-box p-3">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Uploaded"
                        className="uploaded-image img-fluid"
                      />
                    ) : (
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
                    )}
                  </label>
                  <input
                    type="file"
                    id="image-input"
                    accept="image/jpg,.jpeg,.png,.svg"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
              </section>
            </div>
          </div>
        </section>

        <div className="col-12 text-end mt-2">
          <button className="btn-blue-strong px-5 py-3">
            Guardar producto
          </button>
        </div>
      </form>
    </div>
  );
};
