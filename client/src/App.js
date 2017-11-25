/////////////////////////////////////////
import React, { Component } from 'react';
import './styles/css/App.css';
/////////////////////////////////////////
//pages//
import Home from './components/pages/home';
import ButtonFactory from './components/pages/buttonfactory';
import FormFactory from './components/pages/formfactory';
import Output from './components/pages/output';

//elements//
import Header from './components/elements/header';
import Footer from './components/elements/footer';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.pages = {
      Home,
      ButtonFactory,
      FormFactory,
      Output
    };
    this.inputsArr = [0];
    this.state = {
      page: "Home",
      inputs: this.inputsArr,
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
      transitionDur: '0.5s',
      formColor: 'black',
      formBg: 'gray',
      formHt: '500px',
      formWt: '500px',
      formBorderRadius: 0,
      inputColor: 'black',
      inputBg: 'white',
      inputHt: '30px',
      inputWt: '150px',
      inputFocColor: 'black',
      inputFocBg: 'white',
      inputFocHt: '30px',
      inputFocWt: '150px',
      inputBorderRadius: 0,
      inputStyle: ''
      
    };
    
    
    this.inputsLength = this.state.inputs.length;
    
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }
  
  pageHandler(val) {
    this.setState({page: val});
  }
  
  inputHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    let obj = {};
    let storedVal = function() {
      if (name.includes('Ht') || name.includes('Wt') || name.includes('FtSize')) {
        return `${value}px`;
      } else {
        return value;
      }
    }
    if (name === 'addInput') {
      this.inputsLength = this.state.inputs.length;
      this.inputsArr.push(this.inputsLength);
      obj = {inputs: this.inputsArr};
    } else if (name === 'delInput') {
      this.inputsLength = this.state.inputs.length;
      this.inputsLength > 1 && this.inputsArr.pop();
      obj = {inputs: this.inputsArr};
    } else {
      obj = {[name]: storedVal()};
    }
    this.setState(obj);
    
  }
  
  
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div className="App">
        <Header />
        <Page inputHandler={this.inputHandler} pageHandler={this.pageHandler} state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
