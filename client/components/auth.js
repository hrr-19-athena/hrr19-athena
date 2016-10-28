import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAnalysis, logout, setToken } from '../actions'
import Auth0Lock from 'auth0-lock'
import AnalysisResult from './analysisResult'

let AUTH0_CLIENT_ID='iIkWEtI63PrpAYxSrOZJcO3Y7o3yIiuw'
let AUTH0_DOMAIN='camelliatree.auth0.com'

class Auth extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.props.setToken()
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleGetAnalysisClick = this.handleGetAnalysisClick.bind(this)
  }

  handleGetAnalysisClick() {
    const id = this.props.profile.user_id.split('|')[1]
    const img = this.props.profile.picture
    const name = this.props.profile.name
    const screen_name = this.props.profile.screen_name
    const location =  this.props.profile.location
    this.props.loadAnalysis(id, img, name, screen_name, location)
    console.log('analysis result:',this.props.analysisResult)
  }

  handleLogoutClick() {
    this.props.logout()
    this.context.router.push('/')
  }

  handleGetFriendsClick() {
    this.context.router.push('/user/friends')
  }

  componentDidUpdate() {
    // this.handleGetAnalysisClick()
  }

  render() {
    const {isAuthenticated, profile, analysisResult } = this.props

    if(!isAuthenticated) {
      return (
        <div className='' style={{ marginTop: '10px'}}>
          <h2>You need to sign in first</h2>
        </div>
      )
    } else {
    return (
      <div className = '' style = {{ marginTop: '10px' }}>
          <div className = 'row' style = {{}} >
            <div className = 'col-md-3' style = {{ backgroundColor: '' }}>
              <ul className="nav nav-pills nav-stacked" style={{ marginLeft: '20px'}}>
                <li><img src={profile.picture} height="50px" /></li>
                <li><span>Hello, {profile.nickname}!</span></li>
                <li><span className="btn btn-success btn-sm" onClick={this.handleGetAnalysisClick}>Analyze your personality</span></li>
                <li><span className="btn btn-warning btn-sm" onClick={this.handleGetFriendsClick}>Find your tribe</span></li>
                <li><span className="btn btn-primary btn-sm" onClick={this.handleLogoutClick}>Logout</span></li>
              </ul>
            </div>
            <div className = 'col-md-9' >
              <AnalysisResult data = { analysisResult.data }/>
            </div>
          </div>
      </div>
    )}
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
  logout,
  setToken
})(Auth)