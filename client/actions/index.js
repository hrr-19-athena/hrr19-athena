import { CALL_API } from '../middleware/api'
import Auth0Lock from 'auth0-lock'
import Axios from 'axios'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
let AUTH0_CLIENT_ID=''
let AUTH0_DOMAIN=''

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
    .then(response =>{
        AUTH0_CLIENT_ID=response.AUTH0_CLIENT_ID
        AUTH0_DOMAIN=response.AUTH0_DOMAIN
      }
    )
  const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,options)
  return dispatch => {
    lock.show((err, profile, token) => {
      if(err) {
        return dispatch(loginError(err))
      }
      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)
      return dispatch(loginSuccess(profile))
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