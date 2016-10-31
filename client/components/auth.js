// ========= this is the parent component for analysisview and friends. very important ===============
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import ReactTooltip from 'react-tooltip'
import { loadAnalysis, logout, setToken,loadFriends } from '../actions'
import AnalysisView from './analysisView'
import Home from './home'

class Auth extends Component { //need this for redirecting user after logging out (line 37)
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.props.setToken() //store token and profile to local storage before rendering the page
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleGetAnalysisClick = this.handleGetAnalysisClick.bind(this)
    this.handleGetSimilarUserClick = this.handleGetSimilarUserClick.bind(this)
    this.handleGetGroupClick = this.handleGetGroupClick.bind(this)
  }

  handleGetAnalysisClick() { //when user click on 'personality button'
    const id = this.props.profile.user_id.split('|')[1]
    const img = this.props.profile.picture
    const name = this.props.profile.name
    const screen_name = this.props.profile.screen_name
    const location =  this.props.profile.location
    const description = this.props.profile.description
    this.props.loadAnalysis(id, img, name, screen_name, location, description)
  }

  handleLogoutClick() { //when user click on logout
    this.props.logout()
    this.context.router.push('/')
  }

  handleGetSimilarUserClick() { //when user click on 'tribe'
    const id = this.props.profile.user_id.split('|')[1]
    const group = ''
    this.props.loadFriends(id, group, 'api/user/similarGroup')
  }

  handleGetGroupClick() { //when user click on 'group'
    const id = this.props.profile.user_id.split('|')[1]
    const group = this.props.analysisResult.data.dominantTrait
    this.props.loadFriends(id, group, 'api/user/dominantTraitGroup')
  }

  render() {
    const { isAuthenticated, isLogging, profile } = this.props

    if(!isAuthenticated&&isLogging) {
      return (
        <div className = '' style = {{ marginTop: '10px'}}>
          <p className = 'lead'>Loading...</p>
        </div>
      )
    } else if(!isAuthenticated&&!isLogging) {
      return (
        <div className = '' style = {{ marginTop: '10px' }}>
          <p className = 'lead'>You need to login first</p>
        </div>
      )
    } else {
    return (
      <div style = {{ backgroundColor: '', paddingTop: '20px', height: '100%' }}>
          <div style = {{ height: '100%' }} >
            <div className = 'col-md-3' >
              <div className = 'navbar-header'
                   style = {{ marginBottom: '50px' }}>
                <img src = { profile.picture } height = "50px" style  = {{ borderRadius: '50%' }}/>
                <span className = 'navebar-brand'>
                  <strong>{`    Hello, ${profile.nickname}!`}</strong>
                </span>
              </div>
              <Divider />
              <ul className = "nav navbar-nav"
                  style = {{ marginLeft: '20px', marginTop: '50px' }}>
                <li>
                  <Link to = '/user'
                        className = "nav-link" >
                        Home
                  </Link>
                </li>
                <li onClick = {this.handleGetAnalysisClick}>
                  <Link to = '/user/analysis'
                        className = "nav-link"
                        data-tip
                        data-for = 'personality'>
                        Personality
                  </Link>
                </li>
                <ReactTooltip id ='personality'
                              type='warning'
                              place='right'>
                  <p>Analyze your personality</p>
                  <p>from your Twitter posts</p>
                </ReactTooltip>
                <li onClick = {this.handleGetSimilarUserClick}>
                 <Link to = '/user/friends'
                       className = "nav-link"
                       data-tip
                       data-for = 'tribe'>
                       Tribe
                  </Link>
                </li>
                <ReactTooltip id = 'tribe'
                              type = 'warning'
                              place = 'right'>
                  <p>Show the list of users whose </p>
                  <p>personality is similar to yours</p>
                </ReactTooltip>
                <li onClick = {this.handleGetGroupClick}>
                  <Link to = '/user/group'
                        className = "nav-link"
                        data-tip
                        data-for = 'group'>
                        Group
                  </Link>
                </li>
                <ReactTooltip id = 'group'
                              type = 'warning'
                              place='right'>
                  <p>Show the group of users</p>
                  <p>whose most dominant personality trait</p>
                  <p>is the same to yours</p>
                </ReactTooltip>
                <br></br>
                <li>
                  <span className = "btn btn-info btn-sm"
                        onClick = {this.handleLogoutClick}>
                        Logout
                  </span>
                </li>
              </ul>
            </div>
            <Paper zDepth = { 5 }
                   className = 'col-md-8'
                   style = {{backgroundColor: '', marginTop: '0px'}} >
              {this.props.children}
            </Paper>
          </div>
      </div>
    )}
  }
}

function mapStateToProps(state) {
  const { analysis, auth } = state
  const { analysisResult,error } = analysis
  const { isAuthenticated, isLogging, profile } = auth
  return {
    analysisResult,
    error,
    isAuthenticated,
    isLogging,
    profile
  }
}

export default connect(mapStateToProps, {
  loadAnalysis,
  logout,
  setToken,
  loadFriends
})(Auth)