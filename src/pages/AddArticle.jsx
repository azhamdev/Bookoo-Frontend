import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FormAddArticle from "../components/FormAddArticle"
import { getMe } from "../features/authSlice"
import Layout from "./Layout"

const AddArticle = () => {
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
      <FormAddArticle />
    </Layout>
  )
}

export default AddArticle
