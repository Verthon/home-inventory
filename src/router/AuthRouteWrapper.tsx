import * as React from "react"
import { Navigate, useLocation } from "react-router-dom";

import { routes } from "./Router";
import type { AuthRouteWrapperProps } from "./Router.types";

export const AuthRouteWrapper = ({ children }: AuthRouteWrapperProps) => {
  const isAuthorized = false
  const location = useLocation();
  if (!isAuthorized) {
    return <Navigate to={routes.login} state={{ from: location }} replace />;
  }

  return children
}