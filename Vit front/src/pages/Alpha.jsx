import "./Alpha.css";
import WebcamCapture from "./WebCam";

const Alpha = () => {
  return (
    <div className="alpha-desktop-2">
      <div className="alpha-real-time-sign-container">
        <span className="alpha-real-time-sign-container1">
          <p className="alpha-real-time-sign">{`Real Time Sign Language to Alphabet’s / Numeric `}</p>
          <p className="alpha-real-time-sign">Translation Started</p>
        </span>
      </div>
      <WebcamCapture className="alpha-desktop-2-child" />
     
      <b className="alpha-our-vision">
        Translated Alphabet’s/Numeric from real time gestures:
      </b>
      <button className="alpha-explore-button">
        <div className="alpha-text-container">
          <div className="alpha-explore-text">{`Go Back `}</div>
        </div>
      </button>

    </div>
  );
};

export default Alpha;
