import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';
import { eye, github } from '../assets';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full"
            >
                <div className='relative w-full h-[270px]'>
                    <img src={image} alt="Image" className='w-full h-full object-cover rounded-2xl' />
                </div>
                <div className='absolute inset-0 flex gap-2  justify-end m-3 card-img_hover'>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img src={github} alt='github'
                            className='w-1/2 h-1/2 object-contain' />
                    </div>

                    {/* todo adding live link */}
                    <div
                        onClick={() => window.open(live_link, "_blank")}
                        className='bg-blue-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img src={eye} alt='github'
                            className='w-1/2 h-1/2 text-white object-contain' />
                    </div>

                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>

                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {
                        tags.map((tag, index) => (
                            <p key={index} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))
                    }

                </div>
            </Tilt>
        </motion.div>
    )

}
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()} className='mt-6'>
                <p className={styles.sectionSubText}>Work</p>
                <h2 className={styles.sectionHeadText}>My Projects</h2>
            </motion.div>
            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Every project is Fullstack project. I have developing this all project my knowlage.My experience is dainamic project developing and new tecnoligy using in the project.
                </motion.p>


            </div>
            <div className='mt-20 flex flex-wrap gap-7'>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index}
                            {...project}
                            index={index} />
                    ))
                }

            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");