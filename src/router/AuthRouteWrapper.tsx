import * as React from "react"
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "src/auth/AuthProvider";

import { routes } from "./Router";
import type { AuthRouteWrapperProps } from "./Router.types";

export const AuthRouteWrapper = ({ children }: AuthRouteWrapperProps) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to={routes.login} state={{ from: location }} replace />;
  }

  return children
}