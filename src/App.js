import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuBar from './components/Menubar';
import HomePage from './pages/HomePage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
