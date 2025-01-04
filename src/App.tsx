import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AgentsPage from './pages/AgentsPage';
import Loader from './common/Loader';
import Calendar from './pages/Calendar';
import Home from './pages/Dashboard/Home';
import Governance from './pages/Governance';
import StudioPage from './pages/StudioPage'; 
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark'); // Force dark mode
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
