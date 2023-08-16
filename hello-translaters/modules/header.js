'use client';

// import NavMenu from "./nav_menu";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "./data";

function Button(props) {
    return <div className={'m-auto w-fit px-5 flex py-2 duration-300 ' + (props.sel ? 'font-extrabold text-white':'font-light')}>
        <Link href={props.route}><div className='sm:text-lg'>{props.text}</div></Link>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const head_page = props.page > 5 ? 3 : props.page;
    const [hover, setHover] = useState(head_page);

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

    const update_bar = () => {
        if (props.page < 1) return;
        const u = document.getElementById('hu');

        if (hover == 0) {
            u.style.width = 0;
            u.style.borderWidth = 0;
            return;
        }

        const e = document.getElementById('hb' + hover);

        if(!e || !u) return update_bar();

        u.style.width = e.offsetWidth - 8 + 'px';
        u.style.left = e.getBoundingClientRect().left + 4 + 'px';
        u.style.top = e.getBoundingClientRect().top - 1 + 'px';
    }

    useEffect(update_bar, [hover]);
    
    if (typeof window !== "undefined") {
        window.onresize = update_bar;
        window.onscroll = update_bar;
        window.onload = setTimeout(update_bar, 300);
    }

    useEffect(() => {
        setDD(hover1 || hover2)
    }, [hover1, hover2])


    return <div>
        <div className='fixed w-full duration-300 z-50 bg-white text-black drop-shadow-lg'>
            <div className='max-w-7xl flex flex-wrap m-auto sm:p-6 py-4 duration-300'>
                <div className='m-auto lg:ml-0 w-fit flex'>
                    <div className='sm:text-3xl text-xl font-extrabold header-title m-auto lg:pl-4'><Link href='/'>Hello Translaters</Link></div>
                </div>
                <div className='lg:flex-nowrap flex flex-wrap m-auto sm:w-fit sm:mr-2'>
                    <div id='hu' className='absolute -z-10 h-[2.1rem] sm:h-[2.5rem] duration-300 mt-1 ease-in-out rounded-2xl drop-shadow-lg bg-gradient-to-br from-m to-b' onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' sel={hover == 1} /> </div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='Contacts' route='/contact' sel={hover == 2} /> </div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHover1(true)} onMouseLeave={() => setHover(head_page) + setHover1(false)}><Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={hover == 3} alt={
                        <div className=''>
                            <div className='sm:mt-1.5 mt-1 ml-1 -mr-1' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={hover == 3 ? 3:1} stroke="currentColor" className="sm:w-5 sm:h-5 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 max-w-[16rem] -ml-[10rem] mt-[1.35rem]' + (DD ? ' sm:h-[20rem] h-[25rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='p-4 py-2 bg-white text-black font-light'>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 6 ? ' font-bold':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 7 ? ' font-bold':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 8 ? ' font-bold':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 9 ? ' font-bold':'')}><Link href={services[3].link}>{services[3].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 10 ? ' font-bold':'')}><Link href={services[4].link}>{services[4].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto' id='hb4' onMouseOver={() => setHover(4)} onMouseLeave={() => setHover(head_page)}><Button text='About us' route='/about' sel={hover == 4} /></div>
                    <div className='m-auto' id='hb5' onMouseOver={() => setHover(5)} onMouseLeave={() => setHover(head_page)}><Button text='FAQ' route='/faq' sel={hover == 5} /></div>
                </div>
                <div className='md:hidden w-fit m-auto mr-0'>
                    {/* <NavMenu page={props.page} /> */}
                </div>
            </div>
        </div>
        <div className='pt-[8.7rem] sm:pt-[4.8rem]' />
    </div>;
}