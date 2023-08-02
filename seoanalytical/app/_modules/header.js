'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/app/data.json";

function Button(props) {
    return <div className='m-auto'>
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
        <div className='fixed z-50 bg-p-m p-3 w-screen text-white'>
            <div className='max-w-7xl m-auto sm:flex'>
                <div className='font-bold text-3xl m-auto sm:ml-0 w-fit mb-4 sm:mb-0'>Seoanalytical</div>
                <div className='flex m-auto w-full sm:w-fit sm:mr-4 font-semibold'>
                    <div id='hu' className='absolute bg-p-d h-1 mt-6 duration-300 ease-in-out' onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' /></div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='Contact' route='/contact' /></div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHoverDD1(true)} onMouseLeave={() => setHover(head_page) + setHoverDD1(false)}><Button text='Services' route='/services' alt={<div onClick={() => setHover(3)}>
                        <div className={'absolute text-center overflow-hidden mt-[1.4rem] -ml-36 duration-300 ' + (DD ? 'h-[16rem]':'h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}> 
                            <div className='p-3 bg-p-d'>
                                <div className={'max-w-[12rem] mb-3 hover:opacity-100 duration-300' + (props.page == 5 ? '':' opacity-60')}> 
                                    <Link href={services[0].link}>{services[0].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] mb-3 hover:opacity-100 duration-300' + (props.page == 6 ? '':' opacity-60')}> 
                                    <Link href={services[1].link}>{services[1].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] hover:opacity-100 duration-300' + (props.page == 7 ? '':' opacity-60')}> 
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
            </div>
        </div>
        <div className='w-full h-[6.4rem] sm:h-[3.7rem]' />
    </div>;
}