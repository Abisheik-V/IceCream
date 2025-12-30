import React from 'react';
import '../assets/style/style.css';

const SplashScreen = ({ visible }) => {
    return (
        <div className={`splash-screen ${!visible ? 'fade-out' : ''}`}>
            <div className="splash-content">
                <div className="scoop-loader"></div>
                <h1 className="splash-text">Jigar Icecream</h1>
            </div>
        </div>
    );
};

export default SplashScreen;
