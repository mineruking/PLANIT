import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/OnlineSupportPage.css'; // 경로에 맞게 수정
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap 컴포넌트 임포트

const OnlineSupportPage = () => {
    const navigate = useNavigate();

    return (
      <div className='FirstContainer1'>
        <Container className="my-5">
          <Row>
            <Col className="subTitle">
              {/* text-center mb-5 클래스가 적용된 요소 */}
              <div>
                <br></br><br></br><br></br>
                <h1 className="display">온라인 고객지원</h1> <br></br>
                <p className="lead">원격 지원을 통해 <br></br>간편하게 문제를 해결해보세요!</p>
                <small>*플레니트의 규정 라이센스를 준수하여 서비스를 제공합니다.</small>
              </div>
            </Col>
            <Col className="stepContainer">
              {/* stepContainer 클래스가 적용된 요소 */}
              <Row>
                  <div className="border rounded p-4 mb-4 red-border">
                      <h4 className="text-danger font-weight-bold">STEP 1</h4>
                      <p>기술지원 상담 전화를 통해 온라인 고객지원을 요청합니다.</p>
                  </div>
              </Row>

              <Row>
                <div className="border rounded p-4 mb-4 red-border">
                    <h4 className="text-danger font-weight-bold">STEP 2</h4>
                    <p>플래니트 원격지원센터에 접속합니다.</p>
                    <small>*설치코드는 플래니트 원격 서비스 요청시 서비스로 제공됩니다.</small>
                    <br></br>
                    <br></br>
                    <button className="btn btn-danger">
                      접속하기
                    </button>
                </div>
                </Row>
                <Row>
                  <div className="border rounded p-4 mb-4 red-border">
                    <h4 className="text-danger font-weight-bold">STEP 3</h4>
                    <p>원격접속을 통해 접속 후 상담원의 안내에 따라 진행해주시면 됩니다.</p>
                  </div>
                </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default OnlineSupportPage;
