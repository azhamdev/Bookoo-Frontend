import React, { useEffect, useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Layout from "./Layout"

import Sample from "../../Assets/coverBlog.jpg"

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles")
    setBlogs(response.data)
    console.log(response.data)
  }

  return (
    <Layout>
      <h1 className="text-center title">ALL POST</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-lg-3 col-md-8 col-sm-6 display-container">
            <Link to={`/blog/${blog.name}/${blog.uuid}`} key={blog.id}>
              <div className="image-wrapper">
                <img src={blog.url} alt="" className="cover-blog" />
              </div>
              <div className="title-wrapper mt-3">{blog.name}</div>
            </Link>
          </div>
        ))}
        <div className="col-lg-3 col-md-8 col-sm-6">
          <div className="display-container">
            <div className="image-wrapper">
              <img src={Sample} alt="" className="cover-blog" />
            </div>
            <div className="title-wrapper mt-3">
              Cara fokus dengan teknik pomodoro
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
