'use client';
import React from 'react';

const Skills = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">My Skills</h1>

                {/* Frontend Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frontend Development</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">HTML5</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">CSS3</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">JavaScript (ES6+)</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">React.js</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Next.js</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">TypeScript</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Tailwind CSS</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Bootstrap</li>
                    </ul>
                </div>

                {/* Backend Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Backend Development</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Node.js</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Express.js</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">MongoDB</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">REST APIs</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Authentication (NextAuth)</li>
                    </ul>
                </div>

                {/* Other Skills */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Other Tools & Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Redux</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">MongoDB Compass</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Git & GitHub</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Postman</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">VS Code</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Figma</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Linux Basics</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Problem Solving (DSA)</li>
                    </ul>
                </div>

                {/* Learning Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Currently Learning</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Mongoose</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">Advanced TypeScript</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">GraphQL</li>
                        <li className="p-4 bg-white shadow-md rounded-lg text-center">System Design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
