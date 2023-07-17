'use client';

import Link from "next/link";
import { useState } from "react";

export function FeatureCard(props) {
    return <div className='flex sm:my-12 my-20 w-fit flex-wrap'>
        <div className='w-1/4 m-auto p-6 sm:min-w-0 min-w-[10rem] saturate-b'>
            <img className='' src={props.img} />
        </div>
        <div className='sm:w-3/4 m-auto'>
            <div className='text-b-d font-semibold text-2xl'>
                {props.title}
            </div>
            <div className='text-b text-xl font-medium'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function PricingCard(props) {
    return <div className='m-auto p-4 text-center relative'> 
        <Link href='/contact'>
            <div className='rounded-3xl bg-white border-b border-[0.1rem] p-6 max-w-sm mt-12 mb-0 hover:mt-0 hover:mb-12 duration-300 cursor-pointer hover:shadow-xl'>
                <div className='text-center text-4xl font-bold text-b-d'>
                    {props.title}
                </div>
                <div className='flex text-center w-fit m-auto text-2xl font-medium text-b-d my-4'>
                    <div className='mx-2 font-bold'>{props.price}</div> / month
                </div>
                <div className='w-2/3 h-px bg-b m-auto my-6' />
                <div className='text-xl font-medium text-b text-left'>
                    {props.text}
                </div>
            </div>
        </Link>
        <div className='absolute left-[50%] translate-x-[-50%] -mt-10 -z-10 text-xl font-bold text-b'>
            SELECT
        </div>
    </div>
}

export function ServicesCard(props) {
    const [hover, setHover] = useState(false);

    return <div className='m-auto p-8 max-w-[23rem] relative'>
        <Link href={props.link}>
            <div className={'duration-300 my-12' + (hover ? ' blur':'')} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>

                    <div className='text-center'>
                        <img src={props.img} className='w-1/2 m-auto' />
                        <div className='text-3xl text-b-d font-bold my-4'>
                            {props.title}
                        </div>
                        <div className='text-xl text-b font-medium'>
                            {props.text}
                        </div>
                    </div>
            </div>
            <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 text-2xl font-bold text-b-d' + (hover ? '':' opacity-0')} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                See more
            </div>
        </Link>
    </div>;
}

export function ServiceCard(props) {
    return <div className='m-auto p-4 text-center relative'> 
        <Link href='/contact'>
            <div className='rounded-3xl bg-white border-b border-[0.1rem] p-6 max-w-sm mt-12 mb-0 hover:mt-0 hover:mb-12 duration-300 cursor-pointer hover:shadow-xl'>
                <div className='text-center text-4xl font-bold text-b-d'>
                    {props.title}
                </div>
                <div className='flex text-center w-fit m-auto text-2xl font-medium text-b-d my-4'>
                    <div className='mx-2 font-bold'>{props.price}</div> / <div className='mx-2'>{props.per}</div>
                </div>
                <div className='w-2/3 h-px bg-b m-auto my-6' />
                <div className='text-xl font-medium text-b text-center'>
                    {props.text}
                </div>
            </div>
        </Link>
        <div className='absolute left-[50%] translate-x-[-50%] -mt-10 -z-10 text-xl font-bold text-b'>
            SELECT
        </div>
    </div>
}

export function TestimonyCard(props) {
    return <div className='rounded-3xl border-b border-[0.1rem] mt-4 mb-0 hover:mb-2 hover:mt-2 duration-300 hover:drop-shadow-md m-auto p-4 bg-white text-b-d w-[20rem]'>
        <div className='flex'>
            <img src={props.img} className='w-1/4 rounded-full' />
            <div className='font-bold text-2xl mx-4 m-auto'>
                {props.title}
            </div>
        </div>
        <div className='py-3 text-xl font-medium'>
            {props.text}
        </div>
    </div>;
}

export function ParagraphCard(props) {
    return <div className='m-auto p-4 pr-8 hover:pr-0 hover:pl-12 duration-300 min-w-[15rem]'>
        <div className='text-left my-4'>
            <div className='text-3xl font-bold text-b-d mb-3'>
                {props.title}
            </div>
            <div className='m-auto text-lg text-b font-medium'>
                {props.text}
            </div>
        </div>
    </div>;
}