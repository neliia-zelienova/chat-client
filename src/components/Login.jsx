import { useState } from "react";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    onSubmit(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="">
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input type="text" value={username} onChange={handleUsername} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
