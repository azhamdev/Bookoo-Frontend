import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getMe } from "../../features/authSlice"
import Layout from "./Layout"
import Swal from "sweetalert2"

const StatusUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  const handleSubmits = async (e) => {
    e.preventDefault()
    const showAlert = () => {
      Swal.fire({
        title: "Halo Sobat Pembelajar !",
        text: "Silahkan Hubungi Admin",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        // Redirect the user
        window.open(
          `https://api.whatsapp.com/send?phone=62895379181484&text=Haloo saya ${user.name} dengan email ${user.email} mau daftar berlangganan menjadi User Premium BOOKOO`
        )
      })
    }

    showAlert()
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h1 style={{ fontSize: 28 }}>{user && user.name}</h1>
            <h2 className="mt-2">
              <strong style={{ color: "green" }}>{user && user.role}</strong>{" "}
              User
            </h2>
            {user && user.role === "Premium" && (
              <div className="mt-2">
                <h1>
                  Aktif mulai tanggal :{" "}
                  <strong>{user && user.tanggalBayar}</strong>
                </h1>
                <h1 className="mt-2">
                  Berakhir tanggal : <strong>{user && user.tagihan}</strong>
                </h1>
              </div>
            )}
            {user && user.role !== "Premium" && (
              <button onClick={handleSubmits} className="btn btn-success mt-3">
                Mulai Berlangganan
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StatusUser
