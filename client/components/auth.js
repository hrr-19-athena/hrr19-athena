import React, { Component, PropTypes } from 'react'

export default class Auth extends Component {
  constructor(props) {
    super(props)

    const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,{})
    const url = window.location.hash
    const start = url.indexOf('&id_token')+10;
    const end=url.indexOf('&token_type');
    const token=url.substring(start,end);
    const that = this;
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleGetAnalysisClick = this.handleGetAnalysisClick.bind(this);
    lock.getProfile(token, function(error, profile) {
        if (error) {
          console.log(error);
        }
        console.log('profile:',profile)
        localStorage.setItem('id_token', token);
        localStorage.setItem('profile', JSON.stringify(profile));
    })
  }

  checkAuthentication() {
    if(localStorage.getItem('id_token')) {
      this.setState({
        isAuthenticated: true,
        profile: JSON.parse(localStorage.getItem('profile'))
      })
    }
  }

  componentDidMount() {
    this.checkAuthentication()
  }


  handleGetAnalysisClick(id) {
    this.props.loadAnalysis(id)
  }



  handleLogoutClick() {
    this.props.logout()
  }

  render() {
    const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props

    return (
      <div style={{ marginTop: '10px' }}>
        { !isAuthenticated ? (
          <div></div>
        ) : (
          <ul className="list-inline">
            <li><img src={profile.picture} height="40px" /></li>
            <li><span>Hello, {profile.nickname}!</span></li>
            <li><button className="btn btn-primary" onClick={onLogoutClick}>Logout</button></li>
          </ul>
        )}
      </div>
    )
  }
}