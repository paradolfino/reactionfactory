import React from 'react';

const Form = (props) => {
    return (
        <div id='form'>
  
            <input name='color' onChange={props.onChange} placeholder='Text color!'/><br/>
            <input name='backgroundColor' onChange={props.onChange} placeholder='Background color!'/><br/>
            <input name='height' onChange={props.onChange} placeholder='Height!'/><br/>
            <input name='width' onChange={props.onChange} placeholder='Width!'/>
        </div>
        );
}

export default Form;
