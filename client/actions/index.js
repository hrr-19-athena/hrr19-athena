import { CALL_API } from '../middleware/api' // import the sympol from middleware file, which will be used as an innumerable property on the object returned by fetchAnalysis and fetchFriends actions
import Auth0Lock from 'auth0-lock'
import Axios from 'axios' //for making http requests

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_INPROCESS = 'LOGIN_INPROCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

const options = {  // options for Auth0 lock displayed on log in page
  languageDictionary: {
    emailInputPlaceholder: "me@example.com",
    title: 'Persona'
  },
  theme: {
    primaryColor: '#108DBD',
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

//<=========== actions for handling log in and log out ==========>

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginInProcess() {
  return {
    type: LOGIN_INPROCESS
  }
}

function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err
  }
}


export function login() {  //function for displaying the lock on login page
  Axios('/api/clientcred')
    .then(function(response) {
        const AUTH0_CLIENT_ID=response.data.AUTH0_CLIENT_ID
        const AUTH0_DOMAIN=response.data.AUTH0_DOMAIN
        const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN,options)
        lock.show()
      })
}

export function setToken() {  //function for checking if user is authenticated, called before the auth.js component is mounted to DOM. The way this is implemented below is rather hacky, i.e. grabbing the id_token from the returned url by Auth0 and store it in local storage. But the non-hacky way specified in the Auth0 docs, i.e. using lock.on('authenticated', function(){...}) does not work for some reason
  return function(dispatch) { //we're able to use the dispatch method to make action-creator functions return dispatch(action) because we used reduxThunk middleware. It's set up in client/index.js. Check https://github.com/gaearon/redux-thunk for details
      dispatch(loginInProcess())
      const url = window.location.hash
      const start = url.indexOf('&id_token') + 10
      const end = url.indexOf('&token_type')
      var jwt = localStorage.getItem('id_token')
      if(jwt) {
        var jwtExp = jwtDecode(jwt).exp
        var expiryDate = new Date(0)
        expiryDate.setUTCSeconds(jwtExp)
      }
      if(jwt && (new Date() < expiryDate)) {
        var token = localStorage.getItem('id_token')
      } else {
        var token = url.substring(start,end)
      }
      Axios('/api/clientcred')
      .then(function(response) {
          const AUTH0_CLIENT_ID = response.data.AUTH0_CLIENT_ID
          const AUTH0_DOMAIN = response.data.AUTH0_DOMAIN
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

// <============ actions for fetching user personality analysis ===========>

export const ANALYSIS_REQUEST = 'ANALYSIS_REQUEST'
export const ANALYSIS_SUCCESS = 'ANALYSIS_SUCCESS'
export const ANALYSIS_FAILURE = 'ANALYSIS_FAILURE'

function fetchAnalysis(id, img, name, screen_name, location, description) {
  const params = {
      id: id,
      img: img,
      name: name,
      screen_name: screen_name,
      location: location,
      description: description
  }
  return { // this object will be passed onto api middleware and the api calls will be made over there
    [CALL_API]: {
      types: [ ANALYSIS_REQUEST, ANALYSIS_SUCCESS, ANALYSIS_FAILURE ],
      endpoint: 'api/user/analysis',
      authenticatedRequest: true,
      params: params
    }
  }
}

export function loadAnalysis(id, img, name, screen_name, location, description) {
  return dispatch => {
    return dispatch(fetchAnalysis(id, img, name, screen_name, location, description))
  }
}

//<======= fetch list of similar users (friends) ========>

export const FRIENDS_REQUEST = 'FRIENDS_REQUEST'
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS'
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE'

function fetchFriends(id, group, endpoint) {
  console.log('fetchFriends called')
  const params = {
      id: id,
      group: group
  }
  return {
    [CALL_API]: {  // this object will be passed onto api middleware and the api calls will be made over there
      types: [ FRIENDS_REQUEST, FRIENDS_SUCCESS, FRIENDS_FAILURE ],
      endpoint: endpoint,
      authenticatedRequest: true,
      params: params
    }
  }
}

export function loadFriends(id, group, endpoint) {
  console.log('loadFriends called')
  return dispatch => {
    return dispatch(fetchFriends(id, group, endpoint))
  }
}