import React, { Component } from 'react';

class Inbox extends Component { 
  constructor () {
    super();

    this.closeInbox = this.closeInbox.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  closeInbox () {
    this.props.closeInbox();
  }

  renderMessages () {
    if (this.props.messageList.length === 0) return <p>No Messages</p>

    return this.props.messageList.map((message, index) => {
      if (message.messengerid === this.props.userInfo.providerID) {
        return  <div className="Message--User" key={index}>
                  <p>{message.message}</p>
                </div>

      } else if (message.messengerid === this.props.id) {
        return  <div  className="Message--Patient" key={index}>
                  <p>{message.message}</p>
                </div>  
      } else {
        return  <div className="Message-Other" key={index}>
                  <p>{message.message}</p>
                </div>
      }
    })
  }

  sendMessage (event) {
    event.preventDefault();
    
    if (this.refs.message.value.length === 0) {
      this.props.actions.sendAlert({ message: 'Your message body is empty. Fill that shit out'});
      return;
    }

    this.props.actions.sendMessage({
      id: this.props.id,
      messenger: this.props.userInfo.providerID,
      message: this.refs.message.value,
      token: this.props.userInfo.jwt,
    })

    this.refs.message.value = '';
  }

  render () {
    return (
      <div className="Inbox">
        <div className="Messages Card">
          <div className="Messages-individual">
            {this.renderMessages()}
          </div>
          <textarea rows="4" placeholder="Type your message here..." ref="message"/>
        </div>

        <div className="Inbox-buttons">
          <button className="Btn-med Btn-close Btn-left"
                  onClick={this.closeInbox}>
            Close Inbox
          </button>

          <button className="Btn-med Btn-norm" onClick={this.sendMessage}>
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default Inbox;
