import React from 'react'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import SliderHome from './components/Geral/Slider/SliderHome'
import './App.css'



function App() {

  return (
    <div className="App">
      <Header />
      <div id="content" className="container-fluid containerApp">
        <div className="containerSlider">
          <SliderHome />
        </div>
        
          <Content />
        </div>
        <Footer />
      
    </div>
  )
}

export default App
