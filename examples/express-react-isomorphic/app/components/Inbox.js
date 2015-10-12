import React from 'react'

class Inbox extends React.Component {
  componentDidMount() {
    console.log('React is now loaded client side.');
  }

  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <p>This is the Inbox screen</p>
      </div>
    );
  }
}

module.exports = Inbox;
