import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  isAllowed,
  redirectTo,
  componentProps,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAllowed ? (
        <Component updateToken={componentProps} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

export default PrivateRoute;
