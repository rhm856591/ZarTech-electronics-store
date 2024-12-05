import React from 'react'

const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full border-t-4 border-primary w-16 h-16"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  