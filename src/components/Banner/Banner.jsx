import Image from 'next/image';
import React from 'react';
import profileImage from '@/assets/dev01.png';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex h-screen mx-auto justify-center overflow-hidden font-raleway">

            <div className="lg:w-5/12 w-full bg-[#D7D7D7] flex flex-col justify-center items-start p-16 space-y-12">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Hi, I am</h1>
                    <h2 className="text-7xl font-extrabold text-black ">Sakhawat H</h2>
                    <p className="text-2xl font-extrabold text-[#909090]">Front-end Developer / React Next.js</p>
                </div>

                <div className='flex space-x-6 '>
                    <Link href="/" className='bg-[#C4C4C4]'>
                        <FaTwitter className='text-2xl w-9 h-9' />
                    </Link>
                    <Link href="/" className='bg-[#C4C4C4]'>
                        <FaGithub className='text-2xl w-9 h-9' />
                    </Link>
                    <Link href="/" className='bg-[#C4C4C4]'>
                        <FaLinkedin className='text-2xl w-9 h-9' />
                    </Link>
                </div>

            </div>

            <div className="lg:w-7/12 hidden lg:flex justify-center items-center">

                <div className=" -skew-x-[10deg] translate-x-20 w-full h-full flex justify-center items-center bg-black">

                </div>

                <div className='absolute'>
                    <Image
                        src={profileImage}
                        alt="Profile Image"
                        width={400}
                        height={400}
                        // className=""
                    />
                </div>

            </div>
        </div>

    );
};

export default Banner;