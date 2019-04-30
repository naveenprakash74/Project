import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import styles from './Styles'

const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>
    <Text>Logout</Text>
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired
}

export default LogoutButtonComponent
