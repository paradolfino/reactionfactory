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
      page: "Home",
      store: {
        
      }
    };
    
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }
  
  pageHandler(val) {
    this.setState({page: val});
  }
  
  inputHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    let storedVal = function() {
      if (name == 'height' || name == 'width') {
        return `${value}px`;
      } else {
        return value;
      }
    }
    let id = e.target.id;
    let toStore = {
      store: {
        requester: name,
        requested: storedVal(),
        [name]: value
      }
      
    }
    this.setState(toStore);
    
  }
  
  componentDidUpdate() {
    
  }
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div className="App">
        <Header />
        <Page inputHandler={this.inputHandler} pageHandler={this.pageHandler} state={this.state}/>
        
      </div>
    );
  }
}

export default App;
