import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SmartPlug = () => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        // Make API request to get current state of smart plug
        axios.get('/api/smartplug/state')
            .then(response => {
                setIsOn(response.data.isOn);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const toggleState = () => {
        // Make API request to toggle state of smart plug
        axios.post('/api/smartplug/toggle')
            .then(response => {
                setIsOn(response.data.isOn);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Smart Plug</h2>
            <p>Current state: {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggleState}>Toggle</button>
        </div>
    );
};

export default SmartPlug;
