import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import DetailsProject from './pages/DetailsProjectPage'
import { MoodvieRedirect } from './utils/MoodvieRedirect'
import './App.css'

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect_path');
    if (redirectPath) {
      sessionStorage.removeItem('redirect_path');
      navigate(redirectPath);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/projects"
        element={<ProjectPage />}
      />
      <Route
        path="/contacts"
        element={<ContactPage />}
      />
      <Route
        path="/moodvie"
        element={<MoodvieRedirect />}
      />
      <Route
        path="/projects/:id"
        element={<DetailsProject />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <AppContent />
    </BrowserRouter>
  );
}

export default App
