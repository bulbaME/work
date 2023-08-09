'use client';

import Link from 'next/link';
import { useState } from 'react';

import { services } from "@/public/json/data.json"; 

export default function NavMenu(props) {
    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(props.page > 4);

    return <div>
        <div className={'duration-300 ease-in-out text-p px-2 ' + (dropDown ? ' rotate-[270deg]':'')} onClick={() => setDropDown(!dropDown)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="sm:w-8 sm:h-8 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div className={'absolute transition-height duration-300 overflow-hidden -ml-[10rem] sm:mt-[1.6rem] mt-[1rem]' + (dropDown ? ' h-[30rem]':' h-0')}>
            <div className='px-4 py-1 bg-white text-p-b'>
                <div className={'my-3 ' + (props.page == 1 ? 'text-g-m font-bold':'')}><Link href='/'>Home</Link></div>
                <div className={'my-3 ' + (props.page == 2 ? 'text-g-m font-bold':'')}><Link href='/contact'>Contact us</Link></div>
                <div className={'my-3 ' + (props.page == 3 ? 'text-g-m font-bold':'')}><Link href='/about'>About us</Link></div>
                <div className={'my-3 flex ' + (props.page == 4 ? 'text-g-m font-bold':'')}>
                    <div>
                        <Link href='/services'>Services</Link>
                    </div>
                    <div className={'m-auto mr-0 duration-300 ' + (dropDown2 ? 'text-g-m':'')} onClick={() => setDropDown2(!dropDown2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                        </svg>
                    </div>
                </div>
                <div className={'ml-4 overflow-hidden transition-height duration-300 -mb-2 ' + (dropDown2 ? 'h-[12rem]':'h-0')}>
                    <div className={'my-3 mt-1 ' + (props.page == 6 ? 'text-g-m font-bold':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                    <div className={'my-3 ' + (props.page == 7 ? 'text-g-m font-bold':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                    <div className={'my-3 ' + (props.page == 8 ? 'text-g-m font-bold':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                </div>
                <div className={'my-3 ' + (props.page == 5 ? 'text-g-m font-bold':'')}><Link href='/faq'>FAQ</Link></div>
            </div>
        </div>
    </div>;
}