import React, { useEffect } from "react"
import Layout from "./Layout"
import Welcome from "../components/Welcome"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LogOut, getMe, reset } from "../features/authSlice"

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError, user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      navigate("/")
    }
  }, [isError, navigate])

  const logout = () => {
    dispatch(LogOut())
    dispatch(reset())
    navigate("/admin")
  }

  return (
    <div>
      {user && user.role === "admin" && (
        <Layout>
          <Welcome />
        </Layout>
      )}
      <div>
        <h1>ANDA BUKAN ADMIN!</h1>
        <button onClick={logout} className="button is-white">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
