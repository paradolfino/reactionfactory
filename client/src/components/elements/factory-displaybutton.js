import React, { Component } from 'react';

let hoverColor;
class DisplayButton extends Component {
    constructor(props) {
        super(props);
        this.state;
        this.syncDef = this.syncDef.bind(this);
        this.syncHov = this.syncHov.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

    }
    
    syncDef() {
        this.element = document.getElementById('display-button');
        this.state = this.props.state;
        let transition = this.state.defTransition;
        this.element.setAttribute('style',`
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
        `);
        this.element.style.color = this.state.defColor;
        this.element.style.backgroundColor = this.state.defBg;
        this.element.style.height =  this.state.defHt;
        this.element.style.width = this.state.defWt;
    }
    
    syncHov() {
        this.element.style.color = this.state.hovColor;
        this.element.style.backgroundColor = this.state.hovBg;
    }
    
    onMouseEnter() {
        this.syncHov();
       
    }
    
    onMouseLeave() {
        this.syncDef();
       
    }
    
    componentDidMount() {
        this.syncDef();
    }

    componentDidUpdate() {
        this.syncDef();
        
    }

    render() {
        return (
            <button id='display-button' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Test</button>
        );
    }
}

export default DisplayButton;
