import React from 'react'
import {useNavigate} from 'react-router-dom';
import Menu from '../../components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactUs = () => {
    const navigate = useNavigate();
    
    return(
        <div>
            <Menu />
            contact Us
        </div>
    )
}

export default ContactUs