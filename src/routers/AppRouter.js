import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import AboutMePage from '../components/AboutMePage';

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' exact={true} component={DashboardPage} />
                <PublicRoute path='/aboutme' component={AboutMePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter