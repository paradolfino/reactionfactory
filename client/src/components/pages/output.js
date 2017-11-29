import React, { Component } from "react";
import { temp_form, temp_button } from '../templates/templates';

import DisplayButton from "../elements/displaybutton";


class Output extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.inputString = '';
    this.inputs = this.state.inputs.map((key)=>{
      this.inputString += `\n<Input id={'input'+${key}} onChange={this.onChange}/>`;
    });
    this.strOutput;
    props.outputType === 'temp_form' ? temp_form(this.state,this.inputString) : temp_button(this.state,this.inputString);
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
