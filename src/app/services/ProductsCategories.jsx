import { get } from "../config/apiMethods";
import { apiUrl } from "../config/environment";

export const GetCategories = async () => {
  try {
    const url = `${apiUrl}products-categories`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await get(url, {});
  } catch (Exception) {
    console.warn("Exception in GetCategories => " + Exception);
  }
};
