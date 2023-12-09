import './App.css'
import CalculatorSection from './Components/CalculatorSection/CalculatorSection'
import Header from './Components/Header/Header'
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/About'
import Advantages from './Components/Advantages/Advantages'
import Proccesses from './Components/Proccesses/Proccesses'
import Fbo from './Components/FBO/Fbo'
import Map from './Components/Map/Map'
import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} setIsOpen={setIsOpen} />
      <Introduction />
      <About/>
      <Advantages/>
      <Proccesses/>
     <Fbo/>
      <CalculatorSection/>
       <Map/>
       <Faq/>
      <Footer />
    </>
  )
}

export default App
