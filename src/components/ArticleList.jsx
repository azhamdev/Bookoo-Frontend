import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const ArticleList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles")
    setProducts(response.data)
  }

  const deleteArticle = async (productId) => {
    await axios.delete(`http://localhost:5000/articles/${productId}`)
    getArticles()
  }
  return (
    <div>
      <h1 className="title mt-5">Free Products</h1>
      <h2 className="subtitle">List of Free Products</h2>
      <Link className="button is-primary mb-2" to={"/articles/add"}>
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.author}</td>
              <td>
                <Link
                  to={`/articles/edit/${product.uuid}`}
                  className="button is-small is-info me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteArticle(product.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArticleList
