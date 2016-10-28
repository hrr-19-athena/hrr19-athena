import { CALL_API } from '../middleware/api'
import Auth0Lock from 'auth0-lock'
import Axios from 'axios'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

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
  Axios('/api/clientcred')
    .then(function(response) {
        const AUTH0_CLIENT_ID=response.data.AUTH0_CLIENT_ID
        const AUTH0_DOMAIN=response.data.AUTH0_DOMAIN
        const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,options)
        lock.show()
      })
}

export function setToken() {
  return function(dispatch) {
      const url = window.location.hash
      const start = url.indexOf('&id_token') + 10
      const end = url.indexOf('&token_type')
      const token = localStorage.getItem('id_token') || url.substring(start,end)
      Axios('/api/clientcred')
      .then(function(response) {
          const AUTH0_CLIENT_ID = response.data.AUTH0_CLIENT_ID
          const AUTH0_DOMAIN = response.data.AUTH0_DOMAIN
          console.log(AUTH0_CLIENT_ID,AUTH0_DOMAIN)
          const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,{})
          lock.getProfile(token, function(error, profile) {
              if (error) {
                console.log(error)
                return dispatch(loginError(error))
              }
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

// <============ fetch user personality analysis ===========>

export const ANALYSIS_REQUEST = 'ANALYSIS_REQUEST'
export const ANALYSIS_SUCCESS = 'ANALYSIS_SUCCESS'
export const ANALYSIS_FAILURE = 'ANALYSIS_FAILURE'

function fetchAnalysis(id, img, name, screen_name, location) {
  const params = {
      id: id,
      img: img,
      name: name,
      screen_name: screen_name,
      location: location
  }
  return {
    [CALL_API]: {
      types: [ ANALYSIS_REQUEST, ANALYSIS_SUCCESS, ANALYSIS_FAILURE ],
      endpoint: 'api/user/analysis',
      authenticatedRequest: true,
      params: params
    }
  }
}

export function loadAnalysis(id, img, name, screen_name, location) {
  return dispatch => {
    return dispatch(fetchAnalysis(id, img, name, screen_name, location))
  }
}

//<======= fetch list of similar users (friends) ========>

export const FRIENDS_REQUEST = 'FRIENDS_REQUEST'
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS'
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE'

function fetchFriends(id) {
  const params = {
      id: id
  }
  return {
    [CALL_API]: {
      types: [ FRIENDS_REQUEST, FRIENDS_SUCCESS, FRIENDS_FAILURE ],
      endpoint: 'api/user/similarGroup',
      authenticatedRequest: true,
      params: params
    }
  }
}

export function loadFriends(id) {
  return dispatch => {
    return dispatch(fetchFriends(id))
  }
}