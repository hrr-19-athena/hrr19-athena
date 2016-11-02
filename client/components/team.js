import React, { Component} from 'react'

export default class Team extends Component {
  render() {
    const style = {
        backgroundImage: 'url('+backGround+')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        margin: '0px',
        PaddingTop: '1em'
    }
    const members = [
      {
        name: 'Michael Oliver',
        image: 'https://media.licdn.com/media/p/6/005/075/033/2bc11bd.jpg',
        github: 'https://github.com/mikecheck12',
        linkedin: 'https://www.linkedin.com/in/j-michael-oliver'
      },
      {
        name: 'Nam Huynh',
        image: 'https://media.licdn.com/media/p/4/000/17f/16c/27d4053.jpg',
        github: 'https://github.com/NthBox',
        linkedin: 'https://www.linkedin.com/in/nam-huynh'
      },
      {
        name: 'Natasha Che',
        image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf0AAAAJDA4YmVmOGVjLWI2MzktNDRjOC1iZTFjLWM1M2I3NDkxZDI4OQ.jpg',
        github: 'https://github.com/natashache',
        linkedin: 'https://www.linkedin.com/in/natashache'
      },
      {
        name: 'Vi Vo',
        image: 'https://avatars3.githubusercontent.com/u/16070642?v=3&s=466',
        github: 'https://github.com/vivo-un',
        linkedin: 'https://www.linkedin.com/in/vivian-vi-vo-22979380'
      }
    ]
    return (
          <div id = 'team'
               className = ' jumbotron'
               style = { style }>
            <h1 className='display-3'
                style={{ textAlign: 'center' }}>
                Development Team
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
