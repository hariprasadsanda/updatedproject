import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import './App.css'
import Upcomming from './Components/Upcomming/Upcomming'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <About/>
    <Upcomming/>
    </div>
  )
}

export default App
