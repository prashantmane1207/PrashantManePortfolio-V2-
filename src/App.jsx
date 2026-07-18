import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollProgressBar from './components/ScrollProgressBar'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'

import Home from './pages/Home'
import ProjectDetailAITrip from './pages/ProjectDetailAITrip'
import ProjectDetailEMS from './pages/ProjectDetailEMS'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="relative min-h-screen bg-base">
      <Loader />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/ai-trip-planner" element={<ProjectDetailAITrip />} />
          <Route path="/projects/employee-management-system" element={<ProjectDetailEMS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
      <ToastContainer theme="dark" position="bottom-right" autoClose={4000} />
    </div>
  )
}
