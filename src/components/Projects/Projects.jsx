"use client"
import React from 'react';
import { Parallax } from 'react-parallax';

const Projects = () => {



    return (
        <div>
            <Parallax
                bgImage="https://i.ibb.co.com/bXt4CJq/para.jpg"
                strength={200}
                className='h-[120px] md:h-[300px] lg:h-[500px]'
            >
                <div className='h-[500px] flex items-center'>
                    <div className=' border-black border-[5px] w-72 mx-auto text-center '>
                        <h2 className='text-white font-bold text-xl tracking-[6px] p-3 uppercase ' >Aspirations</h2>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Projects;