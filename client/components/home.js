import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }

return (
 div class="container">
<div class="row">
  <div class="col-sm-6 col-md-9">
    <div class="thumbnail">
      <img class"media-object watson" src="../style/assets/watson.jpg" style="width: 90%; height: 90%">
      <!-- <img class="media-object" src="https://developer.ibm.com/watson/wp-content/uploads/sites/19/2015/02/PI-service-page-pic.png" alt="..."> -->
      <div class="caption">
        <h3>What your personality analysis entails: </h3>
          <h6>Big Five personality characteristics represent the most widely used model for generally describing how a person engages with the world. The model includes five primary dimensions:</h6>
          <li><strong>Agreeableness</strong> - is a persons tendency to be compassionate and cooperative toward others.</li>
          <li><strong>Conscientiousness</strong> - is the tendency to act in an organized or thoughtful way.</li>
          <li><strong>Extraversion</strong> - is the tendency to seek stimulation in the company of others.</li>
          <li><strong>Emotional Range</strong> - is the extent to which a persons emotions are sensitive to the persons environment.</li>
          <li><strong>Openness</strong> - is the extent to which a person is open to experiencing a variety of activities.</li>
          <br></br>
        <p><a href="#" class="btn btn-primary" role="button">Analyze your Personality!</a>
      </div>
    </div>
  </div>
</div>
)