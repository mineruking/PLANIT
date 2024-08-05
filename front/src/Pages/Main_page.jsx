import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper from '../images/wallpaper.jpg';
import cd from '../images/CD.png';
import '../components/Menu.css'; // CSS 파일 임포트

const Main = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/support');
    };

    return (
        <div className="bg-container">
            <div className="wallpaper-container">
                <img
                    alt=""
                    src={wallpaper}
                    className="d-inline-block align-top wallpaper-img"
                />
                <div className="main-text">
                    아직도 의료영상 CD를<br />
                    수동으로 만드시나요?
                </div>
                <div className="sub-text">
                    플래니트의 의료영상 자동제작기를 통해<br />
                    더 편리하고 확실하게 만들어보세요!
                </div>
                <div>
                    <button
                        onClick={handleButtonClick}
                        className="btn btn-reverse-color start-button"
                    >
                    시작하기
                    </button>
                </div>
            </div>
            <img
                alt=""
                src={cd}
                className="d-inline-block align-top cd-img"
            />
            <div className="cd-text">
                편의성과 안정성을<br />
                한번에 얻어보세요.
            </div>
            <div className="more-info-link">
                <a 
                    href="product" 
                    className="link-reverse-color-more"
                >
                    서비스 더 알아보기 →
                </a>
            </div>
        </div>
    );
}
export default Main;
