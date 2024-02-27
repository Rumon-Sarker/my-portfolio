import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt="icon" className='w-16 h-26 object-contain' />
                    <h1 className='text-[20px]'>{title}</h1>

                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className='mt-6'>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-5 text-secondary text-[17px] max-w-4xl leading-[30px]'>
                As a Junior Frontend Developer, my aim is to grow alongside a dynamic team, honing my skills in HTML, CSS, JavaScript, React, Nextjs, Nodejs and MongoDb to craft engaging user experiences. Committed to learning and adapting swiftly, I aspire to contribute creatively to projects, driven by a passion for innovation and a dedication to delivering high-quality solutions.
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-12 mx-auto items-center justify-center'>
                {
                    services?.map((services, index) => (
                        <ServiceCard key={index} index={index} {...services} />
                    ))
                }

            </div>

        </>
    );
};

export default SectionWrapper(About, "about");