import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FormAddFreeProduct from "../components/FromAddFreeProduct"
import { getMe } from "../features/authSlice"
import Layout from "./Layout"

const AddFreeProduct = () => {
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
      <FormAddFreeProduct />
    </Layout>
  )
}

export default AddFreeProduct
