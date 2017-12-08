const temp_form = (state, inputString) => {
    return (`
    import React, { Component } from 'react';

    import Input from './input';
    import TextArea from './textarea';
    import Button from './button';

    class Form extends Component {
      constructor(props) {
        super(props);
        this.id=this.props.id;
        this.el = null;
        this.active = 0;
        this.style = {
          default: \`
            height: ${state.formHt};
            width: ${state.formWt};
            color: ${state.formColor};
            background-color: ${state.formBg};
            border: none;
            border-radius: ${state.formBorderRadius};
            \`,
          render: null,
          hover: null,
          focus: null,
          transitions: \`
            -webkit-transition: all ${state.transitionDur};
            -moz-transition: all ${state.transitionDur};
            -o-transition: all ${state.transitionDur};
            transition: all ${state.transitionDur};
           \`
        };
        
        this.onFocus = this.onFocus.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.resetStyle = this.resetStyle.bind(this);
        
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
      }
      onClick(e) {
        
      }
      onFocus() {
        this.resetStyle();
        this.style.render += this.style.focus;
        this.setStyle(this.style.render);
        this.active = 1;
      }
      setStyle(val) {
        switch(val) {
          case this.style.render:
            this.el.setAttribute("style",this.style.render);
            break;
          case this.style.default:
            this.el.setAttribute("style",this.style.default);
            break;
          default:
            this.el.setAttribute("style",this.style.render + val);
            break;
        }
        
       }
      resetStyle() {
        this.active = 0;
        this.style.render = this.style.default;
        this.setStyle(this.style.default);//sets style to default
      }
      
      componentDidMount() {
        this.el = document.getElementById(this.id);
        this.style.default += this.style.transitions;
        this.style.render = this.style.default;//load transitions if any
        this.setStyle(this.style.render);
      }
      render() {
        return (
          ${inputString}
          <TextArea />
          <Button />
        );
      }
    }
    
    export default Form;
    
        `);
}

const temp_button = (state, inputString) => {
    return (`
    import React, { Component } from 'react';
    
    class Button extends Component {
      constructor(props) {
        super(props);
        this.id=this.props.id;
        this.el = null;
        this.active = 0;
        this.style = {
          default: \`
            height: ${state.defHt};
            width: ${state.defWt};
            color: ${state.defColor};
            background-color: ${state.defBg};
            cursor: pointer;
            border: none;
            border-radius: ${state.borderRadius};
            \`,
          render: null,
          hover: \`
          color: ${state.hovColor};
          background-color: ${state.hovBg};
          \`,
          focus: \`
          color: ${state.focColor}
          background-color: ${state.focBg};\`,
          transitions: \`
            -webkit-transition: all ${state.transitionDur};
            -moz-transition: all ${state.transitionDur};
            -o-transition: all ${state.transitionDur};
            transition: all ${state.transitionDur};
           \`
        };
        
        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.resetStyle = this.resetStyle.bind(this);
      }
      onClick(e) {
        this.props.onClick(e.target.value);
      }
      onMouseEnter() {
        this.active === 0 && this.setStyle(this.style.hover);
        
      }
      onMouseLeave() {
        this.setStyle(this.style.render);
      }
      onFocus() {
        this.resetStyle();
        this.style.render += this.style.focus;
        this.setStyle(this.style.render);
        this.active = 1;
      }
      setStyle(val) {
        switch(val) {
          case this.style.render:
            this.el.setAttribute("style",this.style.render);
            break;
          case this.style.default:
            this.el.setAttribute("style",this.style.default);
            break;
          default:
            this.el.setAttribute("style",this.style.render + val);
            break;
        }
        
       }
      resetStyle() {
        this.active = 0;
        this.style.render = this.style.default;
        this.setStyle(this.style.default);//sets style to default
      }
      
      componentDidMount() {
        this.el = document.getElementById(this.id);
        this.style.default += this.style.transitions;
        this.style.render = this.style.default;//load transitions if any
        this.setStyle(this.style.render);
      }
      render() {
        return (
          <button
            id={this.id}
            value={this.props.value}
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onFocus={this.onFocus}
            onBlur={this.resetStyle}
          >
            {this.props.text}
          </button>
        );
      }
    }
    
    export default Button;
    
        `);
}

const temp_input = (state,inputString) => {
  return (`
  import React, { Component } from 'react';
  
  class Input extends Component {
    constructor(props) {
      super(props);
      this.id=this.props.id;
      this.el = null;
      this.active = 0;
      this.style = {
        default: \`
          height: ${state.inputHt};
          width: ${state.inputWt};
          color: ${state.inputColor};
          background-color: ${state.inputBg};
          cursor: pointer;
          border: none;
          border-radius: ${state.inputBorderRadius};
          \`,
        render: null,
        hover: null,
        focus: \`
        color: ${state.inputFocColor}
        background-color: ${state.inputFocBg};\`,
        transitions: \`
          -webkit-transition: all ${state.transitionDur};
          -moz-transition: all ${state.transitionDur};
          -o-transition: all ${state.transitionDur};
          transition: all ${state.transitionDur};
         \`
      };
      
      this.onFocus = this.onFocus.bind(this);
      this.setStyle = this.setStyle.bind(this);
      this.resetStyle = this.resetStyle.bind(this);
    }
    onClick(e) {
      
    }
    onFocus() {
      this.resetStyle();
      this.style.render += this.style.focus;
      this.setStyle(this.style.render);
      this.active = 1;
    }
    setStyle(val) {
      switch(val) {
        case this.style.render:
          this.el.setAttribute("style",this.style.render);
          break;
        case this.style.default:
          this.el.setAttribute("style",this.style.default);
          break;
        default:
          this.el.setAttribute("style",this.style.render + val);
          break;
      }
      
     }
    resetStyle() {
      this.active = 0;
      this.style.render = this.style.default;
      this.setStyle(this.style.default);//sets style to default
    }
    
    componentDidMount() {
      this.el = document.getElementById(this.id);
      this.style.default += this.style.transitions;
      this.style.render = this.style.default;//load transitions if any
      this.setStyle(this.style.render);
    }
    render() {
      return (
        ${inputString}
      );
    }
  }
  
  export default input;
  
      `

  );
}

const temp_textarea = (state,inputString) => {
  return (`
  import React, { Component } from 'react';
  
  class TextArea extends Component {
    constructor(props) {
      super(props);
      this.id=this.props.id;
      this.el = null;
      this.active = 0;
      this.style = {
        default: \`
          height: ${parseInt(state.inputHt) * 2}px;
          width: ${parseInt(state.inputWt) * 2}px;
          color: ${state.inputColor};
          background-color: ${state.inputBg};
          cursor: pointer;
          border: none;
          border-radius: ${state.inputBorderRadius};
          \`,
        render: null,
        hover: null,
        focus: \`
        color: ${state.inputFocColor}
        background-color: ${state.inputFocBg};\`,
        transitions: \`
          -webkit-transition: all ${state.transitionDur};
          -moz-transition: all ${state.transitionDur};
          -o-transition: all ${state.transitionDur};
          transition: all ${state.transitionDur};
         \`
      };
      
      this.onFocus = this.onFocus.bind(this);
      this.setStyle = this.setStyle.bind(this);
      this.resetStyle = this.resetStyle.bind(this);
    }
    onClick(e) {
      
    }
    onFocus() {
      this.resetStyle();
      this.style.render += this.style.focus;
      this.setStyle(this.style.render);
      this.active = 1;
    }
    setStyle(val) {
      switch(val) {
        case this.style.render:
          this.el.setAttribute("style",this.style.render);
          break;
        case this.style.default:
          this.el.setAttribute("style",this.style.default);
          break;
        default:
          this.el.setAttribute("style",this.style.render + val);
          break;
      }
      
     }
    resetStyle() {
      this.active = 0;
      this.style.render = this.style.default;
      this.setStyle(this.style.default);//sets style to default
    }
    
    componentDidMount() {
      this.el = document.getElementById(this.id);
      this.style.default += this.style.transitions;
      this.style.render = this.style.default;//load transitions if any
      this.setStyle(this.style.render);
    }
    render() {
      return (
        ${inputString}
      );
    }
  }
  
  export default input;
  
      `

  );
}

export {temp_form, temp_button, temp_input, temp_textarea};