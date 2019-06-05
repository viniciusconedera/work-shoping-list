import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Shopping from './index'
import Login from '../login'

export default props => (
    <Router>
        <Switch>
            <Route path='/shop' component={Shopping} />
            <Route path='/login' component={Login} />
            <Route path="*" component={Shopping}/>
        </Switch>
    </Router>
)