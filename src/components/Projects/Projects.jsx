"use client"
import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

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

            <div className=' flex items-center justify-center'>
                <div role="tablist" className="tabs tabs-bordered py-10 ">

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="ALL" />

                    <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="React.js"
                        defaultChecked
                    />

                    <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="JavaScript" />

                    <div role="tabpanel" className="tab-content p-10">Tab content 3</div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="HTML" />

                    <div role="tabpanel" className="tab-content p-10">Tab content 4</div>
                </div>
            </div>



            <div className='flex justify-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>one</Tab>
                        <Tab>two</Tab>
                        <Tab>three</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>hello world 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>hello world 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>hello world 3</h2>
                    </TabPanel>

                </Tabs>
            </div>


        </div>
    );
};

export default Projects;