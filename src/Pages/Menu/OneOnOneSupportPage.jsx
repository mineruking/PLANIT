import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/OneOnOneSupportPage.css'; // 경로에 맞게 수정
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap 컴포넌트 임포트

const OneOnOneSupportPage = () => {
    const navigate = useNavigate();

    return (
      <div className='FirstContainer'>
        <Container className="my-5">
          <Row>
            <Col className="subTitle">
              {/* text-center mb-5 클래스가 적용된 요소 */}
              <div>
                <br></br><br></br><br></br><br></br>
                <h1 className="display-4">1:1 고객지원</h1> <br></br>
                <p className="lead">고객 지원 서비스를 통해 <br></br>궁금한 점을 해결해보세요 !</p>
              </div>
            </Col>
            <Col className="stepContainer">
            <Row>
              <div className="border rounded p-4 mb-4">
                <h2 className="font-weight-bold">이메일 문의</h2>
                <hr className="big-solid" />

                <p style={{ fontWeight: 'bold', marginBottom:'10px'}}>이메일 주소</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input type="email" style={{ border: 'none', background: 'transparent', textAlign:'center'}} placeholder='someone@example.com'/>
                </div>
                <hr className="small-solid" />

                <p style={{ fontWeight: 'bold' }}>회사명 / 담당자 / 연락처</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input type="text" style={{ border: 'none', background: 'transparent', textAlign:'center' }} placeholder='회사명 / 담당자 / 연락처'/>
                </div>
                <hr className="small-solid" />

                <p style={{ fontWeight: 'bold' }}>카테고리</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <select placeholder="유형을 선택해주세요" style={{width:'80%', textAlign:'center'} }>
                    <option>고장</option>
                    <option>제품 구매</option>
                    <option>기타</option>
                  </select>
                </div>
                
                <p style={{ fontWeight: 'bold' }}>문의 내용</p>
                <input type="checkbox" /> <small>개인정보 수집 및 이용에 동의합니다. 개인정보처리방침</small>
              </div>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default OneOnOneSupportPage;