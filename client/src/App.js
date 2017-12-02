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


/*work on this: - this is a mess. need to route the outputType from DisplayButton in one of the two factory pages to state.
 May have to add a handler to the DisplayButton itself.

 Also fix App so that only one function mutates state. Add an executor function to handle all state change cases.
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
      temp_button: ['Button.js'],
      temp_form: ['Form.js','Button.js','Input.js']
    };
    
    
    this.inputsLength = this.state.inputs.length;
    
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);

    this.executor = this.executor.bind(this);
  }

  executor(e) {

  }
  
  pageHandler(val) {
    console.log(val);
    this.setState({page: val});
  }
  
  inputHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    console.log(name);
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
    this.setState(obj);
    
  }
  
  
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div className="App">
        <Header />
        <Page inputHandler={this.inputHandler} pageHandler={this.pageHandler} state={this.state} outputType={this.state.outputType} />
        <Footer />
      </div>
    );
  }
}

export default App;
