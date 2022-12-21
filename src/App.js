import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import CartPage from "./pages/CartPage/CartPage";
import AdminDashBoardPage from "./pages/AdminDashBoardPage/AdminDashBoardPage";
import AdminDashBoardUsers from "./components/AdminDashBoard/AdminDashBoardUsers";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import AdminDashBoardAdmins from "./components/AdminDashBoard/AdminDashBoardAdmins";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route
          path="/admindashboard/users"
          element={<AdminDashBoardUsers />}
        ></Route>
        <Route
          path="/admindashboard/admins"
          element={<AdminDashBoardAdmins />}
        ></Route>
        <Route
          path="/admindashboard/products"
          element={<AdminDashBoardUsers />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
