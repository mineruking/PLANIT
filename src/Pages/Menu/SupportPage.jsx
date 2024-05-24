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
                <Col md={5} className="Support-item1">
                  <div className="Support-item-container">
                    <strong style={{fontSize:"30px", textAlign:"center"}}>원격 기술 지원</strong>
                    <div className="Support-item-image">
                      <img
                        alt=""
                        src={pic1}
                      />
                    </div>
                    <p>손쉬운 해결을 원하시나요 ?</p>
                    <p>원격 기술 지원 센터에 방문해보세요 !</p>
                  </div>
                </Col>
                <Col md={5} className="Support-item2">
                  <div className="Support-item-container">
                    <div className="Support-item-image">
                      <img
                        alt=""
                        src={pic2}
                      />
                    </div>
                  </div>
                </Col>
                <Col md={5} className="Support-item3">
                  <div className="Support-item-container">
                    <div className="Support-item-image">
                      <img
                        alt=""
                        src={pic3}
                      />
                    </div>
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
