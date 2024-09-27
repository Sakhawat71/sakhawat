"use client"
import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import liveSite from '@/assets/card/live.png';
import Image from 'next/image';
import Link from 'next/link';
import AllProjects from '../SkillsPorjects/AllProjects';

const Projects = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='my-20'>
            <Parallax
                bgImage="https://i.ibb.co.com/pXcCCV3/assignment-5.jpg"
                strength={200}
                className='h-[120px] md:h-[300px] lg:h-[350px]'
            >
                <div className='h-[350px] flex items-center'>
                    <div className=' border-white border-[5px] w-72 mx-auto text-center '>
                        <h2 className='text-white font-bold text-xl tracking-[6px] p-3 uppercase '>PORTFOLIO</h2>
                    </div>
                </div>
            </Parallax>


            <div className="w-full my-20 ">
                <Tabs >
                    <TabList className="flex justify-center space-x-4 border-b-2  w-full cursor-pointer">

                        <Tab >
                            ALL
                        </Tab>

                        <Tab >
                            React.js
                        </Tab>

                        <Tab >
                            JavaScript
                        </Tab>

                        <Tab >
                            HTML/CSS
                        </Tab>

                    </TabList>

                    <div className="mt-8 px-4 bg-[#D6D6D6] w-full">

                        <TabPanel>

                            <div className='grid grid-cols-3 gap-2 bg-[#D6D6D6]'>

                                <div className="card card-compact bg-base-100  shadow-xl">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                    </div>
                                    <div className="card-actions justify-between py-5 px-5">

                                        <Link target='_blank' href={"/hello"} className="badge  cursor-pointer">
                                            <Image src={liveSite} width={60} height={40} alt='livelink' />
                                        </Link>

                                        <Link target='_blank' href={"/hello"} className="badge  cursor-pointer">
                                            <Image src={liveSite} width={60} height={40} alt='livelink' />
                                        </Link>
                                    </div>
                                </div>

                                <div className="card card-compact bg-base-100  shadow-xl">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                    </div>
                                </div>

                                <div className="card card-compact bg-base-100  shadow-xl">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>

                                    </div>
                                </div>


                            </div>

                        </TabPanel>

                        <TabPanel>
                
                            <AllProjects />
                
                        </TabPanel>
                
                        <TabPanel>
                            <h2 className="text-xl font-semibold">JavaScript Content</h2>
                            <p>Here, you`ll find JavaScript-related topics, tips, and tricks.</p>
                        </TabPanel>
                
                        <TabPanel>
                            <h2 className="text-xl font-semibold">HTML/CSS Content</h2>
                            <p>Explore tutorials and resources about HTML and CSS for web development.</p>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>



        </div>
    );
};

export default Projects;