import React from 'react'
import { connect } from 'react-redux'

import MainScreenComponent from './Component'

const MainScreenContainer = props =>
    <MainScreenComponent
        loading={props.loading}
        error={props.error}
        user={props.user} />

const mapStateToProps = state => ({
    loading: state.session.loading,
    error: state.session.error,
    user: state.session.user,
})
export default connect(mapStateToProps)(MainScreenContainer)
