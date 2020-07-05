import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './components/layout/Content'
import Slider from './components/Geral/SliderHome/SliderHome'

const Routes = props => {
    return (
        <Switch>
            <Route path="/" exact render={props =>
                <Fragment>
                    <Slider />
                    <Content /> 
                </Fragment>
            } />
            <Route path="*" component={Content}/>

        </Switch>
    )
}
export default Routes
