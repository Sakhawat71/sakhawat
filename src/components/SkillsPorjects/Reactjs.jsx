"use client"
import SkillCart from '../SkillCart/SkillCart';

const Reactjs = () => {

    const images = [
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 1" },
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 1" },
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 1" },
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 2" },
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 3" }
    ];
    const images2 = [
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 1" },
        { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png", alt: "Image 2" },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-[#D6D6D6]'>

            <SkillCart images={images} />
            <SkillCart images={images} />
            <SkillCart images={images} />
            <SkillCart images={images2} />

        </div>
    );
};

export default Reactjs;