import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feauture from './components/Feauture'
import Explore from './components/Explore'
import Icon from './components/Icon'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Feauture/>
      <Explore/>
      <Icon/>
    </div>
  )
}

export default App