'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "./data";
// import NavMenu from "./nav_menu";

function Button(props) {
    return <div className='m-auto relative'>
        <div className={'px-2 sm:mx-2 mx-2 flex sm:text-lg duration-300 ' + (props.sel ? 'font-bold border-4 brd-1 drop-shadow-md':'border-[4px] border-opacity-0 border-white hover:border-opacity-30')}>
            <Link href={props.route} className='w-fit'>{props.text}</Link>
            {props.alt}
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
        <div className={'fixed transition-all z-50 w-screen text-white duration-300 ' + (transparent ? '':'bg-1 drop-shadow-lg')}>
            <div className={'m-auto flex flex-wrap sm:p-10 md:p-4 sm:py-4 py-2 duration-500 ease-in-out max-w-7xl ' + (transparent ? '':'')}>
                <div className='sm:text-3xl text-lg m-auto md:ml-4 w-fit'>
                    <Link href='/'><div className='my-auto header-title w-fit'>
                        Copypaste Seo
                    </div></Link>
                </div>
                <div id='hm' className={'duration-500 flex ease-in-out relative w-fit m-auto md:mr-4 my-auto md:py-0 py-3 ' + (transparent ? '':'')}>
                    <Button text='Home' route='/' sel={props.page == 1} />
                    <Button text='Contact' route='/contact' sel={props.page == 2} />
                    <div className='m-auto' onMouseOver={() => setHoverDD1(true)} onMouseLeave={() => setHoverDD1(false)}><Button text='Services' route='/services' sel={props.page == 3 || props.page > 4} alt={<div>
                        <div className={'absolute text-center overflow-hidden mt-[3rem] w-[14rem] -translate-x-1/2 left-1/2 duration-300 ' + (DD ? 'h-[16em]':'h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}> 
                            <div className='p-4 py-4 bg-white text-black font-normal'>
                                <div className={'max-w-[14rem] mb-3 hover:opacity-100 duration-300' + (props.page == 5 ? ' text-y font-bold':' opacity-60')}> 
                                    <Link href={services[0].link}>{services[0].title}</Link>
                                </div>
                                <div className={'max-w-[14rem] mb-3 hover:opacity-100 duration-300' + (props.page == 6 ? ' text-y font-bold':' opacity-60')}> 
                                    <Link href={services[1].link}>{services[1].title}</Link>
                                </div>
                                <div className={'max-w-[14rem] hover:opacity-100 duration-300' + (props.page == 7 ? ' text-y font-bold':' opacity-60')}> 
                                    <Link href={services[2].link}>{services[2].title}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='mt-1.5 ml-1 -mr-0.5' onClick={() => setHoverDD1(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={props.page == 3 || props.page > 4 ? 3:1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>} /></div>
                    <Button text='About us' route='/about' sel={props.page == 4} />
                </div>
            </div>
        </div>
        <div className={props.page == 1 ? '':'h-[6.3rem] md:h-[4.3rem]'} />
    </div>;
}