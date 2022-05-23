import React from 'react';
import car2 from '../../images/car-parts-1 (9).jpg';
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div   className="hero min-h-full my-20 bg-hero-local "  >
                <div className="hero-content flex-col lg:flex-row-reverse py-0 ">
                    <img src='https://i.ibb.co/P1mvSm1/joey-banks-YApi-Wyp0lqo-unsplash.jpg' className="lg:max-w-lg rounded-lg shadow-2xl" alt=''/>
                    <div className='ml-11'>
                        <h1 className="text-4xl font-bold">Brake Kit</h1>
                        <p className="py-6">Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom.</p>
                      <MainButton>Get Started</MainButton>
                    </div>
                </div>

            </div>
    );
};

export default Banner;