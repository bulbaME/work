'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "./data";
import NavMenu from "./nav_menu";
import { to_link } from "./widgets";

function Button(props) {
    return <div className='m-auto'>
        <div className={props.q ? 'p-1 sm:text-base mx-2 text-sm duration-300 px-2 flex font-bold text-white hover:decoration-g-m decoration-black decoration-4 underline':('p-1 mx-2 sm:text-base text-sm duration-300 px-2 flex rounded-full ' + (props.sel ? 'font-bold text-g-m border-[2px] border-g-m':'text-white font-light hover:text-g-m'))}>
            <Link href={props.route}>{props.text}</Link>
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
        <div className={'fixed z-50 w-screen duration-300 ease-in-out ' + (transparent ? '':'bg-black drop-shadow-lg')}>
            <div className='m-auto flex sm:p-10 p-4 sm:py-2 py-2 max-w-7xl'>
                <div className={'ease-in-out transition-all header-title duration-300 flex overflow-hidden ' + (transparent ? 'my-8 sm:text-4xl text-2xl w-full text-white':'text-black my-0 w-0 sm:text-3xl text-lg')}>
                    <div className='w-full'>
                        <Link href='/'><div className='m-auto header-title flex w-fit'>
                            <div className={'duration-300 ease-in-out h-fit ' + (transparent ? 'mr-4 sm:w-10 w-7':'w-0 mr-0')}>
                                <Image src='/img/icon.png' alt='logo' width={100} height={100} />
                            </div>
                            <div className='my-auto'>Diorama Designs</div>
                        </div></Link>
                    </div>
                </div>
                <div className={'flex sm:flex-nowrap flex-wrap duration-300 ease-in-out relative m-auto ' + (transparent ? 'w-0 opacity-0 overflow-hidden':'w-full opacity-100')}>
                <div className='m-auto'><Button text='Home' route='/' sel={props.page == 1} t={transparent} /> </div>
                    <div className='m-auto whitespace-nowrap'><Button text='Contact us' route='/contact' sel={props.page == 2} t={transparent} /> </div>
                    <div className='m-auto whitespace-nowrap'><Button text='About us' route='/about' sel={props.page == 3} t={transparent} /></div>
                    <div className='m-auto relative'><Button text={<div onMouseOver={() => setHoverDD1(true)} onMouseLeave={() => setHoverDD1(false)}>Services</div>} route='/services' sel={props.page == 4 || props.page > 5 } t={transparent} alt={
                        <div className=''>
                            <div className='sm:mt-1 mt-0.5 ml-1 -mr-0.5' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={props.page == 4 ? 2:1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                            <div className={'absolute w-[16rem] text-black overflow-hidden transition-height duration-300 -translate-x-1/2 left-1/2 mt-6' + (DD ? ' h-[16rem]': ' h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}>
                                <div className='p-2 bg-black text-white sm:text-base text-sm text-p font-light'>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 6 ? ' font-bold underline decoration-4 decoration-r-l':'')}><Link href={'/services/' + to_link(services[0].title)}>{services[0].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 7 ? ' font-bold underline decoration-4 decoration-r-l':'')}><Link href={'/services/' + to_link(services[1].title)}>{services[1].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 8 ? ' font-bold underline decoration-4 decoration-r-l':'')}><Link href={'/services/' + to_link(services[2].title)}>{services[2].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 9 ? ' font-bold underline decoration-4 decoration-r-l':'')}><Link href={'/services/' + to_link(services[3].title)}>{services[3].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto whitespace-nowrap'><Button text='FAQ' route='/faq' sel={props.page == 5} t={transparent} /></div>
                    <div className='m-auto whitespace-nowrap'><Button q={true} text='Get a Quote' route='/contact#contact-us' sel={false} t={transparent} /></div>
                </div>
                {/* <div className={'lg:hidden overflow-hidden duration-500 ease-in-out my-auto ' + (transparent ? 'w-0 hidden':'w-[3rem] m-auto sm:mr-4 -mr-2')}>
                    <div className='m-auto w-fit'><NavMenu page={props.page} /></div>
                </div> */}
            </div>
        </div>
        <div className={props.page == 1 ? '':'sm:h-[5.5rem] h-[4.5rem]'} />
    </div>;
}