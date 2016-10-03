import React, { Component } from 'react';

class Inbox extends Component { 
  constructor () {
    super();

    this.closeInbox = this.closeInbox.bind(this);
  }

  closeInbox () {
    this.props.closeInbox();
  }

  render () {
    return (
      <div className="Inbox">
        <div className="Messages Card">
          <p className="Message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra risus vel ante ultrices, vitae ultrices justo iaculis. Ut sed leo elit. Praesent suscipit consequat lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce imperdiet porttitor magna id tincidunt. Ut dictum metus vitae lorem accumsan, ac dictum mi pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce pulvinar rhoncus velit, in accumsan lectus semper non. Nam sed tortor sed dolor consectetur tempus at sed tellus. Aliquam a augue dolor. Donec sit amet dolor eget sem semper luctus ac nec elit. Sed at elit est. Morbi laoreet orci sit amet eros congue, eu consectetur velit gravida.
          </p>
          <textarea rows="4" placeholder="Type your message here..."/>
        </div>

        <div className="Inbox-buttons">
          <button className="Btn-med Btn-close Btn-left"
                  onClick={this.closeInbox}>
            Close Inbox
          </button>

          <button className="Btn-med Btn-norm">
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default Inbox;
