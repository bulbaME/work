import Link from "next/link";

import { contacts } from "@/modules/data";
import { useState, useEffect } from "react";
import { WAppear } from "./widgets";

export default function Footer() {
    'use client';

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

    return <><div className='w-full py-2 bg-black text-white font-light sm:text-base text-sm drop-shadow-lg'>
        <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
            <div className='m-auto py-6 md:mr-8 mr-0 md:w-1/2'>
                <div className='font-bold mb-2 text-o'>{"© 2023 Diorama Designs. All rights reserved."}</div>
                {"At Diorama Designs, we're dedicated to bringing your imagination to life. With our visionary designs, we create captivating environments that tell stories, evoke emotions, and leave a lasting impression. Our commitment to excellence, meticulous attention to detail, and passion for creativity set us apart."}
            </div>
            <div className='m-auto py-6 mr-8 md:ml-auto ml-0'>
                <div className='font-bold mb-2 text-o'>Navigation</div>
                <Link href='/' className='underline decoration-black hover:decoration-r-l duration-300 decoration-4'>Home</Link> <br />
                <Link href='/about' className='underline decoration-black hover:decoration-r-l duration-300 decoration-4'>About</Link> <br />
                <Link href='/contact' className='underline decoration-black hover:decoration-r-l duration-300 decoration-4'>Contacts</Link> <br />
                <Link href='/services' className='underline decoration-black hover:decoration-r-l duration-300 decoration-4'>Services</Link> <br />
                <Link href='/faq' className='underline decoration-black hover:decoration-r-l duration-300 decoration-4'>FAQ</Link> <br />
            </div>
            <div className='m-auto py-6 md:mr-auto mr-0 md:w-1/4 w-3/5'>
                <div className='font-bold mb-2 text-o'>Contact us</div>
                <div>
                    <span className='font-semibold'>Phone:</span> {contacts.phone}
                </div>
                <div>
                    <span className='font-semibold'>E-mail:</span> {contacts.mail}
                </div>
                <div>
                    <span className='font-semibold'>Adress:</span> {contacts.adress}
                </div>
            </div>
        </WAppear></div>
        <div className='m-auto flex flex-wrap w-fit py-6'>
                <Link className='m-auto underline decoration-black hover:decoration-r-l duration-300 decoration-4' href='/policy'>Policy</Link>
                <div className='mx-2'>|</div>
                <Link className='m-auto underline decoration-black hover:decoration-r-l duration-300 decoration-4' href='/terms-&-conditions'>Terms & Conditions</Link>
        </div>
    </div>
    { showTopBtn ? 
        <div onClick={goToTop} className='fixed lg:hidden bottom-4 right-4 duration-300 sm:bottom-32 sm:right-5 bg-black hover:text-r-l text-white rounded-full z-50 cursor-pointer p-2 sm:p-4 hover:drop-shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </div> : ''
    }
    </>;
}