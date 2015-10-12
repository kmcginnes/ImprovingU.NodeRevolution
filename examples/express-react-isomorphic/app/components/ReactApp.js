import React from 'react'
import { Link } from 'react-router'

class ReactApp extends React.Component {
  componentDidMount() {
    console.log('React is now loaded client side.');
  }

  render() {
    return (
      <div>
        <h1><Link to='/'>App</Link></h1>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/inbox'>Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

module.exports = ReactApp;
