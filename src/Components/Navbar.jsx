import Home from "@/app/page";
import Link from "next/link";
import { FaAddressBook, FaAddressCard, FaBreadSlice, FaBriefcase, FaClipboardList, FaDownload, FaEnvelope, FaFacebook, FaFacebookF, FaFile, FaFileAlt, FaGithub, FaHome, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaMailBulk, FaMailchimp, FaMobile, FaMoon, FaPhone, FaRegEnvelope, FaRegEnvelopeOpen, FaTwitter, FaVoicemail } from "react-icons/fa";
import { FaEnvelopeOpen, FaHouse, FaLocationDot, FaLocationPin, FaLocationPinLock, FaMobileScreen, FaUpwork } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div>
            <nav>
                <h1>Viraj <span>Ahir</span></h1>


                <div className="theme">
                    <FaMoon />
                </div>
            </nav>

            <div className='navList'>



                <ul>
                    <li>
                        <Link className="navList-link" href="/">
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

    )
}
