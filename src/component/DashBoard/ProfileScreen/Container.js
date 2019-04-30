import React from 'react'
import { connect } from 'react-redux'

import ProfileScreenComponent from './Component'

const ProfileScreenContainer = props =>
    <ProfileScreenComponent error={props.error} navigation={props.navigation} />

const mapStateToProps = state => ({
    error: state.session.error,
})
export default connect(mapStateToProps)(ProfileScreenContainer)
