import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './Header'
import Shopping from './shopping/index'
import Login from './login'

export default props => (
    <Router>
        <Header />
        <Switch>
            <Route path='/shop' component={Shopping} />
            <Route path='/login' component={Login} />
            <Route path="*" component={Shopping}/>
        </Switch>
    </Router>
)