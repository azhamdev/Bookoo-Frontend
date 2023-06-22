import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import HeroSection from "../../components/Home/Hero/Hero"
import Populer from "../../components/Home/Populer/Populer"
import { getMe } from "../../features/authSlice"
import Layout from "./Layout"

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError, user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/loginhome")
  //   }
  // }, [isError, navigate])

  return (
    <Layout>
      <HeroSection />
      <Populer />
    </Layout>
  )
}

export default Home
