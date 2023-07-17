'use client';

import Link from "next/link";
import { useState } from "react";
import { services } from "../data.json";

export default function Footer() {
    const [nav, setNav] = useState(false);
    const [service, setService] = useState(false);

    return <div className='bg-gray-900 text-white font-light p-5'>
        <div className='flex opacity-70 m-auto w-fit my-3'>
            <Link href='/' className='mx-3'>Home</Link>
            <Link href='/contact' className='mx-3'>Contact</Link>
            <Link href='/services' className='mx-3'>Services</Link>
            <Link href='/about' className='mx-3'>About</Link>
        </div>
        <div className='flex opacity-70 w-fit m-auto my-3'>
            <Link href='/policy' className='mx-3'>Policy</Link> | <Link href='terms_&_conditions' className='mx-3'>Terms & Conditions</Link>
        </div>
        <div className='fixed sm:hidden z-50'>
            <div className={'fixed bottom-5 right-5 p-4 rounded-full bg-gray-900 cursor-pointer duration-300 select-none' + (nav ? ' rotate-180':'')} onClick={() => setNav(!nav)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className={'fixed bottom-28 right-5 overflow-hidden transition-height duration-300 z-50' + (nav ? (service ? ' h-[20rem]':' h-[12rem]'):' h-0')}>
                <div className='bg-gray-900 text-2xl p-4 duration-300 drop-shadow-xl z-50'>
                    <div className='my-3 mt-0'><Link href='/'>Home</Link></div>
                    <div className='my-3'><Link href='/contact'>Contact</Link></div>
                    <div className='my-3 flex'><Link href='/services'>Services</Link> 
                        <div className={'ml-2 mt-1 duration-300' + (service ? ' rotate-180':'')} onClick={() => setService(!service)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className={'overflow-hidden transition-height -my-2 duration-300' + (service ? ' h-[8rem]':' h-0')}>
                        <div className='my-3 mt-0 ml-3'><Link href={services[0].link}>{services[0].title}</Link></div>
                        <div className='my-3 ml-3'><Link href={services[1].link}>{services[1].title}</Link></div>
                        <div className='my-3 mb-0 ml-3'><Link href={services[2].link}>{services[2].title}</Link></div>
                    </div>
                    <div className='my-3 mb-0'><Link href='/about'>About</Link></div>
                </div>
            </div>
        </div>
    </div>;
}