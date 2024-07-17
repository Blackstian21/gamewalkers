import React, { useState } from 'react';
import '../styles/globals.css';
import Modal from '../components/Modal';

const videosData = [
  { id: 1, title: 'Gears of War 3: La Historia en 1 Video', category: 'Acción', thumbnail: 'https://i.ytimg.com/vi/Yx3-AsimslM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuywzgHzkz4v0N65RMAhb5TX9NGg', videoUrl: 'https://www.youtube.com/watch?v=Yx3-AsimslM&t=25s' },
  { id: 2, title: 'God of War Ragnarok ', category: 'Aventura', thumbnail: 'https://i.ytimg.com/vi/VAfwh-QlYgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeC5CdfzcECWA2S0zNVD0OV1Ri9A', videoUrl: 'https://www.youtube.com/watch?v=VAfwh-QlYgg' },
  { id: 3, title: 'La Pista Más Creativa de Mario Kart', category: 'Deporte', thumbnail: 'https://i.ytimg.com/vi/SLpLaNxY64U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1LyxJJDrb4mx2YN-bIJGD8MMP1A ', videoUrl: 'https://www.youtube.com/watch?v=SLpLaNxY64U' },
  { id: 4, title: 'Street Fighter II', category: 'Acción', thumbnail: 'https://i.ytimg.com/vi/xI284D4y1q4/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gWAAsADigIMCAAQARhyIFooQTAP&rs=AOn4CLB_4cG58nPUsvmcpIj3tU3awAsVJA', videoUrl: 'https://www.youtube.com/watch?v=xI284D4y1q4&t=58s'},
  { id: 5, title: 'Zelda Tears of the Kingdom Gameplay Walkthrough', category: 'Aventura', thumbnail: 'https://i.ytimg.com/vi/rye3wVDyI5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoFPClCgVULoGdtChL154ltj93A', videoUrl: 'https://www.youtube.com/watch?v=rye3wVDyI5g' },
  { id: 6, title: 'Forza Horizon 5: ¿Vale la pena?', category: 'Deporte', thumbnail: 'https://i.ytimg.com/vi/EbYMkJtR8lU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU2PGjsRdIZggvEzCZIzu4cJE7IQ', videoUrl: 'https://www.youtube.com/watch?v=EbYMkJtR8lU' },
  { id: 7, title: 'Ghost Recon Advanced Warfighter', category: 'Acción', thumbnail: 'https://i.ytimg.com/vi/NZNIiQTVgsA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCSrcS-RXiZvIqfp0Y6HGk86h06kg', videoUrl: 'https://www.youtube.com/watch?v=NZNIiQTVgsA&list=PL_1jw_JCgZwinuOKEOTfSU0sr6P_H6-i_' },
  { id: 8, title: 'Nathan Drake vs Lara Croft. Épicas Batallas de Rap', category: 'Aventura', thumbnail: 'https://i.ytimg.com/vi/NE_PznezrGo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAAaUfvLpeDRa1eGD9nbPThwXsbQ', videoUrl: 'https://www.youtube.com/watch?v=NE_PznezrGo' },
  { id: 9, title: 'Defiende como un PRO en FC 24', category: 'Deporte', thumbnail: 'https://i.ytimg.com/vi/e7-iptEhiEA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv93zgfisuWV7RjKTsusbLoD3L7Q', videoUrl: 'https://www.youtube.com/watch?v=e7-iptEhiEA' },
];

const Home = () => {
  const [videos, setVideos] = useState(videosData);
  const [editingVideo, setEditingVideo] = useState(null);

  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  const handleDelete = (videoId) => {
    setVideos(videos.filter(video => video.id !== videoId));
  };

  const handleSave = (videoId, updatedVideo) => {
    setVideos(videos.map(video => (video.id === videoId ? { ...video, ...updatedVideo } : video)));
  };

  const renderVideosByCategory = (category, color) => (
    <div className="category-section">
      <h2 className="category-title" style={{ backgroundColor: color }}>{category}</h2>
      <div className="videos-grid">
        {videos.filter(video => video.category === category).map(video => (
          <div className="video-card" key={video.id} style={{ borderColor: color }}>
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} />
            </a>
            <h3>{video.title}</h3>
            <div className="video-card-buttons">
              <button className="video-card-button" onClick={() => handleEdit(video)}>Editar</button>
              <button className="video-card-button" onClick={() => handleDelete(video.id)}>Borrar</button>
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
