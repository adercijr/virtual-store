import React from 'react'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import Slider from './components/Slider'
import './App.css'

function App() { 

  return (
    <div className="App">
      <Header/>
      <Slider />
      <Content />
      <Footer />
    </div>
  )
}

export default App
