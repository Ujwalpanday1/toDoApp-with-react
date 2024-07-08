import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Server Not Responding</h2>
        <p className="text-gray-600 mb-4">We apologize for the inconvenience. Our server is currently not responding. Please try again later.</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;