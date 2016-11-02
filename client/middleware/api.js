//======= middleware to make api calls to the backend and return analysis results and similar user lists ============
import Axios from 'axios'
export const API_ROOT = 'https://app-persona.herokuapp.com/'
// export const API_ROOT = 'http://localhost:5000/'

function callApi(endpoint, authenticatedRequest, params) {
  const token = localStorage.getItem('id_token') || null
  let config = {}

  if(authenticatedRequest) {
    if(token) {
      config = {
        headers: { 'Authorization': `Bearer ${token}` },
        params: params
      }
    } else {
      throw new Error("No token saved!")
    }
  }

  // return Axios(API_ROOT + endpoint, config)
  return Axios.get(API_ROOT + endpoint,config)
    .then(function(response) {
      console.log('response',response);
      return response
    })
    .catch(function(err) {
      console.log(err)
      return (err)
    })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {

  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') { //if the action doesn't have the callAPI property (e.g. actions for login and logout), pass it through to reducer without modification
    return next(action)
  }

  let { endpoint, types, authenticatedRequest, params } = callAPI

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType })) //pass the request action to reducer before making the api call

  return callApi(endpoint, authenticatedRequest, params).then(
    response => next(actionWith({
      response,
      authenticatedRequest,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Error!'
    }))
  )
}