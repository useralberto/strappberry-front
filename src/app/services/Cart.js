import { keyCart } from "../config/environment";

export const getItems = () => {
  const cartItems = localStorage.getItem(keyCart);
  return cartItems ? JSON.parse(cartItems) : [];
};

export const setItems = (data) => {
  return localStorage.setItem(keyCart, JSON.stringify(data));
};

export const removeCart = () => {
  return localStorage.removeItem(keyCart);
};
