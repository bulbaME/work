'use client';

// import NavMenu from "./nav_menu";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "./data";
import { to_link } from "./widgets";

function Button(props) {
    return <div className={'m-auto relative w-fit sm:px-8 px-2 rounded-full flex py-1 duration-300 ' + (props.sel ? (props.t ? 'font-extrabold text-b-m':'font-extrabold text-b-m'):('hover:font-bold ' + (props.t ? 'text-white':'')))}>
        <Link href={props.route}><div className='sm:text-lg'>{props.text}</div></Link>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [transparent, setTransparent] = useState(true);

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);
    
    const updateT = (scroll) => {
        if (props.page == 1) setTransparent(true);
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
        setDD(hover1 || hover2)
    }, [hover1, hover2])


    return <div>
        <div className={'fixed w-full duration-300 z-50 ' + (transparent ? '':'bg-white drop-shadow-lg')}>
            <div className='max-w-7xl md:flex flex-wrap m-auto sm:p-6 py-4 duration-300'>
                <div className='m-auto md:ml-4 w-fit flex'>
                    <div className={'sm:text-3xl text-xl font-extrabold header-title m-auto relative ' + (transparent ? 'text-white':'')}>
                        <Link href='/'>Seo<span className={(transparent ? 'text-b-m':'text-b-m')}>Sergeant</span></Link>
                    </div>
                </div>
                <div className={'flex m-auto md:pt-0 md:px-0 px-2 pt-4 md:w-fit md:mr-4 '}>
                    <div className='m-auto'><Button text='Home' route='/' t={transparent} sel={props.page == 1} /> </div>
                    <div className='m-auto'><Button text='Contact' route='/contact' t={transparent} sel={props.page == 2} /></div>
                    <div className='m-auto'><Button text='About' route='/about' t={transparent} sel={props.page == 3} /> </div>
                    <div className='m-auto'><Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' t={transparent} sel={props.page > 5 || props.page == 4} alt={
                        <div className=''>
                            <div className='sm:mt-1.5 mt-1 ml-1 -mr-1' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-5 sm:h-5 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 w-[14rem] text-center -ml-[9rem] mt-[1.35rem]' + (DD ? ' sm:h-[12rem] h-[12rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='p-4 py-2 bg-white text-black font-light'>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 6 ? ' font-bold text-b-m':'')}><Link href={'/services/' + to_link(services[0].title)}>{services[0].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 7 ? ' font-bold text-b-m':'')}><Link href={'/services/' + to_link(services[1].title)}>{services[1].title}</Link></div>
                                    <div className={'py-2 hover:pt-1 hover:pb-3 duration-300' + (props.page == 8 ? ' font-bold text-b-m':'')}><Link href={'/services/' + to_link(services[2].title)}>{services[2].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto'><Button text='FAQ' route='/faq' t={transparent} sel={props.page == 5} /> </div>
                </div>
                {/* <div className='md:hidden w-fit m-auto mr-0'>
                    <NavMenu page={props.page} />
                </div> */}
            </div>
        </div>
        <div className={props.page != 1 ? 'pt-[6.5rem] sm:pt-[8.5rem] md:pt-[5.2rem]':''} />
    </div>;
}