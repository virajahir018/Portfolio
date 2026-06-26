import Navbar from "@/Components/Navbar";
import "./page.module.css"
import { FaAddressBook, FaAddressCard, FaBreadSlice, FaBriefcase, FaClipboardList, FaCode, FaDownload, FaEnvelope, FaFacebook, FaFacebookF, FaFile, FaFileAlt, FaGithub, FaHome, FaLaptop, FaLaptopCode, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaMailBulk, FaMailchimp, FaMobile, FaMoon, FaPhone, FaRegEnvelope, FaRegEnvelopeOpen, FaTwitter, FaVectorSquare, FaVoicemail } from "react-icons/fa";
import { FaEnvelopeOpen, FaHouse, FaLaptopFile, FaLocationDot, FaLocationPin, FaLocationPinLock, FaMobileScreen, FaUpwork } from "react-icons/fa6";
export default function Home() {
  return (
    <div>
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

          <div className="card2">

            <div className="home-about">
              <h2>ABOUT  ME</h2>
              <span></span>
            </div>

            <p>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
              full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
              My journey in the world of web development has been nothing short of exhilarating, and
              I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>

            <h3>What I do!</h3>

            <div className="home-grids">
              <div className="home-grid">
                <div className="home-grid-web">
                  <FaCode/>
                </div>
              </div>
              <div className="home-grid home-grid2"></div>
              <div className="home-grid home-grid2"></div>
              <div className="home-grid "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
