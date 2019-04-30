import React from 'react'
import { connect } from 'react-redux'

import StatusScreenComponent from './Component'

const StatusScreenContainer = props =>
    <StatusScreenComponent error={props.error} navigation={props.navigation} />

const mapStateToProps = state => ({
    error: state.session.error,
})
export default connect(mapStateToProps)(StatusScreenContainer)
