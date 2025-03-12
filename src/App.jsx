import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feauture from './components/Feauture'
import Explore from './components/Explore'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Feauture/>
      <Explore/>
    </div>
  )
}

export default App