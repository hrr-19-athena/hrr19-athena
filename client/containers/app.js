import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Auth from '../components/auth'
import Login from '../components/login'
const logo = require('../style/assets/horizontallogo.png')


export default class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    const style = {
      margin: '0px',
      padding: '0px',
      border: '0px'
    }
    const imgStyle = {
      height: '85px'
    }
    return (
      <div style={ style }>
        <div className="navbar navbar-default" style={{ backgroundColor: '#CE93D8'}}>
          <div className="">
            <Link to='/' className="navbar-brand">
              <img src={ logo } style={ imgStyle }/>
            </Link>
          </div>
        </div>

        <div className="">
          {this.props.children}

        </div>
      </div>
    )
  }
}




