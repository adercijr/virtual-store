import React from 'react'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import Slider from './components/Geral/Slider/Slider'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div id="content" className="container-fluid containerApp bg-light">
        <div className="containerSlider">
          <Slider />
        </div>
        <div className="container p-0 contentApp bg-white" >
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
