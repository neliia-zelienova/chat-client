import "./App.css";
import { React, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import BannedView from "./views/BannedView";
import LoginView from "./views/LoginView";
import ChatView from "./views/ChatView";

const App = () => {
  const [token, setToken] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  useEffect(() => {
    setIsAuthorized(token);
  }, [token]);

  const updateToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  return (
    <div className="App">
      <Switch>
        <PublicRoute
          path={routes.login}
          isAllowed={isAuthorized}
          redirectTo={routes.chat}
          restricted
          component={LoginView}
          componentProps={updateToken}
        />
        <PrivateRoute
          exact
          path={routes.chat}
          isAllowed={isAuthorized}
          redirectTo={routes.login}
          restricted
          component={ChatView}
          componentProps={updateToken}
        />
        <PrivateRoute
          exact
          path={routes.banned}
          isAllowed={isAuthorized}
          redirectTo={routes.login}
          restricted
          component={BannedView}
          componentProps={updateToken}
        />
      </Switch>
    </div>
  );
};

export default App;
