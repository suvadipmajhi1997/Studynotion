import React from 'react'
import logo from '../assets/Logo/Logo-Full-Light.png'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ms-0 p-0">
            
            <button
              className="navbar-toggler d-lg-none border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
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
      </nav>
    </div>
  );
}

export default Nav