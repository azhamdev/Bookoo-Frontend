import React, { useEffect, useState } from "react"
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { LogOut, getMe, reset } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Premium = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <Layout>
      <h1>Premium Page</h1>
      {user && user.role === "Premium" && (
        <div className="">
          <h1>Konten User Premium</h1>
        </div>
      )}
      {user && user.role !== "Premium" && (
        <div>
          <h1>Silahkan lakukan pembayaran untuk menjadi user premium</h1>
        </div>
      )}
    </Layout>
  )
}

export default Premium
