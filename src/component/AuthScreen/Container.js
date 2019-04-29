import React from 'react'
import { connect } from 'react-redux'

import AuthScreenComponent from './Component'

const AuthScreenContainer = props =>
  <AuthScreenComponent
    loading={props.loading}
    error={props.error} />

const mapStateToProps = state => ({
  loading: state.session.loading,
  error: state.session.error,
})

export default connect(mapStateToProps)(AuthScreenContainer)
