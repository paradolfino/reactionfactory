import React, { Component } from 'react';
import Button from '../../temp';
class Home extends Component {
  render() {
    return (
      <div id='page-home' className="page">
        <p>1. Easily create self-contained React button components with customized css.</p>
        <p>2. Quickly wire the button into your React app and give it some cool props: Like a name!</p>
        <p>3. Download your button.js file or copy the generated source code directly!</p>
        <Button value='Factory' text="Try it out!" onClick={this.props.pageHandler}/>
      </div>
    );
  }
}

export default Home;