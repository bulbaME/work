'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

import { services } from "../data.json";

function Button(props) {
    return <div className='m-auto'> 
        <div className={'text-lg my-1 hover:mt-0.5 hover:mb-1.5 flex duration-300 mx-2' + (props.sel ? ' text-g-l':' text-b-l')}>
            <Link href={props.route}>{props.text}</Link>
            {props.alt}
        </div>
    </div>;
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        setDropDown(hover1 || hover2)
    }, [hover1, hover2]);

    return <div>
        <div className='w-full fixed bg-zinc-950 p-2 z-50'>
            <div className='max-w-7xl m-auto sm:flex flex-wrap'>
                <div className='header-title font-black text-3xl w-fit m-auto sm:m-0'><Link href='/'>Seo Digital 360</Link></div>
                <div className='flex w-full sm:w-fit m-auto sm:mr-0 mt-4 sm:mt-0'>
                    <Button text='Home' route='/' sel={props.page == 1} />
                    <Button text='Contact' route='/contact' sel={props.page == 2} />
                    <Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
                        Services 
                        </div>
                        } alt={<div className='flex -mr-1'>
                            <div className='mt-1 ml-0.5' onClick={() => setDropDown(!dropDown)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden z-50 -ml-[5rem] transition-height mt-[1.5rem] duration-300' + (dropDown ? ' h-52':' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                            <div className='bg-zinc-950 p-4 -mb-4'>
                                <div className={'duration-300 my-1 hover:mt-0 hover:mb-2 ' + (props.page == 5 ? 'text-g-l':'text-b-l')}><Link href={services[0].link}>{services[0].title}</Link></div>
                            </div>
                            <div className='bg-zinc-950 p-4 -mb-4'>
                                <div className={'duration-300 my-1 hover:mt-0 hover:mb-2 ' + (props.page == 6 ? 'text-g-l':'text-b-l')}><Link href={services[1].link}>{services[1].title}</Link></div>
                            </div>
                            <div className='bg-zinc-950 p-4'>
                                <div className={'duration-300 my-1 hover:mt-0 hover:mb-2 ' + (props.page == 7 ? 'text-g-l':'text-b-l')}><Link href={services[2].link}>{services[2].title}</Link></div>
                            </div>
                            </div>
                        </div>} route='/services' sel={props.page == 3} />
                    <Button text='About us' route='/about' sel={props.page == 4} />
                </div>
            </div>
        </div>
        <div className='w-full h-[6.5rem] sm:h-[3rem]'>
        </div>
    </div>;
}