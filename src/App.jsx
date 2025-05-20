 
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Education } from './Components/Education'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    Aos.init();
  },[])
   
  return (
    
      <div className="main">
        <Navbar/> 
        <Home/> 
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    
  )
}

export default App

