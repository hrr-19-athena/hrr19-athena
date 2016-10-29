import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Scrollchor from 'react-scrollchor'
import { login, logout } from '../actions'
import Howitworks from './howitworks'
const backGround = require('../style/assets/background1.jpg')

class Login extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
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
          <div className = 'jumbotron' style = { style }>
            <div className='col-md-7 offset-md-1' style = {{color: '#ECECEC'}}>
             <h1 className='display-1'>Welcome to Persona</h1>
             <h1 className='display-3'>The social network built on who you really are</h1>
             <p className='lead'>Join 4 other people on the planet today to discover the tribes you truly belong to</p>
             <Scrollchor to='#howitworks' className="btn btn-primary btn-lg"  role="button">How it works</Scrollchor>
            </div>
            <div
              id='login-widget-container'
              className=''></div>
          </div>
          <Howitworks />
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { analysis, auth } = state
  const { analysisResult,error } = analysis
  const { isAuthenticated, profile } = auth
  return {
    analysisResult,
    error,
    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  login,
  logout
})(Login)