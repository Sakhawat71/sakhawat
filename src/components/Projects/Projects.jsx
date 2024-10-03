"use client"
import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import liveSite from '@/assets/card/live.png';
import Image from 'next/image';
import Link from 'next/link';
import AllProjects from '../SkillsPorjects/AllProjects';
import Reactjs from '../SkillsPorjects/Reactjs';

const Projects = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='mt-20 '>
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


            <div className="w-full my-20">
                <Tabs >
                    <TabList 
                    className="relative flex justify-center space-x-8 w-full border-b border-gray-300 "
                    // className="flex justify-center space-x-4 border-b-2  w-full cursor-pointer bg-black"
                    >

                        <Tab>
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

                    <div className="mt-8 px-4 w-full">

                        <TabPanel>
                            <AllProjects />
                        </TabPanel>

                        <TabPanel>
                            <Reactjs />
                        </TabPanel>

                        <TabPanel>
                            
                        </TabPanel>

                        <TabPanel>
                            
                        </TabPanel>
                    </div>
                </Tabs>
            </div>



        </div>
    );
};

export default Projects;