import React from 'react';
import './reset.css';
import './LandingPage.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';

class LandingPage extends React.Component {
    handleClick() {
        alert("Hey there");
    }
    
    render() {
        return (
            <div className = "container">
                <NavBar />
                <div className = "row">
                    <div className = "col text-center">
                        <button className = "btn btn-primary btn-lg mainButton" onClick = {this.handleClick}>Click Here</button>
                    </div>
                </div>
                {/*<section id = "middle">
                    <h1 className = "welcome">We are in the middle section now</h1>
                    <h2 className = "middle">Here's where we could talk about some other things</h2>
                    <h3 className = "middle-small">And even more things...</h3>
                </section>*/}
            </div>
            
        )
    }
}

export default LandingPage;