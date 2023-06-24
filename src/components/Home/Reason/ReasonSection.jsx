import React from "react"
import "./Reason.css"

import IC_Ringkas from "./Assets/Ringkas.svg"
import IC_Video from "./Assets/Video.svg"
import IC_Smart from "./Assets/Smart.svg"

const ReasonSection = () => {
  return (
    <div style={{ marginTop: 160 }}>
      <div className="titleContainer mt-5">
        <h1 className="title">Kenapa kamu harus banget pake Bookoo ?</h1>
        <h2 className="subtitle">sekarang baca buku udah gak ngantuk lagi</h2>
        <div className="divider"></div>
      </div>
      <div className="values-container mt-5">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column">
            <div className="icon-container">
              <img src={IC_Ringkas} className="icon-value" />
              <h1 className="text-value">Ringkas</h1>
            </div>
            <p className="desc-value mt-4">
              Dapatkan banyak wawasan, inspirasi dan hiburan cukup
              <span style={{ color: "#FFD233", fontWeight: "600" }}>
                {" "}
                #12menitaja
              </span>
            </p>
          </div>
          <div className="col-lg-4 d-flex flex-column">
            <div className="icon-container">
              <img src={IC_Video} className="icon-value" />
              <h1 className="text-value">Text, Audio dan Visual</h1>
            </div>
            <p className="desc-value mt-4">
              Visual bantu kamu belajar lebih nyaman dan gak ngebosenin,
              manfaatin audio ketika kamu lagi beraktivitas biar kamu tambah
              pinter
            </p>
          </div>
          <div className="col-lg-4 d-flex flex-column">
            <div className="icon-container">
              <img src={IC_Smart} className="icon-value" />
              <h1 className="text-value">Smart people never stop learning</h1>
            </div>
            <p className="desc-value mt-4">
              Visual bantu kamu belajar lebih nyaman dan gak ngebosenin,
              manfaatin audio ketika kamu lagi beraktivitas biar kamu tambah
              pinter
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReasonSection
