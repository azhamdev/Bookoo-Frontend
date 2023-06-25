import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { IoPerson, IoVideocam, IoHome, IoLogOut, IoBook } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { LogOut, reset } from "../features/authSlice"

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(LogOut())
    dispatch(reset())
    navigate("/admin")
  }
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome className="me-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoVideocam className="me-2" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={"/freeproducts"}>
              <IoVideocam className="me-2" />
              Free Contents
            </NavLink>
          </li>
          <li>
            <NavLink to={"/articles"}>
              <IoBook className="me-2" />
              Articles
            </NavLink>
          </li>
        </ul>

        {user && user.role === "admin" && (
          <div>
            <p className="menu-label mt-4">Administration</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson className="me-2" />
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut className="me-2" />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
