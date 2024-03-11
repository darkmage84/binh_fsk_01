//Định nghĩa các phương thức call api
export const client = {
  serverApi: import.meta.env.VITE_SERVER_API,

  token: null,

  setUrl: function (url) {
    this.serverApi = url;
  },

  setToken: function (token) {
    this.token = token;
  },

  send: async function (url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["X-Api-Key"] = token;
    }

    const options = {
      method,
      headers,
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    const data = await response.json();

    return { response, data };
  },

  get: function (url, token = null) {
    return this.send(url, "GET", null, token);
  },

  post: function (url, body = {}, token = null) {
    return this.send(url, "POST", body, token);
  },

  put: function (url, body = {}, token = null) {
    return this.send(url, "PUT", body, token);
  },

  patch: function (url, body = {}, token = null) {
    return this.send(url, "PATCH", body, token);
  },

  delete: function (url, token = null) {
    return this.send(url, "DELETE", null, token);
  },
};
