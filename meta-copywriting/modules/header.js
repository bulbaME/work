'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import { services } from "@/public/json/data.json";

function Button(props) {
    return <div className={'flex duration-300 px-3 py-6 ' + (props.sel ? 'bg-b-d':'hover:pb-8 hover:pt-4')}>
        <div><Link href={props.route}>{props.text}</Link></div>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [hover, setHover] = useState(false);
    const [DD, setDD] = useState(false);

    const [mDD, setMDD] = useState(false);
    const [mDD2, setMDD2] = useState(false);

    useEffect(() => {
        setDD(hover);
    }, [hover])

    return <div>
        <div className='fixed z-50 w-full duration-300 bg-o-m text-white drop-shadow-lg'>
            <div className='max-w-7xl m-auto px-3 flex relative'>
                <div className='flex w-fit m-auto ml-0'>
                    <div className='sm:w-[3.5rem] w-[3rem] p-2 m-auto'><Image src='/img/icon.png' width={512} height={512} /></div>
                    <div className='text-2xl m-auto sm:text-4xl py-4 font-extrabold w-fit text-g-m'>
                        <Link href='/'>MetaCopywriting</Link>
                    </div>
                </div>
                <div className='lg:flex hidden m-auto lg:mr-0 sm:w-fit w-full font-bold flex-wrap text-lg sm:text-xl'>
                    <div className='m-auto'><Button route='/' text='Home' sel={props.page == 1} /></div>
                    <div className='m-auto'><Button route='/contact' text='Contact' sel={props.page == 2} /></div>
                    <div className='m-auto' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}><Button route='/services' text='Services' sel={props.page == 3 || props.page > 5} alt={
                        <div className='relative z-50'>
                            <div className='mt-1 ml-1 w-fit -mr-2' onClick={() => setHover(!hover)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 w-[15rem] -left-full mt-3 drop-shadow-lg -translate-x-1/2 z-50' + (DD ? ' h-[13rem]': ' h-0')}>
                                    <div className='bg-white text-lg drop-shadow-lg text-o-m font-bold'>
                                        <div className={'p-4 py-2 duration-300' + (props.page == 6 ? ' text-b-d':' hover:pl-5 hover:pr-3')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                        <div className={'p-4 py-2 duration-300' + (props.page == 7 ? ' text-b-d':' hover:pl-5 hover:pr-3')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                        <div className={'p-4 py-2 duration-300' + (props.page == 8 ? ' text-b-d':' hover:pl-5 hover:pr-3')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                    </div>
                                </div>
                        </div>
                    } /></div>
                    <div className='m-auto'><Button route='/faq' text='FAQ' sel={props.page == 4} /></div>
                    <div className='m-auto'><Button route='/about' text='About us' sel={props.page == 5} /></div>
                </div>
                <div className='lg:hidden my-auto'>
                    <div className={'my-auto mr-3 cursor-pointer duration-300' + (mDD ? ' rotate-180':'')} onClick={() => setMDD(!mDD)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={'absolute duration-300 overflow-hidden right-0 sm:mt-5 mt-4 ' + (mDD ? 'sm:h-[26rem]':'h-0')}>
                        <div className='bg-o-m text-white sm:text-xl font-bold'>
                            <div className={'p-4 py-2' + (props.page == 1 ? ' bg-b-d':'')}><Link href='/'>Home</Link></div>
                            <div className={'p-4 py-2' + (props.page == 2 ? ' bg-b-d':'')}><Link href='/contact'>Contact</Link></div>
                            <div className={'p-4 py-2 flex' + (props.page == 3 ? ' bg-b-d':'')}>
                                <Link href='/services'>Services</Link>
                                <div className='m-auto mr-0' onClick={() => setMDD2(!mDD2)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                    <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={'overflow-hidden transition-height ' + (mDD2 ? 'sm:h-[12rem] h-[9rem]':'h-0')}>
                                <div className={'p-4 pl-8 py-2' + (props.page == 6 ? ' bg-b-d':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                <div className={'p-4 pl-8 py-2' + (props.page == 7 ? ' bg-b-d':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                <div className={'p-4 pl-8 py-2' + (props.page == 8 ? ' bg-b-d':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                            </div>
                            <div className={'p-4 py-2' + (props.page == 4 ? ' bg-b-d':'')}><Link href='/faq'>FAQ</Link></div>
                            <div className={'p-4 py-2' + (props.page == 5 ? ' bg-b-d':'')}><Link href='/about'>About us</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:pt-[4.7rem] sm:pt-[4.5rem] pt-[4rem]' />
    </div>;
}