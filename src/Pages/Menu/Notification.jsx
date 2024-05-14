import React from 'react'
import {useNavigate} from 'react-router-dom';
import Menu from '../../components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const Notification = () => {
    const navigate = useNavigate();
    
    return(
        <div>
            <Menu />
            Notification
        </div>
    )
}

export default Notification