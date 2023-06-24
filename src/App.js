import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import LoginHome from "./components/LoginHome"
import RegisterHome from "./components/RegisterHome"
import AddFreeProduct from "./pages/AddFreeProduct"
import AddProduct from "./pages/AddProduct"
import AddUser from "./pages/AddUser"
import Home from "./pages/Bookoo/Home"
import Premium from "./pages/Bookoo/Premium"
import StatusUser from "./pages/Bookoo/StatusUser"
import Dashboard from "./pages/Dashboard"
import EditFreeProduct from "./pages/EditFreeProduct"
import EditProduct from "./pages/EditProduct"
import EditUser from "./pages/EditUser"
import FreeProducts from "./pages/FreeProduct"
import Products from "./pages/Products"
import Users from "./pages/Users"
import DetailVideo from "./pages/Bookoo/DetailVideo"
import Perpustakaan from "./pages/Bookoo/Perpustakaan"
import DetailFreeVideo from "./pages/Bookoo/DetailFreeVideo"
import PremiumStatus from "./pages/Bookoo/PremiumStatus"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />

          <Route path="/freeproducts" element={<FreeProducts />} />
          <Route path="/freeproducts/add" element={<AddFreeProduct />} />
          <Route path="/freeproducts/edit/:id" element={<EditFreeProduct />} />
          <Route path="/detailfreevideo/:name/:id" element={<DetailFreeVideo />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />

          <Route path="/home" element={<Home />} />
          <Route path="/loginhome" element={<LoginHome />} />
          <Route path="/registerhome" element={<RegisterHome />} />
          <Route path="/premiumvideo" element={<Premium />} />
          <Route path="/perpustakaan" element={<Perpustakaan />} />
          <Route path="/statususer" element={<StatusUser />} />
          <Route path="/detailvideo/:name/:id" element={<DetailVideo />} />
          <Route path="/premiumstatus" element={<PremiumStatus />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
