'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import { services } from "@/public/json/data.json";

function Button(props) {
    return <div className={'flex duration-300 px-3 hover:opacity-100 text-c-g ' + (props.sel ? 'drop-shadow-md':'opacity-60')}>
        <div><Link href={props.route}>{props.text}</Link></div>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [hover, setHover] = useState(false);
    const [DD, setDD] = useState(false);

    useEffect(() => {
        setDD(hover);
    }, [hover])

    return <div>
        <div className='fixed drop-shadow-lg z-50 w-full duration-300 bg-white'>
            <div className='max-w-7xl m-auto sm:p-4 p-2 sm:flex relative'>
                <div className='flex sm:mb-0 mb-4 w-fit m-auto sm:ml-0 '>
                    <div className='sm:w-[3rem] w-[2.5rem] px-2 m-auto'><Image src='/img/icon.png' width={512} height={512} className='drop-shadow-md' /></div>
                    <div className='text-2xl m-auto sm:text-4xl font-extrabold header-title w-fit drop-shadow-md'>
                        <Link href='/'>DesignsRiver</Link>
                    </div>
                </div>
                <div className='flex m-auto lg:mr-0 sm:w-fit w-full font-bold flex-wrap text-sm sm:text-lg'>
                    <div className='m-auto'><Button route='/' text='Home' sel={props.page == 1} /></div>
                    <div className='m-auto'><Button route='/contact' text='Contact' sel={props.page == 2} /></div>
                    <div className='m-auto' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}><Button route='/services' text='Services' sel={props.page == 3} alt={
                        <div className='relative'>
                            <div className='sm:mt-1 ml-1 w-fit -mr-1' onClick={() => setHover(!hover)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 w-[15rem] -left-full mt-3 drop-shadow-lg -translate-x-1/2' + (DD ? ' h-[13rem]': ' h-0')}>
                                    <div className='bg-white rounded-2xl text-lg drop-shadow-lg text-black font-bold'>
                                        <div className={'p-4 text-c-g py-2 duration-300' + (props.page == 5 ? ' opacity-100 drop-shadow-lg':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                        <div className={'p-4 text-c-g py-2 duration-300' + (props.page == 6 ? ' opacity-100 drop-shadow-lg':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                        <div className={'p-4 text-c-g py-2 duration-300' + (props.page == 7 ? ' opacity-100 drop-shadow-lg':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                        <div className={'p-4 text-c-g py-2 duration-300' + (props.page == 8 ? ' opacity-100 drop-shadow-lg':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[3].link}>{services[3].title}</Link></div>
                                    </div>
                                </div>
                        </div>
                    } /></div>
                    <div className='m-auto'><Button route='/about' text='About' sel={props.page == 4} /></div>
                </div>
            </div>
        </div>
        <div className='pt-[5.3rem] sm:pt-[4.5rem]' />
    </div>;
}