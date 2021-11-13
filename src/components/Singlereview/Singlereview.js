import React from 'react';
import './Singlereview.css'

const Singlereview = (props) => {
    const{Name,reviewpost}= props.review;
    const HomepageServiceStyle={border: '3px solid grey', padding:'15px',  borderRadius: "10px"}
    return ( 
        <div style={HomepageServiceStyle}>
            
            <h3> <span className="text-danger">  Name: </span> {Name}</h3>
            <h3> <span className="text-danger"> Review:</span>  {reviewpost}</h3>
            
            
        </div>
    );
};

export default Singlereview;