import React, { Component } from 'react';

let hoverColor;
class DisplayButton extends Component {
    constructor(props) {
        super(props);
        this.hoverColor;
        this.hoverBg;
        this.defColor;
        this.defBg;
        this.element;
        this.store;
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    
    onMouseEnter() {
        this.element.style.color=this.hoverColor;
    }
    
    onMouseLeave() {
        this.store = this.props.state.store;
        this.defColor = this.store.color;
        this.defBg = this.store.backgroundColor;
        this.element.style.color=this.defColor;
    }

    componentDidUpdate() {
        this.element = document.getElementById('display-button');
        this.store = this.props.state.store;
        
        this.hoverColor = this.store.hover.color;
        this.element.style[this.store.requester] = this.store.requested;

    }

    render() {
        return (
            <button id='display-button' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Test</button>
        );
    }
}

export default DisplayButton;
