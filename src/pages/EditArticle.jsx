import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FormEditArticle from "../components/FormEditArticle"
import { getMe } from "../features/authSlice"
import Layout from "./Layout"

const EditArticle = () => {
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
      <FormEditArticle />
    </Layout>
  )
}

export default EditArticle
