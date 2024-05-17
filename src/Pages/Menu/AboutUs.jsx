import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/Aboutus.css'; // 경로에 맞게 수정
import pic1 from '../../images/resource 2.png';
import pic2 from '../../images/resource 1.png';
import pic3 from '../../images/resource 3.jpg';
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="First-container">
        <div className="text-container">
          <div className="Maintext">
            품질을 위한 노력,<br />
            모두가 문제없이<br />
            생활할 수 있도록
          </div>
          <div className="Subtext">
            우리의 역할은 우리의 제품을 사용하는<br />
            모든 사람들에게 문제없이<br />
            살아가도록 돕는 것입니다.
          </div>
        </div>
        <img
          alt=""
          src={pic1}
          className="picture1"
        /> 
      </div>
      <div className="Second-container">
        <div className="text-container2">
          <div className="titletext1">
            About Company
          </div>
            <div className="Maintext">
                의료전산 선진화기술<br />
                개발의 원점
            </div>
            <div className="Subtext">
            플래니트는 2012년에 첫 모험을 시작했습니다.<br /> 
            첫 여행으로부터 현재까지 의료전산의 선진화에 대한<br />
            일념 하나로 의료전산화 솔루션을 개발하고 있습니다.<br />
            우리의 여행을 같이 해준 국내의 많은 병원 및 협력사를 통해<br />
            솔루션을 판매하고 있습니다.<br />
            </div>
            </div>
            <img
                alt=""
                src={pic2}
                className="picture2"
            /> 
      </div>
      <div className="Third-container">
            <img
                alt=""
                src={pic3}
                className="picture3"
            /> 
            <div className="text-container3">
            <div className="titletext2">
              Product
            </div>
            <div className="Maintext">
                안정적이고 안전하게
            </div>
            <div className="Subtext">
                우리의 꿈은 모두가 문제없는 삶을 사는 것입니다.<br />
                사용자의 의료검사 결과물이 전달되기 까지<br />
                더 편리하고 확실하게 나오도록 추구합니다.<br />
                우리의 가치를 하나에 제품에도 잘 녹아들도록<br />
                꾸준히 관리하며 개발하고 있습니다.<br />
            </div>
            </div>
      </div>
    </>
  );
}

export default AboutUs;
