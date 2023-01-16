import React from 'react'
import './about.css'
import ME from '../../assets/picture2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5 className='heading'>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="about__me" />
        </div>

      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 1+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small> 2+ nationally</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 3+ Completed</small>
          </article>
        </div>
        <p>My passion is to be very relevant in every industry that will completely become digitalized in the nearest future. Because of the desire to be part of innovation and build things that will be useful to many companies, I started learning how to code myself and immediately after, i enrolled in an academy for 6 months. It helped me further understand different web technologies. Although I graduated from the university as a Physicist, today, I am a web developer hoping to have an opportunity to work with companies to grow these skills. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    
    </section>
  )
}

export default About;