//============ render the log in page ================
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Scrollchor from 'react-scrollchor' //a module for making hash links work without redirecting to a different page
import { login } from '../actions'
import Howitworks from './howitworks'
import Team from './team'
const backGround = require('../style/assets/bgcropped.png')

class Login extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { // to display the Auth0 lock on page
    this.props.login()
  }

  render() {
    const style = {
        backgroundImage: 'url('+backGround+')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        margin: '0px'
    }
    return (
        <div>
          <div className = 'jumbotron'
               style = { style }>
            <div className = 'col-md-7 offset-md-1'
                 style = {{ color: '#ECECEC' }}>
               <h1 className = 'display-3'>The social network built on who you really are</h1>
               <p className = 'lead'>Join 4 other people on the planet today to discover the tribes you truly belong to</p>
               <Scrollchor to = '#howitworks'
                           className = "btn btn-primary btn-lg"
                           role = "button">
                           How it works
               </Scrollchor>
            </div>
            <div
              id='login-widget-container'
              className=''></div>
          </div>
          <Howitworks />
          <Team />
        </div>
    )
  }
}

export default connect(null, {
  login
})(Login)