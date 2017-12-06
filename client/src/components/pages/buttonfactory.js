import React, { Component } from "react";
import Form from "../elements/factory-form-button";
import DisplayButton from "../elements/displaybutton";

class ButtonFactory extends Component {
  constructor(props) {
    super(props);
    this.outputType = "temp_button";
  }

  componentDidMount() {
    this.props.outputHandler(this.outputType);
  }

  render() {
    return (
      <div id="page-factory-button" className="page">
        <div>
          <Form onChange={this.props.inputHandler} />
          <DisplayButton
            id={"display-button"}
            onClick={this.props.pageHandler}
            value={"Output.click"}
            state={this.props.state}
            text={"Click me to generate your code!"}
            outputType={this.outputType}
          />
        </div>
      </div>
    );
  }
}

export default ButtonFactory;
