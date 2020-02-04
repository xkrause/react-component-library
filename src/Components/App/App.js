import React from 'react';
import './App.css';
//import AnimatedButton from '../Buttons/AnimatedButton';
import Angles from '../AngledBackgrounds/Angles';
import LandingPage from '../LandingPage/LandingPage';
import Middle from '../Middle/Middle';

class App extends React.Component {
    render() {
        return (
            <div className = "App">
                {/*<Angles />*/}
                <LandingPage />
                <Middle />
            </div>
        );
    }
}

export default App;