
import logo from '../gamewalkerscolorvert.png';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', backgroundColor: '#212121', color: '#FFF' }}>
      <img src={logo} alt="Gamewalkers Logo" style={{ height: '60px', padding: '10px' }} />
      <p>Sebastián Ortiz - Alura Latam - ONE • Oracle Next Education 2024</p>
    </footer>
  );
};

export default Footer;
