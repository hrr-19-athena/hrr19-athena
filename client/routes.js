import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

import Auth from './components/auth'
import Login from './components/login'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="/user" component={Auth} />
  </Route>
)

    // <Route path='/:user/:friends' components={Friends} />

