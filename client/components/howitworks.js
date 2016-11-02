// ========== render 'how it works' section in the login page ========
import React, { Component} from 'react'
const backGround = require('../style/assets/background2.jpg')

export default class Howitworks extends Component {
  render() {
    const style = {
        backgroundImage: 'url('+backGround+')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        paddingTop: '1em',
        marginBottom: '0em'
    }
    return (
          <div id = 'howitworks'
               className = ' jumbotron'
               style = { style }>
            <h1 className='display-3'
                style={{ textAlign: 'center' }}>
                How It Works
            </h1>
            <br></br>
            <div className="col-sm-6 col-md-4">
              <div className = "thumbnail"
                   style = {{ textAlign: 'center' }}>
                <p><i className = "fa fa-link fa-5x"></i></p>
                <div className = "caption">
                  <h3>Link your social accounts</h3>
                  <p>Sign up for Persona and have your twitter, facebook, and LinkedLin accounts linked to Persona</p>
                </div>
              </div>
            </div>
            <div className = "col-sm-6 col-md-4">
              <div className = "thumbnail"
                   style = {{ textAlign: 'center' }}>
                <p><i className = "fa fa-bar-chart fa-5x"></i></p>
                <div className = "caption">
                  <h3>Analyze your personality</h3>
                  <p>Persona's smart robots will look at your posts on social media and run an analysis on your personality and values</p>
                </div>
              </div>
            </div>
            <div className = "col-sm-6 col-md-4">
              <div className = "thumbnail" style = {{ textAlign: 'center' }}>
                <p><i className = "fa fa-users fa-5x"></i></p>
                <div className = "caption">
                  <h3>Find true friends</h3>
                  <p>We will then introduce you to other people in your area who share similar personality traits and value systems with you.</p>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
