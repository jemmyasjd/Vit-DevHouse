import { useState, useEffect } from 'react';

const FetchData = () => {
  const [signData, setSignData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api'); // Replace with your Flask server URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setSignData(jsonData.sign);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Sign Detection Result:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Detected Sign: {signData}</p>
        </div>
      )}
    </div>
  );
};

export default FetchData;
