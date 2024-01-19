import './Landing.css';
import videoPlaceholder from '../../assets/video.mp4';

const Landing = () => {
  return (
    <div className="landing">
      <video
        style={{ height: "100%", width: "100%" }}
        autoPlay={true}
        muted
        loop={true}
        controls={false}
        src={videoPlaceholder}
        type="video/mp4"
        className='video'
      ></video>
      <div className="text-overlay">
        <h1 className='Landing-title'>Pioneering Special Chemical Solutions</h1>
        <p className='landing-text'>Your Gateway to Premium Chemical Auxiliaries and Unmatched Technical Expertise in Italy and Turkey.</p>
      </div>
    </div>
  );
};

export default Landing;
