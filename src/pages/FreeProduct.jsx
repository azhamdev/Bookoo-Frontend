import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FreeProductList from "../components/FreeProductList"
import { getMe } from "../features/authSlice"
import Layout from "./Layout"

const FreeProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      navigate("/admin")
    }
  }, [isError, navigate])
  return (
    <Layout>
      <FreeProductList />
    </Layout>
  )
}

export default FreeProducts
