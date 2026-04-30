import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import VideoModal from './components/VideoModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openVideo = (url) => {
    setCurrentVideo(url);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="bg-dark min-h-screen text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenVideo={openVideo} />} />
            <Route path="/projects" element={<ProjectsPage onOpenVideo={openVideo} />} />
          </Routes>
        </main>
        
        <VideoModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          videoUrl={currentVideo} 
        />
      </div>
    </Router>
  );
}

export default App;
