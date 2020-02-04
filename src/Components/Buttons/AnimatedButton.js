/*
I got this from FileSilo
*/

import React from 'react';
import './AnimatedButton.css';

class AnimatedButton extends React.Component {

    submit() {
        /*
        Replace with project-specific code
        */

        console.log("Button Clicked");
        alert("Button clicked");
    }

    render() {
        return (
            <div className = "container">
                <section className = "3d-buttons">
                    <p className = "btn-perspective">
                        <button className = "btn btn-3d btn-3da" onClick = {this.submit} >Submit</button>
                    </p>
                    <p className = "btn-perspective">
                        <button className = "btn btn-3d btn-3db" onClick = {this.submit} >Submit</button>
                    </p>
                    <p className = "btn-perspective">
                        <button className = "btn btn-3d btn-3dc" onClick = {this.submit} >Submit</button>
                    </p>
                    <p className = "btn-perspective">
                        <button className = "btn btn-3d btn-3dd" onClick = {this.submit} >Submit</button>
                    </p>
                </section>
            </div>
        );
    }
}

export default AnimatedButton;