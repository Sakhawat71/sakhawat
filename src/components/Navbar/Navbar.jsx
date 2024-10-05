import Image from 'next/image';
import logo from "@/assets/white_logo.png"
import Link from 'next/link';
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {

    const navLink = <>
        <li><a href='/aboutme'>About me</a></li>
        <li><a href='/skills'>Skills</a></li>
        <li><a href='/blog'>Blog</a></li>
    </>

    return (
        <div className="navbar h-16 text-balck lg:px-20 bg-[#1d1d1d] font-montserrat">

            <div className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RiMenu2Fill className="h-5 w-5 text-white" />
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#D7D7D7] text-black rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-lg">
                        {navLink}
                    </ul>
                </div>

                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">
                        <Image src={logo} height={20} width={200} alt='logo' />
                    </Link>
                </div>
            </div>

            <div className="navbar-end">

                <div className=" flex items-center space-x-4">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex mr-20 text-white ">
                        {navLink}
                    </ul>
                    <a href='/Sakhawat_react.jsDev_resume.pdf' download >
                        <button className="btn btn-sm">Download CV</button>
                    </a>

                </div>
            </div>


        </div >
    );
};

export default Navbar;