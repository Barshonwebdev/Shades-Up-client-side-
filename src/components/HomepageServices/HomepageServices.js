import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import HomepageSingleService from '../HomepageSingleService/HomepageSingleService';
import "./HomepageServices.css"

const HomepageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-reaches-77675.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data)); 
    },[services])
    return (
        <div>
            <h1 className="homeservice-title text-success">Our BestSellers</h1>
            <h4 className="text-success">The best of our collections, ready to add some styles into you!</h4>
            <div className="homepage-service-container">
            {  services.length===0 ? <Spinner animation="border" variant="success" />
            
            :
            <Row sm={1} md={3} className= "g-4 " > 
               {services.slice(0,6).map(service=><HomepageSingleService key={service._id} service={service}></HomepageSingleService>) }

               </Row>

            }
            </div>
        </div>
    );
};

export default HomepageServices;