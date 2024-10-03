"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import liveSite from '@/assets/card/live.png';
import gitHub from '@/assets/card/github.png';

const SkillCart = ({images}) => {

    

    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden">
            <figure className="w-full">
                <Carousel
                    showThumbs={false}  // Hides thumbnails
                    infiniteLoop={true}  // Enables infinite scrolling
                    autoPlay={true}  // Autoplays the slider
                    interval={3000}  // Time between slides
                    showStatus={false}  // Hides the slide status
                    stopOnHover={true}  // Pauses the autoplay when hovered
                    dynamicHeight={true}  // Adjusts height based on content
                >
                    {images.map((image, index) => (
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

            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">Stylish Shoes!</h2>
                <p className="text-gray-600">If a dog chews shoes, whose shoes does he choose?</p>
            </div>

            <div className="card-actions flex justify-between items-center py-5 px-5">
                <Link target="_blank" href="/hello" className="flex items-center space-x-2 cursor-pointer">
                    <Image src={liveSite} width={60} height={40} alt="Live Site" />
                    <span className="text-blue-500 font-medium hover:underline">Live Site</span>
                </Link>

                <Link target="_blank" href="/hello" className="flex items-center space-x-2 cursor-pointer">
                    <Image src={gitHub} width={40} height={20} alt="GitHub" />
                    <span className="text-gray-600 font-medium hover:underline">GitHub Repo</span>
                </Link>
            </div>
        </div>
    );
};

export default SkillCart;