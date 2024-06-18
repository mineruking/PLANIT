import React from 'react'; // React를 임포트합니다.
import Main from './Pages/Main_page';
import Notification from './Pages/Menu/Notification.jsx';
import AboutUs from './Pages/Menu/AboutUs.jsx';
import AboutProduct from './Pages/Menu/AboutProduct.jsx';
import ContactUs from './Pages/Menu/ContactUs.jsx';
import SupportPage from './Pages/Menu/SupportPage.jsx';
import OnlineSupportPage from './Pages/Menu/OnlineSupportPage.jsx';
import OneOnOneSupportPage from './Pages/Menu/OneOnOneSupportPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Menu from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/product' element={<AboutProduct></AboutProduct>}></Route>
        <Route path='/contacus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/notification' element={<Notification></Notification>}></Route>
        <Route path='/support' element={<SupportPage></SupportPage>}></Route>
        <Route path='/support/OnlineSupport' element={<OnlineSupportPage></OnlineSupportPage>}></Route>
        <Route path='/support/OneOnOneSupport' element={<OneOnOneSupportPage></OneOnOneSupportPage>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App; // 컴포넌트명을 Main으로 변경하여 일반적인 컨벤션을 따릅니다.