import React, { useState } from 'react';
import '../styles/globals.css';
import Modal from '../components/Modal';

const Home = ({ videos, onEditVideo, onDeleteVideo }) => {
  const [editingVideo, setEditingVideo] = useState(null);

  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  const handleSave = (videoId, updatedVideo) => {
    onEditVideo(videoId, updatedVideo);
    setEditingVideo(null);
  };

  const renderVideosByCategory = (category, color) => (
    <div className="category-section">
      <h2 className="category-title" style={{ backgroundColor: color }}>{category}</h2>
      <div className="videos-grid">
        {videos.filter(video => video.category === category).map(video => (
          <div className="video-card" key={video.id} style={{ borderColor: color }}>
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={video.imageUrl} alt={video.title} />
            </a>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <div className="video-card-buttons">
              <button className="video-card-button" onClick={() => handleEdit(video)}>Editar</button>
              <button className="video-card-button" onClick={() => onDeleteVideo(video.id)}>Borrar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="main-banner"></div>
      <main className="container">
        {renderVideosByCategory('Acción', 'var(--color-blue)')}
        {renderVideosByCategory('Aventura', 'var(--color-pink)')}
        {renderVideosByCategory('Deporte', 'var(--color-yellow)')}
      </main>
      {editingVideo && <Modal video={editingVideo} onClose={() => setEditingVideo(null)} onSave={handleSave} />}
    </div>
  );
};

export default Home;
