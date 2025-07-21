import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
