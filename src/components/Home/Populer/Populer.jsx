import React from "react"
import "./populer.css"

function Populer() {
  return (
    <div className="populer-container">
      <div className="link-populer d-flex flex-row-reverse">
        <p>Lihat semua</p>
      </div>
      <div className="row">
        <div className="description col-lg-3">
          <h3>#Top3</h3>
          <h1>Populer</h1>
          <h1>Book</h1>
          <h3>temukan inpirasi dari buku top dunia</h3>
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
          <h1>Gambar 2</h1>
        </div>
        <div className="col-lg-3">
          <h1>Gambar 3</h1>
        </div>
      </div>
    </div>
  )
}

export default Populer
