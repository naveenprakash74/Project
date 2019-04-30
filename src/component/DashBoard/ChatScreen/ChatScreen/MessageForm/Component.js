import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native'

import styles from './Styles'

const OPACITY_ENABLED = 1
class MessageFormComponent extends Component {

  constructor() {
    super()

    this.handleMessageChange = (message) => {
      this.props.updateMessage(message)
    }

    this.handleButtonPress = () => {
      this.props.sendMessage(this.props.message)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.sendingError && this.props.sendingError) {
      Alert.alert('error', this.props.sendingError)
    }
  }

  render() {
    const sending = this.props.sending
    const isButtonDisabled = sending || this.props.message.trim().length == 0

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('message')}
          returnKeyType='send'
          onChangeText={this.handleMessageChange}
          value={this.props.message}
          underlineColorAndroid={'transparent'}
          editable={!sending} />

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleButtonPress}
          disabled={isButtonDisabled}>

          <Text>send</Text>

        </TouchableOpacity>

      </View>
    );
  }
}


export default MessageFormComponent
