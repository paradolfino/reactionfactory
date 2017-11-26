let templateForm = `
import React, { Component } from 'react';
import Button from './button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.id=this.props.id;
    this.el = null;
    this.active = 0;
    this.style = {
      default: \`
        height: ${this.state.formHt};
        width: ${this.state.formWt};
        color: ${this.state.formColor};
        background-color: ${this.state.formBg};
        cursor: pointer;
        border: none;
        border-radius: ${this.state.formBorderRadius};
        \`,
      render: null,
      hover: null,
      focus: \`
      color: ${this.state.formFocColor}
      background-color: ${this.state.formFocBg};\`,
      transitions: \`
        -webkit-transition: all ${this.state.transitionDur};
        -moz-transition: all ${this.state.transitionDur};
        -o-transition: all ${this.state.transitionDur};
        transition: all ${this.state.transitionDur};
       \`
    };
    
    this.onFocus = this.onFocus.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.resetStyle = this.resetStyle.bind(this);
  }
  onClick(e) {
    
  }
  onFocus() {
    this.resetStyle();
    this.style.render += this.style.focus;
    this.setStyle(this.style.render);
    this.active = 1;
  }
  setStyle(val) {
    switch(val) {
      case this.style.render:
        this.el.setAttribute("style",this.style.render);
        break;
      case this.style.default:
        this.el.setAttribute("style",this.style.default);
        break;
      default:
        this.el.setAttribute("style",this.style.render + val);
        break;
    }
    
   }
  resetStyle() {
    this.active = 0;
    this.style.render = this.style.default;
    this.setStyle(this.style.default);//sets style to default
  }
  
  componentDidMount() {
    this.el = document.getElementById(this.id);
    this.style.default += this.style.transitions;
    this.style.render = this.style.default;//load transitions if any
    this.setStyle(this.style.render);
  }
  render() {
    return (
      ${this.inputString}
    );
  }
}

export default Form;

    `;

export default templateForm;