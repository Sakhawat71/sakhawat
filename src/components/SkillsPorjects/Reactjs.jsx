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
            projectDis: "A real-time chat application built with React and WebSockets.",
            liveLink: "https://chat-canvas-live.net",
            gitRepo: "https://github.com/user/chat-canvas",
        },
        {
            id: 1,
            images: [
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" },
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" },
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" },
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" },
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" }
            ],
            alt: "Online Project",
            projectName: "Online Group S",
            projectDis: "A real-time chat application built with React and WebSockets.",
            liveLink: "https://chat-canvas-live.com",
            gitRepo: "https://github.com/user/chat-canvas",
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-[#D6D6D6]'>

            {
                projectInfo?.map(project =>
                    <SkillCart key={project.id} project={project} />
                )
            }

        </div>
    );
};

export default Reactjs;