import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const FormEditProduct = () => {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [audioUrl, setAudioUrl] = useState("")
  const [transkrip, setTranskrip] = useState("")
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  // const [msg, setMsg] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getProductById()
    console.log(file)
  }, [])

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`)
    setName(response.data.name)
    setAuthor(response.data.author)
    setDescription(response.data.description)
    setVideoUrl(response.data.videoUrl)
    setAudioUrl(response.data.audioUrl)
    setTranskrip(response.data.transkrip)
    setFile(response.data.url)
    setPreview(response.data.url)
    // console.log(URL.createObjectURL(response.data.image))
  }

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const updateProduct = async (e) => {
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
      await axios.patch(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      navigate("/products")
    } catch (error) {
      console.log(error)
    }
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
      <h2 className="subtitle">Edit Buku</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
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
              {/* <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Description"
                  />
                </div>
              </div> */}
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
                    value={`https://www.youtube.com/embed/${videoUrl}`}
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
                  <img src={preview ? preview : null} alt="Preview Image" />
                </figure>
              ) : (
                ""
              )}

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditProduct
