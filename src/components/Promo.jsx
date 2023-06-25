import React from "react"
import "../pages/Bookoo/Styles/Styles.css"
import { AiFillCheckCircle } from "react-icons/ai"
import Premium from "../Assets/Premium.gif"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Promo() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="subscribe-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={Premium} style={{ height: 80 }} />
              <h3 className="card-title">Premium User</h3>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: "700",
                  color: "black",
                  marginBottom: 60,
                }}
                className="card-subtitle mb-5"
              >
                Rp 29.000 / bulan
              </h3>
              <p>
                Akses premium bagi kamu yang memang berniat untuk memperbaiki
                kualitas hidup
              </p>
              <ul>
                <li className="mb-3 mt-5">
                  <AiFillCheckCircle color="green" /> Video Premium
                </li>
                <li className="mb-3">
                  <AiFillCheckCircle color="green" /> Video Lebih Banyak
                </li>
                <li className="mb-3">
                  <AiFillCheckCircle color="green" /> Buku Populer
                </li>
                <li className="mb-3">
                  <AiFillCheckCircle color="green" /> Video Presentasi
                </li>
              </ul>
              {user ? (
                <Link to={"/statususer"} className="btn btn-success mt-4">
                  Mulai Berlangganan
                </Link>
              ) : (
                <Link to={"/premiumstatus"} className="btn btn-success mt-4">
                  Mulai Berlangganan
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
