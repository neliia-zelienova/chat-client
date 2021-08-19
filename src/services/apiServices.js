import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/users";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

const login = async (username, password) => {
  try {
    const { data } = await axios.post("/login", {
      username,
      password,
    });
    return data;
  } catch (e) {
    return e.message;
  }
};

const logout = async (token) => {
  try {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    const { data } = await axios.post("/logout");
    return data;
  } catch (e) {
    return e.message;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, logout };
