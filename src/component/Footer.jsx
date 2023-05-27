import React from "react"
import logo1 from "./pic/2.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img1'>
            <img src={logo1} alt='' style={{width:'60px',borderRadius:'50%', boxShadow:'4px 4px 6px black, -4px -4px 6px black' ,border:'5px solid #ccc'}} />
          </div>
          <p>© 2023. All rights reserved by Pyrax Dental Mart.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
