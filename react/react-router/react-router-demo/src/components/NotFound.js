import React from 'react';
import {  useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p><small
                style={{fontWeight:'bold'}}
                >Not find Your desire url</small></p>
                <button onClick={() => navigate('/home')}>Back home</button>

           
        </div>
    );
};

export default NotFound;