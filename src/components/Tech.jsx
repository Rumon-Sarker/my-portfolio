
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import BallCanvas from './canvas/Ball';


const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {
                technologies.map((technoLogy, index) => (
                    <div key={index} className='w-28 h-28'>
                        <BallCanvas icon={technoLogy.icon} />
                    </div>
                ))
            }
        </div>
    );
};

export default SectionWrapper(Tech, "");