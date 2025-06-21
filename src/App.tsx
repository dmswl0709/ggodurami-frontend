import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Report from './pages/Report';
import Mypage from './pages/Mypage';
import ReportDetail from './pages/ReportDetail';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/report" element={<Report />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/ReportDetail" element={<ReportDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;