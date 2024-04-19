
import React, { useEffect, useRef } from "react";
import "./Contact.css"; // Import your CSS file
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const scrollToSmoothly = (targetPosition, duration) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeOutQuad(scrollProgress);
    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  const easeOutQuad = (t) => t * (2 - t);

  requestAnimationFrame(animation);
};

const ContactForm = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targetPosition = contactRef.current.offsetTop;
          scrollToSmoothly(targetPosition, 1000); // Adjust duration as needed
        }
      },
      { threshold: 0.0 }
    );

    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
        <div ref={contactRef} className="contact-container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <FaLocationDot style={{color: '#6880FF'}}/>
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <MdEmail style={{color: '#6880FF'}} />
              <p>Asher.Page2121@gmail.com</p>
            </div>
            <div className="information">
              <FaPhoneAlt style={{color: '#6880FF'}} />
              <p>123-456-789</p>
            </div>
          </div>

        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact Me</h3>
            <div className="input-container">
              <input type="text" name="name" className="input"/>
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
