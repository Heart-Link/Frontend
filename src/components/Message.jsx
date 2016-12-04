import React, { Component } from 'react';
import Alert from './Alert';

class Message extends Component{
  constructor(){
    super();

    this.sendMessageClick = this.sendMessageClick.bind(this);
  }

  alerts(){
    if(!this.props.alertMessage) return;

    return <Alert message={this.props.alertMessage}
                  sendAlert={this.props.sendAlert} />;
  }

  messageClassName(id){
    if(id === this.props.userInfo.providerID){
      return 'Provider'
    }
    return 'Patient'
  }

  renderMessages(){
    if(this.props.messages.length === 0)
      return <h6> No messages yet</h6>;

    return(
      this.props.messages.map((messageEntry, index)=>{
        return <div key={index} className={this.messageClassName(messageEntry.messengerid)}>
                  <p>{messageEntry.message}</p>
                </div>;
      })
    );
  }

  sendMessageClick(event){
    event.preventDefault();

    if(this.refs.message.value.length === 0){
      this.props.sendAlert({message: 'No message to send'});
      return;
    }
    this.props.sendMessage({
      id: this.props.patient,
      messenger: this.props.userInfo.providerID,
      message: this.refs.message.value,
      token: this.props.userInfo.jwt
    })

    this.refs.message.value = '';
  }

  render(){
    return(
      <div className='Message'>
        <div className='MessageCards'>
          {this.renderMessages()}
        </div>
        <div className='Break'></div>
        <div className='Interaction'>
          {this.alerts()}
          <textarea placeholder='Type your message here...' ref='message'/>
          <button className='Btn-norm Btn-right' onClick={this.props.closeMessages}>Close Inbox</button>
          <button className='Btn-med Btn-norm' onClick={this.sendMessageClick}>Send</button>
        </div>
      </div>
    );
  }

}

export default Message;
