import React, { Component } from 'react';
import Button from '../../temp';
class Home extends Component {
  render() {
    return (
      <div id='page-home' className="page">
        <p>1. Easily create self-contained React button components with customized css.</p>
        <p>2. Quickly wire the button into your React app and give it some cool props: Like a name!</p>
        <p>3. You're ready to use your button.</p>
        <Button />
      </div>
    );
  }
}

export default Home;