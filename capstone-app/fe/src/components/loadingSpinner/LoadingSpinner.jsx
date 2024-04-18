import { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <PacmanLoader color="#fe3b18" size={20} />
      </div>
    </>
  );
};

export default LoadingSpinner;
