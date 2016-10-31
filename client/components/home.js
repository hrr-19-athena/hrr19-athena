import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loadAnalysis } from '../actions'
const watson = require('../style/assets/watson.jpg')

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleGetAnalysisClick = this.handleGetAnalysisClick.bind(this)
  }

  handleGetAnalysisClick() { //when user click on 'personality button'
    const id = this.props.profile.user_id.split('|')[1]
    const img = this.props.profile.picture
    const name = this.props.profile.name
    const screen_name = this.props.profile.screen_name
    const location =  this.props.profile.location
    const description = this.props.profile.description
    this.props.loadAnalysis(id, img, name, screen_name, location, description)
  }

 render() {
    const style = {
      width: '90%',
      height: '90%'
    }

    return (
      <div className = 'container'>
        <div className="row">
          <div className="col-sm-6 col-md-11" style = {{paddingLeft: '5em'}}>
            <div className="thumbnail">
              <image className = "media-object watson" src = { watson } style = { style }></image>
              <div className="caption">
                <h3>What your personality analysis entails: </h3>
                  <h6>Big Five personality characteristics represent the most widely used model for generally describing how a person engages with the world. The model includes five primary dimensions:</h6>
                  <li><strong>Agreeableness</strong> - is a persons tendency to be compassionate and cooperative toward others.</li>
                  <li><strong>Conscientiousness</strong> - is the tendency to act in an organized or thoughtful way.</li>
                  <li><strong>Extraversion</strong> - is the tendency to seek stimulation in the company of others.</li>
                  <li><strong>Emotional Range</strong> - is the extent to which a persons emotions are sensitive to the persons environment.</li>
                  <li><strong>Openness</strong> - is the extent to which a person is open to experiencing a variety of activities.</li>
                  <br></br>
                <p onClick = { this.handleGetAnalysisClick() } >
                  <Link to = '/user/analysis'
                        className = "btn btn-primary"
                        role="button" >
                        Analyze your Personality!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state
  const { profile } = auth
  return {
    profile
  }
}

export default connect(mapStateToProps, {
  loadAnalysis
})(Home)