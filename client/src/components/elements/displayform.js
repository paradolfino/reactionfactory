import React, { Component } from 'react';

import DisplayButton from './displaybutton';

class DisplayForm extends Component {
    constructor(props) {
        super(props);
        this.element;
        this.stateRef = this.props.state;
        this.inputs = this.stateRef.inputs;
        this.syncDef = this.syncDef.bind(this);
        this.syncFoc = this.syncFoc.bind(this);
        this.el = this.props.id.split('-');
        
        this.onClick = this.onClick.bind(this);

    }

    syncDef() {
        console.log(this.el);
        this.element = document.getElementById(this.el.join('-'));
        console.log(this.element);
        this.stateRef = this.props.state;
        let dur = this.stateRef.transitionDur;
        this.element.setAttribute('style', `
            cursor: pointer;
            border: none;
            -webkit-transition: all ${dur};
            -moz-transition: all ${dur};
            -o-transition: all ${dur};
            transition: all ${dur};
        `);
        this.element.style.borderRadius = this.stateRef[this.el[1] + 'BorderRadius'];
        this.element.style.color = this.stateRef[this.el[1] + 'Color'];
        this.element.style.backgroundColor = this.stateRef[this.el[1] + 'Bg'];
        this.element.style.height = this.stateRef[this.el[1] + 'Ht'];
        this.element.style.width = this.stateRef[this.el[1] + 'Wt'];
    }

    syncFoc() {
        this.element.style.color = this.stateRef[this.el[1] + 'FocColor'];
        this.element.style.backgroundColor = this.stateRef[this.el[1] + 'FocBg'];
    }






    onClick(e) {
        e.preventDefault();
        this.props.onAdd(e);
    }


    componentDidMount() {
        this.syncDef();
    }

    componentDidUpdate() {
        this.syncDef();

    }
    render() {
        return (
            <div>
            <h4>Add a field: <button name='addInput' value='add' onClick={this.onClick} >+</button><button name='delInput' value='del' onClick={this.onClick} >-</button></h4>
            <form action=''>
            
                {this.inputs.map((key)=>{
                   return (
                    
                    <p key={key}><input type='text' id={'display-input'} placeholder="What kind of field is this?"/></p>
                    
                   );
                })}
                <DisplayButton id={'display-button'} onClick={this.props.onClick} value={'Output.click'} state={this.props.state} text={'Click me to generate your code!'} />
            </form>
            </div>
        );
    }
}

export default DisplayForm;
