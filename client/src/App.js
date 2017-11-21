/////////////////////////////////////////
import React, { Component } from 'react';
import './styles/css/App.css';
/////////////////////////////////////////
//pages//
import Home from './components/pages/home';
import Factory from './components/pages/factory';
import Output from './components/pages/output';

//elements//
import Header from './components/elements/header';
import Footer from './components/elements/footer';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.pages = {
      Home,
      Factory,
      Output
    };
    
    this.state = {
      page: "Home",
      defColor: 'black',
      defBg: 'white',
      defHt: '50px',
      defWt: '100px',
      defFtSize: '16px',
      hovColor: 'black',
      hovBg: 'white',
      hovHt: '30px',
      hovWt: '60px',
      focColor: 'black',
      focBg: 'white',
      borderRadius: '0',
      transitionDur: '0.5s'
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
      if (name.includes('Ht') || name.includes('Wt') || name.includes('FtSize')) {
        return `${value}px`;
      } else {
        return value;
      }
    }
    this.setState({
      [name]: storedVal()
    });
    
  }
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div className="App">
        <Header />
        <Page inputHandler={this.inputHandler} pageHandler={this.pageHandler} state={this.state}/>
        <Footer />
      </div>
    );
  }
}

export default App;
