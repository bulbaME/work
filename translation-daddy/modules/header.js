'use client';

import NavMenu from "./nav_menu";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { services } from "@/public/json/data.json"

function Button(props) {
    return <div className={'m-auto w-fit px-4 flex py-2' + props.sel}>
        <Link href={props.route}><div className='font-light sm:text-lg duration-300'>{props.text}</div></Link>
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
        const u = document.getElementById('hu');

        if (hover == 0) {
            u.style.width = 0;
            u.style.borderWidth = 0;
            return;
        }

        const e = document.getElementById('hb' + hover);

        if(!e || !u) return update_bar();

        u.style.width = e.offsetWidth - 8 + 'px';
        u.style.borderWidth = '2px';
        u.style.left = e.getBoundingClientRect().left + 4 + 'px';
    }

    useEffect(update_bar, [hover]);
    if (typeof window !== "undefined") window.onresize = update_bar;

    useEffect(() => {
        setDD(hover1 || hover2)
    }, [hover1, hover2])

    return <div>
        <div className='fixed w-full duration-300 z-50 bg-b-m drop-shadow-lg'>
            <div className='max-w-7xl flex flex-wrap m-auto p-2 py-4 duration-300 text-white'>
                <div className='m-auto ml-0 w-fit flex'>
                    <div className='sm:text-3xl text-xl font-extrabold header-title m-auto pl-4'><Link href='/'>Translation Daddy</Link></div>
                </div>
                <div className='md:flex hidden m-auto sm:w-fit sm:mr-2'>
                    <div id='hu' className='absolute -z-10 h-[2.3rem] duration-300 -mt-1 ease-in-out border-[2px] drop-shadow-lg bg-b-m border-neutral-200 rounded-2xl' onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' sel={props.page == 1} /> </div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='Contact' route='/contact' sel={props.page == 2} /> </div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHover1(true)} onMouseLeave={() => setHover(head_page) + setHover1(false)}><Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 3 || props.page > 5} alt={
                        <div className=''>
                            <div className='mt-1.5 -mr-1' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 max-w-[16rem] -ml-[10rem] mt-[1.35rem]' + (DD ? ' h-[12rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='p-4 py-2 bg-white text-black font-light'>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 6 ? ' text-b-m':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 7 ? ' text-b-m':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 8 ? ' text-b-m':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto' id='hb4' onMouseOver={() => setHover(4)} onMouseLeave={() => setHover(head_page)}><Button text='About us' route='/about' sel={props.page == 4} /></div>
                    <div className='m-auto' id='hb5' onMouseOver={() => setHover(5)} onMouseLeave={() => setHover(head_page)}><Button text='FAQ' route='/faq' sel={props.page == 5} /></div>
                </div>
                <div className='md:hidden w-fit m-auto mr-0'>
                    <NavMenu page={props.page} />
                </div>
            </div>
        </div>
        <div className='pt-[3.7rem] sm:pt-[4.3rem]' />
    </div>;
}