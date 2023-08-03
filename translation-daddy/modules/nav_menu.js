'use client';

import Link from 'next/link';
import { useState } from 'react';

import { services } from "@/public/json/data.json"; 

export default function NavMenu(props) {
    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);

    return <div>
        <div className={'duration-300 mr-4' + (dropDown ? ' rotate-180':'')} onClick={() => setDropDown(!dropDown)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
        </div>
        <div className={'absolute transition-height duration-300 overflow-hidden -ml-[10rem] mt-[1.15rem]' + (dropDown ? ' h-[30rem]':' h-0')}>
            <div className='p-4 py-2 bg-white text-black font-medium'>
                <div className={'my-2 ' + (props.page == 1 ? 'text-b-m':'')}><Link href='/'>Home</Link></div>
                <div className={'my-2 ' + (props.page == 2 ? 'text-b-m':'')}><Link href='/contact'>Contact</Link></div>
                <div className={'my-2 flex ' + (props.page == 3 ? 'text-b-m':'')}>
                    <div>
                        <Link href='/services'>Services</Link>
                    </div>
                    <div className='m-auto mr-0' onClick={() => setDropDown2(!dropDown2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                        </svg>
                    </div>
                </div>
                <div className={'ml-6 overflow-hidden transition-height duration-300 -mb-2 ' + (dropDown2 ? 'h-[14.5rem]':'h-0')}>
                    <div className={'my-2 ' + (props.page == 6 ? 'text-b-m':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                    <div className={'my-2 ' + (props.page == 7 ? 'text-b-m':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                    <div className={'my-2 ' + (props.page == 8 ? 'text-b-m':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                </div>
                <div className={'my-2 ' + (props.page == 4 ? 'text-b-m':'')}><Link href='/about'>About</Link></div>
                <div className={'my-2 ' + (props.page == 5 ? 'text-b-m':'')}><Link href='/faq'>FAQ</Link></div>
            </div>
        </div>
    </div>;
}