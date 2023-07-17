'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
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

    return <div className='text-center w-full bg-v-d text-white font-light p-5'>
        <div className='m-4'>
            <Link href='/'> Home</Link> | 
            <Link href='/contact'> Contact us</Link> | 
            <Link href='/about'> About us</Link> | 
            <Link href='/services'> Our services</Link>
        </div>
        <div className='m-4'>
            <Link className='underline mx-2' href='/terms_&_conditions'> Terms & Conditions</Link> 
            | 
            <Link className='underline mx-2' href='/policy'>Policy</Link></div>
        { showTopBtn ? 
            <div onClick={goToTop} className='fixed bottom-5 right-5 sm:bottom-16 sm:right-16 bg-white rounded-full z-50 cursor-pointer p-2 sm:p-4 drop-shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </div> : ''
        }
    </div>
}