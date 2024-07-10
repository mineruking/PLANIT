import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/AboutProduct.css'; // 경로에 맞게 수정
import d1 from '../../images/d1.png';
import d2 from '../../images/d2.png';
import d3 from '../../images/d3.png';
import d4 from '../../images/d4.png';
import d5 from '../../images/d5.png';
import d6 from '../../images/d6.png';
import d7 from '../../images/d7.png';
import d8 from '../../images/d8.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className='aboutContainer'>
        <div className='text-container'>
          <div className='titletext1'>
            <strong>PLANIT DVD Printer</strong><br />
          </div>
          <div className='Maintext'>
            <p>모두에게 편리한<br />누구에게나 안정적인</p>
            <h2>
              플래니트는 꾸준히 쌓아온 기술과 신뢰로<br />
              기술을 납품하고 있습니다.
            </h2>
          </div>
        </div>
        <div className='AboutPItemContainer'>
          <Container>
            <Row className="gx-4 gy-4"> {/* gx-4와 gy-4 클래스를 사용하여 Col 간의 간격 조정 */}
              <Col className="AboutP-item">
                <img alt="" src={d1} className="img1" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d2} className="img2" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d3} className="img3" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d5} className="img5" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d7} className="img7" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d4} className="img4" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d6} className="img6" />
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <img alt="" src={d8} className="img8" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
