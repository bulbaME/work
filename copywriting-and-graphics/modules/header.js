'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

import { services } from "@/public/json/data.json";

function Button(props) {
    return <div className={'flex p-1 sm:p-2 px-2 sm:px-4 mx-1 duration-300 ' + (!props.sel ? ('hover:pt-0 sm:hover:pb-4 hover:pb-2 hover:opacity-100 opacity-70 ' + (props.t ? 'text-white':'text-r-1')):('drop-shadow-xl rounded-full ' + (props.t ? 'bg-white text-r-1':'bg-r-1 text-white')))}>
        <div><Link href={props.route}>{props.text}</Link></div>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [transparent, setTransparent] = useState(true);
    const [hover, setHover] = useState(false);
    const [DD, setDD] = useState(false);

    const updateT = (scroll) => {
        if (scroll < 50 && props.page > 0) setTransparent(true);
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
        setDD(hover);
    }, [hover])

    return <div className={'fixed z-50 w-full duration-300 bg-' + (transparent ? 'none ':'white drop-shadow-xl')}>
        <div className='max-w-7xl m-auto sm:p-4 p-2 lg:flex relative'>
            <div className={'lg:ml-0 text-2xl lg:mb-0 mb-4 sm:text-4xl font-bold duration-300 text-center lg:w-fit' + (transparent ? ' text-white':' text-r-1')}>
                <Link href='/'>Copywriting and Graphics</Link>
            </div>
            <div className='flex m-auto lg:mr-0 lg:w-fit w-full font-bold flex-wrap text-sm sm:text-lg'>
                <div className='m-auto'><Button route='/' text='Home' sel={props.page == 1} t={transparent} /></div>
                <div className='m-auto'><Button route='/contact' text='Contact' sel={props.page == 2} t={transparent} /></div>
                <div className='m-auto' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}><Button route='/services' text='Services' sel={props.page == 3} t={transparent} alt={
                    <div className='relative'>
                        <div className='sm:mt-1 ml-1 w-fit -mr-1' onClick={() => setHover(!hover)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={'absolute overflow-hidden transition-height duration-300 w-[15rem] -left-full mt-6 z-50 drop-shadow-lg -translate-x-1/2' + (DD ? ' h-[13rem]': ' h-0')}>
                                <div className='bg-white rounded-2xl text-lg drop-shadow-lg text-black font-bold'>
                                    <div className={'p-4 rounded-t-2xl py-2 duration-300' + (props.page == 5 ? ' bg-r-1 text-white drop-shadow-lg':' opacity-70 text-r-1 hover:pt-0 hover:opacity-100 hover:pb-4 ')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'p-4 py-2 duration-300' + (props.page == 6 ? ' bg-r-1 text-white drop-shadow-lg':' opacity-70 text-r-1 hover:pt-0 hover:opacity-100 hover:pb-4 ')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'p-4 rounded-b-2xl py-2 duration-300' + (props.page == 7 ? ' bg-r-1 text-white drop-shadow-lg':' opacity-70 text-r-1 hover:pt-0 hover:opacity-100 hover:pb-4 ')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                    </div>
                } /></div>
                <div className='m-auto'><Button route='/about' text='About' sel={props.page == 4} t={transparent} /></div>
                <div className='m-auto'><Button route='/contact#contact-us' text={<><div className='sm:block hidden'>Get a Quote</div><div className='sm:hidden'>Quote</div></>} sel={true} t={transparent} /></div>
            </div>
        </div>
    </div>;
}