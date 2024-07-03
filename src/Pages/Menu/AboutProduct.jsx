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
        <div className='AboutPItemContainer'>
          <Container>
            <Row className="gx-4 gy-4"> {/* gx-4와 gy-4 클래스를 사용하여 Col 간의 간격 조정 */}
              <Col className="AboutP-item">
                <div className="AboutP-content">
                  <h2><strong>기존 버닝 방식</strong></h2>
                  <p>담당자가 CD/DVD를 직접 버닝해서 디스크 준비/버닝</p>
                  <p>버닝된 디스크가 나오면 다시 디스크를 환자에게 전달하기 위해 검토</p>
                  <p>디스크 프린터에 환자정보 라벨지 부착</p>
                  <p>환자 배포 후 다음 작업 시작</p>
                </div>
              </Col>
              <Col className="AboutP-item">
                <div className="AboutP-content">
                  <h2><strong>플래니트의 자동 제작 방식</strong></h2>
                  <p>다수의 클라이언트가 동시에 Folder Watcher 프로그램을 통해 수시로 파일 전송</p>
                  <p>장비에서 CD/DVD를 자동 구분하여 순차적으로 검증 후 인쇄</p>
                </div>
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <div className="AboutP-content">
                  <h2><strong>의료 영상 CD 자동 제작 과정</strong></h2>
                  <p>서버에 도착한 순서대로 전송</p>
                  <p>CD/DVD 자동 구분 제작</p>
                  <p>100 디스크 버퍼 용량 (50개/50개 각각의 스태커 탑재)</p>
                  <p>서버PC 제공 및 현황 조회/통계/과거 조회 기능 제공</p>
                </div>
              </Col>
            </Row>
            <Row className="gx-4 gy-4">
              <Col className="AboutP-item">
                <div className="AboutP-content">
                  <h2><strong>스펙 비교표</strong></h2>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>제품명</th>
                        <th>Product specifications</th>
                        <th>Weight</th>
                        <th>Interface</th>
                        <th>Data Transfer</th>
                        <th>Speed</th>
                        <th>Server PC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PP-50II</td>
                        <td>377 x 465 x 324mm</td>
                        <td>24kg</td>
                        <td>USB 2.0</td>
                        <td>Client - Server - Printer</td>
                        <td>15 Discs / hour</td>
                        <td>8 Discs / hour</td>
                      </tr>
                      <tr>
                        <td>PP-100III</td>
                        <td>377 x 493 x 348mm</td>
                        <td>25kg</td>
                        <td>USB 3.0</td>
                        <td>Client - Server - Printer</td>
                        <td>30 Discs / hour</td>
                        <td>15 Discs / hour</td>
                      </tr>
                      <tr>
                        <td>PP-100N</td>
                        <td>377 x 514 x 348mm</td>
                        <td>25kg</td>
                        <td>Ethernet Network</td>
                        <td>Network - Printer</td>
                        <td>30 Discs / hour</td>
                        <td>15 Discs / hour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
