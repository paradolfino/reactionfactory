import React, { Component } from "react";
import { temp_form, temp_button, temp_input, temp_textarea } from "../templates/templates";

import DisplayButton from "../elements/displaybutton";

class Output extends Component {
  constructor(props) {
    super(props);

    this.inputString = "";
    this.outputHeader = "";
    this.inputs = this.props.state.inputs.map(key => {
      this.inputString += `\n<Input id={'input'+${
        key
      }} onChange={this.onChange}/>`;
    });
    //decides what code to show as preview - may change to allow preview of other components;
    if (this.props.state.outputType === 'temp_button') {
      this.strOutput = temp_button(this.props.state,this.inputString);
      this.outputHeader = 'Here is your button! Click to download or copy the source code directly.';
    } else {
      this.strOutput = temp_form(this.props.state,this.inputString);
      this.outputHeader = 'Here are your generated components. Click each button to download the source .js';
    }

    this.content = {
      temp_button: temp_button(this.props.state,this.inputString),
      temp_form: temp_form(this.props.state,this.inputString),
      temp_input: temp_input(this.props.state,this.inputString),
      temp_textarea: temp_textarea(this.props.state,this.inputString)
    };
  }
  render() {
    return (
      <div id="page-output" className="page">
        <div id="output-container">
          <h3>{this.outputHeader}</h3>
          {this.props.state[this.props.state.outputType].map(button => {
            return <DisplayButton
              key={button[0]}
              id={`output-button${button[0]}`}
              onClick={this.props.pageHandler}
              value={`${button[0]}.dl`}
              content={this.content[button[1]]}
              state={this.props.state}
              text={button[0]}
            />;
          })}
          
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
