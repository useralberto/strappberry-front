import { get, post } from "../config/apiMethods";
import { apiUrl } from "../config/environment";

export const LoginService = async function (data) {
  try {
    const url = `${apiUrl}auth/login`;
    return await post(url, data);
  } catch (Exception) {
    console.warn("Exception in LoginApi => " + Exception);
  }
};

export const getDataAccount = async function (token) {
  try {
    const url = `${apiUrl}auth/me`;
    return await get(url, { Authorization: `Bearer ${token}` });
  } catch (Exception) {
    console.warn("Exception in getDataAccount => " + Exception);
  }
};

export const logoutService = async function (token) {
  try {
    const url = `${apiUrl}auth/logout`;
    return await get(url, { Authorization: `Bearer ${token}` });
  } catch (Exception) {
    console.warn("Exception in logoutService  => " + Exception);
  }
};
