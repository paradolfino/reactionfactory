import React, { Component } from "react";

import DisplayButton from "../elements/displaybutton";


class Output extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.inputString = '';
    this.inputs = this.state.inputs.map((key)=>{
      this.inputString += `\n<Input id={'input'+${key}} onChange={this.onChange}/>`;
    });
    this.strOutput =  `
    import React, { Component } from 'react';

    import Input from './input';
    import TextArea from './textarea';
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
        
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
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
          <TextArea />
          <Button />
        );
      }
    }
    
    export default Form;
    
        `;
  }
  render() {
    return (
      <div id="page-output" className="page">
        <div id="output-container">
          <h3>Here's your button!</h3>
          <DisplayButton
            id={"output-button"}
            onClick={this.props.pageHandler}
            value={"Download.dl"}
            content={this.strOutput}
            state={this.props.state}
            text={"Download me!"}
          />
          <h3>Here's your button code!</h3>
          <hr />
          <div>
            <pre>{this.strOutput}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
