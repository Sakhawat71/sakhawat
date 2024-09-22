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

            {/* <div className=' flex items-center justify-center '>

                <div role="tablist" className="tabs tabs-bordered py-10 w-full justify-center  border-red-600 border-2">

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="ALL"
                        defaultChecked
                    />

                    <div role="tabpanel" className="tab-content p-10 border-black mx-auto">

                        <div className='h-96 w-full bg-white grid grid-cols-3 gap-10'>
                            <p>hello</p>
                            <p>hi</p>
                            <p>ik</p>
                        </div>


                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="React.js"
                    />

                    <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="JavaScript"
                    />

                    <div role="tabpanel" className="tab-content p-10">Tab content 3</div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="HTML"
                    />

                    <div role="tabpanel" className="tab-content p-10">Tab content 4</div>
                </div>
            </div> */}
            


            <div className="w-full my-20 ">
                <Tabs >
                    <TabList className="flex justify-center space-x-4 border-b-2  w-full cursor-pointer">
                        
                        <Tab className="border-red-500">
                            ALL
                        </Tab>

                        <Tab className={({ selected }) =>
                            `w-1/4 text-center px-4 py-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out 
        ${selected ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`
                        }>
                            React.js
                        </Tab>

                        <Tab className={({ selected }) =>
                            `w-1/4 text-center px-4 py-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out 
        ${selected ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`
                        }>
                            JavaScript
                        </Tab>

                        <Tab className={({ selected }) =>
                            `w-1/4 text-center px-4 py-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out 
        ${selected ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`
                        }>
                            HTML/CSS
                        </Tab>

                    </TabList>

                    <div className="mt-8 px-4 bg-gray-50 w-full">
                        <TabPanel>
                            <h2 className="text-xl font-semibold">Welcome to the ALL section</h2>
                            <p>Here you can see all the content from React.js, JavaScript, and HTML/CSS sections combined.</p>
                        </TabPanel>
                        <TabPanel>
                            <h2 className="text-xl font-semibold">React.js Content</h2>
                            <p>This section showcases React.js-related content and tutorials.</p>
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