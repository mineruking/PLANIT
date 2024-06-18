  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../../components/SupportPage.css'; // 경로에 맞게 수정
  import pic1 from '../../images/support icon1.png';
  import pic2 from '../../images/support icon2.png';
  import pic3 from '../../images/support icon3.png';
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';

  const SupportPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };

    return (
      <>
        <div className='supportContainer'>
          <div className='text-container'>
            <div className='Maintext'>
              <strong>고객지원</strong><br /><br />
            </div>
            <div className="Subtext">
              <p>플래니트는 적극적이고 능동적인 기술지원을 통해 <br />
                고객의 활용 및 운용을 원활히 돕고 있습니다.</p>
            </div>
          </div>
          <div className='supportItemContainer'>
        <Container>
          <Row>
            <Col className="support-item">
              <div className="support-item-content">
                <h2><strong>원격 기술 지원</strong></h2>
                <img
                  alt="원격 기술 지원"
                  src={pic1}
                  className="support-item-image"
                />
                <p>원격 기술 지원을 통해 <br /> 문제를 신속하게 해결하세요!</p>
                <button 
                  className="support-button"
                  onClick={() => handleNavigate('/support/OnlineSupport')}
                >
                  더보기
                </button>
              </div>
            </Col>
            <Col className="support-item">
              <div className="support-item-content">
                <h2><strong>기술 도입 상담</strong></h2>
                <img
                  alt="기술 도입 상담"
                  src={pic2}
                  className="support-item-image"
                />
                <p>새로운 기술 도입에 대한 상담을 원하시면 <br /> 지금 바로 연락주세요!</p>
                <button 
                  className="support-button"
                  onClick={() => handleNavigate('/remote-support')}
                >
                더보기
                </button>
              </div>
            </Col>
            <Col className="support-item">
              <div className="support-item-content">
                <h2><strong>1:1 상담</strong></h2>
                <img
                  alt="1:1 상담"
                  src={pic3}
                  className="support-item-image"
                />
                <p>기술지원과 관련된 1:1 상담을 원하시면 <br /> 여기를 클릭하세요!</p>
                <button 
                  className="support-button"
                  onClick={() => handleNavigate('/support/OneOnOneSupport')}
                >
                더보기
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
      </>
    );
  }

  export default SupportPage;
