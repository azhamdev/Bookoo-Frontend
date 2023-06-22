import axios from "axios"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
// import { LoginUser, reset } from "../features/authSlice"

const RegisterHome = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("Basic")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [msg, setMsg] = useState("")

  const navigate = useNavigate()
  const saveUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      })
      navigate("/loginhome")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <section
      style={{ backgroundColor: "#FFD93D" }}
      className="hero is-fullheight is-fullwidth"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={saveUser} className="box">
                <h1 className="title is-2">Sign Up</h1>
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
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="input"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="input"
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      type="password"
                      className="input"
                      placeholder="******"
                    />
                  </div>
                  <p className="has-text-centered" style={{ color: "red" }}>
                    {msg}
                  </p>
                  <div className="mt-3">
                    Sudah punya akun ? <Link to={"/loginhome"}>Login</Link>
                  </div>
                </div>
                <div className="field mt-2">
                  <button
                    type="submit"
                    className="button is-primary is-fullwidth"
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterHome
