import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><i className="bi bi-film"></i>&nbsp; Movies.com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/products"}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
