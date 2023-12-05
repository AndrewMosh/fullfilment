import './App.css'
import Calculator from './Components/Calculator/Calculator'
import Header from './Components/Header/Header'
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/About'
import Advantages from './Components/Advantages/Advantages'
import Proccesses from './Components/Proccesses/Proccesses'
import Fbo from './Components/FBO/Fbo'
import Map from './Components/Map/Map'
function App() {

  return (
    <>
      <Header />
      <Introduction />
      <About/>
      <Calculator/>
      <Advantages/>
      <Proccesses/>
      <Fbo/>
      <Map/>
    </>
  )
}

export default App
