import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feauture from './components/Feauture'
import Explore from './components/Explore'
import Icon from './components/Icon'
import Safety from './components/Safety'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Feauture/>
      <Explore/>
      <Icon/>
      <Safety/>
      <Footer/>
    </div>
  )
}

export default App