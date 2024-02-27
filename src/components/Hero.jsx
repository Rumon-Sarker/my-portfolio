import React from 'react';
import { styles } from "../styles";
import { TypeAnimation } from 'react-type-animation';
import { ComputerCanvas } from './canvas/Computers';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-purple-500' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='mt-20'>
                    <h1 className='text-white text-2xl mb-4 sm:text-5xl  font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Rumon',
                                1000,
                                'Web developer',
                                1000,
                                'Nextjs Developer',
                                1000,
                                'Mern Stack Developer',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '1em' }}
                            repeat={Infinity}

                        />
                    </h1>
                    <p className={`${styles.heroSubText} text-orange-100`}> I am a junior Frontend developer in React & Nextjs.</p>

                    {/* <button className='rounded-full px-1 py-1 mt-6 w-full sm:w-fit  bg-transparent hover:bg-slate-800 text-white mt-nt-3 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 '>
                        <span className='block bg-black hover:bg-salte-800 py-2 px-5 rounded-full'><a href="" >Download Resume</a></span>
                    </button> */}
                </div>
            </div>
            <ComputerCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href="#about">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-fuchsia-600 mb-1"
                        />

                    </div>
                </a>

            </div>


        </section>
    );
};

export default Hero;