import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'; // ✅ Link bileşenini ekle
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
          <ArrowBackIcon />
          <span style={{ marginLeft: '5px' }}>Home</span>
        </Link>
      </div>
      
      <video
        className="video"
        autoPlay
        controls
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}
