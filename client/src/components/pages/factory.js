import React from 'react';
import Form from '../elements/factory-form';
import DisplayButton from '../elements/displaybutton';

const Factory = (props) => {

    return (
        <div id='page-factory' className="page">
            <div>
                <Form onChange={props.inputHandler}/>
                <DisplayButton id={'display-button'} onClick={props.pageHandler} value={'Output.click'} state={props.state} />
            </div>
      </div>
    );

}

export default Factory;
