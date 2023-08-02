'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { services } from "@/public/json/data.json"

function Button(props) {
    return <div className={'duration-300 m-auto w-fit md:my-0 my-2 flex sm:px-3 sm:py-2 px-1.5 py-0.5 sm:mx-2 rounded-full ' + 
            (props.sel ? 
                ('drop-shadow-lg sm:hover:mb-2.5 sm:hover:mt-1.5 ' + (props.t ? 
                    'bg-white text-p '
                    :
                    ' bg-b text-white '
                    )
                )
                :
                ('sm:hover:pb-4 sm:hover:pt-0 ' + (props.t ?
                    'text-white '
                    :
                    'text-black '
                    )
                )
            )
        }>
        <Link href={props.route}><div className='font-extrabold sm:text-lg drop-shadow-sm'>{props.text}</div></Link>
        {props.alt}
    </div>;
}

export default function Header(props) {
    const [transparent, setTransparent] = useState(props.page == 1);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [DD, setDD] = useState(false);

    const updateT = (scroll) => {
        if (scroll < 80 && props.page == 1) setTransparent(true);
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
        setDD(hover1 || hover2)
    }, [hover1, hover2])

    return <div>
        <div className={'fixed w-full duration-300 z-50' + (transparent ? '':' bg-white drop-shadow-xl')}>
            <div className={'max-w-7xl flex flex-wrap m-auto p-2 duration-300' + (transparent ? ' text-white': ' text-black')}>
                <div className='m-auto md:ml-4 w-fit flex'>
                    <div className='w-[4rem] pr-4 py-2 m-auto'><Image src='/img/icon.png' className={transparent ? 'drop-shadow-sm':'drop-shadow-lg'} width={512} height={512} /></div>
                    <div className='text-3xl font-black m-auto header-font'><Link href='/'>SeoMeteor</Link></div>
                </div>
                <div className='flex m-auto md:w-fit w-full md:mr-4 flex-wrap'>
                    <div className='m-auto'><Button text={<div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-7 sm:h-7 w-6 h-6">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </div>} route='/' sel={props.page == 1} t={transparent} /> </div>
                    <div className='m-auto'><Button text='Contact' route='/contact' sel={props.page == 2} t={transparent} /> </div>
                    <div className='m-auto relative' onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}><Button text={<div onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>Services</div>} route='/services' sel={props.page == 3} t={transparent} alt={
                        <div className=''>
                            <div className='sm:mt-1.5 mt-0.5 ml-1 -mr-2' onClick={() => setDD(!DD)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={'absolute z-50 overflow-hidden transition-height duration-300 -translate-x-1/2 left-1/2 mt-6' + (DD ? ' h-[18rem]': ' h-0')} onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <div className='p-2 bg-white sm:text-lg text-black font-extrabold'>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 5 ? ' text-p':'')}><Link href={services[0].link}>{services[0].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 6 ? ' text-p':'')}><Link href={services[1].link}>{services[1].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 7 ? ' text-p':'')}><Link href={services[2].link}>{services[2].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 8 ? ' text-p':'')}><Link href={services[3].link}>{services[3].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 9 ? ' text-p':'')}><Link href={services[4].link}>{services[4].title}</Link></div>
                                    <div className={'p-2 hover:pl-4 hover:pr-0 duration-300' + (props.page == 10 ? ' text-p':'')}><Link href={services[5].link}>{services[5].title}</Link></div>
                                </div>
                            </div>
                        </div>
                    } /> </div>
                    <div className='m-auto'><Button text='About' route='/about' sel={props.page == 4} t={transparent} /></div>
                    <div className='m-auto'><Button text={<><div className='sm:hidden'>Quote</div><div className='sm:block hidden'>Get a Quote</div></>} route='/contact#contact-us' sel={true} t={transparent} /></div>
                </div>
            </div>
        </div>
        { props.page != 1 ? <div className='w-full pt-[7.7rem] sm:pt-[8.7rem] md:pt-[5rem]' />:''}
    </div>;
}