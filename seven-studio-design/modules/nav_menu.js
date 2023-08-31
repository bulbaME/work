'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from './data';
import { to_link } from './widgets';

export default function NavMenu(props) {
    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(props.page > 5);

    return <div>
        <div className={'duration-300 text-b-d text-p px-2 ' + (dropDown ? '':'opacity-60')} onClick={() => setDropDown(!dropDown)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </div>
        <div className={'absolute transition-height font-light duration-300 overflow-hidden max-w-[20rem] -ml-[12rem] ' + (dropDown ? ' h-[30rem]':' h-0')}>
            <div className='px-4 py-3 bg-white text-b-d'>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 1 ? 'text-p font-bold':'')}><Link href='/'>Home</Link></div>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 2 ? 'text-p font-bold':'')}><Link href='/contact'>Contact</Link></div>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 3 ? 'text-p font-bold':'')}><Link href='/about'>About</Link></div>
                <div className={'my-2 py-0.5 rounded-full w-full flex ' + (props.page == 4 ? 'text-p font-bold':'')}>
                    <div>
                        <Link href='/services'>Services</Link>
                    </div>
                    <div className={'m-auto mr-0 duration-300 ' + (dropDown2 ? '':'')} onClick={() => setDropDown2(!dropDown2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                        </svg>
                    </div>
                </div>
                <div className={'ml-4 overflow-hidden transition-height duration-300 -mb-2 ' + (dropDown2 ? 'h-[14rem]':'h-0')}>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 6 ? 'text-p font-bold':'')}><Link href={'/services/' + to_link(services[0].title)}>{services[0].title}</Link></div>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 7 ? 'text-p font-bold':'')}><Link href={'/services/' + to_link(services[1].title)}>{services[1].title}</Link></div>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 8 ? 'text-p font-bold':'')}><Link href={'/services/' + to_link(services[2].title)}>{services[2].title}</Link></div>
                    <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 9 ? 'text-p font-bold':'')}><Link href={'/services/' + to_link(services[3].title)}>{services[3].title}</Link></div>
                </div>
                <div className={'my-2 py-0.5 w-fit rounded-full ' + (props.page == 5 ? 'text-p font-bold':'')}><Link href='/faq'>FAQ</Link></div>
            </div>
        </div>
    </div>;
}