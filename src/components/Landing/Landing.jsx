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
      ></video>
      <div className="text-overlay">
        <h1 className='Landing-title'>Your Text Here</h1>
        <p className='landing-text'>Any additional information or description can go here.</p>
      </div>
    </div>
  );
};

export default Landing;
