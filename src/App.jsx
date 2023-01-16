import React from "react";
import About from "./Component/about/About";
import Contact from "./Component/contact/Contact";
import Experience from "./Component/experience/Experience";
import Footer from "./Component/footer/Footer";
import Header from "./Component/header/Header";
import Nav from "./Component/nav/Nav";
import Portfolio from "./Component/portfolio/Portfolio";
import Ser from "./Component/serv/Ser";


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Ser/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;