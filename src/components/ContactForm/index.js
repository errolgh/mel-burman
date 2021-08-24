import React from 'react'
// import contact_us from '../../assets/contact_us.svg';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
// import { motion } from 'framer-motion'
// import { pageAnimation } from '../../animation'

  // https://www.youtube.com/watch?v=NgWGllOjkbs

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          alert('Your email was sent successfully. Thank you!')
        },
        (error) => {
          alert('Something went wrong. Check your connection or try again later.')
        }
      )
    e.target.reset()
  }


export default function ContactForm(){
    return(
        // <motion.section 
        <section
            id="contact-us">
            {/* variants={pageAnimation} */}
            {/* initial="hidden" */}
            {/* animate="show" */}

                <div className="banner-container">
                    <h1 className="banner">Contact Us</h1>
                    <div className="banner-overlay"></div>
                </div>

                <div className="form-and-image-container">
                    <form onSubmit={sendEmail} id="contact-form">
                        <h3>Get In Touch With Us</h3>
                        <input required placeholder="Full Name" type="text" name="full_name" />
                        <input placeholder="Business Name" type="text" name="business_name" />
                        <input required placeholder="Email" type="text" name="email_address" />
                        <input placeholder="Phone Number" type="text" name="phone_number" />
                        <textarea required placeholder="Message" name="message_body" ></textarea>
                        <button className="btn submit-btn" type="submit" value="Send" id="submit" label="submit" name="submit">Submit</button>
                    </form>

                    <div className="contact-image-container">
                        {/* grab from UnDraw (contact) */}
                        {/* <img src={contact_us} alt="contact us"/> */}
                    </div>
                </div>

        </section>
        // </motion.section>
    )
}

// convert to styled-components


// #contact-us {
//     margin-bottom: 4rem;
//   }
  
//   .banner-container {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: $primary-light;
//     background-image: url("/assets/forest_background.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     margin-bottom: 1rem;
//     height: 15vh;
//     position: relative;
//   }
  
//   .banner {
//     color: white;
//     z-index: 10;
//     font-size: 2rem;
//   }
  
//   .banner-overlay {
//     width: 100%;
//     height: 15vh;
//     background: $primary-light;
//     opacity: 0.5;
//     position: absolute;
//   }
  
//   .form-and-image-container {
//     align-items: center;
//     justify-content: center;
//     width: 80%;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     h3 {
//       color: $primary-dark;
//       font-size: 1.2rem;
//       margin-bottom: 2rem;
//       text-align: center;
//     }
//   }
  
//   #contact-form {
//     width: 100%;
//     border-radius: 10px;
//     textarea,
//     input {
//       border-radius: 5px;
//       outline: none;
//       border: 1px solid $primary-light;
//       display: flex;
//       flex-direction: column;
//       width: 80%;
//       line-height: 2.7rem;
//       margin: 0 auto 1rem;
//       padding-left: 1rem;
//       transition: all 0.4s ease;
//       &:focus {
//         border-color: $primary-dark;
//         box-shadow: inset 0 0.05rem 0.05rem rbga(0, 0, 0, 0.0125),
//           0 0 0.5rem rbga(76, 161, 175, 0.5);
//       }
//     }
  
//     textarea {
//       height: 7rem;
//       max-width: 100%;
//       max-height: 15rem;
//       min-width: 50%;
//       min-height: 4rem;
//       resize: none;
//     }
//   }
  
//   .contact-image-container {
//     width: 70%;
//   }
  
//   .submit-btn {
//     margin: 0 auto;
//     display: flex;
//   }
  
//   @media (min-width: 768px) {
//     .form-and-image-container h3 {
//       font-size: 1.7rem;
//     }
  
//     #contact-form {
//       width: 450px;
//     }
//   }
  
//   @media (min-width: 1200px) {
//     #contact-form {
//       width: 550px;
//       margin-bottom: 10rem;
//       margin-top: 5rem;
//     }
  
//     .form-and-image-container {
//       flex-direction: row;
//       justify-content: space-around;
//     }
  
//     .contact-image-container {
//       width: 40%;
//     }
//   }
  
//   @media (min-width: 1400px) {
//     #contact-form {
//       width: 650px;
//     }
//   }
  