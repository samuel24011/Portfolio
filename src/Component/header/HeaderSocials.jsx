import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://Linkedin.com" target='_blank' rel='noreferrer noopener'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' rel='noreferrer noopener'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials;