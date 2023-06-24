import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FormEditFreeProduct from "../components/FormEditFreeProduct"
import { getMe } from "../features/authSlice"
import Layout from "./Layout"

const EditFreeProduct = () => {
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
      <FormEditFreeProduct />
    </Layout>
  )
}

export default EditFreeProduct
