let templateInput = `
import React, { Component } from 'react';
import Button from './button';

class Input extends Component {
  constructor(props) {
    super(props);
    this.id=this.props.id;
    this.el = null;
    this.active = 0;
    this.style = {
      default: \`
        height: ${this.state.inputHt};
        width: ${this.state.inputWt};
        color: ${this.state.inputColor};
        background-color: ${this.state.inputBg};
        cursor: pointer;
        border: none;
        border-radius: ${this.state.inputBorderRadius};
        \`,
      render: null,
      hover: null,
      focus: \`
      color: ${this.state.inputFocColor}
      background-color: ${this.state.inputFocBg};\`,
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

export default input;

    `;

export default templateinput;