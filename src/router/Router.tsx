import { Route, Routes } from "react-router-dom";

import { ProductsList } from "src/views/ProductsList/ProductsList";
import { Create } from "src/views/Create/Create";
import { Home } from "src/views/Home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/list" element={<ProductsList />}/>
    </Routes>
  )
}