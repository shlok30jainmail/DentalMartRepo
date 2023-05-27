import React from 'react'
import Home from '../Hero/Home';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
const Main = () => {
  return (
    <>
       {/* <Header /> */}
       <Home />
           
      {/* <Portfolio /> */}
      <Resume />
      <Testimonial />

      <Blog />
      <Contact />
      {/* <Footer /> */}

    </>
  )
}

export default Main;
