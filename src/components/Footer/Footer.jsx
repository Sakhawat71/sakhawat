'use client'
import Link from 'next/link';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {


    return (
        <div className='bg-[#1A1A1A] text-white text-center flex flex-col items-center justify-center py-16'>

            <a
                // href="https://drive.usercontent.google.com/download?id=1NvjZG9lhmJ9TSwqZMZtLtMB3cOJHYXZv&export=download&authuser=0&confirm=t&uuid=0efdabbe-6d13-4f36-9e71-ab815ec6491c&at=AN_67v0WEkOn1miNZx1fozvATj-l:1728048830686"
                href='https://drive.google.com/file/d/1NvjZG9lhmJ9TSwqZMZtLtMB3cOJHYXZv/view?usp=drive_link'
                download
                target='_blank'
                >
                <button>View CV</button>
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