import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='ui secondary menu'>
            <a className='item'>
                <Link to='/'><i className='huge black money bill alternative icon'/></Link>
            </a>
            <div className='right menu'>
                <a className='item'>
                    <Link to='/rules'>Rules</Link>
                </a>
                <a className='item'>
                    <Link to='/game'>Game</Link>
                </a>
                <a className='item'>
                    <Link to='/scoreboard'>ScoreBoard</Link>
                </a>    
            </div>
        </div>
    );
};

export default Header;