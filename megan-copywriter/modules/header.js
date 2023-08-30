'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "./data";
import NavMenu from "./nav_menu";
import { to_link } from "./widgets";

function Button(props) {
    return <div className='m-auto'>
        <div className={'mx-4 bg-black bg-opacity-40 drop-shadow-md rounded-full backdrop-blur-md p-1 px-1 ' + (props.sel ? 'border-[2px] border-b-m':'')}>
            <div className={'sm:text-lg duration-300 px-2 flex rounded-full ' + (props.sel ? 'font-bold text-b-m':'font-light text-b-m')}>
                <Link href={props.route}>{props.text}</Link>
                {props.alt}
            </div>
        </div>
    </div>;
}

export default function Header(props) {
    const [hoverDD1, setHoverDD1] = useState(false);
    const [hoverDD2, setHoverDD2] = useState(false);
    const [DD, setDD] = useState(false);
    const [transparent, setTransparent] = useState(props.page == 1);

    const updateT = (scroll) => {
        if (scroll < 80 && props.page == 1) setTransparent(true);
        else setTransparent(false);
    }

    useEffect(() => {
        if (props.page != 0) {
            updateT(0);

            window.addEventListener('scroll', () => {
                updateT(window.scrollY);
            });
        }
    }, []);

    useEffect(() => {
        setDD(hoverDD1 || hoverDD2);
    }, [hoverDD1, hoverDD2])

    return <div className='w-full'>
        <div className={'fixed z-50 w-screen duration-300 ease-in-out ' + (transparent ? '':'')}>
            <div className='m-auto flex sm:p-10 p-4 sm:py-2 py-2 max-w-7xl'>
                <div className={'ease-in-out relative transition-all header-title duration-300 pl-4 flex text-b-d sm:text-3xl text-lg' + (transparent ? '':'')}>
                <div className='absolute h-[4rem] bg-1 -mt-2 w-full drop-shadow' />
                    <div className='w-full px-4 pr-6'>
                        <Link href='/'><div className='m-auto header-title flex w-fit'>
                            <div className='my-auto z-10'>Megan Copywriter</div>
                        </div></Link>
                    </div>
                </div>
                <div className={'sm:flex hidden sm:flex-nowrap flex-wrap duration-300 ease-in-out mr-0 relative m-auto w-fit opacity-100' + (transparent ? '':'')}>
                <div className='m-auto'><Button text='Home' route='/' sel={props.page == 1} t={transparent} /> </div>
                    <div className='m-auto whitespace-nowrap'><Button text='Contact' route='/contact' sel={props.page == 2} t={transparent} /> </div>
                    <div className='m-auto whitespace-nowrap'><Button text='About' route='/about' sel={props.page == 3} t={transparent} /></div>
                    <div className='m-auto relative'><Button text={<div onMouseOver={() => setHoverDD1(true)} onMouseLeave={() => setHoverDD1(false)}>Services</div>} route='/services' sel={props.page == 4 || props.page > 5} t={transparent} alt={
                        <div className=''>
                            <div className='sm:mt-2 mt-0.5 ml-1 -mr-0.5' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={props.page == 4 ? 2:1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div className={'absolute w-[16rem] text-b-m overflow-hidden transition-height duration-300 max-w-[12rem] -translate-x-1/2 left-1/2 mt-6' + (DD ? ' h-[16rem]': ' h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}>
                                <div className='relative'>
                                    <div className='p-2 bg-black bg-opacity-40 backdrop-blur-md rounded-lg sm:text-base text-sm text-p font-light'>
                                        <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 6 ? ' font-extrabold text-b-m':'')}><Link href={'/services/' + to_link(services[0].title)}>{services[0].title}</Link></div>
                                        <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 7 ? ' font-extrabold text-b-m':'')}><Link href={'/services/' + to_link(services[1].title)}>{services[1].title}</Link></div>
                                        <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 8 ? ' font-extrabold text-b-m':'')}><Link href={'/services/' + to_link(services[2].title)}>{services[2].title}</Link></div>
                                        <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 9 ? ' font-extrabold text-b-m':'')}><Link href={'/services/' + to_link(services[3].title)}>{services[3].title}</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto whitespace-nowrap'><Button text='FAQ' route='/faq' sel={props.page == 5} t={transparent} /></div>
                </div>
                <div className={'sm:hidden overflow-hidden duration-500 ease-in-out my-auto w-[3rem] m-auto sm:mr-4 -mr-2' + (transparent ? '':'')}>
                    <div className='m-auto w-fit'><NavMenu page={props.page} /></div>
                </div>
            </div>
        </div>
        <div className={props.page == 1 ? '':''} />
    </div>;
}