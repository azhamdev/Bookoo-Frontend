import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getMe } from "../../features/authSlice"
import Layout from "./Layout"

const DetailFreeVideo = () => {
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

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/freeproducts/${id}`)
    setName(response.data.name)
    setAuthor(response.data.author)
    setDescription(response.data.description)
    setVideoUrl(response.data.videoUrl)
    setAudioUrl(response.data.audioUrl)
    setTranskrip(response.data.transkrip)
    setFile(response.data.image)
    setPreview(response.data.url)
  }

  useEffect(() => {
    getProductById()
  }, [])

  return (
    <Layout>
      <h1 className="mb-5">
        <a onClick={() => navigate(-1)}>Daftar Buku</a> /{" "}
        <strong>{name}</strong>
      </h1>
      <div className="video-container">
        {/* <video controls width={"100%"}>
          <source src={videoUrl} />
        </video> */}
        <iframe
          width={"100%"}
          height="550"
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="title mt-4">{name}</h1>
      <h4 className="subtitle">{author}</h4>
      <div
        className="description-container"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Layout>
  )
}

export default DetailFreeVideo
