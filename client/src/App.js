/////////////////////////////////////////
import React, { Component } from 'react';
import './styles/css/App.css';
/////////////////////////////////////////
//pages//
import Home from './components/pages/home';
import Factory from './components/pages/factory';

//elements//
import Header from './components/elements/header';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.pages = {
      Home: Home,
      Factory: Factory
    };
    
    this.state = {
      page: "Home"
    };
    
    this.pageHandler = this.pageHandler.bind(this);
  }
  
  pageHandler(val) {
    this.setState({page:val});
  }
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div className="App">
        <Header />
        <Page pageHandler={this.pageHandler}/>
      </div>
    );
  }
}

export default App;
