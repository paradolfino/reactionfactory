import React, { Component } from 'react';

class DisplayButton extends Component {
    constructor(props) {
        super(props);
        this.stateRef = this.props.state;
        this.syncDef = this.syncDef.bind(this);
        this.syncHov = this.syncHov.bind(this);
        this.syncFoc = this.syncFoc.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        
        this.onClick = this.onClick.bind(this);

    }
    
    syncDef() {
        this.element = document.getElementById('display-button');
        this.stateRef = this.props.state;
        let dur = this.stateRef.transitionDur;
        this.element.setAttribute('style',`
            cursor: pointer;
            border: none;
            -webkit-transition: all ${dur};
            -moz-transition: all ${dur};
            -o-transition: all ${dur};
            transition: all ${dur};
        `);
        this.element.style.borderRadius = this.stateRef.borderRadius;
        this.element.style.color = this.stateRef.defColor;
        this.element.style.backgroundColor = this.stateRef.defBg;
        this.element.style.height =  this.stateRef.defHt;
        this.element.style.width = this.stateRef.defWt;
    }
    
    syncHov() {
        this.element.style.color = this.stateRef.hovColor;
        this.element.style.backgroundColor = this.stateRef.hovBg;
    }
    
    syncFoc() {
        this.element.style.color = this.stateRef.focColor;
        this.element.style.backgroundColor = this.stateRef.focBg;
    }
    
    onMouseEnter() {
        this.syncHov();
       
    }
    
    onMouseLeave() {
        this.syncDef();
       
    }
    
    onClick(e) {
        this.props.onClick(e.target.value);
    }
    
    componentDidMount() {
        this.syncDef();
    }

    componentDidUpdate() {
        this.syncDef();
        
    }

    render() {
        return (
            <button id='display-button' value='Output' onClick={this.onClick} onMouseEnter={this.syncHov} onMouseLeave={this.syncDef} onFocus={this.syncFoc} onBlur={this.syncDef}>Click me to generate your code!</button>
        );
    }
}

export default DisplayButton;
