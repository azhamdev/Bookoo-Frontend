import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const FormAddFreeProduct = () => {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [audioUrl, setAudioUrl] = useState("")
  const [transkrip, setTranskrip] = useState("")
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  const saveProduct = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", name)
    formData.append("author", author)
    formData.append("description", description)
    formData.append("videoUrl", videoUrl)
    formData.append("audioUrl", audioUrl)
    formData.append("transkrip", transkrip)
    formData.append("file", file)
    try {
      await axios.post("http://localhost:5000/freeproducts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      navigate("/freeproducts")
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
      <h1 className="title mt-5">Products</h1>
      <h2 className="subtitle">Add New Free Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered" style={{ color: "red" }}>
                {msg}
              </p>
              <div className="field">
                <label className="label">Name</label>
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
                <label className="label">Video URL</label>
                <div className="control">
                  <input
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Video Url"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Audio URL</label>
                <div className="control">
                  <input
                    value={audioUrl}
                    onChange={(e) => setAudioUrl(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Audio Url"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Transkrip</label>
                <div className="control">
                  <textarea
                    value={transkrip}
                    onChange={(e) => setTranskrip(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Transkrip"
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

export default FormAddFreeProduct
