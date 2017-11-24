import React, { Component } from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.id={
      form: 'ReactForm',
      button: 'ReactButton',
      inputs: ['RInput0']
    };
    this.btn = null;
    this.active = 0;
    this.btnStyle = {
      default: `
height: 30px;
width: 60px;
cursor: pointer;`,
      render: null,
      hover: `background-color: red;`,
      focus: `background-color: green;`,
      transitions: `
-webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;`
    };
    
    this.btnClick = this.btnClick.bind(this);
    this.btnMouseEnter = this.btnMouseEnter.bind(this);
    this.btnMouseLeave = this.btnMouseLeave.bind(this);
    this.btnFocus = this.btnFocus.bind(this);
    this.btnSetStyle = this.btnSetStyle.bind(this);
    this.btnResetStyle = this.btnResetStyle.bind(this);
  }
  btnClick(e) {
    e.preventDefault();
  }
  btnMouseEnter() {
    this.active === 0 && this.btnSetStyle(this.btnStyle.hover);
    
  }
  btnMouseLeave() {
    this.btnSetStyle(this.btnStyle.render);
  }
  btnFocus() {
    this.btnResetStyle();
    this.btnStyle.render += this.btnStyle.focus;
    this.btnSetStyle(this.btnStyle.render);
    this.active = 1;
  }
  btnSetStyle(val) {
    switch(val) {
      case this.btnStyle.render:
        this.btn.setAttribute("style",this.btnStyle.render);
        break;
      case this.btnStyle.default:
        this.btn.setAttribute("style",this.btnStyle.default);
        break;
      default:
        this.btn.setAttribute("style",this.btnStyle.render + val);
        break;
    }
    
   }
  btnResetStyle() {
    this.active = 0;
    this.btnStyle.render = this.btnStyle.default;
    this.btnSetStyle(this.btnStyle.default);//sets style to default
  }
  
  componentDidMount() {
    this.btn = document.getElementById(this.id.button);
    this.btnStyle.default += this.btnStyle.transitions;
    this.btnStyle.render = this.btnStyle.default;//load transitions if any
    this.btnSetStyle(this.btnStyle.render);
  }
  render() {
    return (
      <form id={this.id.form}>
        <input type='text' id={this.id.inputs[0]} onClick={this.btnClick} onFocus={this.btnFocus} onBlur={this.btnResetStyle} className='form-input' placeholder='Put props here'/>
        <button 
          id={this.id.button} 
          onClick={this.btnClick}
          onMouseEnter={this.btnMouseEnter}
          onMouseLeave={this.btnMouseLeave}
          onFocus={this.btnFocus}
          onBlur={this.btnResetStyle}>{this.props.btnText}</button>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("app"));
