import React from 'react';

const FormForm = (props) => {
    return (
        <div id='form-container'>
            <form action=''>
                <p>Form Default Appearance</p>
                <input name='formColor' onChange={props.onChange} placeholder='Text color!'/><br/>
                <input name='formBg' onChange={props.onChange} placeholder='Background color!'/><br/>
                <input name='formHt' onChange={props.onChange} placeholder='Height!'/><br/>
                <input name='formWt' onChange={props.onChange} placeholder='Width!'/><br/>
                <p>Border Shape</p>
                <input type="radio" name="formBorderRadius" value="30px" onChange={props.onChange}/>Rounded
                <input type="radio" name="formBorderRadius" value="15px 30px" onChange={props.onChange}/>Two Corners<br/>
            </form>
            <form action=''>
                <p>Input Default Appearance</p>
                <input name='inputColor' onChange={props.onChange} placeholder='Text color!'/><br/>
                <input name='inputBg' onChange={props.onChange} placeholder='Background color!'/><br/>
                <p>Border Shape</p>
                <input type="radio" name="inputBorderRadius" value="30px" onChange={props.onChange}/>Rounded
                <input type="radio" name="inputBorderRadius" value="15px 30px" onChange={props.onChange}/>Two Corners
            </form>
        </div>
        );
}

export default FormForm;
