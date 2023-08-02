'use client';

import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from '../data.json';

function Button(props) {
    return <div className='text-2xl m-4 ease-in-out'>
        <Link className={'hover:opacity-100 duration-200 ' + (props.slc ? 'opacity-100':'opacity-60')} href={props.route}>{props.text}</Link>
    </div>;
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        setDropDown(hover1 || hover2)
    }, [hover1, hover2, dropDown]);

    return <div className='block p-5'>
        <div className='flex'>
            <div className='text-4xl m-auto text-center md:ml-0 text-csblue font-black'>
                <Link href='/'>XCopywriter</Link>
            </div>
            <div className='hidden md:flex float-right font-semibold m-y-auto'>
                <Button text='Home' route='/' slc={props.page == 1} />
                <Button text='About' route='/about' slc={props.page == 2} />
                <Button text='Contact' route='/contact' slc={props.page == 3} />
                <div className='flex w-fit cursor-pointer' onMouseOver={() => (!hover1 && setHover1(true))} onMouseLeave={() => setHover1(false)}>
                    <Button text='Services' route='/services' slc={props.page == 4} />
                    <div className='m-4 -ml-2.5 mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                { dropDown ?
                    <div className='absolute duration-300 ml-80 mt-16 bg-white p-4 rounded-3xl drop-shadow-lg text-xl' onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                        <div className='opacity-60 hover:opacity-100 duration-300'><Link href={services[0].link}>{services[0].title}</Link></div>
                        <div className='bg-slate-200 h-px w-10/12 ml-3 my-2' />
                        <div className='opacity-60 hover:opacity-100 duration-300'><Link href={services[1].link}>{services[1].title}</Link></div>
                        <div className='bg-slate-200 h-px w-10/12 ml-3 my-2' />
                        <div className='opacity-60 hover:opacity-100 duration-300'><Link href={services[2].link}>{services[2].title}</Link></div>
                    </div>
                    : ''
                }   
            </div>
        </div>
        <div className='h-px w-11/12 m-auto mt-5 bg-slate-300' />
    </div>;
}