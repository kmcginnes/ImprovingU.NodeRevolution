import React from 'react'

class About extends React.Component {
  componentDidMount() {
    console.log('React is now loaded client side.');
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This is the about screen</p>
      </div>
    );
  }
}

module.exports = About;
