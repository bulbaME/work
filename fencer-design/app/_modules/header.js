'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "../data.json";

function Button(props) {
    return <div className='w-fit m-auto'>
        <div className={'px-3 font-semibold text-lg text-r-l rounded-full flex' + (props.sel ? ' bg-white':'')}>
            <Link href={props.route}>{props.text}</Link>
            {props.alt}
        </div>
    </div>;
}

export default function Header(props) {
    const [dropDownM, setDropDownM] = useState(false);
    const [hoverDD1, setHoverDD1] = useState(false);
    const [hoverDD2, setHoverDD2] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [serviceDD, setServiceDD] = useState(false);

    useEffect(() => {
        setDropDown(hoverDD1 || hoverDD2);
    }, [hoverDD1, hoverDD2])

    return <div className='w-full z-50'>
        <div className='fixed w-full p-4 bg-black drop-shadow-lg z-50'>
            <div className='max-w-7xl m-auto flex'>
                <div className='font-bold text-2xl text-white'>
                    <Link href='/'>Fencer Design</Link>
                </div>
                <div className='sm:flex hidden m-auto mr-0'>
                    <Button route='/' text='Home' sel={props.page == 1} />
                    <Button route='/contact' text='Contact' sel={props.page == 2} />
                    <Button route='/services' text={<div onMouseOver={() => setHoverDD1(true)} onMouseLeave={() => setHoverDD1(false)}>Services</div>} sel={props.page == 3 || props.page > 4} alt={<>
                        <div className='mt-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={'absolute overflow-hidden backdrop-blur-lg duration-300 mt-8 transition-height -ml-12 max-w-[15rem]' + (dropDown ? ' h-[15rem]':' h-0')} onMouseOver={() => setHoverDD2(true)} onMouseLeave={() => setHoverDD2(false)}>
                            <div className='p-4 bg-black'>
                                <div className={'mb-3 ' + (props.page == 5 ? 'text-white':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                <div className={'mb-3 ' + (props.page == 6 ? 'text-white':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                <div className={(props.page == 7 ? 'text-white':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                            </div>
                        </div>
                    </>} />
                    <Button route='/about' text='About' sel={props.page == 4} />
                </div>
                <div className='sm:hidden m-auto mr-0'>
                    <div className={'duration-300 cursor-pointer ' + (dropDownM ? 'text-r-l rotate-180':'text-white')} onClick={() => setDropDownM(!dropDownM)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className={'absolute overflow-hidden text-white font-semibold transition-height duration-300 -ml-36' + (dropDownM ? (serviceDD ? ' h-[23rem]':' h-[12rem]'):' h-0')}>
                        <div className='p-4 bg-black'>
                            <div className='py-2'><Link href='/'>Home</Link></div>
                            <div className='py-2'><Link href='/contact'>Contact</Link></div>
                            <div className='py-2'>
                                <div className='flex'>
                                    <Link className='h-fit' href='/services'>Services</Link>
                                    <div className='m-auto mt-1 mr-0' onClick={() => setServiceDD(!serviceDD)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={'ml-4 overflow-hidden transition-height duration-300' + (serviceDD ? ' h-[10.5rem]':' h-0')}>
                                    <div className={'mb-3 ' + (props.page == 5 ? 'text-white':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'mb-3 ' + (props.page == 6 ? 'text-white':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={(props.page == 7 ? 'text-white':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                            <div className='py-2'><Link href='/about'>About</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[4rem]' />
    </div>;
}