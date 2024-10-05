import React from 'react';

const Skills = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <h1 className="text-4xl font-bold">My Skills</h1>
            <ul className="mt-4 text-lg text-gray-700 max-w-2xl text-center space-y-2">
                <li>🌟 HTML & CSS</li>
                <li>🌟 JavaScript (ES6+)</li>
                <li>🌟 React.js</li>
                <li>🌟 Next.js</li>
                <li>🌟 Node.js</li>
                <li>🌟 MongoDB</li>
                <li>🌟 Tailwind CSS</li>
            </ul>
        </div>
    );
};

export default Skills;