import "./styles.scss";
import Cart from "../../assets/cart.svg";
import Plus from "../../assets/akar-icons_plus.svg";
import Minus from "../../assets/akar-icons_minus.svg";
import { useState } from "react";
export const Navbar = function () {
  const CartItems = [
    {
      name: "Macbook M1",
      price: 17000,
      image: "https://picsum.photos/300",
      qty: 3,
    },
    {
      name: "Macbook M2",
      price: 30000,
      image: "https://picsum.photos/300",
      qty: 1,
    },
    {
      name: "Macbook M3",
      price: 34000,
      image: "https://picsum.photos/300",
      qty: 5,
    },
    {
      name: "Macbook M1",
      price: 17000,
      image: "https://picsum.photos/300",
      qty: 3,
    },
  ];

  const [cartItems, setCartItems] = useState(CartItems);

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
    const updatedCartItems = [...cartItems];
    if (Qty === 0) {
      updatedCartItems.splice(index, 1);
      return setCartItems(updatedCartItems);
    }
    updatedCartItems[index].qty = Qty;
    return setCartItems(updatedCartItems);
  };

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].qty >= 100) return;
    updatedCartItems[index].qty += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].qty <= 1) {
      updatedCartItems.splice(index, 1);
      return setCartItems(updatedCartItems);
    }
    updatedCartItems[index].qty -= 1;
    return setCartItems(updatedCartItems);
  };

  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.qty;
  }, 0);

  return (
    <nav className="Navbar">
      <ul className="Navbar__menu p-0 m-0">
        <li className="Navbar__menu--item p-2">Hola Karla</li>
        <li className="Navbar__menu--item p-2 ms-4">
          <img
            src={Cart}
            alt="Cart"
            className="img-fluid"
            width={25}
            height={25}
          />
          <div className="Navbar__menu--cart p-3">
            <p className="text-center mt-0 Navbar__menu--cart__title">
              Mi carrito
            </p>
            <ul className="m-0 p-0 Navbar__menu--cart__contentProducts">
              {cartItems.map((product, index) => (
                <li
                  className="Navbar__menu--cart__product mb-2 py-3"
                  key={index}
                >
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
                                value={product.qty}
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
          </div>
        </li>
      </ul>
    </nav>
  );
};
