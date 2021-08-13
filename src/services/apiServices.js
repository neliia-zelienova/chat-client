import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

const login = async (username, password) => {
  try {
    const { data } = await axios.post("http://localhost:3001/users/login", {
      username,
      password,
    });
    return data;
  } catch (e) {
    return e.message;
  }
};

const logout = async (token) => {
  console.log("logout", logout);
  try {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    const { data } = await axios.post("http://localhost:3001/users/logout");
    return data;
  } catch (e) {
    return e.message;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, logout };
