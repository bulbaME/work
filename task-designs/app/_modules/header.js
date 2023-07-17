'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

import { services } from "../data.json";


function Button(props) {
    return <div className='mx-3 flex font-semibold text-lg sm:text-xl'>
        <div className={'hover:opacity-100 duration-300 decoration-y-l' + (props.sel ? ' underline':' opacity-70')}><Link href={props.route}>{props.text}</Link></div>
        <div>{props.alt}</div>
    </div>;
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        setDropDown(hover1 || hover2)
    }, [hover1, hover2, dropDown]);

    return <div className='w-full bg-gray-900'>
        <div className='max-w-7xl m-auto text-white flex flex-wrap p-5'>
            <div style={{fontFamily: "'Sansita Swashed', cursive"}} className='text-3xl m-auto sm:m-0'><Link href='/'>Task Designs</Link></div>
            <div className='hidden sm:flex flex-wrap m-auto sm:mr-0 mt-5 sm:mt-0'>
                <Button text='Home' route='/' sel={props.page == 1} />
                <Button text='Contact' route='/contact' sel={props.page == 2} />
                <Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 3} alt={<div>
                    <div className={'ml-0.5 mt-1.5 opacity-70' + (props.page == 3 ? ' opacity-100':'')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={'absolute overflow-hidden z-50 -ml-24 duration-300' + (dropDown ? '':' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                        <div className='bg-gray-900 p-4 -mb-4'>
                            <div className={'hover:opacity-100 duration-300 ' + (props.page == 5 ? 'opacity-100':'opacity-70')}><Link href={services[0].link}>{services[0].title}</Link></div>
                        </div>
                        <div className='bg-gray-900 p-4 -mb-4'>
                            <div className={'hover:opacity-100 duration-300 ' + (props.page == 6 ? 'opacity-100':'opacity-70')}><Link href={services[1].link}>{services[1].title}</Link></div>
                        </div>
                        <div className='bg-gray-900 p-4'>
                            <div className={'hover:opacity-100 duration-300 ' + (props.page == 7 ? 'opacity-100':'opacity-70')}><Link href={services[2].link}>{services[2].title}</Link></div>
                        </div>
                    </div>
                </div>} />
                <Button text='About us' route='/about' sel={props.page == 4} />
            </div>
        </div>
    </div>;
}