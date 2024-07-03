import React from "react";
import "../styles/Contact.css";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";

function Contact() {
  return (
    <div>
      <h2 className="contactSectionHeader">
        <span>Contact </span>Me
      </h2>
      <hr className="contactSectionDivider" />
      <div className="contactContainer">
        <div className="contactList1">
          <h2>Get in Touch</h2>
          <p className="contactContent">
            I thrive on collaborating with dedicated creatives who make the
            world a more beautiful place.
          </p>
          <div className="contactIcons">
            <div className="contactItem">
              <FaUser className="contactIcon" />
              <div className="contactDetails">
                <h3>Name</h3>
                <p>Raja Rajeswari Saladi</p>
              </div>
            </div>
            <div className="contactItem">
              <FaPhoneAlt className="contactIcon" />
              <div className="contactDetails">
                <h3>Mobile</h3>
                <p>+91 8341578902</p>
              </div>
            </div>
            <div className="contactItem">
              <FaEnvelope className="contactIcon" />
              <div className="contactDetails">
                <h3>Email</h3>
                <p>rajarajeswarisaladi10@gmail.com</p>
              </div>
            </div>
            <div className="contactItem">
              <FaLinkedin className="contactIcon" />
              <div className="contactDetails">
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/raja-rajeswari-saladi-142502213"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click to view my linkedIn profile
                </a>
              </div>
            </div>
            {/* <div className="contactItem">
              <FaMapMarkerAlt className="contactIcon" />
              <div className="contactDetails">
                <h3>Address</h3>
                <p>Your Address</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="contactList2">
          <h2>Message Me</h2>
          <form className="contactForm">
            <div className="formGroup">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="formGroup">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="formGroup">
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Message.."
                required
              ></textarea>
            </div>
            <button type="submit" className="sendMessageButton">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p className="footerContent">
          Created by Raja Rajeswari | <FaCopyright className="copyrightIcon" />{" "}
          2024 All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Contact;
