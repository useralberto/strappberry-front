import { createContext, useEffect, useState } from "react";
import { setItems, getItems } from "../services/Cart";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
  cart: [],
});

export const AuthProvider = function (props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      const ItemsCart = getItems();
      if (ItemsCart.length === 0) return;
      setCartItems([...ItemsCart]);
      //const token = getToken();
      //if (token) {
      //const data = await getMe(token);
      //setAuth({ token, account: data });
      //}
      //if (!token) setAuth(null);
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (token) => {
    //setToken(token);
    //const data = await getMe(token);
    //setAuth({ token, account: data });
  };

  const logout = () => {
    //if (auth) {
    //removeToken();
    //setAuth(null);
    //}
  };

  const addCartItem = (item) => {
    const cartItems = getItems();
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += item.quantity;
    } else {
      cartItems.push(item);
    }
    setItems(cartItems);
    return setCartItems(cartItems);
  };

  const valueContext = {
    auth,
    login,
    logout,
    cartItems,
    setCartItems,
    addCartItem,
  };

  //if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
