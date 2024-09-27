"use client"
import Image from 'next/image';
import Link from 'next/link';
import liveSite from '@/assets/card/live.png';

const AllProjects = () => {


    return (
        <div className='grid grid-cols-3 gap-2 bg-[#D6D6D6]'>

            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="card-actions justify-between py-5 px-5">

                    <Link target='_blank' href={"/hello"} className="badge  cursor-pointer">
                        <Image src={liveSite} width={60} height={40} alt='livelink' />
                    </Link>

                    <Link target='_blank' href={"/hello"} className="badge  cursor-pointer">
                        <Image src={liveSite} width={60} height={40} alt='livelink' />
                    </Link>
                </div>
            </div>

            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>

            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>


        </div>
    );
};

export default AllProjects;