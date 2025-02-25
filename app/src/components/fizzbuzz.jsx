import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";  // useNavigate 훅 사용
import axios from "axios";

const FizzBuzz = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
        navigate("/login");
        }
    }, [navigate]);
  
    useEffect(() => {

        const fetchData = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/fizzbuzz`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (response.status != 200) {
                        throw new Error('Failed to fetch data');
                    }
                    setData(response.data);
                } catch (err) {
                  setError(err.message);
                } 
            }
            else {
                throw new Error('no Token');
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