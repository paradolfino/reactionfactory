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
      defColor: 'black',
      defBg: 'white',
      defHt: '30px',
      defWt: '60px',
      hovColor: 'black',
      hovBg: 'white',
      hovHt: '30px',
      hovWt: '60px',
      transitionDur: '0.5s'
    };
    
    this.defProps = {};
    this.hoverProps = {};
    
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }
  
  pageHandler(val) {
    this.setState({page: val});
  }
  
  inputHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    let defProps = this.defProps;
    let hoverProps = this.hoverProps;
    let storedVal = function() {
      if (name == 'defHt' || name == 'defWt') {
        return `${value}px`;
      } else {
        return value;
      }
    }
    this.setState({
      [name]: storedVal()
    });
    
  }
  
  componentDidMount() {
    
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
