import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

const App = () => {
  const [videos, setVideos] = useState([
    { id: 1, title: 'Gears of War 3: La Historia en 1 Video', category: 'Acción', imageUrl: 'https://i.ytimg.com/vi/Yx3-AsimslM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuywzgHzkz4v0N65RMAhb5TX9NGg', videoUrl: 'https://www.youtube.com/watch?v=Yx3-AsimslM&t=25s', description: 'Espectacular punto final de una de las sagas de videojuegos más memorables.' },
    { id: 2, title: 'God of War Ragnarok ', category: 'Aventura', imageUrl: 'https://i.ytimg.com/vi/VAfwh-QlYgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeC5CdfzcECWA2S0zNVD0OV1Ri9A', videoUrl: 'https://www.youtube.com/watch?v=VAfwh-QlYgg', description: 'La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos.' },
    { id: 3, title: 'La Pista Más Creativa de Mario Kart', category: 'Deporte', imageUrl: 'https://i.ytimg.com/vi/SLpLaNxY64U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1LyxJJDrb4mx2YN-bIJGD8MMP1A ', videoUrl: 'https://www.youtube.com/watch?v=SLpLaNxY64U', description: 'Las pistas más desafiantes de la divertida saga de carreras.' },
    { id: 4, title: 'Street Fighter II', category: 'Acción', imageUrl: 'https://i.ytimg.com/vi/xI284D4y1q4/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gWAAsADigIMCAAQARhyIFooQTAP&rs=AOn4CLB_4cG58nPUsvmcpIj3tU3awAsVJA', videoUrl: 'https://www.youtube.com/watch?v=xI284D4y1q4&t=58s' , description: 'Es la segunda entrega de la saga Street Fighter y la secuela del original Street Fighter publicado en 1987.'},
    { id: 5, title: 'Zelda Tears of the Kingdom Gameplay Walkthrough', category: 'Aventura', imageUrl: 'https://i.ytimg.com/vi/rye3wVDyI5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoFPClCgVULoGdtChL154ltj93A', videoUrl: 'https://www.youtube.com/watch?v=rye3wVDyI5g', description: 'En su cruzada para reunir los elementos de la Trifuerza, su lucha contra el malvado Ganondorf, o intentando salvar a la sensata princesa Zelda, Link demuestra que es un héroe para la historia. ' },
    { id: 6, title: 'Forza Horizon 5: ¿Vale la pena?', category: 'Deporte', imageUrl: 'https://i.ytimg.com/vi/EbYMkJtR8lU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU2PGjsRdIZggvEzCZIzu4cJE7IQ', videoUrl: 'https://www.youtube.com/watch?v=EbYMkJtR8lU' , description: '¡Tu aventura Horizon por excelencia te espera! Explora los dinámicos paisajes abiertos al mundo y en constante evolución de México con una acción de conducción ilimitada en cientos de los mejores autos del mundo.'},
    { id: 7, title: 'Ghost Recon Advanced Warfighter', category: 'Acción', imageUrl: 'https://i.ytimg.com/vi/NZNIiQTVgsA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCSrcS-RXiZvIqfp0Y6HGk86h06kg', videoUrl: 'https://www.youtube.com/watch?v=NZNIiQTVgsA&list=PL_1jw_JCgZwinuOKEOTfSU0sr6P_H6-i_' , description: 'Tercer juego de la popular serie de videojuegos de disparos táctico, publicada por Ubisoft.'},
    { id: 8, title: 'Uncharted 4 El Desenlace del Ladrón', category: 'Aventura', imageUrl: 'https://i.ytimg.com/vi/m1THRWIPs6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXIWv1q3kqr-pJiCwjUx2VMWH9TA', videoUrl: 'https://www.youtube.com/watch?v=m1THRWIPs6Q', description: 'El desenlace del ladrón embarca al jugador en un viaje alrededor del globo por islas selváticas, grandes ciudades y nevados picos montañosos.' },
    { id: 9, title: 'Defiende como un PRO en FC 24', category: 'Deporte', imageUrl: 'https://i.ytimg.com/vi/e7-iptEhiEA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv93zgfisuWV7RjKTsusbLoD3L7Q', videoUrl: 'https://www.youtube.com/watch?v=e7-iptEhiEA', description: 'Aprende a defender como los mejores en la nueva versión de nuestro juego de fútbol favorito.' },
      ]);

  const addVideo = (video) => {
    setVideos([...videos, { id: videos.length + 1, ...video }]);
  };

  const editVideo = (videoId, updatedVideo) => {
    setVideos(videos.map(video => (video.id === videoId ? { ...video, ...updatedVideo } : video)));
  };

  const deleteVideo = (videoId) => {
    setVideos(videos.filter(video => video.id !== videoId));
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home videos={videos} onEditVideo={editVideo} onDeleteVideo={deleteVideo} />} />
          <Route path="/new-video" element={<NewVideo onAddVideo={addVideo} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
