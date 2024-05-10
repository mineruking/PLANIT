import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
        <Stack gap={3}>
          <div className="p-2">{'Hello'}<Button as="input" type="button" value="Input" /></div>
          <div className="p-2">Second item</div>
          <div className="p-2">Third item</div>
        </Stack>
      
    </div>
  );
}

export default App;
