import React from "react"
import LogoFooter from "./Assets/LogoFooter.svg"
import IC_Instagram from "./Assets/Instagram.svg"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={LogoFooter} />
            <p style={{ maxWidth: "50%", marginTop: 20 }}>
              Berkomitmen untuk negeri dalam membentuk generasi yang
              berkarakter, kreatif, dan inovatif.
            </p>
            <a>
              <img style={{ marginTop: 20 }} src={IC_Instagram} />
            </a>
          </div>
          <div className="col-lg-3">
            <h2 style={{ fontWeight: "600" }}>Informasi Perusahaan</h2>
            <ul className="mt-2">
              <li className="mt-2">PT. Generasi Pintar</li>
              <li className="mt-2">Slawi Coworking Space lt.2, Slawi, </li>
              <li className="mt-2">Kab.Tegal, Jawa Tengah 41232</li>
              <li className="mt-2">kontak@bookoo.com</li>
              <li className="mt-2">+62 891-1234-5678</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2 style={{ fontWeight: "600" }}>Tautan</h2>
            <ul className="mt-2">
              <li className="mt2">
                <a>Beranda</a>
              </li>
              <li className="mt2">
                <a>Tentang Kami</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
