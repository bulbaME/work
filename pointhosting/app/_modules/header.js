'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/app/data.json";

function Button(props) {
    return <div className='m-auto font-bold text-b'>
        <div className='mx-2 flex'>
            <Link href={props.route}>{props.text}</Link>
            <div>{props.alt}</div>
        </div>
    </div>;
}

export default function Header(props) {
    const head_page = props.page > 4 ? 3 : props.page;
    const [hover, setHover] = useState(head_page);
    const [hoverDD1, setHoverDD1] = useState(false);
    const [hoverDD2, setHoverDD2] = useState(false);
    const [DD, setDD] = useState(false);
    const [dropDownM, setDropDownM] = useState(false);
    const [serviceDD, setServiceDD] = useState(false);


    useEffect(() => {
        setDD(hoverDD1 || hoverDD2);
    }, [hoverDD1, hoverDD2])

    const update_bar = () => {
        const e = document.getElementById('hb' + hover);
        const u = document.getElementById('hu');

        if(!e || !u) return;

        u.style.width = e.offsetWidth - 16 + 'px';
        u.style.left = e.getBoundingClientRect().left + 8 + 'px';
    }

    useEffect(update_bar, [hover]);
    if (typeof window !== "undefined") window.onresize = update_bar;

    return <div className='w-full'>
        <div className='fixed z-50 bg-black p-3 w-screen text-white'>
            <div className='max-w-7xl m-auto flex'>
                <div className='font-black text-3xl m-auto ml-2 w-fit mb-0'>PointHosting</div>
                <div className='sm:flex hidden m-auto w-full sm:w-fit sm:mr-4 font-semibold'>
                    <div id='hu' className='absolute bg-white h-1 mt-5 duration-300 ease-in-out' onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' /></div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='Contact' route='/contact' /></div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHoverDD1(true)} onMouseLeave={() => setHover(head_page) + setHoverDD1(false)}><Button text='Services' route='/services' alt={<div onClick={() => setHover(3)}>
                        <div className={'absolute text-center overflow-hidden mt-[1.4rem] -ml-[6.5rem] duration-300 ' + (DD ? 'h-[16rem]':'h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}> 
                            <div className='p-3 bg-black'>
                                <div className={'max-w-[12rem] mb-3 duration-300' + (props.page == 5 ? '':'')}> 
                                    <Link href={services[0].link}>{services[0].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] mb-3 duration-300' + (props.page == 6 ? '':'')}> 
                                    <Link href={services[1].link}>{services[1].title}</Link>
                                </div>
                                <div className={'max-w-[12rem]  duration-300' + (props.page == 7 ? '':'')}> 
                                    <Link href={services[2].link}>{services[2].title}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='mt-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>} /></div>
                    <div className='m-auto' id='hb4' onMouseOver={() => setHover(4)} onMouseLeave={() => setHover(props.page)}><Button text='About' route='/about' /></div>
                </div>
                <div className='sm:hidden m-auto mr-0'>
                <div className={'duration-300 cursor-pointer ' + (dropDownM ? 'text-b rotate-180':'text-white')} onClick={() => setDropDownM(!dropDownM)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className={'absolute overflow-hidden text-white font-semibold transition-height duration-300 -ml-36' + (dropDownM ? (serviceDD ? ' h-[23rem]':' h-[12rem]'):' h-0')}>
                        <div className='p-4 bg-black'>
                            <div className='py-2'><Link href='/'>Home</Link></div>
                            <div className='py-2'><Link href='/contact'>Contact</Link></div>
                            <div className='py-2'>
                                <div className='flex'>
                                    <Link className='h-fit' href='/services'>Services</Link>
                                    <div className='m-auto mt-1 mr-0' onClick={() => setServiceDD(!serviceDD)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={'ml-4 overflow-hidden transition-height duration-300' + (serviceDD ? ' h-[8rem]':' h-0')}>
                                    <div className={'mb-3 mt-2 ' + (props.page == 5 ? 'text-white':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'mb-3 ' + (props.page == 6 ? 'text-white':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={(props.page == 7 ? 'text-white':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                            <div className='py-2'><Link href='/about'>About</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[3.7rem]' />
    </div>;
}