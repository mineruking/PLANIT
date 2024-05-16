import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../homeLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <Navbar style={{ backgroundColor: 'transparent', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} variant='light'>
    <Container className="justify-content-between">
      <Navbar.Brand href="/"><img
              alt=""
              src={logo}
              width="160"
              height="35"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
    </Container>
    <Nav className="me-auto">
        <Nav.Link href="notification" style={{ fontSize: '18px', fontWeight: 'bold' }}>공지사항</Nav.Link>
        <Nav.Link href="aboutus" style={{ fontSize: '18px', fontWeight: 'bold' }}>회사 소개</Nav.Link>
        <Nav.Link href="product" style={{ fontSize: '18px', fontWeight: 'bold' }}>제품 소개</Nav.Link>
        <Nav.Link href="support" style={{ fontSize: '18px', fontWeight: 'bold' }}>고객 지원</Nav.Link>
      </Nav>
  </Navbar>
  );
}

export default Menu;
