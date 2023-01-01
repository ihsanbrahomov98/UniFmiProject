import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import CartPage from "./pages/CartPage/CartPage";
import AdminDashBoardPage from "./pages/AdminDashBoardPage/AdminDashBoardPage";
import AdminDashBoardUsers from "./components/AdminDashBoard/AdminDashBoardUsers";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import AdminDashBoardAdmins from "./components/AdminDashBoard/AdminDashBoardAdmins";
import ManProductPage from "./pages/ProductPage/ManProductPage";
import WomanProductPage from "./pages/ProductPage/WomanProductPage";
import ChildProductPage from "./pages/ProductPage/ChildProductPage";
import SportProductPage from "./pages/ProductPage/SportProductPage";
import ChristmasProductPage from "./pages/ProductPage/ChristmasProductPage";
import AllProductPage from "./pages/ProductPage/AllProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/man" element={<ManProductPage />}></Route>
        <Route path="/woman" element={<WomanProductPage />}></Route>
        <Route path="/child" element={<ChildProductPage />}></Route>
        <Route path="/sport" element={<SportProductPage />}></Route>
        <Route path="/christmas" element={<ChristmasProductPage />}></Route>
        <Route path="/all" element={<AllProductPage />}></Route>

        <Route path="/:cat/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route
          path="/admindashboard/products"
          element={<AdminDashBoard />}
        ></Route>
        <Route
          path="/admindashboard/users"
          element={<AdminDashBoardUsers />}
        ></Route>
        <Route
          path="/admindashboard/admins"
          element={<AdminDashBoardAdmins />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
