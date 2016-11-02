//========== all routes except '/' is handled on the client side ===========
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'

import Auth from './components/auth'
import Login from './components/login'
import Howitworks from './components/howitworks'
import Friends from './components/friends'
import AnalysisView from './components/analysisView'
import Home from './components/home'

export default (
  <Route path = "/" component = { App }>
    <IndexRoute component = { Login }/>
    <Route path = "/user" component = { Auth } >
      <IndexRoute component = { Home } />
      <Route path = '/user/analysis' component = { AnalysisView } />
      <Route path = '/user/friends' components = { Friends } />
      <Route path = '/user/group' components = { Friends } />
    </Route>
  </Route>
)

