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


/*work on this: need to create a template for input and wire it up - after which everything will be finished and ready for touch up on css
 */

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
      formPadding: '0px',
      inputColor: 'black',
      inputBg: 'white',
      inputHt: '30px',
      inputWt: '150px',
      inputFocColor: 'black',
      inputFocBg: 'white',
      inputFocHt: '30px',
      inputFocWt: '150px',
      inputBorderRadius: 0,
      inputStyle: '',
      

      //button stuff - for now
      outputType: '',
      temp_button: ['Button'],
      temp_form: [['Form','temp_form'],['Button','temp_button'],['Input','temp_input']]
    };
    
    
    this.inputsLength = this.state.inputs.length;
    
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.outputHandler = this.outputHandler.bind(this);

    this.executor = this.executor.bind(this);
  }

  executor(value,action) {
    let obj;
    
    switch(action) {
      case 'page':
        obj = {page: value};
        break;
      case 'input':
        obj = value;
        break;
      case 'output':
        obj = {outputType: value};
        break;
    }
    this.setState(obj);
  }

  outputHandler(value) {
    this.executor(value,'output');
  }
  
  pageHandler(value) {
    this.executor(value,'page');
    
  }
  
  inputHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    let pad = parseInt(this.state.formPadding);
    let obj = {};
    let storedVal = function() {
      if (name.includes('Ht') || name.includes('Wt') || name.includes('FtSize')) {
        return `${value}px`;
      } else {
        return value;
      }
    }
    switch(name){
      case 'addInput':
        this.inputsLength = this.state.inputs.length;
        this.inputsArr.push(this.inputsLength);
        obj = {inputs: this.inputsArr};
        break;
      case 'delInput':
        this.inputsLength = this.state.inputs.length;
        this.inputsLength > 1 && this.inputsArr.pop();
        obj = {inputs: this.inputsArr};
        break;
      case 'incPad':
        pad+=10;
        obj = {formPadding: pad+'px'};
        break;
      case 'decPad':
        pad-=10;
        obj = {formPadding: pad+'px'};
        break;
      default:
        obj = {[name]: storedVal()};
        break;
    }
    this.executor(obj, 'input');
    
  }
  
  componentDidUpdate() {
    console.log(this.state.outputType);
  }
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div className="App">
        <Header />
        <Page inputHandler={this.inputHandler} pageHandler={this.pageHandler} outputHandler={this.outputHandler} state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
