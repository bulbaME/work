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

    return <><div className='w-full py-2 bg-white text-black sm:text-base text-sm drop-shadow-lg'>
        <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
            <div className='m-auto py-6 md:mr-8 mr-0 md:w-1/2'>
                <div className='font-bold mb-2 text-o'>{"© 2023 SeoSergeant. All rights reserved."}</div>
                {"Thank you for visiting SeoSergeant, your trusted partner in conquering the digital landscape. With a passion for SEO excellence, a team of dedicated experts, and a track record of success, we're committed to elevating your online presence. "}
            </div>
            <div className='m-auto py-6 mr-8 md:ml-auto ml-0'>
                <div className='font-bold mb-2 text-o'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/about'>About</Link> <br />
                <Link href='/contact'>Contacts</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/faq'>FAQ</Link> <br />
            </div>
            <div className='m-auto py-6 md:mr-auto mr-0 md:w-1/4 w-3/5'>
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
        </WAppear></div>
        <div className='m-auto flex flex-wrap w-fit py-6'>
                <Link className='m-auto' href='/policy'>Policy</Link>
                <div className='mx-2'>|</div>
                <Link className='m-auto' href='/terms-&-conditions'>Terms & Conditions</Link>
        </div>
    </div>
    { showTopBtn ? 
        <div onClick={goToTop} className='fixed lg:hidden bottom-4 right-4 duration-300 sm:bottom-32 sm:right-5 bg-white border-[1px] text-black rounded-full z-50 cursor-pointer p-2 sm:p-4 hover:drop-shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </div> : ''
    }
    </>;
}