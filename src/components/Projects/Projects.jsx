"use client"
import React from 'react';
import { Parallax } from 'react-parallax';

const Projects = () => {



    return (
        <div className='my-20'>
            <Parallax
                bgImage="https://i.ibb.co.com/pXcCCV3/assignment-5.jpg"
                strength={200}
                className='h-[120px] md:h-[300px] lg:h-[350px]'
            >
                <div className='h-[350px] flex items-center'>
                    <div className=' border-white border-[5px] w-72 mx-auto text-center '>
                        <h2 className='text-white font-bold text-xl tracking-[6px] p-3 uppercase ' >PORTFOLIO</h2>
                    </div>
                </div>
            </Parallax>

            <div className='bg-[#1A1A1A]'>

            </div>

        </div>
    );
};

export default Projects;