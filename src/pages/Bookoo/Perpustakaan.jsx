import React, { useEffect, useState } from "react"
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { LogOut, getMe, reset } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import "./Styles/Styles.css"
import Premium from "../../Assets/Premium.gif"
import { AiFillCheckCircle } from "react-icons/ai"

const Perpustakaan = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/freeproducts")
    setProducts(response.data)
  }

  return (
    <Layout>
      <h1 style={{ marginBottom: 20 }}>Perpustakaan</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.uuid} className="col-lg-3 mt-5">
            <Link
              className=""
              to={`/detailfreevideo/${product.name}/${product.uuid}`}
            >
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  style={{ width: "100%" }}
                  className="cover"
                  src={product.url}
                />
              </div>
              <h1 className="" style={{ fontWeight: "bold" }}>
                {product.name}
              </h1>
              <p style={{ fontSize: 12 }}>{product.author}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="subscribe-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
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
                    Akses premium bagi kamu yang memang berniat untuk
                    memperbaiki kualitas hidup
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
                    <Link
                      to={"/premiumstatus"}
                      className="btn btn-success mt-4"
                    >
                      Mulai Berlangganan
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Perpustakaan
