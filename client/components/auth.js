import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { loadAnalysis, logout, setToken,loadFriends } from '../actions'
import Auth0Lock from 'auth0-lock'
import AnalysisView from './analysisView'

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
    this.handleGetSimilarUserClick = this.handleGetSimilarUserClick.bind(this)
    this.handleGetGroupClick = this.handleGetGroupClick.bind(this)
  }

  handleGetAnalysisClick() {
    const id = this.props.profile.user_id.split('|')[1]
    const img = this.props.profile.picture
    const name = this.props.profile.name
    const screen_name = this.props.profile.screen_name
    const location =  this.props.profile.location
    const description = this.props.profile.description
    this.props.loadAnalysis(id, img, name, screen_name, location, description)
  }

  handleLogoutClick() {
    this.props.logout()
    this.context.router.push('/')
  }

  handleGetSimilarUserClick() {
    const id = this.props.profile.user_id.split('|')[1]
    const group = this.props.analysisResult.dominantTrait
    this.props.loadFriends(id, group, 'api/user/similarGroup')
  }

  handleGetGroupClick() {
    const id = this.props.profile.user_id.split('|')[1]
    const group = this.props.analysisResult.dominantTrait
    this.props.loadFriends(id, group, 'api/user/dominantTraitGroup')
  }

  componentDidUpdate() {
    // this.handleGetAnalysisClick()
  }

  render() {
    const {isAuthenticated, profile } = this.props

    if(!isAuthenticated) {
      return (
        <div className = '' style = {{ marginTop: '10px'}}>
          <p className = 'lead'>Loading...</p>
        </div>
      )
    } else {
    return (
      <div className = '' style = {{ backgroundColor: '', paddingTop: '20px', height: '100%' }}>
          <div className = '' style = {{height: '100%'}} >
            <div className = 'col-md-3' >
              <div className = 'navbar-header' style = {{ marginBottom: '50px' }}>
                <img src={profile.picture} height="50px" style = {{borderRadius: '50%'}}/>
                <span className = 'navebar-brand'><strong>{`    Hello, ${profile.nickname}!`}</strong></span>
              </div>
              <ul className="nav navbar-nav" style={{ marginLeft: '20px', marginTop: '50px'}}>
                <li><Link to = '/user' className="nav-link">Home</Link></li>
                <li onClick = {this.handleGetAnalysisClick}><Link to = '/user/analysis' className="nav-link">Personality</Link></li>
                <li onClick = {this.handleGetSimilarUserClick}><Link to = '/user/friends' className="nav-link" >Tribe</Link></li>
                <li onClick = {this.handleGetGroupClick}><Link to = '/user/group' className="nav-link" >Group</Link></li>
                <br></br>
                <li><span className="btn btn-info btn-sm" onClick = {this.handleLogoutClick}>Logout</span></li>
              </ul>
            </div>
            <div className = 'col-md-9' style = {{backgroundColor: '', marginTop: '0px'}} >
              {this.props.children}
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
  setToken,
  loadFriends
})(Auth)