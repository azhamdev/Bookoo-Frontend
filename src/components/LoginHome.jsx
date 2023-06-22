import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { LoginUser, reset } from "../features/authSlice"
import Logo from "../Assets/Logo.png"

const LoginHome = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home")
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const Auth = (e) => {
    e.preventDefault()
    dispatch(LoginUser({ email, password }))
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
              <form onSubmit={Auth} className="box">
                <h1 className="title is-2">
                  <img src={Logo} />
                </h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
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
                  {isError && (
                    <p className="has-text-centered" style={{ color: "red" }}>
                      {message}
                    </p>
                  )}
                </div>
                <div className="register">
                  Belum punya akun ?{" "}
                  <Link to={"/registerhome"}>Daftar akun baru</Link>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
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

export default LoginHome
