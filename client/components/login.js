import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions'

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
             <a className="btn btn-primary btn-lg" href="#" role="button">How it works</a>
            </div>
            <div
              id='login-widget-container'
              className=''></div>
          </div>
          <div className='row jumbotron' style={{backgroundColor: 'white'}}>
            <h1 className='display-3' style={{textAlign: 'center'}}>How It Works</h1>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Link your social accounts</h3>
                  <p>Sign up for Persona and have your twitter, facebook, and LinkedLin accounts linked to Persona</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Analyze your personality</h3>
                  <p>Persona's smart robots will look at your posts on social media and run an analysis on your personality and values</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Find true friends</h3>
                  <p>We will then introduce you to other people in your area who share similar personality traits and value systems with you.</p>
                </div>
              </div>
            </div>
          </div>
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