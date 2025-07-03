import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feauture from './components/Feauture'
import Explore from './components/Explore'
import Icon from './components/Icon'
import Safety from './components/Safety'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './components/Pages/Shop'
import New from './components/Pages/New'
import Pre from './components/Pages/Pre'
import Service from './components/Pages/Service'
import Special from './components/Pages/Special'
import Finance from './components/Pages/Finance'
import About from './components/Pages/About'
import Gadi from './components/Gadi'
import Find from './components/Find'
import Build from './components/Build'
  import { ToastContainer, toast } from 'react-toastify';




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/Pre' element={<Pre/>}/>
        <Route path='/Service' element={<Service/>} />
        <Route path='/Special' element={<Special/>}/>
        <Route path='/Finance' element={<Finance/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Gadi' element={<Gadi/>}/>
        <Route path='/Find' element={<Find/>}/>
        <Route path='/Build' element={<Build/>}/>

      </Routes>
   
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App