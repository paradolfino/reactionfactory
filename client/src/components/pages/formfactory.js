import React, {Component} from "react";
import BtnForm from "../elements/factory-form-button";
import FormForm from "../elements/factory-form-form";
import DisplayForm from "../elements/displayform";

class ButtonFactory extends Component{
  constructor(props) {
    super(props);
    this.outputType = "temp_form";
  }

  componentDidMount() {
      this.props.outputHandler(this.outputType);
  }

  render() {
    return (
      <div id="page-factory" className="page">
        <div>
          <h3>Form Options</h3>
          <FormForm onChange={this.props.inputHandler} />
          <h3>Button Appearance</h3>
          <BtnForm onChange={this.props.inputHandler} />
          <DisplayForm
            id="display-form"
            state={this.props.state}
            onClick={this.props.pageHandler}
            onAdd={this.props.inputHandler}
            outputType={this.outputType}
          />
        </div>
      </div>
    );
  }
}

export default ButtonFactory;
