import React, { Component } from "react";
import { temp_form, temp_button } from "../templates/templates";

import DisplayButton from "../elements/displaybutton";

class Output extends Component {
  constructor(props) {
    super(props);

    this.inputString = "";
    this.inputs = this.props.state.inputs.map(key => {
      this.inputString += `\n<Input id={'input'+${
        key
      }} onChange={this.onChange}/>`;
    });

    this.props.state.outputType === 'temp_button'
    ? this.strOutput = temp_button(this.props.state,this.inputString) : this.strOutput = temp_form(this.props.state,this.inputString);
  }
  render() {
    return (
      <div id="page-output" className="page">
        <div id="output-container">
          <h3>{this.props.outputHeaderTop}</h3>
          {this.props.state[this.props.state.outputType].map(button => {
            return <DisplayButton
              key={button}
              id={`output-button${button}`}
              onClick={this.props.pageHandler}
              value={`Download-${button}.dl`}
              content={this.strOutput}
              state={this.props.state}
              text={button}
            />;
          })}
          <h3>{this.props.outputHeaderBot}</h3>
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
