import Image from 'next/image';
import React from 'react';
import Construction from '@/assets/ext/under_construction.png';

const Blog = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <Image
                src={Construction}
                alt='Construction'
                height={400}
                width={400}
                className='my-5 rounded-3xl'
            />
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