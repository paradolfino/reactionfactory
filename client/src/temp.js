import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.id=this.props.id;
    this.el = null;
    this.active = 0;
    this.style = {
      default: `
        height: 40px;
        width: 100px;
        color: white;
        background-color: #42aaf4;
        cursor: pointer;
        border: none;
        border-radius: 30px;
        `,
      render: null,
      hover: `
      color: white;
      background-color: red;
      `,
      focus: `background-color: green;`,
      transitions: `
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        `
    };
    
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.resetStyle = this.resetStyle.bind(this);
  }
  onClick(e) {
    this.props.onClick(e.target.value);
  }
  onMouseEnter() {
    this.active === 0 && this.setStyle(this.style.hover);
    
  }
  onMouseLeave() {
    this.setStyle(this.style.render);
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
      <button
        id={this.id}
        value={this.props.value}
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onFocus={this.onFocus}
        onBlur={this.resetStyle}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
