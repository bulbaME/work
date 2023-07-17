'use client';

import Link from "next/link";
import NavMenu from "./nav_menu";

export default function Footer() {
    return <div className='font-light text-center p-5 w-full'>
        <div className='h-px max-w-xl w-11/12 m-auto mt-5 my-3 bg-slate-300' />
        <Link href='/policy'>Policy</Link> | <Link href='/terms'>Terms & Conditions</Link>
        <NavMenu />
    </div>;
}