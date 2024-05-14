import React from 'react'
import {useNavigate} from 'react-router-dom';
import Menu from '../../components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutUs = () => {
    const navigate = useNavigate();
    
    return(
        <div>
            <Menu />
            About Us
        </div>
    )
}

export default AboutUs