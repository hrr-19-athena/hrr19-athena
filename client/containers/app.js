import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Auth from '../components/auth'
import Login from '../components/login'
const backGround = require('../style/assets/background2.jpg')
const logo = require('../style/assets/horizontallogo.png')


export default class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    const style = {
      margin: '0px',
      padding: '0px',
      border: '0px',
    }
    const style2 = {
      backgroundImage: 'url('+backGround+')',
      backgroundSize: 'cover',
      overflow: 'hidden'
    }
    const imgStyle = {
      height: '65px'
    }
    return (
      <div style = { style }>
        <div className = "navbar navbar-full " style = { style2 }>
          <div className = "">
            <Link to = '/' className = "navbar-brand">
              <img src = { logo } style = { imgStyle }/>
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




