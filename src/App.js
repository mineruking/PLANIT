import React from 'react'; // React를 임포트합니다.
import logo from './homeLogo.svg';
import wallpaper from './images/wallpaper.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap'; // 필요한 컴포넌트들을 한 줄로 임포트합니다.

function Main() {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="로고"
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="Notice">공지사항</Nav.Link>
              <Nav.Link href="Company">회사 소개</Nav.Link>
              <Nav.Link href="Product">제품 소개</Nav.Link>
              <Nav.Link href="SupportCenter">고객 지원</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="p-2">
        <img
          alt="월페이퍼"
          src={wallpaper}
          width="1920"
          height="700"
          className="Wallpaper"
        />
      </div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default Main; // 컴포넌트명을 Main으로 변경하여 일반적인 컨벤션을 따릅니다.