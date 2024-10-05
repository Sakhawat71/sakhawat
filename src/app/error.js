"use client"
import React from 'react';

const ErrorPage = ({error}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
            <h1 className="text-6xl font-bold text-red-600">Error</h1>
            <h2 className="mt-2 text-3xl font-semibold">Something Went Wrong</h2>
            <p className="mt-4 text-lg text-gray-700">
                {error?.message || "An unexpected error has occurred."}
            </p>
            <a href="/" className="mt-6 btn btn-error">
                Go Back to Home
            </a>
        </div>
    );
};

export default ErrorPage;