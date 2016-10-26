import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions'

class Login extends Component {

  componentDidMount() {
    this.props.login()
  }

  render() {
    return (
          <div className='jumpotron' style={{backgroundColor: "#F8BBD0"}}>
            <div
              id='login-widget-container'
              className='offset-md-6'></div>
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