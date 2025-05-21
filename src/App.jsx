 
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Education } from './Components/Education'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from 'react'

function App() {

  useEffect(()=>{
    Aos.init();
  },[])
   
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    
      <div className="main" >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
        <Home/> 
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    
  )
}

export default App

