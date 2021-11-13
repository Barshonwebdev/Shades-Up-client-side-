import React from 'react';
import './HomepageSingleService.css'
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const HomepageSingleService = (props) => {
    const {admin} = useAuth()
    const{ _id,Name,Price ,image, Description}= props.service;
    const HomepageServiceStyle={border: '3px solid grey', padding:'15px',  borderRadius: "10px"}
    return ( 
        <div style={HomepageServiceStyle}>
            <img className="img-fluid" src={image} alt=""/>
            <h3> <span className="text-danger"> Product Name: </span> {Name}</h3>
            <h3> <span className="text-danger"> Description:</span>  {Description}</h3>
            <h3> <span className="text-danger"> Price: </span> {Price}</h3>
    {!admin && <Button className="btn-div" variant="warning" ><NavLink className="btn text-dark" to={`/home/${_id}`}>Purchase</NavLink> </Button> }
        </div>
    );
};

export default HomepageSingleService;  