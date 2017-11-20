import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(this.props.content));
        element.setAttribute('download', 'button.js');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    
    render() {
        return( <button id='dl' onClick={this.onClick} >Download button.js</button>);
    }
}

export default Button;