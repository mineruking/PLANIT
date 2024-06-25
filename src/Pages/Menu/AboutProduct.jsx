import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/AboutProduct.css'; // 경로에 맞게 수정
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
      </div>
    </>
  );
}

export default AboutPage;
