import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contactes from './pages/Contactes';

import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contactes" element={<Contactes />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
