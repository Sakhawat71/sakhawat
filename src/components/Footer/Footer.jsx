'use client'
import Link from 'next/link';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {


    return (
        <div className='bg-[#1A1A1A] text-white text-center flex flex-col items-center justify-center py-16'>

            {/* <Link href={"/"} >BACK TO TOP</Link> */}
            <button >Download CV </button>

            <ScrollToTop
                smooth
                className='pl-1'
            />


            <div className='flex py-5 w-full items-center justify-center space-x-5'>

                <Link href={"/"} > <FaFacebook className='w-8 h-8 ' />  </Link>

                <Link href={"/"}> <FaLinkedin className='w-8 h-8 ' />  </Link>

                <Link href={"/"}> <FaGithub className='w-8 h-8 ' />  </Link>

                <Link href={"/"}> <GoMail className='w-8 h-8 ' />  </Link>
            </div>

            <small>@2020 Sakhawat All Rights Reserved.</small>
        </div>
    );
};

export default Footer;