import React, { Component } from 'react';

class DisplayText extends Component {
    constructor(props) {
        super(props);
        this.el;
        this.element;
        this.stateRef = this.props.state;
        this.syncDef = this.syncDef.bind(this);
        this.syncFoc = this.syncFoc.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    syncDef() {
        this.element = document.getElementById(this.props.id);
        this.stateRef = this.props.state;
        
        let height = parseInt(this.stateRef.inputHt);
        let width = parseInt(this.stateRef.inputWt);
        let dur = this.stateRef.transitionDur;
        this.element.setAttribute('style', `
            border: none;
            resize: none;
            -webkit-transition: all ${dur};
            -moz-transition: all ${dur};
            -o-transition: all ${dur};
            transition: all ${dur};
        `);
        this.element.style.borderRadius = this.stateRef.inputBorderRadius;
        this.element.style.color = this.stateRef.inputColor;
        this.element.style.backgroundColor = this.stateRef.inputBg;
        this.element.style.height = (height *2) + 'px';
        this.element.style.width = (width *2) + 'px';
    }

  

    syncFoc() {
        this.element.style.color = this.stateRef.inputFocColor;
        this.element.style.backgroundColor = this.stateRef.inputFocBg;
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
            <textarea id={this.props.id}></textarea>
        );
    }
}

export default DisplayText;
