import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../../../../../redux/session'

import LogoutButton from './Component'

const LogoutButtonContainer = props =>
  <LogoutButton logout={props.logout} />

const mapDispatchToProps = {
  logout: logoutUser
}


export default connect(null, mapDispatchToProps)(LogoutButtonContainer)
