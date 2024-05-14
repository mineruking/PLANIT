import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../homeLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Nav.Link href="/"><img
              alt=""
              src={logo}
              width="160"
              height="35"
              className="d-inline-block align-top"
            />{' '}</Nav.Link>
    </Container>
    <Nav className="me-auto">
        <Nav.Link href="notification">공지사항</Nav.Link>
        <Nav.Link href="aboutus">회사 소개</Nav.Link>
        <Nav.Link href="product">제품 소개</Nav.Link>
        <Nav.Link href="support">고객 지원</Nav.Link>
      </Nav>
  </Navbar>
  );
}

export default Menu;