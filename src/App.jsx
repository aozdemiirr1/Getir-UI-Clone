import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Getir from './pages/Getir';
import Getiryemek from './pages/Getiryemek';
import Getirbuyuk from './pages/Getirbuyuk';
import Getirsu from './pages/Getirsu';
import Getircarsi from './pages/Getircarsi';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Getir />} />
          <Route path="/getiryemek" element={<Getiryemek />} />
          <Route path="/getirbuyuk" element={<Getirbuyuk />} />
          <Route path="/getirsu" element={<Getirsu />} />
          <Route path="/getircarsi" element={<Getircarsi />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
