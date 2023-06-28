import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Home } from './pages';
import FileSaver from 'file-saver';
import Footer from './components/Footer';

function App() {
  const downloadResume = () => {
    FileSaver.saveAs(
      './src/assets/NelsonMorillo-Resume.pdf',
      'NelsonMorillo-Resume.pdf'
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
