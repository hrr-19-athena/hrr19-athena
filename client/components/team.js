import React, { Component} from 'react'

export default class Team extends Component {
  render() {
    const style = {
        backgroundSize: 'cover',
        overflow: 'hidden',
        margin: '0px',
        paddingTop: '0.5em'
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
                style={{ textAlign: 'center', paddingBottom:'0.5em' }}>
                Development Team
            </h1>
            <br></br>
            { members.map(member => {
              return (
                  <div className="col-sm-6 col-md-3">
                    <div className = "thumbnail"
                         style = {{ textAlign: 'center' }}>
                      <a href = { member.linkedin }>
                        <img src = { member.image }
                             height="200px"
                             style = {{borderRadius: '50%'}}></img>
                      </a>
                      <br></br>
                      <div className = "caption">
                        <h3>{ member.name }</h3>
                        <div>
                        <a href = { member.linkedin }><i className = "fa fa-linkedin fa-lg" aria-hidden = "true"></i>&nbsp;&nbsp;</a>
                        <a href = { member.github }><i className = "fa fa-github fa-lg" aria-hidden = "true"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })}
          </div>
    )
  }
}
