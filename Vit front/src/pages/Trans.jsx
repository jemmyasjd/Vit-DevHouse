import "./Trans.css";
import {useNavigate} from "react-router-dom";
import WebcamCapture from "./WebCam";

const Desktop = () => {
    const navigate = useNavigate();
  return (
    <div className="trans-desktop-1">
        
      <WebcamCapture className="trans-desktop-1-child" />
     
      <b className="trans-our-vision">Translated Words from real time gestures:</b>
      <button onClick={()=> navigate('/')} className="trans-explore-button">
        <div className="trans-text-container">
          <div  className="trans-explore-text">{`Go Back `}</div>
        </div>
      </button>
      <div className="trans-frame">
        <div className="trans-real-time-sign">
          Real Time Sign Langauge to Words Translation Started
        </div>
      </div>
      <div className="trans-frame1">

    
      </div>
    </div>
  );
};

export default Desktop;
