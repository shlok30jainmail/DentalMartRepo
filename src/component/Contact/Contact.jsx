import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    // event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Pyrax Dental Mart</h1>
                  <p>Chief Operating Officer</p>
                  <p>Our Team are available from Monday To Saturday  10 A.M to 7 P.M</p> <br />
                  <p>Phone: +91 9818915644</p>
                  <p>Email: sales@pyraxdentalmart.in</p> 
                  <p>Email: pyraxdentalmart.in</p><br /> 
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                   <a href="https://www.facebook.com/PyraxDentalMartPDM" className="contact-a" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    </a>

                    <a href="https://www.youtube.com/channel/UCbOd7rs3XYUXdfARsjSozmw" className="contact-a" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-youtube'></i>
                    </button>
                    </a>

                    <a href="https://twitter.com/intent/tweet/?url=https%3A%2F%2Fpyraxdentalmart.in%2F&text=Pyrax+Dental+Mart+-+Company+Owned+Store:" className="contact-a" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                    </a>


                    <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fpyraxdentalmart.in%2F&description=Pyrax+Dental+Mart+-+Company+Owned+Store&media=https%3A%2F%2Fd2j6dbq0eux0bg.cloudfront.net%2Fimages%2F47524064%2F2250239359.jpg" className="contact-a" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-pinterest'></i>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit} action='https://formspree.io/f/xvonyogb' method="post">
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow' type="submit">
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
