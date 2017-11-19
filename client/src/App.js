/////////////////////////////////////////
import React, { Component } from 'react';
import './styles/css/App.css';
/////////////////////////////////////////
//pages//
import Home from './components/pages/home';

//elements//
import Header from './components/elements/header';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.pages = {
      Home
    };
    
    this.state = {
      page: this.pages["Home"]
    };
    
    
  }
  
  render() {
    let Page = this.state.page;
    return (
      <div className="App">
        <Header />
        <Page />
      </div>
    );
  }
}

export default App;
