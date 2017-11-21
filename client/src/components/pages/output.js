import React from 'react';

import DisplayButton from '../elements/displaybutton';

const Output = (props) => {
    let state = props.state;
    let strOutput = `
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.id='ReactButton';
    this.el = null;
    this.active = 0;
    this.style = {
      default: \`
        height: ${state.defHt};
        width: ${state.defWt};
        color: ${state.defColor};
        background-color: ${state.defBg};
        cursor: pointer;
        border: none;
        border-radius: ${state.borderRadius};
        \`,
      render: null,
      hover: \`
      color: ${state.hovColor};
      background-color: ${state.hovBg};
      \`,
      focus: \`
      color: ${state.focColor}
      background-color: ${state.focBg};\`,
      transitions: \`
        -webkit-transition: all ${state.transitionDur};
        -moz-transition: all ${state.transitionDur};
        -o-transition: all ${state.transitionDur};
        transition: all ${state.transitionDur};
       \`
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

    `
    return (
        <div id='page-output' className="page">
            <div>
                <div><pre>{strOutput}</pre></div>
                <DisplayButton id={'output-button'} onClick={props.pageHandler} value={'Download.dl'} content={strOutput} state={props.state} />
            </div>
      </div>
    );

}

export default Output;
