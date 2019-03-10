import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Learn to play BACCARAT</h1>
            <Link to ='/rules'><button className='huge ui button'>Learn the Rules</button></Link>
            <Link to='/game'><button className='huge ui button'>Play the game</button></Link>
        </div>
    );
};

export default LandingPage;