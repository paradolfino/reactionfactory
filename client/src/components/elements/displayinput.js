import React, { Component } from 'react';

class DisplayInput extends Component {
    constructor(props) {
        super(props);
        this.stateRef = this.props.state;
        this.syncDef = this.syncDef.bind(this);
        this.syncFoc = this.syncFoc.bind(this);

    }

    syncDef() {
        this.style = {
            color: this.stateRef.inputColor,
            backgroundColor: this.stateRef.inputBg,
            height: this.stateRef.inputHt,
            width: this.stateRef.inputWt,
            borderRadius: this.stateRef.inputBorderRadius
        }
        this.element = document.getElementById(this.props.id);
        this.stateRef = this.props.state;
        let dur = this.stateRef.transitionDur;
        this.element.setAttribute('style', `
            -webkit-transition: all ${dur};
            -moz-transition: all ${dur};
            -o-transition: all ${dur};
            transition: all ${dur};
        `);
        this.element.style.borderRadius = this.stateRef.inputBorderRadius;
        this.element.style.color = this.stateRef.inputColor;
        this.element.style.backgroundColor = this.stateRef.inputBg;
        this.element.style.height = this.stateRef.inputHt;
        this.element.style.width = this.stateRef.inputWt;
        
        
    }

  

    syncFoc() {
        this.style = {
            color: this.stateRef.inputFocColor,
            backgroundColor: this.stateRef.inputFoBg,
        }
    }

    


    componentDidMount() {
        this.syncDef();
    }

    componentDidUpdate() {
        this.syncDef();
        
    }

    render() {
        return (
            <p><input type='text' id={this.props.id} placeholder="What kind of field is this?" style={this.style}/></p>
        );
    }
}

export default DisplayInput;
