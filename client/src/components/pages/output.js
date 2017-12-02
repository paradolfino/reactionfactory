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
  }
  render() {
    return (
      <div id="page-output" className="page">
        <div id="output-container">
          <h3>{this.props.outputHeaderTop}</h3>
          {/*this.state[this.props.outputType].map(button => {
            return <DisplayButton
              id={"output-button"}
              onClick={this.props.pageHandler}
              value={`Download-${button}.dl`}
              content={this.strOutput}
              state={this.props.state}
              text={button}
            />;
          })*/ 's'}
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
