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
            <div>
            <h4>Add a field: <button name='addInput' value='add' onClick={this.onClick} >+</button><button name='delInput' value='del' onClick={this.onClick} >-</button></h4>
            <form action=''>
            
                {this.inputs.map((key)=>{
                   return (
                    
                    <p key={key}><input type='text' id={'input'+key} placeholder="What kind of field is this?"/></p>
                    
                   );
                })}
                <DisplayButton id={'display-button'} onClick={this.props.onClick} value={'Output.click'} state={this.props.state} text={'Click me to generate your code!'} />
            </form>
            </div>
        );
    }
}

export default DisplayForm;
