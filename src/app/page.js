import AboutMe from '@/components/AboutMe/AboutMe';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import React from 'react';


const HomePage = () => {


    return (
        <div className='bg-[#D7D7D7]'>
            <Banner />
            <AboutMe />

            <Footer />
        </div>
    );
};

export default HomePage;