import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
        <footer className='footer-part'>                                  {/*footer part */}
            <h5 className='footer-quote text-success'>Put up your shades and see the colorful world</h5>
            <h6 className="text-info">© Shades Up! 2021 / All Rights Reserved </h6>
        </footer>
        </div>
    );
};

export default Footer;