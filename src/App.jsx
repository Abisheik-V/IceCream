import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Flavors from './components/Flavors';
import About from './components/About';
import Contact from './components/Contact';
import Franchise from './components/Franchise';
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';
import OrderNow from './components/Order-now';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen visible={loading} />
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/flavors" element={<Flavors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order-now" element={<OrderNow />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
