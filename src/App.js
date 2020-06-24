import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'
import Routes from './Routes'
import { BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />        
          <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
