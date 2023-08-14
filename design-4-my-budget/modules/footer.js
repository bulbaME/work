import Link from "next/link";

import { contacts } from "@/public/json/data";
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

    return <div className='w-full p-8 py-2 bg-white text-black sm:text-base text-sm'><WAppear>
        <div className='max-w-7xl m-auto flex md:flex-nowrap flex-wrap'>
            <div className='m-auto py-6 px-8 sm:ml-auto ml-0 md:w-1/2'>
                <div className='font-bold mb-2 text-o'>{"© 2023 Design4MyBudget. All rights reserved."}</div>
                {"Ready to see your ideas take shape? Whether it's a new brand identity, a website that stands out, an interior space that reflects your style, or captivating packaging that leaves an impression – Design 4 My Budget is here to turn your dreams into reality."}
            </div>
            <div className='m-auto px-8 py-6 ml-0 sm:w-1/3'>
                <div className='font-bold mb-2 text-o'>Contact us</div>
                <div>
                    Phone: {contacts.phone}
                </div>
                <div>
                    E-mail: {contacts.mail}
                </div>
                <div>
                    Adress: {contacts.adress}
                </div>
            </div>
            <div className='m-auto py-6 px-8 md:ml-auto ml-0 w-1/6'>
                <div className='font-bold mb-2 text-o'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/contact'>Contact</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/about'>About</Link> <br />
            </div>
        </div>
        <div className='m-auto flex flex-wrap w-fit py-6'>
                <Link className='m-auto' href='/policy'>Policy</Link>
                <div className='mx-2'>|</div>
                <Link className='m-auto' href='terms-&-conditions'>Terms & Conditions</Link>
        </div>
        { showTopBtn ? 
            <div onClick={goToTop} className='fixed lg:hidden bottom-36 right-3 duration-300 sm:bottom-32 sm:right-5 bg-white text-neutral-400 rounded-full z-50 cursor-pointer p-2 sm:p-4 hover:drop-shadow-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </div> : ''
        }
    </WAppear></div>;
}