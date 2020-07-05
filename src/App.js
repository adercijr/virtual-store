import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'
import Routes from './Routes'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cms from './Pages/CMS/Cms'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Cms} />
        <Route path="/" render={props => {
          return (

            <div className="App">
              <Header />
              <Routes />
              <Footer />
            </div>
          )
        }} />
      </Switch>

    </BrowserRouter>
  )
}

export default App
