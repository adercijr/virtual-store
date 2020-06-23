import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import NewProduct from './components/Pages/NewProduct'

const Routes = props => {
    return(
        <Switch>
            <Route path="*" component={Home}/>
            <Route path="/Vender" component={NewProduct}/>
        </Switch>
    )
}
export default Routes
