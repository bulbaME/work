import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/public/json/data.json";

const to_link = (s) => {
    return s.toLowerCase().replaceAll(' ', '-');
}

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    let observer = undefined; 
    useEffect(() => {
        observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting)
        )
    }, []);

    useEffect(() => {
        if (observer == undefined) return;
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

export function WAppear(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={(props.className ?? '') + ' duration-[1s] ease-in-out overflow-hidden ' + (shown ? 'loaded-e':'load-e')}>
        {props.children}
    </div>;
}

export function P1(props) {
    return <WAppear><div className='w-fit sm:text-lg my-4'>
        <div className='flex'>
            <div className='my-auto text-white mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                </svg>
            </div>
            <div className='text-white font-extrabold sm:text-xl text-lg my-auto'>
                {props.title}
            </div>
        </div>
        <div className='text-white font-light'>
            {props.text}
        </div>
    </div></WAppear>;
}

export function Button(props) {
    return <div>


    </div>;
}

export function CKeyFSmall(props) {
    const f = props.f.map((v, i) => {
        return <div key={i} className=''>
            {v}
        </div>;
    });

    return <div className='py-4 text-white w-fit sm:w-1/2 md:w-full p-4'><WAppear>
        <div className='sm:text-xl text-lg font-bold flex'>
            <div className='my-auto mr-2 text-c'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
            </div>
            <div className='my-auto'>
                <Link href={'/#' + to_link(props.title)}>{props.title}</Link>
            </div>
        </div>
        <div className='ml-12'>
            {...f}
        </div>
    </WAppear></div>;
}

export function CKeyF(props) {
    return <div className='p-4 md:w-1/3 m-auto sm:w-1/2 w-full'>
        <div className=' p-4 rounded-lg border-[1px] border-neutral-800 hover:border-c duration-300'>
            <div className='sm:text-xl text-lg font-extrabold text-white text-center'>
                {props.title}
            </div>
            <div className='sm:text-lg text-white mt-4 text-center'>
                {props.text}
            </div>
        </div>
    </div>
}

export function WKeyF(props) {
    return <div className='py-8 my-4 text-white sm:p-8'><WAppear>
        <a className='-top-[7rem] relative' id={to_link(props.title)} />
        <div className='flex'>
            <div className='my-auto text-white'>
                {props.img}
            </div>
            <div className='sm:text-3xl my-auto text-2xl font-semibold text-white p-4'>
                {props.title}
            </div>
        </div>
        <div className='flex flex-wrap'>
            {props.children}
        </div>
    </WAppear></div>;
}

export function P2S(props) {
    return <WAppear><div className='w-fit sm:text-lg my-6'>
        <div className='text-c font-extrabold sm:text-xl text-lg my-auto'>
            {props.title}
        </div>
        <div className='text-white font-light mt-2'>
            {props.text}
        </div>
    </div></WAppear>;
}

export function P2(props) {
    return <WAppear><div className='w-fit sm:text-lg my-12'>
        <div className='sm:text-3xl text-xl font-bold text-white mb-8'>
            {props.title}
        </div>
        <div className='flex-wrap-reverse flex'>
            <div className='md:w-2/3 pr-8'>
                {props.children}
            </div>
            <div className={'md:w-1/3 md:h-auto h-[10rem] w-full rounded-lg img-' + props.img} />
        </div>
    </div></WAppear>;
}

export function CTestimonials(props) {
    return <div className='p-4 m-auto md:w-1/2'><WAppear>
        <div className='p-6 rounded-lg text-white border-neutral-800 border-[1px] hover:border-c duration-300'>
            <div className='flex'>
                <div className={'sm:w-[5rem] sm:h-[5rem] w-[3rem] h-[3rem] rounded-full mr-4 my-auto img-' + props.img} />
                <div className='sm:text-2xl text-xl font-bold my-auto w-5/6'>
                    {props.name}
                </div>
            </div>
            <div className='mt-8 sm:text-lg font-medium'>
                {props.text}
            </div>
        </div>
    </WAppear></div>;
}

export function CServicesSmall(props) {
    return <div className='p-4 m-auto md:w-1/3'><WAppear>
        <div className='p-4 border-neutral-800 rounded-lg border-[1px] hover:border-c duration-300'>
            <div className='sm:text-xl text-lg font-bold text-white text-center'>
                {props.title}
            </div>
            <div className='sm:text-lg text-white my-8 text-center'>
                {props.text}
            </div>
            <div className='flex'>
                <div className='flex w-fit my-8 m-auto p-1 px-3 pl-2 bg-white text-black hover:rounded-2xl duration-300 rounded-lg'>
                    <div className='mr-2 my-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='sm:text-xl text-lg font-extrabold decoration-2'>
                        <Link href={props.link}>Read more</Link>
                    </div>
                </div>
                <div className='flex w-fit my-8 m-auto p-1 px-3 pl-2 bg-white text-black hover:rounded-2xl duration-300 rounded-lg'>
                    <div className='mr-2 my-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div className='sm:text-xl text-lg font-extrabold decoration-2'>
                        <Link href='/contact#contact-us'>Select</Link>
                    </div>
                </div>
            </div>
        </div>
    </WAppear></div>;
}

export function WServicesSmall() {
    return <div className='sm:p-10 m-auto max-w-7xl my-16'>
        <div className='text-center mb-8 p-4 sm:text-3xl text-2xl font-bold text-white'>
            Discover our services
        </div>
        <div className='flex flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} link={services[0].link} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} link={services[1].link} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} link={services[2].link} />
        </div>
    </div>;
}

export function P3(props) {
    return <WAppear><div className='w-fit sm:text-lg my-20'>
        <div className='flex-wrap-reverse flex'>
            <div className='md:w-2/3'>
                <div className='sm:text-3xl text-xl font-bold text-white mb-8'>
                    {props.title}
                </div>
                <div className='pr-8 text-white sm:text-lg font-medium'>
                    {props.text}
                </div>
            </div>
            <div className={'md:w-1/3 md:h-auto h-[10rem] w-full rounded-lg img-' + props.img} />
        </div>
    </div></WAppear>;
}

function CServices(props) {
    return <div className='py-8 max-w-5xl m-auto text-center'><WAppear>
        <div className='sm:text-2xl text-xl font-bold text-white mb-4'>
            {props.title}
        </div>
        <div className='sm:text-lg text-white'>
            {props.text}
        </div>
        <div className='my-8 w-fit m-auto bg-white p-2 px-3 sm:text-xl text-lg font-bold rounded-lg hover:rounded-2xl duration-300'>
            <Link href={props.link}>Explore 3 available services</Link>
        </div>
    </WAppear></div>;
}

export function WServices() {
    return <div className='max-w-7xl m-auto sm:p-12 p-4'>
        <CServices title={services[0].title} text={services[0].text_long} link={services[0].link} />
        <CServices title={services[1].title} text={services[1].text_long} link={services[1].link} />
        <CServices title={services[2].title} text={services[2].text_long} link={services[2].link} />
    </div>;
}

function CService(props) {
    return <div className='md:w-1/3 m-auto p-4'><WAppear>
        <div className='border-neutral-800 border-[1px] hover:border-c duration-300 rounded-lg p-4 text-center'>
            <div className='sm:text-2xl text-lg font-bold text-white'>
                {props.title}
            </div>
            <div className='my-8 flex w-fit m-auto'>
                <div className='sm:text-4xl text-3xl font-extrabold text-white my-auto'>{props.price}</div>
                <div className='sm:text-xl text-lg text-white font-bold my-auto mx-4'>per<br />{props.per}</div>
            </div>
            <div className='sm:text-lg text-white'>
                {props.text}
            </div>
            <div className='my-8 w-fit m-auto bg-white p-2 px-3 sm:text-xl text-lg font-bold rounded-lg hover:rounded-2xl duration-300'>
                <Link href='.contact'>Select</Link>
            </div>
        </div>
        </WAppear></div>;
}

export function WService(props) {
    const s = props.s.map((v, i) => {
        return <CService title={v.title} text={v.text} price={v.price} per={v.per} />
    });

    return <div className='flex flex-wrap max-w-7xl m-auto sm:p-8 p-4'>
        {...s}
    </div>;
}