import { authToken } from "../config/environment";

export const setToken = function (token) {
  try {
    localStorage.setItem(authToken, token);
  } catch (Exception) {
    console.warn("Exception in setToken => " + Exception);
  }
};

export const getToken = function () {
  try {
    return localStorage.getItem(authToken);
  } catch (Exception) {
    console.warn("Exception in getToken => " + Exception);
  }
};

export const removeToken = function () {
  return localStorage.removeItem(authToken);
};
