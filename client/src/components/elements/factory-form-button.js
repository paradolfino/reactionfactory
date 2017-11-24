import React from 'react';

const BtnForm = (props) => {
    return (
        <div id='form-container'>
            <form action=''>
                <p>Default Appearance</p>
                <input name='defColor' onChange={props.onChange} placeholder='Text color!'/><br/>
                <input name='defBg' onChange={props.onChange} placeholder='Background color!'/><br/>
                <input name='defHt' onChange={props.onChange} placeholder='Height!'/><br/>
                <input name='defWt' onChange={props.onChange} placeholder='Width!'/><br/>
            </form>
            <form action=''>
                <p>on Hover</p>
                <input name='hovColor' onChange={props.onChange} placeholder='Text color!'/><br/>
                <input name='hovBg' onChange={props.onChange} placeholder='Background color!'/><br/>
            </form>
            <form action=''>
                <p>on Focus</p>
                <input name='focColor' onChange={props.onChange} placeholder='Text color!'/><br/>
                <input name='focBg' onChange={props.onChange} placeholder='Background color!'/><br/>
                <p>Border Shape</p>
                <input type="radio" name="borderRadius" value="30px" onChange={props.onChange}/>Rounded
                <input type="radio" name="borderRadius" value="15px 30px" onChange={props.onChange}/>Two Corners
            </form>
        </div>
        );
}

export default BtnForm;
