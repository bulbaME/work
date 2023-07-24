import Link from "next/link";

import { useState, useEffect } from "react";

import { services } from "@/public/json/data.json";
import NavMenu from "./nav_menu";

function Button(props) {
    return <div className={'hover:opacity-100 duration-300 flex px-4 ' + (props.sel ? 'opacity-100':'opacity-60')}>
        <div className='font-semibold text-md'><Link href={props.route}>{props.text}</Link></div>
        {props.alt}
    </div>
}

export default function Header(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

    useEffect(() => {
        setDD(hover1 || hover2);
    }, [hover1, hover2])


    return <div>
        <div className='fixed w-full bg-y-l z-50'>
            <div className='max-w-6xl m-auto flex p-4'>
                <div className='text-2xl font-bold w-fit m-auto ml-0'>
                    Translation International
                </div>
                <div className='sm:flex hidden w-fit m-auto mr-0'>
                    <Button text='Home' route='/' sel={props.page == 1} />
                    <Button text='Contact' route='/contact' sel={props.page == 2} />
                    <Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 3} alt={
                        <div>
                            <div className='mt-[0.1rem]' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute overflow-hidden mt-2 -ml-[8rem] transition-height duration-300 ' + (DD ? 'h-[20rem]':'h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='bg-y-l p-4 max-w-[13rem] font-semibold text-md'>
                                    <div className={'hover:opacity-100 duration-300' + (props.page == 5 ? ' opacity-100':' opacity-60')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'my-4 hover:opacity-100 duration-300' + (props.page == 6 ? ' opacity-100':' opacity-60')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'hover:opacity-100 duration-300' + (props.page == 7 ? ' opacity-100':' opacity-60')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                    <div className={'my-4 hover:opacity-100 duration-300' + (props.page == 8 ? ' opacity-100':' opacity-60')}><Link href={services[3].link}>{services[3].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } />
                    <Button text='About' route='/about' sel={props.page == 4} />
                </div>
                <div className='sm:hidden w-fit m-auto mr-0'>
                    <NavMenu page={props.page} />
                </div>
            </div>
        </div>
        <div className='pt-[4rem]' />
    </div>;
}