import React from 'react';
import Button from '../../temp';
const Home = (props) => {

    return (
        <div id='page-home' className="page">
            <div>
                <p>1. Easily create self-contained React button components with customized css.</p>
                <p>2. Quickly wire the button into your React app and give it some cool props: Like a name!</p>
                <p>3. Download your button.js file or copy the generated source code directly!</p>
                <Button value='ButtonFactory' id='ButtonFactory' text="Build a Button" onClick={props.pageHandler}/>
                <Button value='FormFactory' id='FormFactory' text="Build a Form" onClick={props.pageHandler}/>
                <br/>
                <h1>Notes</h1>
                <p>Currently, you must set appearance properties for on Focus if you change the other two states. Otherwise, the button will change to default appearance on clicking!</p> 
                <p>Also, this app is not made for mobile devices. I have no idea why you'd want to use it on one either.</p>
                <h3>News</h3>
                <p>If you're seeing this it means that Forms are working and I've migrated to AWS from Heroku. Grats!</p>            
                <h3>Got bugs?</h3>
                <p>Submit an issue to the <a href="https://github.com/viktharien/reactionfactory/issues">public repo!</a></p>
            </div>
      </div>
    );

}

export default Home;
