'use client';

import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';

import { services } from "../data.json"; 

export default function NavMenu() {
    const [dropDown, setDropDown] = useState(false);

    return (
        <Menu>
        <Menu.Button className='md:hidden fixed right-6 bottom-6 scale-150 bg-white p-2 rounded-full drop-shadow-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#78CDFF" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </Menu.Button>
        <Menu.Items className='md:hidden text-left fixed right-4 drop-shadow-lg bottom-20 mt-12 text-2xl font-semibold bg-white p-4 rounded-3xl'>
            <Menu.Item className='rounded-md'>
            {({ }) => (
                <div><Link href='/'>Home</Link></div>
            )}
            </Menu.Item>
            <div className='h-px w-full bg-slate-300 my-2' />
            <Menu.Item>
            {({ }) => (
                <div><Link href='/about'>About</Link></div>
            )}
            </Menu.Item>
            <div className='h-px w-full bg-slate-300 my-2' />
            <Menu.Item>
            {({ }) => (
                <div><Link href='/contact'>Contact</Link></div>
            )}
            </Menu.Item>
            <div className='h-px w-full bg-slate-300 my-2' />
            <Menu.Item>
            {({ }) => (
                <>
                    <div className='flex w-full'>
                        <Link href='/services'>Services</Link>
                        <div className={'m-auto mr-2 duration-300' + (dropDown ? '':' rotate-180')} onClick={() => setDropDown(!dropDown)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className={'overflow-hidden duration-300 ' + (dropDown ? 'h-fit':'h-0')}>
                        <div className='max-w-xxs ml-8 mt-3'><Link href={services[0].link}>{services[0].title}</Link></div>
                        <div className='max-w-xxs ml-8 mt-3'><Link href={services[1].link}>{services[1].title}</Link></div>
                        <div className='max-w-xxs ml-8 mt-3'><Link href={services[2].link}>{services[2].title}</Link></div>
                    </div>
                </>
            )}
            </Menu.Item>
        </Menu.Items>
        </Menu>
    )
}