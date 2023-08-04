'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "@/public/json/data.json";
import NavMenu from "./nav_menu";

function Button(props) {
    return <div className='m-auto'>
        <div className='mx-4 flex'>
            <Link href={props.route}>{props.text}</Link>
            <div>{props.alt}</div>
        </div>
    </div>;
}

export default function Header(props) {
    const head_page = props.page > 5 ? 4 : props.page;
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

        u.style.width = e.offsetWidth - 32 + 'px';
        u.style.left = e.getBoundingClientRect().left + 16 + 'px';
    }

    useEffect(update_bar, [hover]);
    if (typeof window !== "undefined") window.onresize = update_bar;

    return <div className='w-full'>
        <div className='fixed z-50 bg-white drop-shadow-lg w-screen text-black'>
            <div className='max-w-7xl m-auto flex p-6'>
                <div className='font-bold sm:text-2xl m-auto header-title sm:ml-8 ml-0 w-fit flex'>
                    <div className='w-8 mr-2 my-auto'>
                        <Image src='/img/icon.png' width={200} height={200} />
                    </div>
                    <div className='my-auto'>5K Designs</div>
                </div>
                <div className='md:flex hidden m-auto w-full sm:mr-4 sm:w-fit'>
                    <div id='hu' className='absolute bg-g-m h-[2px] mt-6 duration-300 ease-in-out' onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' /></div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='About us' route='/about' /></div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3)} onMouseLeave={() => setHover(head_page)}><Button text='Contacts' route='/contact' /></div>
                    <div className='m-auto' id='hb4' onMouseOver={() => setHover(4) + setHoverDD1(true)} onMouseLeave={() => setHover(head_page) + setHoverDD1(false)}><Button text='Services' route='/services' alt={<div onClick={() => setHover(4)}>
                        <div className={'absolute text-center overflow-hidden mt-[1.4rem] -ml-36 duration-300 ' + (DD ? 'h-[11rem]':'h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}> 
                            <div className='p-3 py-5 bg-white'>
                                <div className={'max-w-[12rem] mb-3 hover:opacity-100 duration-300' + (props.page == 6 ? ' text-g-m':'')}> 
                                    <Link href={services[0].link}>{services[0].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] mb-3 hover:opacity-100 duration-300' + (props.page == 7 ? ' text-g-m':'')}> 
                                    <Link href={services[1].link}>{services[1].title}</Link>
                                </div>
                                <div className={'max-w-[12rem] hover:opacity-100 duration-300' + (props.page == 8 ? ' text-g-m':'')}> 
                                    <Link href={services[2].link}>{services[2].title}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='mt-1 ml-1 -mr-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>} /></div>
                    <div className='m-auto' id='hb5' onMouseOver={() => setHover(5)} onMouseLeave={() => setHover(head_page)}><Button text='FAQ' route='/faq' /></div>
                </div>
                <div className='md:hidden w-fit m-auto mr-0'>
                    <NavMenu page={props.page} />
                </div>
            </div>
        </div>
        <div className='w-full h-[5.2rem] sm:h-[5rem]' />
    </div>;
}