import React from 'react'
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper from '../images/wallpaper.jpg';

const Main = () => {
    const navigate = useNavigate();
    
    return(
        <div>
           <img
              alt=""
              src={wallpaper}
              width="1920"
              height="870"
              className="d-inline-block align-top"
              style={{ opacity: 0.5 }} // 이 부분에 투명도를 설정
            /> 
        </div>
    )
}

export default Main