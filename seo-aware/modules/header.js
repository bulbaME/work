'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import { services } from "@/public/json/data.json";

function Button(props) {
    return <div className={'flex duration-300 px-3 hover:opacity-100 hover:font-bold ' + (props.sel ? 'font-bold text-g-m':'opacity-60')}>
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
        <div className='fixed drop-shadow-xl z-50 w-full duration-300 bg-black text-white'>
            <div className='max-w-7xl m-auto sm:p-4 p-2 sm:flex relative'>
                <div className='flex sm:mb-0 mb-4 w-fit m-auto sm:ml-0 '>
                    <div className='sm:w-[3.5rem] w-[2.5rem] pr-2 m-auto'><Image src='/img/icon.png' width={512} height={512} className='drop-shadow-md' /></div>
                    <div className='text-xl m-auto sm:text-3xl font-bold w-fit drop-shadow-md text-g-m'>
                        <Link href='/'>SEO Aware</Link>
                    </div>
                </div>
                <div className='flex m-auto lg:mr-0 sm:w-fit w-full font-medium flex-wrap text-lg sm:text-xl'>
                    <div className='m-auto'><Button route='/' text='Home' sel={props.page == 1} /></div>
                    <div className='m-auto'><Button route='/contact' text='Contact' sel={props.page == 2} /></div>
                    <div className='m-auto' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}><Button route='/services' text='Services' sel={props.page == 3 || props.page > 4} alt={
                        <div className='relative'>
                            <div className='mt-1 ml-1 w-fit -mr-1' onClick={() => setHover(!hover)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 w-[15rem] -left-full mt-3 drop-shadow-lg -translate-x-1/2' + (DD ? ' h-[13rem]': ' h-0')}>
                                    <div className='bg-black text-lg drop-shadow-lg text-white font-bold'>
                                        <div className={'p-4 py-2 duration-300' + (props.page == 5 ? ' opacity-100':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                        <div className={'p-4 py-2 duration-300' + (props.page == 6 ? ' opacity-100':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                        <div className={'p-4 py-2 duration-300' + (props.page == 7 ? ' opacity-100':' opacity-60 text-r-1 hover:opacity-100 ')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                    </div>
                                </div>
                        </div>
                    } /></div>
                    <div className='m-auto'><Button route='/about' text='About' sel={props.page == 4} /></div>
                </div>
            </div>
        </div>
        <div className='pt-[5.8rem] sm:pt-[5rem]' />
    </div>;
}