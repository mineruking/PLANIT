import React from 'react';
import Main from './Pages/Main_page';
import Notification from './Pages/Menu/Notification.jsx';
import AboutUs from './Pages/Menu/AboutUs.jsx';
import AboutProduct from './Pages/Menu/AboutProduct.jsx';
import ContactUs from './Pages/Menu/ContactUs.jsx';
import SupportPage from './Pages/Menu/SupportPage.jsx';
import OnlineSupportPage from './Pages/Menu/OnlineSupportPage.jsx';
import OneOnOneSupportPage from './Pages/Menu/OneOnOneSupportPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Menu from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import './App.css'; // Custom styles if needed

function App() {
  return (
    <div className="app-container">
      <Menu />
      <div className="content">
        <Routes>
          <Route path='/' element={<div className="main-page"><Main /></div>} />
          <Route path='/aboutus' element={<div className="about-us-page"><AboutUs /></div>} />
          <Route path='/product' element={<div className="product-page"><AboutProduct /></div>} />
          <Route path='/contacus' element={<div className="contact-us-page"><ContactUs /></div>} />
          <Route path='/notification' element={<div className="notification-page"><Notification /></div>} />
          <Route path='/support' element={<div className="support-page"><SupportPage /></div>} />
          <Route path='/support/OnlineSupport' element={<div className="online-support-page"><OnlineSupportPage /></div>} />
          <Route path='/support/OneOnOneSupport' element={<div className="one-on-one-support-page"><OneOnOneSupportPage /></div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
