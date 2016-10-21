import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'




const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,api)(createStore);

ReactDOM.render(
  <App />
  , document.querySelector('.container'));


  // <Provider store={createStoreWithMiddleware(reducers)}>
  //   <App />

  // </Provider>