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
          <Route path='/' element={<Main />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/product' element={<AboutProduct />} />
          <Route path='/contacus' element={<ContactUs />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/support/OnlineSupport' element={<OnlineSupportPage />} />
          <Route path='/support/OneOnOneSupport' element={<OneOnOneSupportPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
