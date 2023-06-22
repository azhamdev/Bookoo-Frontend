import React from "react"
import Navbar from "../../components/Home/Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout
