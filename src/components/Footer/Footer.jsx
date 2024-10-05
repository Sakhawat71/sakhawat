'use client'
import Link from 'next/link';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {


    return (
        <div className='bg-[#1A1A1A] text-white text-center flex flex-col items-center justify-center py-10 space-y-3'>

            <a href='/Sakhawat_react.jsDev_resume.pdf' download >
                <button className="btn btn-sm">Download CV</button>
            </a>



            <ScrollToTop
                smooth
                className='pl-1'
            />


            <div className='flex py-5 w-full items-center justify-center space-x-5'>

                <Link href={"https://www.facebook.com/Sakhawat.Hossain.Showrav/"} target='_blank' > <FaFacebook className='w-8 h-8 ' />  </Link>

                <Link href={"https://www.linkedin.com/in/s3h/"} target='_blank'> <FaLinkedin className='w-8 h-8 ' />  </Link>

                <Link href={"https://github.com/Sakhawat71"} target='_blank'> <FaGithub className='w-8 h-8 ' />  </Link>

                <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=sakhawat.showrav@gmail.com"} target='_blank'> <GoMail className='w-8 h-8 ' />  </Link>
            </div>

            <small>@2020 Sakhawat All Rights Reserved.</small>
        </div>
    );
};

export default Footer;