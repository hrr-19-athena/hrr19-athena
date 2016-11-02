//========== render the tribe list and group list=============
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Friends extends Component {
  constructor(props) {
    super(props)
  }

  renderList(friend) {
    const name = friend.twitter.name
    const location = friend.twitter.location
    const image = friend.twitter.img
    const description = friend.twitter.description
    const twitterHandle = `@${friend.twitter.screen_name}`
    return (
      <tr key = { name }>
        <td>
          <img src={ image } height="50px" style = {{borderRadius: '50%'}} />
          <p>{ ` ${name}` }</p>
        </td>
        <td><span>{ description }</span></td>
        <td><span>{ location }</span></td>
        <td>
          <span>
            <a target = '_blank' href = {`https://twitter.com/${friend.twitter.screen_name}`}>{ twitterHandle }</a>
          </span>
        </td>
      </tr>
    )
  }

  render() {
    const { friendsList } = this.props
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Twitter</th>
          </tr>
        </thead>
        <tbody>
          { friendsList.map(this.renderList) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  const { friends } = state
  const { friendsList,error } = friends
  return {
    friendsList,
    error
  }
}

export default connect(mapStateToProps, null)(Friends)
