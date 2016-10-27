import { CALL_API } from '../middleware/api'
import Auth0Lock from 'auth0-lock'
import Axios from 'axios'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
var AUTH0_CLIENT_ID = ''
var AUTH0_DOMAIN = ''
var lock = ''

const options = {
  languageDictionary: {
    emailInputPlaceholder: "me@example.com",
    title: 'Persona'
  },
  theme: {
    primaryColor: 'purple',
    logo: '../style/assets/logosmall.png'
  },
  container: 'login-widget-container',
  auth: {
    redirect: true,
    redirectUrl: window.location.origin + '/user',
    responseType: 'token',
    params: {
      state: JSON.stringify({pathname: window.location.pathname})
    }
  },
  callbackURL: window.location.origin + '/user'

};

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err
  }
}

export function login() {
  return (dispatch) => {
    Axios('/api/clientcred')
      .then(function(response) {
          AUTH0_CLIENT_ID=response.data.AUTH0_CLIENT_ID
          AUTH0_DOMAIN=response.data.AUTH0_DOMAIN
          lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,options)
          lock.show()
        })
  }
}

export function setToken() {
  return function(dispatch) {
      const url = window.location.hash
      console.log('url:',url)
      const start = url.indexOf('&id_token')+10
      const end=url.indexOf('&token_type')
      const token=url.substring(start,end)
      let profileStored = ''
      Axios('/api/clientcred')
      .then(function(response) {
          AUTH0_CLIENT_ID=response.data.AUTH0_CLIENT_ID
          AUTH0_DOMAIN=response.data.AUTH0_DOMAIN
          lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,{})
          lock.getProfile(token, function(error, profile) {
              if (error) {
                console.log(error);
              }
              console.log('profile:',profile)
              profileStored = profile
              localStorage.setItem('id_token', token);
              localStorage.setItem('profile', JSON.stringify(profile))
              return dispatch(loginSuccess(profile))
          })
        })
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}

export const ANALYSIS_REQUEST = 'ANALYSIS_REQUEST'
export const ANALYSIS_SUCCESS = 'ANALYSIS_SUCCESS'
export const ANALYSIS_FAILURE = 'ANALYSIS_FAILURE'

function fetchAnalysis(id, img, name, screen_name, location) {
  console.log('id in fetchanalysis:',id)
  return {
    [CALL_API]: {
      types: [ ANALYSIS_REQUEST, ANALYSIS_SUCCESS, ANALYSIS_FAILURE ],
      endpoint: 'api/user/analysis',
      authenticatedRequest: true,
      id: id,
      img: img,
      name: name,
      screen_name: screen_name,
      location: location
    }
  }
}

export function loadAnalysis(id, img, name, screen_name, location) {
  return dispatch => {
    return dispatch(fetchAnalysis(id, img, name, screen_name, location))
  }
}