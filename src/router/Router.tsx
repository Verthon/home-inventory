import { Route, Routes } from "react-router-dom";

import { ProductsListView } from "src/views/ProductsList/ProductsList.view";
import { CreateView } from "src/views/Create/Create.view";
import { HomeView } from "src/views/Home/Home.view";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />}/>
      <Route path="/create" element={<CreateView />}/>
      <Route path="/list" element={<ProductsListView />}/>
    </Routes>
  )
}