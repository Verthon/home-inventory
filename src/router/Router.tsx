import { Route, Routes } from "react-router-dom";

import { Create } from "../views/Create/Create";
import { Home } from "../views/Home/Home";

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
    <Route path="create" element={<Create />}></Route>
      </Routes>
  )
}