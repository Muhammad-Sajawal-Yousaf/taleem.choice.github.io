// components/CareerGuidance.js
import Footer from './footer';
import Navbar from './navbar';
import React, { useState } from 'react';


const Universitypredictions = () => {

    const [formData, setFormData] = useState({
      name: '',
      examScore: '',
      GPA: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handlePredictionSubmit = (e) => {
      e.preventDefault();
      alert('Prediction submitted!');
    };
  
    return (
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
          <Navbar/>
       
        <main className="container justify-center mx-auto mt-8 p-4">
         <div className=" container text-3xl flex justify-center"> 
          <p>
            Welcome to the University Predictions page. Get insights into your academic future!
          </p>
          </div>
          <form className="mt-8" onSubmit={handlePredictionSubmit}>
          <div className=" ">
            <label className="block mb-2 text-lg font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
  
            <label className="block mt-4 mb-2 text-lg font-semibold">Exam Score:</label>
            <input
              type="text"
              name="examScore"
              value={formData.examScore}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
  
            <label className="block mt-4 mb-2 text-lg font-semibold">GPA:</label>
            <input
              type="text"
              name="GPA"
              value={formData.GPA}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md"
            >
              Submit Prediction
            </button>
            </div>
          </form>
  
          <div className="mt-8 flex justify-center">
            {/* Display prediction results or other content */}
            <p>
              Sample Prediction Results: Your chances of admission are high!
            </p>
          </div>
        </main>
  
        <Footer/>
      </div>
    );
  };
  
  

export default Universitypredictions;
