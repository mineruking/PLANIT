import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutProduct = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/'); // 예시: 메인 페이지로 돌아가는 경로 설정
    };

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={8}>
                    <h2>About Product</h2>
                    <p>
                        Here you can provide detailed information about your product. Describe its features,
                        advantages, and any other relevant information.
                    </p>
                    <Button variant="primary" onClick={handleBack}>
                        Back to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutProduct;
