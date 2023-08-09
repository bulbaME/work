'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { services } from "@/public/json/data.json"
import NavMenu from "./nav_menu";

function Button(props) {
    return <div className={'duration-300 ease-in-out m-auto w-fit  flex px-4 rounded-full ' + (props.t ? 'text-white ':'text-p ') + (props.sel ? 'font-bold':'font-light hover:font-bold')}>
        <Link href={props.route}><div className={'text-xl ' + (props.sel ? 'drop-shadow':'')}>{props.text}</div></Link>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [transparent, setTransparent] = useState(props.page == 1);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

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
        setDD(hover1 || hover2)
    }, [hover1, hover2])

    return <div>
        <div className={'fixed w-full duration-300 z-50' + (transparent ? '':' bg-white drop-shadow-lg')}>
            <div className={'max-w-7xl flex m-auto sm:p-6 p-2 sm:py-6 py-3 duration-300' + (transparent ? ' text-white': ' text-black')}>
                <div className={'transition-all duration-300 ease-in-out overflow-hidden text-p ' + (transparent ? 'w-0 ml-0':'w-[20rem] ml-4 m-auto')}>
                    <div className='sm:text-4xl text-2xl m-auto header-title'><Link href='/'>TranslationInbox</Link></div>
                </div>
                <div className={'duration-300 transition-all m-auto ' + (transparent ? 'w-full max-w-4xl sm:flex hidden':'w-[35rem] mr-4 lg:flex hidden')}>
                    <div className='m-auto ml-0'><Button text='Home' route='/' sel={props.page == 1} t={transparent} /> </div>
                    <div className='m-auto'><Button text='Contact us' route='/contact' sel={props.page == 2} t={transparent} /> </div>
                    <div className='m-auto'><Button text='About us' route='/about' sel={props.page == 3} t={transparent} /></div>
                    <div className='m-auto relative' onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}><Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 4} t={transparent} alt={
                        <div className=''>
                            <div className='mt-1 ml-1 -mr-2' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute w-[16rem] overflow-hidden transition-height duration-300 -translate-x-1/2 left-1/2 mt-6' + (DD ? ' h-[18rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='p-2 bg-white sm:text-lg text-p font-light'>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 6 ? ' font-semibold':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 7 ? ' font-semibold':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 8 ? ' font-semibold':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto mr-0'><Button text='FAQ' route='/faq' sel={props.page == 5} t={transparent} /></div>
                </div>
                <div className={'my-auto lg:hidden ' + (transparent ? 'hidden':'')}>
                    <NavMenu page={props.page} />
                </div>
            </div>
        </div>
        { props.page != 1 ? <div className='w-full sm:pt-[5rem] pt-[3.5rem]'  /> : '' }
    </div>;
}