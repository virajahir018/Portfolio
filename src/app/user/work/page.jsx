import Home from '@/app/page'
import Navbar from '@/Components/Navbar';
import React from 'react'
import { FaAddressBook, FaAddressCard, FaBreadSlice, FaBriefcase, FaClipboardList, FaDownload, FaEnvelope, FaFacebook, FaFacebookF, FaFile, FaFileAlt, FaGithub, FaHome, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaMailBulk, FaMailchimp, FaMobile, FaMoon, FaPhone, FaRegEnvelope, FaRegEnvelopeOpen, FaTwitter, FaVoicemail } from "react-icons/fa";
import { FaEnvelopeOpen, FaHouse, FaLocationDot, FaLocationPin, FaLocationPinLock, FaMobileScreen, FaUpwork } from "react-icons/fa6";

function home() {
  return (
    <div className='container'>
      <Navbar />

      <div className="cards">

        <div className="card1">

          <div className="card-link">

            <h1>Viraj Ahir</h1>
            <img src="/viraj.jpg" alt="" />
            <p>FullStack Developer</p>
            <ul>
              <li> <FaFacebookF className="facbook" /></li>
              <li> <FaLinkedinIn className="linkedin" /></li>
              <li> <FaTwitter className="twitter" /></li>
              <li><FaGithub className="github" /></li>
            </ul>
          </div>

          <div className="card-details">
            <ul>
              <li>
                <FaMobileScreen />
                <span>Phone<p>+91 6353314293</p></span>
              </li>
              <li>
                <FaRegEnvelopeOpen />
                <span>Email<p>virajahir018@gmail.com</p></span>
              </li>
              <li>
                <FaLocationDot />
                <span>Location<p>Amreli, Gujarat</p></span>
              </li>

              <button><FaDownload />Download Resume</button>
            </ul>
          </div>
        </div>

        <div className="card2"><h1>Work</h1></div>
      </div>
    </div>
  )
}

export default home