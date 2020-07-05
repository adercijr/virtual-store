import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Pages/CMS/Layout/Layout'
import Geral from './Pages/CMS/Geral/Geral'

const Routes = props => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={`${props.match.path}/layout`} exact component={Layout} />
                <Route path={`${props.match.path}/geral`} exact component={Geral} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes
