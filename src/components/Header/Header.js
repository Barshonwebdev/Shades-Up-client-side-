import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='header-part bg-success'>          
                <h1 className='title bg-success text-warning'>Shades Up!</h1>
                <div>
                <Navigation></Navigation> 
                </div>
            </header>
        </div>
    );
};

export default Header;