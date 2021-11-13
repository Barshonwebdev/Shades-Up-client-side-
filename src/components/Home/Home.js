import React from 'react';
import HomepageServices from '../HomepageServices/HomepageServices';
import './Home.css';
import myImage from '../../Images/banner1.jpg'
import myImage2 from '../../Images/midpic.jpg'
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
         <div>
            <img className="cover img-fluid" src={myImage} alt=""/>
            <div className="d-flex mt-5">
                <img className="w-50 mx-4 mb-5 img-fluid" src={myImage2} alt=""/>
                <h3 className="welcoming w-50">Your eyes need stylish accessories too. They need to see the world in a different color too. Most importantly, they need to be protected from the sun. Which is why Shades Up is here!</h3>
            </div>
            <HomepageServices></HomepageServices>
            <Reviews></Reviews>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;