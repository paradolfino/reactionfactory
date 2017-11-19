import React from 'react';
import Button from '../../temp';
const Home = (props) => {

    return (
        <div id='page-home' className="page">
            <div>
                <p>1. Easily create self-contained React button components with customized css.</p>
                <p>2. Quickly wire the button into your React app and give it some cool props: Like a name!</p>
                <p>3. Download your button.js file or copy the generated source code directly!</p>
                <Button value='Factory' text="Try it out!" onClick={props.pageHandler}/>
            </div>
      </div>
    );

}

export default Home;
