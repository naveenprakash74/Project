import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadMessages } from '../../../../../redux/chat/actions';
import { getChatItems } from '../../../../../redux/chat/selectors';

import MessageListComponent from './Component'

class MessagesListContainer extends Component {

  componentDidMount() {
    this.props.loadMessages()
  }

  render() {
    const data = getChatItems(this.props.messages).reverse();
    return (
      <MessageListComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  error: state.chat.loadMessagesError
})

const mapDispatchToProps = {
  loadMessages
}
export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)
