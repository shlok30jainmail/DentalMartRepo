import React from "react"
import "./Home.css"
// import hero from "../pic/hero.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO PYRAX DENTAL MART</h3>
            <h1>
              This is Best Dental Products <span>Website</span>
            </h1>
            <h2>
              It
              <span>
                <Typewriter words={[" Provides Cheap Prize.", " Provides Best Quality."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Pyrax Dental Mart is a dental products comparator website, providing dental professionals with a platform to compare and purchase a wide range of dental supplies and equipment. With a comprehensive catalog and user-friendly interface, it facilitates informed purchasing decisions for dental practitioners.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <a href="https://www.facebook.com/PyraxDentalMartPDM" className="home-a" target="_blank">
                    <i class='fab fa-facebook-f'></i>
                    </a>
                  </button>

                  <button className='btn_shadow'>
                  <a href="" className="home-a" target="_blank">
                    <i class='fab fa-instagram'></i>
                    </a>
                  </button>

                  <button className='btn_shadow'>
                  <a href="" className="home-a" target="_blank">
                    <i class='fab fa-linkedin-in'></i>
                    </a>
                  </button>

                </div>
              </div>

              <div className='col_1'>
                <h4>ON SOCIAL MEDIA</h4>

                <button className='btn_shadow'>
                  {/* <img src={skill1} alt='' /> */}
                 <a href="https://www.youtube.com/channel/UCbOd7rs3XYUXdfARsjSozmw" className="home-a" target="_blank">
                 <i class='fab fa-youtube'></i>
                  </a> 
                </button>

                <button className='btn_shadow'>
                <a href="https://twitter.com/intent/tweet/?url=https%3A%2F%2Fpyraxdentalmart.in%2F&text=Pyrax+Dental+Mart+-+Company+Owned+Store:" className="home-a" target="_blank">
                <i class='fab fa-twitter'></i>
                </a>
                  {/* <img src={skill2} alt='' /> */}
                </button>
                 
                <button className='btn_shadow'>
                <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fpyraxdentalmart.in%2F&description=Pyrax+Dental+Mart+-+Company+Owned+Store&media=https%3A%2F%2Fd2j6dbq0eux0bg.cloudfront.net%2Fimages%2F47524064%2F2250239359.jpg" className="home-a" target="_blank">
                <i class='fab fa-pinterest'></i>
                </a>  
                  {/* <img src={skill3} alt='' /> */}
                </button>
              </div>
            </div>
          </div>
          {/* <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Home
