import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import FitnessDashboard from './components/FitnessDashboard'
import App from './components/App'

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/FitnessDashboard' component={FitnessDashboard} />
                <Route exact path='/' component={App} />
            </Switch>
        </HashRouter>
    )
}