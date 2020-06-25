import React from 'react'
import CarouselCard from '../Geral/CarouselCard/CarouselCard'
import './Content.css'
import { Switch, Route } from 'react-router-dom'
import NewProduct from '../../Pages/NewProduct'


const Content = props => {
    return (
        <div className="container-fluid" id="content" style={{ backgroundColor: 'rgb(235, 233, 233)' }}>
            <div className="container p-0 div-Content" >

                <Switch>
                    <Route path="/Vender" component={NewProduct} />
                    <Route path="/" exact render={props => 
                        <CarouselCard title="Ofertas" db="db-offers" />                    
                    }/>
                </Switch>

                
                


            </div>
        </div>
    )
}
export default Content