import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Friends extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { friendsList } = this.props
    console.log('friends:', friendsList)
    return (
      <div>friends</div>
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
