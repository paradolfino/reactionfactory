import React from 'react';
import BtnForm from '../elements/factory-form-button';
import FormForm from '../elements/factory-form-form';
import DisplayForm from '../elements/displayform';

const ButtonFactory = (props) => {

    return (
        <div id='page-factory' className="page">
            <div>
                <h3>Form Options</h3>
                <FormForm onChange={props.inputHandler}/>
                <h3>Button Appearance</h3>
                <BtnForm onChange={props.inputHandler}/>
                <DisplayForm id='display-form' state={props.state} onClick={props.pageHandler} onAdd={props.inputHandler} outputType='temp_form' />
            </div>
      </div>
    );

}

export default ButtonFactory;
