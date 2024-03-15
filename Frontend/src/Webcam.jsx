import  { useState, useEffect } from 'react';

const WebcamCapture = () => {
  const [stream, setStream] = useState(null);
  const [backendResponse, setBackendResponse] = useState('');

  useEffect(() => {
    // Access webcam on component mount
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        setStream(mediaStream);
      })
      .catch(error => {
        console.error('Error accessing webcam:', error);
      });

    // Cleanup function to stop webcam access on component unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, []);

  const captureAndSend = async () => {
    if (!stream) return;

    const videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.play();

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Continuously capture frames and send to backend
    const captureFrame = async () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL('image/jpeg');
      console.log('Sending image data to backend:', imageData);

      try {
        const response = await fetch('http://localhost:5000/api2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: imageData }),
        });
        console.log('Response from backend:', response);
        const data = await response.json();
        setBackendResponse(data.sign);
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }

      requestAnimationFrame(captureFrame);
    };

    captureFrame();
  };

  return (
    <div>
      <button onClick={captureAndSend}>Start Sign Detection</button>
      <div>Backend Response: {backendResponse}</div>
      <video ref={videoElement => videoElement && (videoElement.srcObject = stream)} autoPlay></video>
    </div>
  );
};

export default WebcamCapture;
