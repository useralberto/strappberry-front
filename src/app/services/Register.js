import { post } from "../config/apiMethods";
import { apiUrl } from "../config/environment";

export const RegistrationService = async function (data) {
  try {
    const url = `${apiUrl}auth/register`;
    return await post(url, data);
  } catch (Exception) {
    console.warn("Exception in Registration => " + Exception);
  }
};
