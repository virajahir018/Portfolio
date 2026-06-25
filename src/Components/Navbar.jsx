import Link from "next/link";
import { FaAddressBook, FaAddressCard, FaBreadSlice, FaBriefcase, FaClipboardList, FaDownload, FaEnvelope, FaFacebook, FaFile, FaFileAlt, FaGithub, FaHome, FaLinkedin, FaLocationArrow, FaMailBulk, FaMailchimp, FaMobile, FaMoon, FaPhone, FaRegEnvelope, FaRegEnvelopeOpen, FaTwitter, FaVoicemail } from "react-icons/fa";
import { FaEnvelopeOpen, FaHouse, FaLocationPin, FaMobileScreen, FaUpwork } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div>
            <div className='container'>

                <nav>
                    <h1>Viraj <span>Ahir</span></h1>


                    <div className="theme">
                        <FaMoon />
                    </div>
                </nav>

                <div className='navList'>

                    {/* <img src="viraj.jpg" alt="" /> */}

                    <div className="ul">
                        <ul>
                            <li>
                                <Link className="navList-link" href="/user/home">
                                    <FaHouse />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="navList-link" href="/user/resume">
                                    <FaClipboardList />
                                    Resume
                                </Link>

                            </li>
                            <li>
                                <Link className="navList-link" href="/user/work">
                                    <FaBriefcase />
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link className="navList-link" href="/user/contact">
                                    <FaAddressBook />
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="cards">
                    <div className="card1">
                        <img src="viraj.jpg" alt="" />
                        <h1>Viraj Ahir</h1>
                        <p>FullStack Developer</p>

                        <div className="card1-icon">
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaTwitter/>
                            <FaGithub/>
                        </div>

                        <div className="card-details">
                            <FaMobileScreen/>
                            <li><p><span>Phone</span>+91 6353314293</p></li>

                            <FaRegEnvelopeOpen/>
                            <li><p><span>Email</span>virajahir018@gmail.com</p></li>

                            <FaLocationPin/>
                            <li><p><span>Phone</span>+91 6353314293</p></li>

                            <button><FaDownload/>Download Resume</button>
                        </div>
                    </div>

                    <div className="card2"></div>
                </div>
            </div>
        </div>
    )
}
