import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import DetailsProject from './pages/DetailsProjectPage'
import { MoodvieRedirect } from './utils/MoodvieRedirect'
import './App.css'

function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
      )
}

export default App
