import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className='outer'>
            <div>
                <div className='title'>
                    <h1>EZ BACCARAT</h1>    
                </div>
                
                <Link to ='/rules'><button className='huge ui button'>Learn the Rules</button></Link>
                <Link to='/game'><button className='huge ui button'>Play the game</button></Link>    
            </div>
        </div>
    );
};

export default LandingPage;