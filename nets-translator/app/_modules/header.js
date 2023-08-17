'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { services } from "@/app/data.json";

function Button(props) {
    return <div className='m-auto'>
        <div className={'mb-6 text-white text-xl hover:opacity-100 duration-300 mx-2 flex ' + (props.sel ? '':'opacity-80')}>
            <Link href={props.route}>
                {props.text}
            </Link>
            <div>{props.alt}</div>
        </div>
    </div>
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        setDropDown(hover1 || hover2)
    }, [hover1, hover2, dropDown]);


    return <div className='bg-v-d w-full text-center'>
        <div className='text-white text-4xl mx-3 py-6 font-black'><Link href='/'>Nets Translator</Link></div>
        <div className='flex flex-wrap max-w-3xl m-auto text-center '>
            <Button text='Home' route='/' sel={props.page == 1} />
            <Button text='Contact' route='/contact' sel={props.page == 2} />
            <Button text='About' route='/about' sel={props.page == 3} />
            <Button text={<div className='flex' onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} alt={<div onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}><div className={'mx-2 mt-0.5 duration-300 ' + (dropDown ? 'rotate-180':'')} onClick={() => setDropDown(!dropDown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className={'drop-shadow-lg absolute mt-0 w-40 -ml-28 duration-300 transition-height ease-in-out overflow-hidden z-50 ' + (dropDown ? '':'h-0')}>
                    <div className='p-4 background-5'>
                        <div className={'text-white hover:opacity-100 duration-300 text-lg font-medium my-2 ' + (props.page == 5 ? '':'opacity-60')}><Link href={services[0].link}>{services[0].title}</Link></div>
                        <div className={'text-white hover:opacity-100 duration-300 text-lg font-medium my-2 ' + (props.page == 6 ? '':'opacity-60')}><Link href={services[1].link}>{services[1].title}</Link></div>
                        <div className={'text-white hover:opacity-100 duration-300 text-lg font-medium my-2 ' + (props.page == 7 ? '':'opacity-60')}><Link href={services[2].link}>{services[2].title}</Link></div>
                    </div>
            </div></div>} route='/services' sel={props.page == 4} />
            <Button text='Why us?' route='/#why-us' />
        </div>
    </div>;
}