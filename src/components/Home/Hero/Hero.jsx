import React from "react"
import "./hero.css"
import Gambar from "./gambarcontoh.png"

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="title-container">
            <p className="tagline">#12menitaja bikin kamu tambah pinter</p>
            <h1 className="headline mb-4">
              Dapatkan hiburan dan inspirasi dalam genggamanmu
            </h1>
            <div className="btn btn-primary btn-explore">Mulai Sekarang</div>
          </div>
        </div>
        <div className="col-lg-6 kanan">
          <img className="gambar" src={Gambar} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
