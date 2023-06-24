import React from "react"
import Navbar from "../../components/Home/Navbar/Navbar"
import Footer from "../../components/Home/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="container mb-5">
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
