import React from "react"
import Logo from "./Logo.png"
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { LogOut, reset } from "../../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(LogOut())
    dispatch(reset())
    navigate("/loginhome")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg mt-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className="logoNav" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link className="nav-link active" aria-current="page" to="/">
                  Beranda
                </Link>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Perpustakaan
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Forum
                </a>
              </li>
              <li>
                <Link className="nav-item nav-link me-4" to={"/premiumvideo"}>
                  Premium Video
                </Link>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              {user && (
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hai!{" "}
                    <strong style={{ fontWeight: "bold" }}>
                      {user && user.name}
                    </strong>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to={"/statususer"}
                        className="dropdown-item"
                        href="#"
                      >
                        {user && user.role} User
                      </Link>
                    </li>
                    <li>
                      <button onClick={logout} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {!user && (
                <li>
                  <Link className="btn" to={"/loginhome"}>
                    Login
                  </Link>
                </li>
              )}
              {!user && (
                <li>
                  <Link className="btn btn-success" to={"/registerhome"}>
                    Daftar Sekarang
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
