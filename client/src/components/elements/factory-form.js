import React from 'react';

const Form = (props) => {
    return (
        <div id='container'>
        <form action=''>
            <p>Default Appearance</p>
            <input name='color' onChange={props.onChange} placeholder='Text color!'/><br/>
            <input name='backgroundColor' onChange={props.onChange} placeholder='Background color!'/><br/>
            <input name='height' onChange={props.onChange} placeholder='Height!'/><br/>
            <input name='width' onChange={props.onChange} placeholder='Width!'/><br/>
        </form>
        <form action=''>
            <p>Hover Appearance</p>
            <input name='hover.color' onChange={props.onChange} placeholder='Text color!'/><br/>
            <input name='hover.backgroundColor' onChange={props.onChange} placeholder='Background color!'/><br/>
            <p>Border Shape</p>
            <input type="radio" name="borderRadius" value="30px" onChange={props.onChange}/>Rounded
            <input type="radio" name="borderRadius" value="15px 30px" onChange={props.onChange}/>Two Corners
        </form>
        </div>
        );
}

export default Form;
