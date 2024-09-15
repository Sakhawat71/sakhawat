import Link from 'next/link';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { LiaGithubSquare } from "react-icons/lia";

const Footer = () => {


    return (
        <div className='bg-[#1A1A1A] text-white text-center my-60'>

            <div className='flex '>
                <Link href={"/"}> <AiOutlineFacebook />  </Link>
                <Link href={"/"}> <AiOutlineLinkedin />  </Link>
                <Link href={"/"}> <LiaGithubSquare />  </Link>
                <Link href={"/"}> <AiOutlineMail />  </Link>
            </div>

            <small>@2020 Tomasz Gajda All Rights Reserved.</small>
        </div>
    );
};

export default Footer;