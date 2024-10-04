"use client"
import SkillCart from '../SkillCart/SkillCart';

const Reactjs = () => {

    const projectInfo = [
        {
            id: 1,
            images: [
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" },
                { src: "https://i.ibb.co.com/gWCBbYk/chat-canvas-71-web-app-membership.png" },
                { src: "https://i.ibb.co.com/VgHsCdj/chat-canvas-71-web-app-login.png" },
                { src: "https://i.ibb.co.com/XYd7NDd/chat-canvas-71-web-app-dashboard-my-profile.png" },
                { src: "https://i.ibb.co.com/RPPjC7J/chat-canvas-71-web-app-dashboard-my-profile-2.png" },
                { src: "https://i.ibb.co.com/q1sY3xn/chat-canvas-71-web-app-dashboard-my-profile-1.png" },
            ],
            alt: "Chat Canvas Project",
            projectName: "Chat Canvas",
            projectDis: "Online Forum Platform.Technologies Used: React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, daisyUI.",
            liveLink: "https://chat-canvas-71.web.app",
            gitRepo: "https://github.com/Sakhawat71/chat-canvas-frontend",
        },
        {
            id: 2,
            images: [
                { src: "https://i.ibb.co.com/yP6Q4Wh/costudy-7.png" },
                { src: "https://i.ibb.co.com/rwyLHTf/costudy-3.png" },
                { src: "https://i.ibb.co.com/ctyGqdg/costudy-8.png" },
                { src: "https://i.ibb.co.com/qjxgWvr/costudy-4.png" },
                { src: "https://i.ibb.co.com/M65GGfv/costudy-5.png" }
            ],
            alt: "Online CoStudy ",
            projectName: "CoStudy",
            projectDis: "CoStudy is a web application that facilitates collaborative learning by allowing users to create, update, and view assignments.",
            liveLink: "https://costudy.netlify.app",
            gitRepo: "https://github.com/Sakhawat71/CoStudy-frontend",
        },
        {
            id: 3,
            images: [
                { src: "https://i.ibb.co.com/KrkSPKR/drive-Gear-5.png" },
                { src: "https://i.ibb.co.com/98tnMPP/drive-Gear-1.png" },
                { src: "https://i.ibb.co.com/2kQN6Db/drive-Gear-4.png" },
                { src: "https://i.ibb.co.com/2dS2nDC/drive-Gear-2.png" },
                { src: "https://i.ibb.co.com/yyM0WH8/drive-Gear-3.png" }
            ],
            alt: "DriveGear",
            projectName: "DriveGear",
            projectDis: "React , MongoDB and Express.js is used in this project.Also used are React Router, Context api and CRUD Operations with Mongodb + express.js",
            liveLink: "https://brandshop-sabbir71.web.app",
            gitRepo: "https://github.com/Sakhawat71/DriveGear-frontend",
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#D6D6D6]'>

            {
                projectInfo?.map(project =>
                    <SkillCart key={project.id} project={project} />
                )
            }

        </div>
    );
};

export default Reactjs;