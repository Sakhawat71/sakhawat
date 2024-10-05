import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <h1 className="text-4xl font-bold">My Blog</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl text-center">
                Welcome to my blog! Here, I share my thoughts on web development, tutorials, and the latest trends in technology.
            </p>
            <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-blue-500">Understanding React Hooks</a></li>
                <li><a href="#" className="text-blue-500">Getting Started with Next.js</a></li>
                <li><a href="#" className="text-blue-500">CSS Tricks for Modern Web Design</a></li>
            </ul>
        </div>
    );
};

export default Blog;