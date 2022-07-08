import * as React from 'react'
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = ({ children }: React.PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
