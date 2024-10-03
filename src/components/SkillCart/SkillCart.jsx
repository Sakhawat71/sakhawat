"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import liveSite from '@/assets/card/live.png';
import gitHub from '@/assets/card/github.png';

const SkillCart = ({project}) => {

    // console.log(project)
    

    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden ">
            <figure className="w-full">
                <Carousel
                    showThumbs={false} 
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2500}
                    showStatus={false} 
                    stopOnHover={true}
                    dynamicHeight={true}
                >
                    {project?.images?.map((image, index) => (
                        <div key={index}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="responsive"
                                width={100}
                                height={100}
                                className=" w-full h-48"
                            />
                        </div>
                    ))}
                </Carousel>
            </figure>

            <div className="card-body ">
                <h2 className="card-title text-lg font-semibold">{project?.projectName}</h2>
                <p className="text-gray-600">{project?.projectDis}</p>
            </div>

            <div className="card-actions flex justify-between items-center py-2 px-5">
                <Link target="_blank" href={project?.liveLink} className="flex items-center space-x-2 cursor-pointer">
                    <Image src={liveSite} width={60} height={40} alt="Live Site" />
                    <span className="text-[#F2303F] font-medium hover:underline">Live Site</span>
                </Link>

                <Link target="_blank" href={project?.gitRepo} className="flex items-center space-x-2 cursor-pointer">
                    <Image src={gitHub} width={40} height={20} alt="GitHub" />
                    <span className="text-gray-600 font-medium hover:underline">GitHub Repo</span>
                </Link>
            </div>
        </div>
    );
};

export default SkillCart;