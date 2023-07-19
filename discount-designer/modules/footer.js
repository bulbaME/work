'use client';

import Link from "next/link";
import { useState, useEffect } from "react";


export default function Footer(props) {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return <div className='w-full flex text-center p-4 bg-black text-white font-light'>
        <div className='m-auto'>
            <div className='m-auto font-semibold'>
                Navigation
            </div>
            <div className=''>
                <Link className='mx-2' href='/'>Home</Link>
                <Link className='mx-2' href='/contact'>Contact</Link>
                <br />
                <Link className='mx-2' href='/services'>Services</Link>
                <Link className='mx-2' href='/about'>About</Link>
            </div>
        </div>
        <div className='w-fit m-auto'>
            <Link href='/policy'>Policy</Link>
            <br />
            <Link href='/terms-&-conditions'>Terms & Conditions</Link>
        </div>
        { showTopBtn ? 
        <div className='fixed bg-v1-m bottom-[4rem] right-[2rem] text-white sm:p-6 p-4 rounded-full cursor-pointer' onClick={goToTop}>
            <div className='m-auto w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="sm:w-10 sm:h-10 w-6 h-6">
                <path fillRule="evenodd" d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </div>
        </div> : '' }
    </div>;
}