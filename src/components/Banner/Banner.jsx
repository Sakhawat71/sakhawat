import Image from 'next/image';
import React from 'react';
import profileImage from '@/assets/logo1.png';

const Banner = () => {
    return (
        <div className="flex h-screen mx-auto justify-center overflow-hidden">

            <div className="lg:w-1/2 w-full bg-[#D7D7D7] flex flex-col justify-center items-start p-16 ">
                <h1 className="text-4xl font-bold mb-4">Hi, I am</h1>
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Tomasz Gajda</h2>
                <p className="text-xl text-gray-600">Front-end Developer / UI Designer</p>

            </div>

            <div className="lg:w-1/2 -skew-x-12 bg-black hidden lg:flex justify-center items-center">
                <Image
                    src={profileImage}
                    alt="Profile Image"
                    width={400}
                    height={400}
                    className="rounded-full"
                />
            </div>
        </div>

        // <div className="relative h-screen flex items-center justify-center">
        //     {/* Diagonal Background */}
        //     <div className="absolute inset-0 bg-gray-100" />
        //     <div className="absolute inset-0 bg-black transform -skew-x-12 origin-bottom-left" />

        //     {/* Content */}
        //     <div className="relative z-10 flex flex-col items-center text-center">
        //         <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
        //             Hi, I am
        //         </h1>
        //         <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        //             Tomasz Gajda
        //         </h2>
        //         <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
        //             Front-end Developer / UI Designer
        //         </p>
        //         <div className="mt-4 flex space-x-4">
        //             {/* Add your social icons here */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;