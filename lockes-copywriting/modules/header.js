'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "@/public/json/data.json";
import NavMenu from "./nav_menu";

function Button(props) {
    return <div className='m-auto'>
        <div className={'mx-6 flex text-lg ' + (props.sel ? 'font-semibold':'')}>
            <Link href={props.route}>{props.text}</Link>
            {props.alt}
        </div>
    </div>;
}

export default function Header(props) {
    const head_page = props.page > 4 ? 3 : props.page;
    const [hover, setHover] = useState(head_page);
    const [hoverDD1, setHoverDD1] = useState(false);
    const [hoverDD2, setHoverDD2] = useState(false);
    const [DD, setDD] = useState(false);
    const [transparent, setTransparent] = useState(props.page == 1);

    const updateT = (scroll) => {
        if (scroll < 80 && props.page == 1) setTransparent(true);
        else setTransparent(false);
    }

    const update_bar = () => {
        const e = document.getElementById('hb' + hover);
        const u = document.getElementById('hu');
        const hm = document.getElementById('hm');

        if(!e || !u || !hm) {
            u.style.width = '0px';
            return;
        }

        u.style.width = e.offsetWidth - 44 + 'px';
        u.style.left = e.getBoundingClientRect().left - hm.getBoundingClientRect().left + 22 + 'px';
    }

    useEffect(() => {
        if (props.page != 0) {
            updateT(0);

            window.addEventListener('scroll', () => {
                updateT(window.scrollY);
                update_bar();
            });
        }
    }, []);

    useEffect(() => {
        setDD(hoverDD1 || hoverDD2);
    }, [hoverDD1, hoverDD2])

    useEffect(update_bar, [hover, transparent]);
    if (typeof window !== "undefined") window.onresize = update_bar;

    return <div className='w-full'>
        <div className={'fixed z-50 drop-shadow-lg w-screen text-white duration-500 ease-in-out ' + (transparent ? '':'bg-black')}>
            <div className={'m-auto flex sm:p-10 p-4 sm:py-2 py-2 duration-500 ease-in-out ' + (transparent ? 'max-w-4xl':'max-w-7xl')}>
                <div className='sm:text-3xl text-lg m-auto header-title ml-4 w-fit flex'>
                    <Link href='/'><div className='my-auto header-title flex'>    
                            <div className='mr-4 relative w-fit'>
                                <div className='absolute w-full sm:h-1.5 h-0.5 bg-y rounded-bl-md rounded-tr-md sm:-bottom-1 bottom-0' />
                                Lockes
                            </div> 
                            Copywriting
                    </div></Link>
                </div>
                <div className={'overflow-hidden duration-500 ease-in-out ' + (transparent ? 'm-auto w-[10rem] mr-4':'w-0')}>
                    <div className='sm:p-4 sm:py-2 p-2 sm:text-lg hover:p-3 hover:py-1.5 hover:my-2.5 hover:mr-1 font-bold w-fit whitespace-nowrap mx-auto mr-0 rounded-tl-xl hover:drop-shadow-lg my-2 duration-300 ease-in-out rounded-br-xl text-white bg-y '>
                        <Link href='/#quote'><div className='sm:hidden'>{'Quote'}</div><div className='sm:block hidden'>{'Get a Quote'}</div></Link>
                    </div>
                </div>
                <div id='hm' className={'lg:flex hidden duration-500 ease-in-out relative my-auto ' + (transparent ? 'w-0 opacity-0 overflow-hidden':'mr-4 w-[28rem] m-auto opacity-100')}>
                    <div id='hu' className={'bg-y absolute rounded-br-md rounded-tl-md h-1.5 mt-6 duration-300 ease-in-out ' + (transparent ? '':'')} onMouseOver={() => setHover(hover)} onMouseLeave={() => setHover(head_page)}></div>
                    <div className='m-auto' id='hb1' onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(head_page)}><Button text='Home' route='/' sel={props.page == 1} /></div>
                    <div className='m-auto' id='hb2' onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(head_page)}><Button text='Contact' route='/contact' sel={props.page == 2} /></div>
                    <div className='m-auto' id='hb3' onMouseOver={() => setHover(3) + setHoverDD1(true)} onMouseLeave={() => setHover(head_page) + setHoverDD1(false)}><Button text='Services' route='/services' sel={props.page == 3} alt={<div onClick={() => setHover(3)}>
                        <div className={'absolute text-center overflow-hidden mt-[3rem] -ml-32 duration-300 ' + (DD ? 'h-[11rem]':'h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}> 
                            <div className='p-4 py-6 bg-black'>
                                <div className={'max-w-[10rem] mb-3 hover:opacity-100 duration-300' + (props.page == 5 ? ' text-y font-semibold':' opacity-80')}> 
                                    <Link href={services[0].link}>{services[0].title}</Link>
                                </div>
                                <div className={'max-w-[10rem] mb-3 hover:opacity-100 duration-300' + (props.page == 6 ? ' text-y font-semibold':' opacity-80')}> 
                                    <Link href={services[1].link}>{services[1].title}</Link>
                                </div>
                                <div className={'max-w-[10rem] hover:opacity-100 duration-300' + (props.page == 7 ? ' text-y font-semibold':' opacity-80')}> 
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
                    <div className='m-auto mr-0' id='hb4' onMouseOver={() => setHover(4)} onMouseLeave={() => setHover(head_page)}><Button text='About' route='/about' sel={props.page == 4} /></div>
                </div>
                <div className={'lg:hidden overflow-hidden duration-500 ease-in-out my-auto ' + (transparent ? 'w-0':'w-[3rem] m-auto sm:mr-4 mr-0')}>
                    <div className='m-auto w-fit'><NavMenu page={props.page} /></div>
                </div>
            </div>
        </div>
        <div className={props.page == 1 ? '':'h-[4.5rem] sm:h-[4.7rem]'} />
    </div>;
}