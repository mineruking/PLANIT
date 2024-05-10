import logo from './logo.svg';
import wallpaper from './images/wallpaper.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

function main() {
  return (
    <Stack gap={3}>
      <div className="p-2"><>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img
              alt="   "
              src={logo}
              width="100"
              height="30"
              className="LOGO"
            /></Navbar.Brand>
        </Container>
        <Container>

        </Container>
        <Container>

        </Container>
        <Container>

        </Container>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="Notice">공지사항</Nav.Link>
            <Nav.Link href="Company">회사 소개</Nav.Link>
            <Nav.Link href="Product">제품 소개</Nav.Link>
            <Nav.Link href="SupportCenter">고객 지원</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </></div>
      <div className="p-2"><img
              alt="   "
              src={wallpaper}
              width="1920"
              height="700"
              className="Wallpaper"
            /></div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default main;
