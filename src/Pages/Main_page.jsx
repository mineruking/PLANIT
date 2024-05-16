import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper from '../images/wallpaper.jpg';
import cd from '../images/CD.png';

const Main = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/support');
    };

    return (
        <div style={{
            position: 'relative', // 상위 div를 relative로 설정
            backgroundColor: '#f4f7f9',
            paddingBottom: '1000px',
        }}>
            {/* wallpaper 이미지를 포함하는 컨테이너 */}
            <div style={{
                position: 'relative', // 이 div도 relative로 설정해서 내부 요소를 absolute로 조정 가능하게 함
                height: '870px', // 이미지 높이에 맞춤
            }}>
                <img
                    alt=""
                    src={wallpaper}
                    width="1920"
                    height="870"
                    className="d-inline-block align-top"
                    style={{ width: '100%', height: 'auto', opacity: 0.5 }}
                />
                {/* 텍스트와 버튼을 여기에 배치 */}
                <div style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%', // 중앙 정렬을 위해 50%로 조정
                    transform: 'translate(-115%, -50%)', // 중앙 정렬
                    color: '#0C5A89',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 3px #000'
                }}>
                    아직도 의료영상 CD를<br />
                    수동으로 만드시나요?
                </div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%', // 중앙 정렬을 위해 50%로 조정
                    transform: 'translate(-153%, -50%)', // 중앙 정렬
                    color: '#0C5A89',
                    fontSize: '25px',
                    textShadow: '1px 1px 3px #000'
                }}>
                    플래니트의 의료영상 자동제작기를 통해<br />
                    더 편리하고 확실하게 만들어보세요!
                </div>
                <div style={{
                    position: 'absolute',
                    top: '65%',
                    left: '50%', // 중앙 정렬을 위해 50%로 조정
                    transform: 'translate(-285%, -50%)', // 중앙 정렬
                }}>
                    <button
                        onClick={handleButtonClick}
                        className="btn"
                        style={{
                            backgroundColor: 'transparent',
                            color: '#0C5A89',
                            fontSize: '30px',
                            padding: '10px 60px',
                            border: '1px solid #0C5A89',
                            borderRadius: '7px',
                        }}
                    >
                    시작하기
                    </button>
                </div>
            </div>
            {/* CD 이미지 */}
            <img
                alt=""
                src={cd}
                width="720"
                height="517"
                className="d-inline-block align-top"
                style={{
                    position: 'absolute',
                    right: '55%',
                    bottom: '10%',
                    opacity: 1,
                }}
            />

            {/* CD 텍스트 */}
            <div style={{
                    position: 'absolute',
                    right: '50%', // CD 이미지 오른쪽으로 조금 더 이동시키기 위해 값을 조정합니다. 실제 값은 조정이 필요할 수 있습니다.
                    bottom: '29%', // CD 이미지와 같은 수준에 위치하도록 설정합니다.
                    transform: 'translateX(100%)', // 오른쪽으로 100% 이동하여 CD 이미지 오른쪽에 배치합니다.
                    color: '#0C5A89',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 3px #000'
                }}>
                편의성과 안정성을<br />
                한번에 얻어보세요.
            </div>
            {/* 하이퍼링크 추가 */}
            <div style={{
                position: 'absolute',
                right: '50%', // 하이퍼링크 위치를 조정합니다. 실제 값은 조정이 필요할 수 있습니다.
                bottom: '25%', // 하이퍼링크 위치를 조정합니다. 실제 값은 조정이 필요할 수 있습니다.
                transform: 'translateX(100%)', // 오른쪽으로 100% 이동하여 CD 이미지 오른쪽에 배치합니다.
                color: '#523E5A',
                fontSize: '25px', // 폰트 크기를 조정합니다. 실제 값은 조정이 필요할 수 있습니다.
                textShadow: '1px 1px 3px #000'
            }}>
                <a href="product" style={{color: '#0C5A89', textDecoration: 'none'}}>
                    서비스 더 알아보기 →
                </a>
            </div>
        </div>
    );
}

export default Main;
