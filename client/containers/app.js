import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAnalysis, login, logout } from '../actions'

import Analysis from '../components/analysis'
import Auth from '../components/auth'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleGetAnalysisClick = this.handleGetAnalysisClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleGetAnalysisClick(id) {
    this.props.loadAnalysis(id)
  }

  handleLoginClick() {
    this.props.login()
  }

  handleLogoutClick() {
    this.props.logout()
  }

  render() {
    const { analysisResult, error, isAuthenticated, profile } = this.props
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <h1><a className="navbar-brand">Persona</a></h1>
            <Auth
              isAuthenticated={isAuthenticated}
              profile={profile}
              onLoginClick={this.handleLoginClick}
              onLogoutClick={this.handleLogoutClick}
            />
          </div>
        </div>

        <div className="container-fluid">
          <Analysis
              result={analysisResult}
              error={error}
              onClick={this.handleGetAnalysisClick}
              isAuthenticated={isAuthenticated}/>
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
  loadAnalysis,
  login,
  logout
})(App)