import Image from 'next/image';
import React from 'react';
import profileImage from '@/assets/logo1.png';

const Banner = () => {
    return (
        <div className="flex h-screen mx-auto justify-center">

            <div className="lg:w-1/2 w-full bg-gray-200 flex flex-col justify-center items-start p-16 ">
                <h1 className="text-4xl font-bold mb-4">Hi, I am</h1>
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Tomasz Gajda</h2>
                <p className="text-xl text-gray-600">Front-end Developer / UI Designer</p>
                
            </div>

            <div className="lg:w-1/2 bg-black hidden lg:flex justify-center items-center">
                <Image
                    src={profileImage}
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