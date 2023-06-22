import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

const FormPreviewProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setName(response.data.name)
        setPrice(response.data.price)
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getProductById()
  }, [id])

  return (
    <div>
      <h1 className="title mt-5">Preview</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    value={name}
                    type="text"
                    className="input"
                    placeholder="Name"
                    disabled
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    value={price}
                    type="text"
                    className="input"
                    placeholder="Price"
                    disabled
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <Link
                    className="button is-small is-info mt-2"
                    to={"/products"}
                  >
                    Kembali
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPreviewProduct
