import Plus from "../../assets/akar-icons_plus.svg";
import Minus from "../../assets/akar-icons_minus.svg";

import "./styles.scss";
import { useAuth } from "../../hooks";
import { getItems, removeCart, setItems } from "../../services/Cart";

export const Cart = function () {
  const { cartItems, setCartItems } = useAuth();

  const FormattedCurrency = function (value) {
    return value.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleQuantityChange = (index, newQty) => {
    if (isNaN(newQty) || newQty === "" || newQty > 100) return;
    const Qty = parseInt(newQty);
    const updatedCartItems = [...getItems()];
    if (Qty === 0) {
      updatedCartItems.splice(index, 1);
    } else {
      updatedCartItems[index].quantity = Qty;
    }
    setItems(updatedCartItems);
    return setCartItems(updatedCartItems);
  };

  const handleIncrement = (index) => {
    const updatedCartItems = [...getItems()];
    if (updatedCartItems[index].qty >= 100) return;
    updatedCartItems[index].quantity += 1;
    setItems(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...getItems()];

    if (updatedCartItems[index].quantity <= 1) {
      updatedCartItems.splice(index, 1);
    } else {
      updatedCartItems[index].quantity -= 1;
    }

    setItems(updatedCartItems);
    setCartItems(updatedCartItems);

    if (updatedCartItems.length === 0) removeCart();

    return;
  };

  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <>
      <p className="text-center mt-0 Navbar__menu--cart__title">Mi carrito</p>
      <ul className="m-0 p-0 Navbar__menu--cart__contentProducts">
        {cartItems.map((product, index) => (
          <li className="Navbar__menu--cart__product mb-2 py-3" key={index}>
            <div className="container">
              <section className="row gx-0">
                <div className="col-12 col-md-4 text-center">
                  <img
                    src={product.image}
                    className="img-fluid img-product"
                    width={124}
                    height={60}
                    alt={product.name}
                  />
                </div>
                <div className="col-12 col-md-8 product-info px-2">
                  <p className="m-0 pt-1 product-name">{product.name}</p>
                  <div className="row gx-0 product-group">
                    <section className="col 12 col-md-6 product-price">
                      {FormattedCurrency(product.price)} MXN
                    </section>
                    <section className="col 12 col-md-6">
                      <div className="input-group">
                        <button
                          onClick={() => handleDecrement(index)}
                          className="minus"
                          type="button"
                        >
                          <img
                            className="img-fluid"
                            src={Minus}
                            alt="Minus"
                            width={20}
                            height={20}
                          />
                        </button>
                        <input
                          type="text"
                          min={1}
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.value)
                          }
                          className="form-control"
                          placeholder=""
                          aria-label="Example text with two button addons"
                        />
                        <button
                          onClick={() => handleIncrement(index)}
                          className="plus "
                          type="button"
                        >
                          <img
                            src={Plus}
                            width={20}
                            height={20}
                            className="img-fluid"
                            alt="Plus"
                          />
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
      <p className="Navbar__menu--cart__total pt-4 pb-3">
        <strong>Total</strong>
        <span>{FormattedCurrency(total)} MXN</span>
      </p>
      <button className="py-3 px-4 btn-blue-strong">Comprar ahora</button>
    </>
  );
};
