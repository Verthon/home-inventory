import * as React from "react";
import { Route, Routes } from "react-router-dom";

import ProductsListView from "src/views/ProductsList/ProductsList.view";
import CreateView from "src/views/Create/Create.view";
import HomeView from "src/views/Home/Home.view";
import { Route as AppRoute } from "./Router.types";
import { NoMatchView } from "src/views/NoMatch/NoMatch.view";
import { LazyRouteLoader } from "src/core/LazyRouteLoader/LazyRouteLoader";
import LoginView from "src/views/Login/Login.view";
import { AuthRouteWrapper } from "./AuthRouteWrapper";

export const routes: Record<string, AppRoute> = {
  home: "/",
  create: "/create",
  list: "/list",
  login: "/login",
  resetPassword: "/reset-password",
} as const

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<React.Suspense fallback={<LazyRouteLoader/>}><AuthRouteWrapper><HomeView /></AuthRouteWrapper></React.Suspense>}/>
      <Route path={routes.create} element={<AuthRouteWrapper><React.Suspense fallback={<LazyRouteLoader/>}><CreateView /></React.Suspense></AuthRouteWrapper>}/>
      <Route path={routes.list} element={<AuthRouteWrapper><React.Suspense fallback={<LazyRouteLoader/>}><ProductsListView /></React.Suspense></AuthRouteWrapper>}/>
      <Route path={routes.login} element={<React.Suspense fallback={<LazyRouteLoader/>}><LoginView /></React.Suspense>} />
      <Route path="*" element={<NoMatchView />} />
    </Routes>
  )
}