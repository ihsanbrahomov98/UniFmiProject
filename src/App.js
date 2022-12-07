import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import CartPage from "./pages/CartPage/CartPage";
import AdminDashBoardPage from "./pages/AdminDashBoardPage/AdminDashBoardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/product/1" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/admindashboard" element={<AdminDashBoardPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
