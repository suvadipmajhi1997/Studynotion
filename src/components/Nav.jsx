import React from 'react'
import logo from '../assets/Logo/Logo-Full-Light.png'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3 position-relative">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ms-0 p-0">
            
            <button
              className="navbar-toggler d-lg-none border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>
            
          </div>

          <a
              className="navbar-brand d-flex d-lg-flex align-items-center"
              href="#"
            >
              <img src={logo} alt="" />
            </a>

          {/* only for large screen */}
          <div className="d-none d-lg-flex mx-auto">
            <ul className="navbar-nav flex-row gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalog
                </a>
                <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another </a></li>
    <li><a className="dropdown-item" href="#">Something </a></li>
  </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

         {/* right icons */}
         <div className="d-flex align-items-center gap-2" style={{color:"white"}}>
          <CiSearch size={24}/>
          <PiShoppingCartThin size={24}/>
          <FaRegCircleUser size={24}/>
         </div>
        </div>
        {/* only for small screen */}
         <div className="collapse d-lg-none mt-2 position-absolute start-0 bg-richblack-800 z-3 w-100" id="navbarContent" style={{ top: '100%' }}>
    <ul className="navbar-nav mb-2 ms-3 mb-lg-0 d-flex flex-column align-items-start">
      <li className="nav-item"><Link to={'/'} className="nav-link" href="#">Microsoft 365</Link></li>
      <li className="nav-item"><Link to={'/'} className="nav-link" href="#">Teams</Link></li>
      <li className="nav-item"><a className="nav-link" href="#">Copilot</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Windows</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Surface</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Xbox</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
    </ul>
  </div>
      </nav>
    </div>
  );
}

export default Nav