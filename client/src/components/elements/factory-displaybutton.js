import React, { Component } from 'react';

class DisplayButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate() {
        let store = this.props.state.store;
        let element = document.getElementById('display-button');
        element.style[store.requester] = store.requested;
    }
    
    render() {
        return (
                <button id='display-button'>Test</button>
            );
    }
}

export default DisplayButton;