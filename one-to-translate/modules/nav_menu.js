'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from './data';
import { to_link } from './widgets';

export default function NavMenu(props) {
    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(props.page > 4);

    return <div>
        <div className={'duration-300 text-b-d text-p px-2 ' + (dropDown ? '':'opacity-60')} onClick={() => setDropDown(!dropDown)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="sm:w-8 sm:h-8 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div className={'absolute transition-height duration-300 overflow-hidden max-w-[16rem] -ml-[13rem] ' + (dropDown ? ' h-[30rem]':' h-0')}>
            <div className='px-4 py-3 bg-white rounded-b-lg text-b-d'>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 1 ? 'text-b-m font-extrabold':'')}><Link href='/'>Home</Link></div>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 2 ? 'text-b-m font-extrabold':'')}><Link href='/contact'>Contact</Link></div>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 3 ? 'text-b-m font-extrabold':'')}><Link href='/about'>About</Link></div>
                <div className={'my-2 py-0.5 rounded-full w-full flex ' + (props.page == 4 ? 'text-b-m font-extrabold':'')}>
                    <div>
                        <Link href='/services'>Services</Link>
                    </div>
                    <div className={'m-auto mr-0 duration-300 ' + (dropDown2 ? '':'')} onClick={() => setDropDown2(!dropDown2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                        </svg>
                    </div>
                </div>
                <div className={'ml-4 overflow-hidden transition-height duration-300 -mb-2 ' + (dropDown2 ? 'h-[9rem]':'h-0')}>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 5 ? 'underline decoration-2 decoration-m-l font-bold':'')}><Link href={'/services/' + to_link(services[0].title)}>{services[0].title}</Link></div>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 6 ? 'underline decoration-2 decoration-m-l font-bold':'')}><Link href={'/services/' + to_link(services[1].title)}>{services[1].title}</Link></div>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 7 ? 'underline decoration-2 decoration-m-l font-bold':'')}><Link href={'/services/' + to_link(services[2].title)}>{services[2].title}</Link></div>
                </div>
            </div>
        </div>
    </div>;
}