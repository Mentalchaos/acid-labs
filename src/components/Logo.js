import React from 'react';
import logo from '../assets/logo-acid.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img alt="acid-labs-logo" className="acid-logo" src={logo}/>
        </div>
    )
}

Logo.displayName = 'Logo';

export default Logo;