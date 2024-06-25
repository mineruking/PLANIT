import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import '../../components/OneOnOneSupportPage.css';

const OneOnOneSupportPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // 여기에 추가적인 제출 처리 로직을 추가할 수 있습니다.
        setShowModal(true); // 모달 표시
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='FirstContainer'>
            <Container className="my-5">
                <Row>
                    <Col className="subTitle">
                        <div>
                            <br/><br/><br/><br/>
                            <h1 className="display-4">1:1 고객지원</h1> <br/>
                            <p className="lead">고객 지원 서비스를 통해 <br/>궁금한 점을 해결해보세요 !</p>
                        </div>
                    </Col>

                    <Col className="stepContainer">
                        <Row>
                        <div className="border rounded p-4 mb-4">
                              <h2 className="font-weight-bold">이메일 문의</h2>
                              <hr className="big-solid" />

                              <br/>
                              <p style={{ fontWeight: 'bold', marginBottom: '10px'}}>이메일 주소</p>
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <input type="email" style={{ border: 'none', background: 'transparent', textAlign:'center'}} placeholder='someone@example.com' required />
                              </div>
                              <hr className="small-solid" />

                              <br/>
                              <p style={{ fontWeight: 'bold' }}>회사명 / 담당자 / 연락처</p>
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <input type="text" style={{ border: 'none', background: 'transparent', textAlign:'center' }} placeholder='회사명 / 담당자 / 연락처' required />
                              </div>
                              <hr className="small-solid" />

                              <br/>
                              <p style={{ fontWeight: 'bold' }}>카테고리</p>
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <select placeholder="유형을 선택해주세요" style={{ width:'80%', textAlign:'center' }} required>
                                      <option>고장</option>
                                      <option>제품 구매</option>
                                      <option>기타</option>
                                  </select>
                              </div>
                              
                              <br/>
                              <p style={{ fontWeight: 'bold'}}>문의 내용</p>
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <div className="border rounded p-4 mb-4" style={{ width: '85%', height: '300px', marginTop: '0px' }}>
                                      <textarea
                                          className="form-control"
                                          style={{ width: '100%', height: '100%', resize: 'none', border: 'none', outline: 'none' }}
                                          placeholder="여기에 글을 작성하세요"
                                          required
                                      ></textarea>
                                  </div>
                              </div>

                              <input type="checkbox" required /> <small>개인정보 수집 및 이용에 동의합니다. 개인정보처리방침</small>

                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <button type="button" className="btn btn-primary mt-3"
                                        style={{ marginTop:'5px', width: '95%', borderRadius:'100px', color:'black', backgroundColor:'#ffd00091', borderColor:'white'}}
                                        onClick={handleSubmit}>
                                      문의하기
                                  </button>
                              </div>
                          </div>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>제출 완료!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    문의가 성공적으로 제출되었습니다.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OneOnOneSupportPage;
