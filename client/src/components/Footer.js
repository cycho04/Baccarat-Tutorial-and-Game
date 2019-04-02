import React from 'react';

import './styles/Footer.css';

const Footer = () => {
    return(
        <div className='center'>
        <div className='ui divider'/>
            <h3>© 2019 Chris Y Cho</h3>
            <div>
                <a className='anchor' href='https://github.com/cycho04/Interactive-Game-Tutorial'>GitHub</a>    
            </div>
            <div>
                <a className='anchor' href='https://www.linkedin.com/in/chrisycho/'>LinkedIn</a>    
            </div>
        </div>
    );
}
export default Footer;