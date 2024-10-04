import SkillCart from "../SkillCart/SkillCart";

const JavaScript = () => {

    const projectInfo = [
        {
            id: 1,
            images: [
                { src: "https://i.ibb.co.com/KrkSPKR/drive-Gear-5.png" },
                { src: "https://i.ibb.co.com/98tnMPP/drive-Gear-1.png" },
                { src: "https://i.ibb.co.com/2kQN6Db/drive-Gear-4.png" },
                { src: "https://i.ibb.co.com/2dS2nDC/drive-Gear-2.png" },
                { src: "https://i.ibb.co.com/yyM0WH8/drive-Gear-3.png" }
            ],
            alt: "phtube",
            projectName: "PH Tube",
            projectDis: "React , MongoDB and Express.js is used in this project.Also used are React Router, Context api and CRUD Operations with Mongodb + express.js",
            liveLink: "https://phero-tube-sabbir71.netlify.app/",
            gitRepo: "https://github.com/Sakhawat71/ph-tube",
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

export default JavaScript;