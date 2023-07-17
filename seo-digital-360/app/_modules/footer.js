'use client';

import Link from "next/link";
import { useState } from "react";
import { services } from "../data.json";

export default function Footer(props) {
    const [nav, setNav] = useState(false);
    const [service, setService] = useState(false);

    return <div className='p-5 w-full bg-zinc-950'>
        <div className='flex text-white w-fit m-auto opacity-80 font-light text-center'>
            <div>
                <div className='font-semibold my-2'>Navigation</div>
                <div className='mx-5 lg:mx-24 flex'>
                    <div className='mx-1'><Link href='/'>Home</Link></div>
                    <div className='mx-1'><Link href='/contact'>Contact</Link></div>
                    <div className='mx-1'><Link href='/services'>Services</Link></div>
                    <div className='mx-1'><Link href='/about'>About</Link></div>
                </div>
            </div>
            <div className='mx-5 lg:mx-24 h-fit m-auto'>
                <div className='my-1'><Link href='/policy'>Policy</Link></div>
                <div><Link href='/terms_&_conditions'>Terms & Conditions</Link></div>
            </div>
        </div>
    </div>;
}