import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import Feauters from '../../Components/Feauters/Feauters';
import ContactUs from '../../Components/ContactUs/ContactUs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
  
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <div className='min-h-screen relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10'>
        {/* Decorative Shapes */}
        <img
          src='/images/shape-2.png'
          alt="Background"
          className="w-96 h-96 absolute -left-20 -top-20 opacity-50"
        />

        <img
          src='/images/shape-4.png'
          alt="Background"
          className="absolute right-0 top-0 h-1/3 rotate-180 opacity-50"
        />

        {/* Hero Text Content */}
        <div className='flex flex-col gap-6 md:w-1/2 z-10'>
          <h1 className='md:text-8xl text-6xl text-white font-rubik-doodle-shadow font-extrabold'>
            QuizNova
          </h1>
          <p className='md:text-lg text-base text-gray-300 font-rubik-doodle-shadow font-bold leading-relaxed'>
            Welcome to QuizNova, your ultimate destination for intellectual growth and fun learning! Our mission is to empower minds through a fusion of enlightening blog content and captivating quizzes.
            <br /><br />
            At QuizNova, we believe that knowledge is the ultimate superpower, and we're here to equip you with the tools you need to unlock your full potential.
          </p>
          <Link to='/about' className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-10 py-4 text-center w-fit transition-all hover:scale-105 shadow-lg shadow-lime-500/20">
            Know More
          </Link>
        </div>

        {/* Hero Video Content */}
        <div className='w-full md:w-1/2 z-10'>
          <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(163,230,53,0.3)] border-4 border-lime-400">
            <iframe 
              width="100%" 
              height="350" 
              src="https://www.youtube.com/embed/videoseries?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='min-h-screen w-full flex flex-col gap-14 items-center py-20 bg-gray-900/30'>
        <h1 className='text-white md:text-6xl font-extrabold z-20 sm:text-5xl text-3xl text-center'>
          Know About QuizNova
        </h1>
        <Card />
      </div>

      {/* Features Section */}
      <div className='py-20'>
        <Feauters />
      </div>

      {/* Contact Section */}
      <div className="bg-black py-20">
        <ContactUs/>
      </div>

    </div>
  );
}

// Landing page with hero section and features
export default Home;
