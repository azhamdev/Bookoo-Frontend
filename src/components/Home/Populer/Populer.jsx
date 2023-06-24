import React from "react"
import "./populer.css"

import Sample1 from "./Assets/populer1.png"
import Sample2 from "./Assets/populer2.png"
import Sample3 from "./Assets/populer3.png"

function Populer() {
  return (
    <div className="populer-container mt-5">
      <div className="container">
        <div className="row">
          <div className="description col-lg-3">
            <h3>#Top3</h3>
            <h1>Populer</h1>
            <h1>Book</h1>
            <h3>temukan inpirasi dari buku top dunia</h3>
          </div>
          <div className="col-lg-3">
            <img src={Sample1} className="display" />
          </div>
          <div className="col-lg-3">
            <img src={Sample2} className="display" />
          </div>
          <div className="col-lg-3">
            <img src={Sample3} className="display" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Populer
