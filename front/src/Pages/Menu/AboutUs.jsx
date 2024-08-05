import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/Aboutus.css'; // 경로에 맞게 수정
import pic1 from '../../images/resource 2.png';
import pic2 from '../../images/resource 1.png';
import pic3 from '../../images/resource 3.jpg';
import pic4 from '../../images/Hospital.png';
import a1 from '../../images/a1.png';
import a2 from '../../images/a2.png';
import a3 from '../../images/a3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="First-container">
        <Container>
            <Row className="gx-4 gy-4"> {/* gx-4와 gy-4 클래스를 사용하여 Col 간의 간격 조정 */}
                <img alt="" src={a1} className="img1" />
                <Col>
                  <img alt="" src={a2} className="img2" />
                </Col>
                <Col>
                  <img alt="" src={a3} className="img3" />
                </Col>
            </Row>
          </Container>
      </div>
    </>
  );
}

export default AboutUs;
