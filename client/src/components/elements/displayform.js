import React, { Component } from 'react';

import DisplayButton from './displaybutton';

class DisplayForm extends Component {
    constructor(props) {
        super(props);

        this.stateRef = this.props.state;
        this.inputs = this.stateRef.inputs;
        this.onClick = this.onClick.bind(this);

    }

    onClick(e) {
        e.preventDefault();
        this.props.onAdd(e);
    }

    render() {
        return (
            <form action=''>
                {this.inputs.map((input,key)=>{
                   return (
                    
                    <p key={key}>{input}<button key={key} name='addInput' value='add' onClick={this.onClick} >+</button></p>
                    
                   );
                })}
                <DisplayButton id={'display-button'} onClick={this.props.onClick} value={'Output.click'} state={this.props.state} text={'Click me to generate your code!'} />
            </form>
        );
    }
}

export default DisplayForm;
