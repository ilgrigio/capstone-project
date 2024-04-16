import { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
      <PacmanLoader color="#d8382a" />
    </>
  );
};

export default LoadingSpinner;
