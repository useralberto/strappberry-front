import { post } from "../config/apiMethods";
import { apiUrl } from "../config/environment";
export const LoginService = async function (data) {
  try {
    const url = `${apiUrl}auth/login`;
    return await post(url, data);
  } catch (Exception) {
    console.warn("Exception in LoginApi => " + Exception);
  }
};
