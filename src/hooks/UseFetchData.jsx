import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchFunction();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount or when dependencies change
  useEffect(() => {
    fetchData();
  }, dependencies);

  // Expose the fetchData function to be manually called
  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
