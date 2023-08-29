import { get, put, post, del } from "../config/apiMethods";
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
    const url = `${apiUrl}get-products?${params.toString()}`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await get(url, {});
  } catch (Exception) {
    console.warn("Exception in Getproducts => " + Exception);
  }
};

export const GetProduct = async (id) => {
  try {
    const url = `${apiUrl}get-product/${id}`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await get(url, {});
  } catch (Exception) {
    console.warn("Exception in Getproduct => " + Exception);
  }
};

export const UpdateProduct = async (id, data) => {
  try {
    const url = `${apiUrl}products/${id}`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await put(url, data, {});
  } catch (Exception) {
    console.warn("Exception in UpdateProduct => " + Exception);
  }
};
export const NewProduct = async (data) => {
  try {
    const url = `${apiUrl}products/`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await post(url, data, {});
  } catch (Exception) {
    console.warn("Exception in NewProduct => " + Exception);
  }
};

export const DeleteProduct = async (id, data) => {
  try {
    const url = `${apiUrl}products/${id}`;
    //return await get(url, { Authorization: `Bearer ${token}` });
    return await del(url, data, {});
  } catch (Exception) {
    console.warn("Exception in DeleteProduct => " + Exception);
  }
};
