import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='ui secondary menu'>
            <a className='item'>
                <Link to='/'><i className='huge black paper plane outline icon'/></Link>
            </a>
            <div className='right menu'>
                <a className='item'>
                    <Link to='/rules'><i className='huge black question circle outline icon'/></Link>
                </a>
                <a className='item'>
                    <Link to='/game'><i className='huge black gamepad icon'/></Link>
                </a>
            </div>
        </div>
    );
};

export default Header;