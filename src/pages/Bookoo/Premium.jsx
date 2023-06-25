import React, { useEffect, useState } from "react"
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { LogOut, getMe, reset } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import "./Styles/Styles.css"
import Promo from "../../components/Promo"

const Premium = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products")
    setProducts(response.data)
  }

  useEffect(() => {
    dispatch(getMe())
    getProducts()
  }, [dispatch])

  return (
    <Layout>
      <h1 style={{ marginBottom: 20 }}>Premium Page</h1>
      <div className="">
        {user && user.role === "Premium" && (
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-3 mt-5">
                <Link
                  className=""
                  to={`/detailvideo/${product.name}/${product.uuid}`}
                  key={product.uuid}
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
        )}
      </div>
      {user && user.role !== "Premium" && <Promo />}
    </Layout>
  )
}

export default Premium
