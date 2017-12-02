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
        this.element = document.getElementById(this.props.id);
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
        this.element.style.borderRadius = this.stateRef.borderRadius;
        this.element.style.color = this.stateRef.defColor;
        this.element.style.backgroundColor = this.stateRef.defBg;
        this.element.style.height = this.stateRef.defHt;
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
        let value = e.target.value.split('.');
        let outputType = this.props.outputType;
        let action = value[1];
        switch (action) {
            case 'click':
                this.props.onClick(value[0],value[1],outputType); //
                break;
            case 'dl':
                let element = document.createElement('a');
                element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(this.props.content));
                element.setAttribute('download', 'button.js');
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                break;
            default:
                break;
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
            <button id={this.props.id} value={this.props.value} onClick={this.onClick} onMouseEnter={this.syncHov} onMouseLeave={this.syncDef} onFocus={this.syncFoc} onBlur={this.syncDef}>{this.props.text}</button>
        );
    }
}

export default DisplayButton;
