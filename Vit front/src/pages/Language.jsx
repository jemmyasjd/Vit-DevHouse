import "./Language.css";
import { useState,useRef } from "react";


const Language = () => {
  const [language1, setLanguage1] = useState('');
  const [language2, setLanguage2] = useState('');
  const [songlan, setSonglan] = useState('');
  const [sentence,setSentence] = useState(''); 
  const [backendData,setBackendData] = useState('');
  const audioRef = useRef(null);

  const handleSentenceChange = (event) => {
    setSentence(event.target.value);
  };

  const handleLanguage1Change = (event) => {
    setLanguage1(event.target.value);
  };

  const handleLanguage2Change = (event) => {
    setLanguage2(event.target.value);
  };

  const handleSoundChange = (event) => {
    setSonglan(event.target.value);
  };

  const handleSendButtonClick = async () => {
    // Construct the request body
    const requestBody = {
      sentence: sentence,
      lan: language1,
      lan2: language2
    };

    try {
      // Make the POST request to the API
      const response = await fetch('/lan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      console.log(response);

      // Check if the request was successful
      if (response) {
        // Retrieve the response data
        const data = await response.json();
        // Update the backend data state with the response data
        setBackendData(data);
      } else {
        console.error('Failed to send request to the API');
      }
    } catch (error) {
      console.error('Error occurred while sending request:', error);
    }
  };

  const handleSendButtonClick2 = async () => {
    const requestBody = {
      sentence: sentence,
      song: songlan
    };
    try {
      // Make the POST request to the API
      const response = await fetch('/lan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Check if the request was successful
      if (response.ok) {
        // Retrieve the response data
        const data = await response.json();
        // Update the backend data state with the response data
        setBackendData(data);
        // Play the audio
        audioRef.current.play();
      } else {
        console.error('Failed to send request to the API');
      }
    } catch (error) {
      console.error('Error occurred while sending request:', error);
    }
  };


  const isButtonDisabled1 = () => {
    return language1 === '' || sentence === '' || language2 === '';
  };
  const isButtonDisabled2 = () => {
    return language2 === '';
  };

  return (
    <div>
      Real time Detection 
      <div>
        <p>Type the sentence and select the language</p>

        <input onChange={handleSentenceChange} value={sentence} type="text" />
        <button disabled={isButtonDisabled1()}  onClick={handleSendButtonClick}>Send</button>
        
        <select value={language1} onChange={handleLanguage1Change}>
          <option value="">Select</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>  
        </select>
        <p>Sekect the ouput languagw</p>
        <select value={language2} onChange={handleLanguage2Change}>
          <option value="">Select</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>  
        </select>
        <p>{backendData}</p>
        <button disabled={isButtonDisabled2()}  onClick={handleSendButtonClick2}>sound</button>
        <select value={language2} onChange={handleSoundChange}>
          <option value="">Select</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>  
        </select>
        <audio ref={audioRef} src={backendData} controls style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default Language;
