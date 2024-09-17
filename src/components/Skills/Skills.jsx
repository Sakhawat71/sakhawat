import React from 'react';
import "./skills.css";
import Image from 'next/image';
import html5 from "@/assets/html.png";
import css3 from "@/assets/css3.png";
import es6 from "@/assets/es6.png";
import reactjs from "@/assets/reactjs.png";
import nextjs from "@/assets/nextjs.png";
import tailwind from "@/assets/tailwind.png";
import bootstrap from "@/assets/bootstrap.png";
import mui from "@/assets/mui.png";
import nodejs from "@/assets/nodejs.png";
import express from "@/assets/expressjs.png";
import mongodb from "@/assets/mongodb.png";
import git from "@/assets/git.png";
import vscode from "@/assets/vs-code.png";
import figma from "@/assets/figma.png";
import vercel from "@/assets/vercel.png";
import firebase from "@/assets/firebase.png";
import netlify from "@/assets/netlify.png";


const Skills = () => {
    return (
        <div className='gradient-bg h-full my-20 mx-auto w-3/4 font-montserrat'>

            <div className=' border-black border-[5px] w-60 mx-auto text-center'>
                <h2 className='font-bold text-xl tracking-[6px] p-3'>SKILLS</h2>
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Front-End</h1>
            
            {/* front end section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={html5}
                        alt='html5'
                        width={80}
                        height={80}
                    />
                    <p>HTML5</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={css3}
                        alt='html5'
                        width={80}
                        height={80}
                    />
                    <p>CSS3</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={es6}
                        alt='html5'
                        width={80}
                        height={80}
                    />
                    <p>JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={reactjs}
                        alt='reactjs'
                        width={80}
                        height={80}
                    />
                    <p>REACT.JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={nextjs}
                        alt='nextjs'
                        width={80}
                        height={80}
                    />
                    <p>NEXT.JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={tailwind}
                        alt='tailwind'
                        width={80}
                        height={80}
                    />
                    <p>TAILWIND CSS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={mui}
                        alt='mui'
                        width={80}
                        height={80}
                    />
                    <p>MATERIAL UI</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={bootstrap}
                        alt='bootstrap'
                        width={80}
                        height={80}
                    />
                    <p>Bootstrap</p>
                </div>



            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Back End</h1>

            {/* back end section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>
                
                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={nodejs}
                        alt='nodejs'
                        width={80}
                        height={80}
                    />
                    <p>NODE.JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={express}
                        alt='expressjs'
                        width={150}
                        height={80}
                    />
                    <p>EXPRESS.JS</p>
                </div>
            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Databases</h1>

            {/* Databases section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>
                
                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={mongodb}
                        alt='MongoDB'
                        width={80}
                        height={80}
                    />
                    <p>MongoDB</p>
                </div>

                
            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Tools</h1>

            {/* Tools section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>
                
                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={git}
                        alt='github'
                        width={80}
                        height={80}
                    />
                    <p>GitHub</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={vscode}
                        alt='vscode'
                        width={80}
                        height={80}
                    />
                    <p>VS CODE</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={figma}
                        alt='figma'
                        width={80}
                        height={80}
                    />
                    <p>FIGMA</p>
                </div>
                
            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Hosting & Server</h1>

            {/* Hosting & Serverless Platforms section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>
                
                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={firebase}
                        alt='firebase'
                        width={80}
                        height={80}
                    />
                    <p>FIREBASE</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={vercel}
                        alt='vercel'
                        width={80}
                        height={80}
                    />
                    <p>VERCEL</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={netlify}
                        alt='netlify'
                        width={80}
                        height={80}
                    />
                    <p>Netlify</p>
                </div>
                
            </div>

             


        </div>
    );
};

export default Skills;