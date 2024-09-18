import Image from 'next/image';
import React from 'react';
import profileImage from '@/assets/dev01.png';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex h-screen mx-auto justify-center overflow-hidden font-raleway lg:max-h-[90vh]">

            <div className="lg:w-5/12 w-full bg-[#D7D7D7] flex flex-col  justify-center lg:items-start p-10 md:p-16 space-y-12 lg:pl-28 md:items-center text-center lg:text-start ">
                <div>
                    <h1 className="text-xl md:text-4xl font-bold mb-4">Hi, I am</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-black ">Sakhawat H</h2>
                    <p className="md:text-xl font-extrabold text-[#909090]">Front-end Developer / React Next.js</p>
                </div>

                <div className='flex space-x-6 justify-center'>
                    <Link href="https://github.com/Sakhawat71" target="_blank">
                        <FaTwitter className='text-2xl w-9 h-9' />
                    </Link>
                    <Link href="https://github.com/Sakhawat71" target='_blank' rel="noopener noreferrer">
                        <FaGithub className='text-2xl w-9 h-9' />
                    </Link>
                    <Link href="https://linkedin.com/in/s3h" target='_blank'>
                        <FaLinkedin className='text-2xl w-9 h-9' />
                    </Link>
                </div>

            </div>

            <div className="lg:w-7/12 hidden lg:flex justify-center items-center">

                <div className=" -skew-x-[10deg] translate-x-20 w-full h-full flex justify-center items-center bg-black">
                </div>

                <div className='absolute bottom-0'>
                    <Image
                        src={profileImage}
                        alt="Profile Image"
                        width={400}
                        height={400}
                    />
                </div>

            </div>
        </div>

    );
};

export default Banner;