'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { services } from "@/public/json/data.json"

function Button(props) {
    return <div className='m-auto w-fit px-3 flex py-2'>
        <Link href={props.route}><div className={'font-extrabold text-xl' + props.sel}>{props.text}</div></Link>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const head_page = props.page > 4 ? 3 : props.page;
    const [hover, setHover] = useState(head_page);

    const [transparent, setTransparent] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

    const update_bar = () => {
        const e = document.getElementById('hb' + hover);
        const u = document.getElementById('hu');

        if(!e || !u) return;

        u.style.width = e.offsetWidth - 22 + 'px';
        u.style.left = e.getBoundingClientRect().left + 11 + 'px';
    }

    useEffect(update_bar, [hover]);
    if (typeof window !== "undefined") window.onresize = update_bar;

    const updateT = (scroll) => {
        if (scroll < 100 && props.page == 1) setTransparent(true);
        else setTransparent(false);
    }

    useEffect(() => {
        updateT(0);

        window.addEventListener('scroll', () => {
            updateT(window.scrollY);
        });
    }, []);

    useEffect(() => {
        setDD(hover1 || hover2)
    }, [hover1, hover2])

    return <div className={'fixed w-full duration-300 z-50' + (transparent ? '':' bg-white drop-shadow-xl')}>
        <div className={'max-w-7xl flex flex-wrap m-auto p-2 duration-300' + (transparent ? ' text-white': ' text-black')}>
            <div className='m-auto sm:ml-0 w-fit flex'>
                <div className='w-[3rem] p-2 m-auto'><Image src='/img/icon.png' width={512} height={512} /></div>
                <div className='text-4xl font-black m-auto pb-1'><Link href='/'>Target Translation</Link></div>
            </div>
            <div className='flex m-auto sm:w-fit sm:mr-0'>
                <div id='hu' className={'absolute h-[0.15rem] mt-9 duration-300 ease-in-out' + (transparent ? ' bg-g-l':' bg-g-d')} onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' sel={props.page == 1 ? (transparent ? ' text-g-l': ' text-g-d'):''} /> </div>
                <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='Contact' route='/contact' sel={props.page == 2 ? (transparent ? ' text-g-l': ' text-g-d'):''} /> </div>
                <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHover1(true)} onMouseLeave={() => setHover(head_page) + setHover1(false)}><Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 3 || props.page > 4 ? (transparent ? ' text-g-l': ' text-g-d'):''} alt={
                    <div className=''>
                        <div className='mt-1.5' onClick={() => setDD(!DD)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={'absolute overflow-hidden transition-height duration-300 max-w-[12rem] -ml-[5.5rem] mt-4' + (DD ? ' h-[18rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                            <div className='p-4 py-2 bg-white text-lg text-black font-bold'>
                                <div className={'py-2 hover:pt-0 hover:pb-4 duration-300' + (props.page == 5 ? ' text-g-d':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                <div className={'py-2 hover:pt-0 hover:pb-4 duration-300' + (props.page == 6 ? ' text-g-d':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                <div className={'py-2 hover:pt-0 hover:pb-4 duration-300' + (props.page == 7 ? ' text-g-d':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                            </div>
                        </div>
                    </div>
                } /> </div>
                <div className='m-auto' id='hb4' onMouseOver={() => setHover(4)} onMouseLeave={() => setHover(head_page)}><Button text='About us' route='/about' sel={props.page == 4 ? (transparent ? ' text-g-l': ' text-g-d'):''} /></div>
            </div>
        </div>
    </div>;
}