import React from 'react'
import { connect } from 'react-redux'

import HomeScreenComponent from './Component'

const HomeScreenContainer = props =>
    <HomeScreenComponent error={props.error} navigation={props.navigation} />

const mapStateToProps = state => ({
    error: state.session.error,
})
export default connect(mapStateToProps)(HomeScreenContainer)
