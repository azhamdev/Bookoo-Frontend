import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const FormAddArticle = () => {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  const saveArticle = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", name)
    formData.append("author", author)
    formData.append("description", description)
    formData.append("file", file)
    try {
      await axios.post("http://localhost:5000/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      navigate("/articles")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
      console.log(error)
    }
  }

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  }

  return (
    <div>
      <h1 className="title mt-5">Articles</h1>
      <h2 className="subtitle">Add New Article</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveArticle}>
              <p className="has-text-centered" style={{ color: "red" }}>
                {msg}
              </p>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Author</label>
                <div className="control">
                  <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Author"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    modules={modules}
                    style={{ height: 300, marginBottom: 50 }}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Cover</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input
                        onChange={loadImage}
                        type="file"
                        className="file-input"
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose File</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="Preview Image" />
                </figure>
              ) : (
                ""
              )}

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddArticle
