import * as React from "react";
import { Route, Routes } from "react-router-dom";

import ProductsListView from "src/views/ProductsList/ProductsList.view";
import CreateView from "src/views/Create/Create.view";
import HomeView from "src/views/Home/Home.view";
import { Route as AppRoute } from "./Router.types";
import { NoMatchView } from "src/views/NoMatch/NoMatch.view";
import { LazyRouteLoader } from "src/core/LazyRouteLoader/LazyRouteLoader";

export const routes: Record<string, AppRoute> = {
  home: "/",
  create: "/create",
  list: "/list",
  login: "/login"
} as const

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<React.Suspense fallback={<LazyRouteLoader/>}><HomeView /></React.Suspense>}/>
      <Route path={routes.create} element={<React.Suspense fallback={<LazyRouteLoader/>}><CreateView /></React.Suspense>}/>
      <Route path={routes.list} element={<React.Suspense fallback={<LazyRouteLoader/>}><ProductsListView /></React.Suspense>}/>
      <Route path="*" element={<NoMatchView />} />
    </Routes>
  )
}