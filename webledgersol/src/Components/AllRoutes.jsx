import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";
import Favorites from "./Favorites";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/products/:id" element={<Details />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}
