import React from 'react';
import logo from '../homeLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'; // 스타일 시트를 불러옵니다.

function Footer() {
  return (
    <Container className="footer-container">
        <Row className="align-items-center">
            <Col xs={12} md={6}>
                <div className="logo-container">
                    <img
                        alt=""
                        src={logo}
                        className="logo-image"
                    />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="info-text">
                    <Row>
                        <Col xs={12} md={6}>
                            <p><strong>대표자 :</strong> 인충교</p>
                            <p><strong>사업자 등록번호 :</strong> 317-04-19161</p>
                            <p><strong>주소 :</strong> 충청북도 청주시 서원구 충대로1 충북대학교 학연산공동기술연구원 970호</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p><strong>전화 :</strong> 043-263-8648</p>
                            <p><strong>팩스 :</strong> 043-263-8648</p>
                            <p><strong>이메일 :</strong> planit7931@naver.com</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default Footer;
