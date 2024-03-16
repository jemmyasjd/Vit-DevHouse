import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./Trans.css";

const WebcamCapture = () => {
  const [stream, setStream] = useState(null);
  const [backendResponse, setBackendResponse] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Access webcam on component mount
    navigator.mediaDevices
      .getUserMedia({ video: true })
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

  useEffect(() => {
    // Initialize SocketIO connection
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    // Listen for 'signResult' event from the server
    newSocket.on('signResult', data => {
      setBackendResponse(data.sign);
    });

    // Cleanup function to disconnect SocketIO connection
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const captureAndSend = () => {
    if (!stream || !socket) return;

    const videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.play();

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const captureFrame = () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/jpeg');
      const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, '');

      // Send the base64 image data to the server using SocketIO
      socket.emit('imageFrame', { image: base64Data });

      // Recursively call captureFrame to continue capturing and sending frames
      requestAnimationFrame(captureFrame);
    };

    // Initial call to start capturing and sending frames
    captureFrame();
  };

  // Start capturing and sending frames when component mounts and stream is available
  useEffect(() => {
    if (stream && socket) {
      captureAndSend();
    }
  }, [stream, socket]);

  return (
    <div>
     
      <video className="trans-desktop-1-child"
        ref={videoElement => videoElement && (videoElement.srcObject = stream)}
        autoPlay
      ></video>
       <p className="trans-desktop-1-item">{"hello"}</p>
    </div>
  );
};

export default WebcamCapture;