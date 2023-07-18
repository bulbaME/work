'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/public/json/data.json"

function Button(props) {
    return <div className={'w-fit p-1 pb-[0.05rem] px-3 rounded-full flex' + (props.sel ? ' bg-y':'')}>
        <Link href={props.route}><div className='font-bold text-lg hover:underline decoration-y decoration-4 duration-300'>{props.text}</div></Link>
        {props.inner}
    </div>;
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

    useEffect(() => {
        setDD(hover1 || hover2);
    }, [hover1, hover2])

    return <div className='w-full'>
        <div className='fixed bg-opacity-90 bg-white w-full drop-shadow-lg z-50'>
            <div className='max-w-7xl m-auto p-4 flex flex-wrap'>
                <div className='sm:ml-0 m-auto sm:mb-0 mb-4 w-fit font-bold text-3xl underline decoration-y underline-offset-4 decoration-4'>
                    <Link href='/'>AkaCopywriter</Link>
                </div>
                <div className='flex m-auto sm:mr-0'>
                    <Button route='/' text='Home' sel={props.page == 1} />
                    <Button route='/contact' text='Contact' sel={props.page == 2} />
                    <Button route='/services' text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} sel={props.page == 3} inner={
                        <div>
                            <div className='mt-0.5' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden mt-2 -ml-[8rem] transition-height duration-300 ' + (DD ? 'h-[14rem]':'h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='bg-stone-50 p-4 max-w-[15rem] font-semibold'>
                                    <div className={'hover:underline decoration-y decoration-2' + (props.page == 5 ? ' underline':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'my-4 hover:underline decoration-y decoration-2' + (props.page == 6 ? ' underline':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'hover:underline decoration-y decoration-2' + (props.page == 7 ? ' underline':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                </div>
                            </div>
                        </div>               
                    }  />
                    <Button route='/about' text='About' sel={props.page == 4} />
                </div>
            </div>
        </div>
        <div className='pt-[7.3rem] sm:pt-[4.2rem]' />
    </div>;
}