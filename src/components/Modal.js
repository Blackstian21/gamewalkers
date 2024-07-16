import React, { useState } from 'react';
import '../styles/globals.css';

const Modal = ({ video, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: video.title,
    category: video.category,
    thumbnail: video.thumbnail,
    videoUrl: video.videoUrl,
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    onSave(video.id, formData);
    onClose();
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      thumbnail: '',
      videoUrl: '',
      description: ''
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Editar Tarjeta:</h2>
        <form>
          <label>Título</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          
          <label>Categoría</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Deporte">Deporte</option>
          </select>
          
          <label>Imagen</label>
          <input type="text" name="thumbnail" value={formData.thumbnail} onChange={handleChange} />
          
          <label>Video</label>
          <input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} />
          
          <label>Descripción</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          
          <div className="modal-buttons">
            <button type="button" onClick={handleSave}>GUARDAR</button>
            <button type="button" onClick={handleClear}>LIMPIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
