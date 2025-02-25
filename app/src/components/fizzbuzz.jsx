import React, { useEffect, useState } from 'react';

const FizzBuzz = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/fizzbuzz`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="grid grid-cols-10 gap-4">
      {data.map((num, idx) => (
        <div key={idx} className="text-center p-2 bg-gray-200 rounded-lg shadow-md">
          {num}
        </div>
      ))}
    </div>
  );
};

export default FizzBuzz;