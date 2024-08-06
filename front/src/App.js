import React from 'react';
import Main from './Pages/Main_page';
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
import BoardList from './board/BoardList.js';
import BoardForm from './board/BoardForm.js';
import BoardDetail from './board/BoardDetail.js';
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
          <Route path='/contactus' element={<div className="contact-us-page"><ContactUs /></div>} />
          <Route path='/boardList' element={<div className="board-page"><BoardList /></div>} />
          <Route path='/boardForm/new' element={<div className="board-form-page"><BoardForm /></div>} />
          <Route path='/board/:id' element={<div className="board-detail-page"><BoardDetail /></div>} />
          <Route path='/boardForm/update/:id' element={<div className="board-form-page"><BoardForm /></div>} />
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
