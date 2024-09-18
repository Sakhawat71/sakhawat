"use client"
import React from 'react';
import { Parallax } from 'react-parallax';
import paraImage from "@/assets/projects/para.jpg";
import paraImagee from "../../assets/projects/para.jpg";

const Projects = () => {



    return (
        <div className='border border-black'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('@/assets/projects/para.jpg')}
                bgImageAlt="parallax"
                strength={-200}>

                <p>hello world</p>
                <div style={{ height: '200px' }} />
            </Parallax>
        </div>
    );
};

export default Projects;