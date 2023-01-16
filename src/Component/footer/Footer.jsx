import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* <a href="" className='footer__logo'>Samuel</a> */}
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#ser">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebookF/></a>
        <a href="https://twitter.com"><BsTwitter/> </a>
        <a href="https://instagram.com"><BsInstagram/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; SamuelWebsite. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;