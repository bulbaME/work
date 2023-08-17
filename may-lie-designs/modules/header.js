'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/public/json/data.json"; 

function Button(props) {
    return <div className='m-auto w-fit px-3 flex py-2 hover:pt-0 hover:pb-4 duration-300'>
        <Link href={props.route}><div className={'font-bold text-lg' + (props.sel ? ' text-v1-l':' text-white')}>{props.text}</div></Link>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

    useEffect(() => {
        setDD(hover1 || hover2);
    }, [hover1, hover2])

    return <div className='w-full bg-black'>
        <div className='max-w-7xl m-auto p-4'>
            <div className='flex flex-wrap'>
                <Link href='/' className='w-fit m-auto sm:ml-0'>
                    <div className='flex w-fit m-auto sm:ml-0'>
                        <div className='w-[3rem] h-[3rem]'>
                            <img src='/img/idea.png' />
                        </div>
                        <div className='text-white m-auto ml-2 text-3xl font-bold relative'>
                            MayLieDesigns
                            <div className='absolute h-1 bg-v1-l w-full -mt-1' />
                        </div>
                    </div>
                </Link>
                <div className='m-auto sm:mr-0 w-fit flex'>
                    <Button text='Home' route='/' sel={props.page == 1} />
                    <Button text='Contact' route='/contact' sel={props.page == 2} />
                    <Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 3 || props.page > 4} alt={
                        <div className=''>
                            <div className={'mt-1' + (props.page == 3 || props.page > 4 ? ' text-v1-l':' text-white')} onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden transition-height duration-300 max-w-[12rem] -ml-[5.5rem] mt-4' + (DD ? ' h-[18rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='p-4 bg-black text-lg text-white'>
                                    <div className={'py-4 font-semibold hover:pt-2 hover:pb-6 duration-300' + (props.page == 5 ? ' text-v1-l':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'py-4 font-semibold hover:pt-2 hover:pb-6 duration-300' + (props.page == 6 ? ' text-v1-l':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'py-4 font-semibold hover:pt-2 hover:pb-6 duration-300' + (props.page == 7 ? ' text-v1-l':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } />
                    <Button text='About us' route='/about' sel={props.page == 4} />
                </div>
            </div>
        </div>
    </div>;
}