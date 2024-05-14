import React from 'react'
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper from '../images/wallpaper.jpg';

const Main = () => {
    const navigate = useNavigate();
    
    return(
        <div className="main-image" style={{ position: 'relative' }}>
           <img
              alt=""
              src={wallpaper}
              width="1920"
              height="870"
              className="d-inline-block align-top"
              style={{ opacity: 0.5 }}
            /> 
            <div style={{
              position: 'absolute',
              top: '35%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
              color: '#0C5A89',
              fontSize: '60px',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px #000' // 여기에 그림자를 추가
            }}>
              아직도 의료영상 CD를<br/>
              수동으로 만드시나요?
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '16%',
                transform: 'translate(-50%, -50%)',
                color: '#0C5A89',
                fontSize: '25px',
                textShadow: '1px 1px 3px #000' // 여기에도 그림자를 추가
              }}>
                플래니트의 의료영상 자동제작기를 통해<br/>
                더 편리하고 확실하게 만들어보세요!
            </div>
        </div>
    )
}

export default Main
