import React from 'react';
import Form from '../elements/factory-form';
import DisplayButton from '../elements/factory-displaybutton';
const Factory = (props) => {

    return (
        <div id='page-factory' className="page">
            <div>
                <Form onChange={props.inputHandler}/>
                <DisplayButton state={props.state} />
            </div>
      </div>
    );

}

export default Factory;
