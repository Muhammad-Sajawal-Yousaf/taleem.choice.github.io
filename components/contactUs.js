// components/CareerGuidance.js
import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
const abc = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
 <div>
  <div className="bg-white dark:bg-gray-800">
          <div className="container mx-auto p-8">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
              <p className="text-lg text-gray-500 dark:text-gray-300">
                Have questions or suggestions? Reach out to us using the form below.
              </p>
  <Navbar/>
    
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
    
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
    
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                </div>
    
                <div className="pt-5">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
    
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <p className="text-gray-500 dark:text-gray-300">Connect with us on social media:</p>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-gray-700 dark:text-white hover:text-indigo-500 transition duration-300"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="none"
                      >
                        {/* Twitter icon */}
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-white hover:text-indigo-500 transition duration-300"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="none"
                      >
                        {/* Facebook icon */}
                      </svg>
                    </a>
                    {/* Add more social media icons as needed */}
                  </div>
                </div>
    
                <div>
                  <p className="text-gray-500 dark:text-gray-300">Reach us via email:</p>
                  <p className="text-indigo-600 font-medium">info@example.com</p>
                </div>
              </div>
    
              <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Office</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  123 Main Street, Cityville, Country
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Zip Code: 12345
                </p>
              </div>
    
              <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">FAQ</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-base font-medium text-gray-700 dark:text-white">How can I contact support?</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      You can reach our support team by sending an email to support@example.com.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 dark:text-white">What are your business hours?</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Our business hours are from 9 AM to 5 PM, Monday to Friday.
                    </p>
                  </div>
                  {/* Add more FAQs as needed */}
                </div>
              </div>
    
              <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <div className="mt-4">
                  {/* Add a map or location information here */}
                  <p className="text-sm text-gray-500 dark:text-gray-300">Map or detailed location information goes here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
        </div>

      );
};

export default abc;
