import React, { useState } from 'react';
import '../styles/globals.css';

const NewVideo = () => {
  const [video, setVideo] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(video); 
  };

  const handleClear = () => {
    setVideo({
      title: '',
      category: '',
      imageUrl: '',
      videoUrl: '',
      description: ''
    });
  };

  return (
    <div>
      <h2 className="title">Agregar Nuevo Video</h2>
      <form className="new-video-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={video.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={video.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Deporte">Deporte</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">URL de la Imagen</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={video.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="videoUrl">URL del Video</label>
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={video.videoUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={video.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit" className="button">Guardar</button>
          <button type="button" className="button" onClick={handleClear}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideo;
