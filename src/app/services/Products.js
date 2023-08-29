import { get } from "../config/apiMethods";
import { apiUrl } from "../config/environment";

export const Getproducts = async (category = "", limit = "", page = "") => {
  try {
    const paramters = {
      page,
      limit,
      category,
    };

    const params = new URLSearchParams();
    ["category", "limit", "page"].forEach((i) => {
      if (paramters[i]) {
        params.set(i, paramters[i]);
      }
    });
    const url = `${apiUrl}products?${params.toString()}`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await get(url, {});
  } catch (Exception) {
    console.warn("Exception in Getproducts => " + Exception);
  }
};

export const GetProduct = async (id) => {
  try {
    const url = `${apiUrl}products/${id}`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await get(url, {});
  } catch (Exception) {
    console.warn("Exception in Getproducts => " + Exception);
  }
};
