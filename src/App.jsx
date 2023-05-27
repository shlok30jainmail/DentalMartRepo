import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import { Auth0Provider } from "@auth0/auth0-react";
// import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllProduct from "./component/AllProducts/AllProduct"
import Main from "./component/Main/Main"


const App = () => {
  return (
    // <>
    <Auth0Provider
    domain="dev-kisjwrg5kx37ck8e.us.auth0.com"
    clientId="z8VMm01c9WhvjBakraSHn8jlgdRPtN9n"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <BrowserRouter>

      <Header />
      {/* <Home /> */}

      <Routes>
      <Route path='/' element={<Main />} />

      <Route path='/allproducts' element={<AllProduct />} />

      </Routes>

      <Footer />
      </BrowserRouter>

      </Auth0Provider>
  )
}

export default App
