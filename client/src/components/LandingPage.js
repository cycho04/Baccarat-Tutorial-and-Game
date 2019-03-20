import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LandingPage.css';

const LandingPage = () => {
    document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80")';
    document.body.style.backgroundRepeat='no-repeat';
    document.body.style.backgroundPosition='center';
    document.body.style.backgroundSize='cover';
    return (  
        <div className='outer'>
            <div className='box'>
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