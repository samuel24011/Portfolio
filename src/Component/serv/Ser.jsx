import React from 'react'
import './ser.css'
import {BiCheck} from 'react-icons/bi'

const Ser = () => {
  return (
    <section id='serv'>
      <h5 className='heading'>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__list-icon'/>
              <p>I have intermediate knowledge in web design and fundamentals such as color theory and typeface with 
                the ability to include designs. I am also familiar with Bootstrap, and WordPress</p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Code</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__list-icon'/>
              <p>I know the fundamentals of JavaScript as well utilizing event listeners and DOM. These tools allow me construct websites with features APIs, scroll animation and much more. I also know the fundamentals of React using more functional-based component to build my websites. React allows me to easily develop any website with its preinstalled components</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>S E O</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Search engine optimization is important for any web-based business. I know how to organically attract leads to your site.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Ser;