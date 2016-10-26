import React, { Component, PropTypes } from 'react'
import Auth from '../components/auth'
import Login from '../components/login'
const logo = require('../style/assets/horizontallogo.png')


class App extends Component {
  constructor(props) {
    super(props)
    this.handleGetAnalysisClick = this.handleGetAnalysisClick.bind(this)
    // this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleGetAnalysisClick(id) {
    this.props.loadAnalysis(id)
  }

  componentDidMount() {
    this.props.login()
  }

  handleLogoutClick() {
    this.props.logout()
  }

  render() {

    const style = {
      margin: '0px',
      padding: '0px',
      border: '0px'
    }
    const imgStyle = {
      height: '85px'
    }
    return (
      <div style={ style }>
        <div className="navbar navbar-default" style={{ backgroundColor: '#CE93D8'}}>
          <div className="">
            <a className="navbar-brand">
              <img src={ logo } style={ imgStyle }/>
            </a>
          </div>
        </div>

        <div className="">
          {this.props.children}

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


