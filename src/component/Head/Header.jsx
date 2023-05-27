import React, { useState } from "react"
import "./header.css"
import logo from "../pic/2.png"
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';


const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' style={{width:'60px',borderRadius:'50%', border:'5px solid #ccc'}}/>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <NavLink to="/" >home</NavLink>
              </li>

              <li >
                <NavLink to="/allproducts">AllProducts</NavLink>
              </li>
              <li>
                <a href='#portfolio'>popular products</a>
              </li>
              <li>
                <a href='#resume'>features</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>Team</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
             {
              isAuthenticated ?
              <li>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='home-btn'>
                Log Out
              </button>
              </li>
            : 
            <li>
            <button onClick={() => loginWithRedirect()} className='home-btn'>Log In</button>
          </li>
             }


{/* 
              <li>
                <button onClick={() => loginWithRedirect()} className='home-btn'>Log In</button>
              </li>
              <li>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='home-btn'>
                Log Out
              </button>
              </li> */}
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
