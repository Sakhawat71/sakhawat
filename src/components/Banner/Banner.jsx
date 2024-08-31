import Image from 'next/image';
import React from 'react';
import profileImage from '@/assets/logo1.png';

const Banner = () => {
    return (
        <div className="flex h-screen mx-auto justify-center overflow-hidden">

            <div className="lg:w-5/12 w-full bg-[#D7D7D7] flex flex-col justify-center items-start p-16 ">
                <h1 className="text-4xl font-bold mb-4">Hi, I am</h1>
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Tomasz Gajda</h2>
                <p className="text-xl text-gray-600">Front-end Developer / UI Designer</p>

            </div>

            <div className="lg:w-7/12 -skew-x-12 translate-x-20 bg-black hidden lg:flex justify-center items-center">
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