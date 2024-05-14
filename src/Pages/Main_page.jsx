import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper from '../images/wallpaper.jpg';

const Main = () => {
    const navigate = useNavigate();

    // 버튼 클릭 시 이동할 경로 설정
    const handleButtonClick = () => {
        navigate('/support');
    };

    return (
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
                아직도 의료영상 CD를<br />
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
                플래니트의 의료영상 자동제작기를 통해<br />
                더 편리하고 확실하게 만들어보세요!
            </div>
            {/* 버튼 추가 */}
            <div style={{
                position: 'absolute',
                top: '65%', // 버튼의 위치 조정
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}>
                <button
                    onClick={handleButtonClick}
                    className="btn"
                    style={{
                        backgroundColor: 'transparent', // 버튼 배경색을 투명하게 변경
                        color: '#0C5A89', // 버튼 텍스트 색상을 흰색으로 유지
                        fontSize: '30px', // 버튼 텍스트 크기 유지
                        padding: '10px 60px', // 버튼 내부 여백으로 크기 유지
                        border: '1px solid #0C5A89', // 버튼 테두리를 #0C5A89 색상으로 설정
                        borderRadius: '7px', // 버튼 모서리 둥글게 유지
                    }}
                >
                시작하기
                </button>
            </div>
        </div>
    );
}

export default Main;
