import React from 'react'
import './navbar.css';
const Navbar = () => {
  return (
    <div className='NavBar'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="Logo" >
                  <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" />
                </div>
              </li>
            </ul>
            <div className="Logo" >
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn-sm " type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
          <hr style={{ backgroundColor: "white",height:"5px",borderRadius:"50%", }} />
    </div>
  )
}

export default Navbar