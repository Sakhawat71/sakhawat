import React from 'react';

const NotFoundPage = () => {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="mt-2 text-3xl font-semibold">Oops! Page Not Found</h2>
            <p className="mt-4 text-lg text-gray-600">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <a href="/" className="mt-6 btn btn-primary">
                Go Back to Home
            </a>
        </div>
    );
};

export default NotFoundPage;