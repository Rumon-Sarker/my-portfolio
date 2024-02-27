import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
const Navber = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to={"/"}
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src='https://i.ibb.co/mbPNqQS/Logo.png' alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer'>Rumon | Sarker</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-12'>
                    {navLinks.map((nav, index) => (
                        <li key={index}
                            className={`${active === nav.title ? "text-white" : "text-secondary"}  hover:text-white text-[18px]`}
                            onClick={() => setActive(nav.title)}

                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}

                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? "hidden" : "flex"}
                        p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className=' flex flex-col gap-3 items-start justify-end'>
                            {navLinks.map((nav, index) => (
                                <li key={index}
                                    className={`${active === nav.title ? "text-white" : "text-secondary"} font-poppins font-medium text-[18px]`}
                                    onClick={() => {

                                        setToggle(!toggle)
                                        setActive(nav.title)
                                    }}

                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}

                        </ul>

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navber;