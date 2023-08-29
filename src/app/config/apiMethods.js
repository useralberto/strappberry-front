const deafultHeaders = {
  "Content-Type": "application/json",
};

const request = async function (url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.status !== 200) {
      return {
        error:
          data?.message ||
          "Se ha producido un error inténtelo de nuevo más tarde",
        data: [],
      };
    }

    return {
      error: "",
      data: data,
    };
  } catch (error) {
    console.error("Error in request =>", error);
    throw error;
  }
};

const get = async function (url, headers = {}) {
  try {
    return await request(url, {
      method: "GET",
      headers: { ...deafultHeaders, ...headers },
    });
  } catch (Exception) {
    console.warn("Exception in get => " + Exception);
  }
};

const post = async function (url, body, headers = {}) {
  try {
    return await request(url, {
      method: "POST",
      headers: { ...deafultHeaders, ...headers },
      body: JSON.stringify(body),
    });
  } catch (Exception) {
    console.warn("Exception in post => " + Exception);
  }
};
const put = async function (url, body, headers = {}) {
  try {
    return await request(url, {
      method: "PUT",
      headers: { ...deafultHeaders, ...headers },
      body: JSON.stringify(body),
    });
  } catch (Exception) {
    console.warn("Exception in post => " + Exception);
  }
};

const del = async function (url, body, headers = {}) {
  try {
    return await request(url, {
      method: "DELETE",
      headers: { ...deafultHeaders, ...headers },
      body: JSON.stringify(body),
    });
  } catch (Exception) {
    console.warn("Exception in del => " + Exception);
  }
};

export { get, post, del, put };
