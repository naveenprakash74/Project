import React from 'react'
import { connect } from 'react-redux'

import { sendMessage, updateMessage } from '../../../../../redux/chat'

import MessageForm from './Component'

const MessageFormContainer = props =>
  <MessageForm
    sending={props.sending}
    sendMessage={props.sendMessage}
    updateMessage={props.updateMessage}
    message={props.message}
    sendingError={props.sendingError} />

const mapStateToProps = state => ({
  sending: state.chat.sending,
  sendingError: state.chat.sendingError,
  message: state.chat.message
})

const mapDispatchToProps = {
  sendMessage,
  updateMessage
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageFormContainer)
