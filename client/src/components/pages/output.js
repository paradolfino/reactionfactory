import React, { Component } from "react";
import { temp_form, temp_button } from "../templates/templates";

import DisplayButton from "../elements/displaybutton";

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.inputString = "";
    this.inputs = this.state.inputs.map(key => {
      this.inputString += `\n<Input id={'input'+${
        key
      }} onChange={this.onChange}/>`;
    });
    props.outputType === "temp_form"
      ? (this.strOutput = temp_form(this.state, this.inputString))
      : (this.strOutput = temp_button(this.state, this.inputString));

    /*
      <DisplayButton
          id={"output-button"}
          onClick={this.props.pageHandler}
          value={"Download.dl"}
          content={this.strOutput}
          state={this.props.state}
          text={this.props.buttons}
      />
      */
  }
  render() {
    return (
      <div id="page-output" className="page">
        <div id="output-container">
          <h3>{this.props.outputHeaderTop}</h3>
          {this.props.buttons.map(button => {
            <DisplayButton
              id={"output-button"}
              onClick={this.props.pageHandler}
              value={`Download-${button}`}
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
