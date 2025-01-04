import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AgentsPage from './pages/AgentsPage';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import Home from './pages/Dashboard/Home';
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
          <Route
            index
            element={
              <>
                <PageTitle title="USAi" />
                <Home />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar | USAi" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <PageTitle title="Dashboard | USAi" />
                <Home />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Agents | USAi" />
                <AgentsPage />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
