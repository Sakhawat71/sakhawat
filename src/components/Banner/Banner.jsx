import Image from 'next/image';
import React from 'react';
import profileImage from '@/assets/logo1.png';

const Banner = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-1/2 bg-gray-200 flex flex-col justify-center items-start p-16">
                <h1 className="text-4xl font-bold mb-4">Hi, I am</h1>
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Tomasz Gajda</h2>
                <p className="text-xl text-gray-600">Front-end Developer / UI Designer</p>
                {/* Add icons or more text here */}
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-black flex justify-center items-center">
                <Image
                    src={profileImage} // Update this with your image path
                    alt="Profile Image"
                    width={400}
                    height={400}
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default Banner;