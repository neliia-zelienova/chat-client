import React from "react";
import { Route, Redirect } from "react-router-dom";
/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  isAllowed,
  redirectTo,
  componentProps,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={() =>
        isAllowed && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component updateToken={componentProps} />
        )
      }
    />
  );
};

export default PublicRoute;
