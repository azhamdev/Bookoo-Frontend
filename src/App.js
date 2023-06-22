import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./components/Login"
import Users from "./pages/Users"
import Products from "./pages/Products"
import AddUser from "./pages/AddUser"
import EditUser from "./pages/EditUser"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"
import LoginHome from "./components/LoginHome"
import Home from "./pages/Bookoo/Home"
import Premium from "./pages/Bookoo/Premium"
import RegisterHome from "./components/RegisterHome"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginhome" element={<LoginHome />} />
          <Route path="/registerhome" element={<RegisterHome />} />
          <Route path="/bookoo/premiumvideo" element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
