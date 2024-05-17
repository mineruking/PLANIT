import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../homeLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import the CSS file

function Menu() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'transparent', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} variant='light'>
      <Container className="justify-content-between">
        <Navbar.Brand href="/"><img
                alt=""
                src={logo}
                width="160"
                height="35"
                className="d-inline-block align-top"
              />{' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Row style={{ width: '100%' }}>
              <Col xs={3}><Nav.Link href="notification" className="nav-link-hover-notification" style={{ fontSize: '18px', fontWeight: 'bold' }}>공지사항</Nav.Link></Col>
              <Col xs={3}><Nav.Link href="aboutus" className="nav-link-hover-aboutus" style={{ fontSize: '18px', fontWeight: 'bold' }}>회사 소개</Nav.Link></Col>
              <Col xs={3}><Nav.Link href="product" className="nav-link-hover-product" style={{ fontSize: '18px', fontWeight: 'bold' }}>제품 소개</Nav.Link></Col>
              <Col xs={3}><Nav.Link href="support" className="nav-link-hover-support" style={{ fontSize: '18px', fontWeight: 'bold' }}>고객 지원</Nav.Link></Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
