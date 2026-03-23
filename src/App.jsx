import React from 'react'
import Hero from './sections/Hero.jsx'
import { ShowcaseSection } from './sections/ShowcaseSection.jsx'
import Navbar from './components/Navbar.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import About from './sections/About.jsx'
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Hero/>
   <About/>
   <ShowcaseSection/>
    <TechStack/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App