import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login, logout } from '../actions'
import Howitworks from './howitworks'

class Login extends Component {

  componentDidMount() {
    this.props.login()
  }

  render() {
    return (
        <div>
          <div className='jumbotron' style={{backgroundColor: "#F8BBD0"}}>
            <div className='col-md-7 offset-md-1'>
             <h1 className='display-1'>Welcome to Persona</h1>
             <h1 className='display-3'>The social network built on who you really are</h1>
             <p className='lead'>Join 4 other people on the planet today to discover the tribes you truly belong to</p>
             <Link to='/#howitworks' className="btn btn-primary btn-lg"  role="button">How it works</Link>
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