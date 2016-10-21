import { CALL_API } from '../middleware/api';
import Auth0Lock from 'auth0-lock';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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
  const lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN')
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

function fetchAnalysis(id) {
  return {
    [CALL_API]: {
      types: [ ANALYSIS_REQUEST, ANALYSIS_SUCCESS, ANALYSIS_FAILURE ],
      endpoint: `analysis/${id}`,
      authenticatedRequest: true
    }
  }
}

export function loadAnalysis(id) {
  return dispatch => {
    return dispatch(fetchAnalysis(id))
  }
}