'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
// import { services } from "@/app/data.json";

function Button(props) {
    return <div className='m-auto'>
        <div className={'mx-3 flex' + (props.sel ? '':' opacity-70')}>
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

        u.style.width = e.offsetWidth - 26 + 'px';
        u.style.left = e.getBoundingClientRect().left + 13 + 'px';
    }

    useEffect(update_bar, [hover]);
    if (typeof window !== "undefined") window.onresize = update_bar;

    return <div className='w-full'>
        <div className='fixed z-50 bg-b-m p-3 w-screen text-white drop-shadow-lg'>
            <div className='max-w-7xl m-auto sm:flex p-4'>
                <div className='font-extrabold sm:text-4xl text-2xl m-auto w-fit sm:mb-0 mb-4 sm:ml-0'><Link href='/'>Licensed Translation</Link></div>
                <div className='flex m-auto w-full sm:w-fit sm:mr-0 font-bold sm:text-xl'>
                    <div id='hu' className='absolute bg-white h-1 mt-6 duration-300 ease-in-out' onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button sel={props.page == 1} text='Home' route='/' /></div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button sel={props.page == 2} text='About' route='/about' /></div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHoverDD1(true)} onMouseLeave={() => setHover(head_page) + setHoverDD1(false)}><Button sel={props.page == 3} text='Services' route='/services' alt={<div onClick={() => setHover(3)}>
                        <div className={'absolute text-center overflow-hidden mt-[1.4rem] -ml-36 duration-300 ' + (DD ? 'h-[16rem]':'h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}> 
                            {/* <div className='p-3 bg-p-d'>
                                <div className={'max-w-[12rem] mb-3 hover:opacity-100 duration-300' + (props.page == 5 ? '':' opacity-60')}> 
                                    <Link href={services[0].link}>{services[0].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] mb-3 hover:opacity-100 duration-300' + (props.page == 6 ? '':' opacity-60')}> 
                                    <Link href={services[1].link}>{services[1].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] hover:opacity-100 duration-300' + (props.page == 7 ? '':' opacity-60')}> 
                                    <Link href={services[2].link}>{services[2].title}</Link>
                                </div>
                            </div> */}
                        </div>
                        <div className='mt-0.5 -mr-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>} /></div>
                    <div className='m-auto' id='hb4' onMouseOver={() => setHover(4)} onMouseLeave={() => setHover(props.page)}><Button sel={props.page == 4} text='Contact' route='/contact' /></div>
                </div>
            </div>
        </div>
        <div className='w-full h-[8rem] sm:h-[6rem]' />
    </div>;
}