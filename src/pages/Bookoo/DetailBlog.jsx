import React, { useEffect, useState } from "react"
import Layout from "./Layout"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import "./Styles/Styles.css"
import Promo from "../../components/Promo"

const DetailBlog = () => {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getArticleById()
  }, [])

  const getArticleById = async () => {
    const response = await axios.get(`http://localhost:5000/articles/${id}`)
    setBlogs(response.data)
    console.log(response.data)
  }
  return (
    <Layout>
      <h1 className="mb-5">
        <a onClick={() => navigate(-1)}>Blog</a> / <strong>{blogs.name}</strong>
      </h1>
      <div className="cover-wrapper">
        <img className="cover" src={blogs.url} />
      </div>
      <div className="title" style={{ marginTop: 30 }}>
        {blogs.name}
      </div>
      <p style={{ marginBottom: 20, color: "#A5A5A5" }}>
        Author : <span style={{ color: "black" }}>{blogs.author}</span>
      </p>
      <div className="article-container">
        <article>
          <div dangerouslySetInnerHTML={{ __html: blogs.description }} />
        </article>
        <aside>
          <Promo />
        </aside>
      </div>
      {/* <div className="row">
        <div
          className="col-lg-3"
          dangerouslySetInnerHTML={{ __html: blogs.description }}
        />
        <div style={{ backgroundColor: "red" }} className="col-lg-9">
          <Promo />
        </div>
      </div> */}
    </Layout>
  )
}

export default DetailBlog
