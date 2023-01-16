import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import './nav.css'

const Nav = () => {
  return (
   <nav>
    <a href="#"><AiOutlineHome/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#experience"><BiBook/></a>
    <a href="#serv"><RiServiceLine/></a>
    <a href="#contact"><IoMdContact/></a>
   </nav>
  )
}

export default Nav;