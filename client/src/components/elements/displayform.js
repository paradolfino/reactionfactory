import React, { Component } from 'react';

import DisplayButton from './displaybutton';
import DisplayInput from './displayinput';

class DisplayForm extends Component {
    constructor(props) {
        super(props);
        this.el;
        this.element = this.props.id;
        this.stateRef = this.props.state;
        this.syncDef = this.syncDef.bind(this);
        this.syncFoc = this.syncFoc.bind(this);
        this.onClick = this.onClick.bind(this);
        console.log(this.element);
    }

    syncDef() {
        this.element = document.getElementById(this.props.id);
        this.stateRef = this.props.state;
        let dur = this.stateRef.transitionDur;
        this.element.setAttribute('style', `
            border: none;
            -webkit-transition: all ${dur};
            -moz-transition: all ${dur};
            -o-transition: all ${dur};
            transition: all ${dur};
        `);
        this.element.style.borderRadius = this.stateRef.formBorderRadius;
        this.element.style.color = this.stateRef.formColor;
        this.element.style.backgroundColor = this.stateRef.formBg;
        this.element.style.height = this.stateRef.formHt;
        this.element.style.width = this.stateRef.formWt;
    }

  

    syncFoc() {
        this.element.style.color = this.stateRef.formFocColor;
        this.element.style.backgroundColor = this.stateRef.formFocBg;
    }

    


    componentDidMount() {
        this.syncDef();
    }

    componentDidUpdate() {
        this.syncDef();

    }

    onClick(e) {
        e.preventDefault();
        this.props.onAdd(e);
        this.syncDef();
    }

    render() {
        return (
            <div>
            <h4>Add a field: <button name='addInput' value='add' onClick={this.onClick} >+</button><button name='delInput' value='del' onClick={this.onClick} >-</button></h4>
            <form id={this.props.id} action=''>
            
                {this.stateRef.inputs.map((key)=>{
                   return (
                    
                    <DisplayInput key={key} id='display-input' state={this.props.state} saveStyle={this.props.saveStyle}/>
                    
                   );
                })}
                <DisplayButton id='display-button' onClick={this.props.onClick} value={'Output.click'} state={this.props.state} text={'Click me to generate your code!'} />
            </form>
            </div>
        );
    }
}

export default DisplayForm;
