import React from "react"
import "./Testimoni.css"
import Sample from "./Assets/Testimoni.svg"

const Testimoni = () => {
  return (
    <div className="testimoni-container">
      <h2 className="title has-text-centered">
        Kata mereka yang udah pake BooKoo
      </h2>
      <h3 className="subtitle has-text-centered">
        Ini saatnya kamu gabung sama mereka
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 me-2 mt-2 content-testi p-5">
            <div className="profile-container d-flex justify-content-testi-center align-items-center">
              <div className="pic me-3">
                <img src={Sample} />
              </div>
              <div className="text-profile">
                <p className="name">A'zham A. Rasyid</p>
                <p className="profesion">Senior Software Engineer</p>
              </div>
            </div>
            <div className="text-testimoni-container text-center mt-5">
              <p>
                "Buat orang yang suka ngantukan kalo baca buku, BooKoo bener -
                bener ngebantu gw banget!"
              </p>
            </div>
          </div>
          <div className="col-lg-3 me-2 mt-2 content-testi p-5">
            <div className="profile-container d-flex justify-content-testi-center align-items-center">
              <div className="pic me-3">
                <img src={Sample} />
              </div>
              <div className="text-profile">
                <p className="name">A'zham A. Rasyid</p>
                <p className="profesion">Senior Software Engineer</p>
              </div>
            </div>
            <div className="text-testimoni-container text-center mt-5">
              <p>
                "Buat orang yang suka ngantukan kalo baca buku, BooKoo bener -
                bener ngebantu gw banget!"
              </p>
            </div>
          </div>
          <div className="col-lg-3 me-2 mt-2 content-testi p-5">
            <div className="profile-container d-flex justify-content-testi-center align-items-center">
              <div className="pic me-3">
                <img src={Sample} />
              </div>
              <div className="text-profile">
                <p className="name">A'zham A. Rasyid</p>
                <p className="profesion">Senior Software Engineer</p>
              </div>
            </div>
            <div className="text-testimoni-container text-center mt-5">
              <p>
                "Buat orang yang suka ngantukan kalo baca buku, BooKoo bener -
                bener ngebantu gw banget!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimoni
