import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import send_form from "@/modules/send_form";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import icons from "./icons";
import { faq } from "@/modules/data";

import { services } from "@/modules/data";

export const to_link = (s) => {
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

    return <div ref={ref} className={(props.className ?? '') + ' duration-500 ease-out transition-all sm:px-14 px-6 ' + (shown ? 'opacity-100 sm:py-10 py-6 my-0':'-mt-[6rem] mb-[6rem] opacity-0')}>
        {props.children}
    </div>;
}

export function WForm() {
    'use client';

    const router = useRouter();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [product, setProduct] = useState(-1);

    const [ovf, setOvf] = useState(false);

    useEffect(() => {
        const q = router.query;
        let s;

        if (q.theme != undefined) {
            s = parseInt(q.theme) - 1;
            setProduct(s);
        }

        if (q.service != undefined) {
            let i = parseInt(q.service) - 1;
            if (q.count != undefined) {
                setText(`I would like to request ${services[s].services[i].title.toLowerCase()} for ${services[s].services[i].per} count of ${q.count}.`)
            } else {
                setText(`I would like to request ${services[s].services[i].title.toLowerCase()}..`);
            }
        }
    }, [router]);

    const [map, setMap] = useState(false);

    return <div className='max-w-7xl m-auto flex flex-wrap'>
        <div className='lg:w-1/2 mt-24'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold mb-8 text-white'>
                {"Let's Start the Conversation"}
            </div>
            <div className='font-light sm:text-lg text-white'>
                {"We're here to answer any questions you have about our services. Whether you're ready to take the next step or simply curious about how SeoSergeant can empower your online presence, we'd love to hear from you. Fill out the form below, and one of our dedicated experts will be in touch with you shortly. Let's begin a conversation that leads to your digital success."}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
                <div className={'duration-300 p-2  ease-in-out mr-4 cursor-pointer border-[1px] rounded-md ' + (map ? 'text-neutral-400 border-neutral-400 ':'bg-white border-white')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </div>
                <div className={'duration-300 p-2  ease-in-out mr-4 cursor-pointer border-[1px] rounded-md ' + (!map ? 'text-neutral-400 border-neutral-400 ':'bg-white border-white')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div>
            <div className={'relative flex ' + (map ? 'overflow-hidden ':'before:overflow-hidden')}>
                <iframe className={'h-[26rem] rounded-md ' + (map ? 'w-full ':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.0708881184746!2d24.78890351190992!3d42.14876984830372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd14481e2239b%3A0x381bba1dced2ae70!2sul.%20%22Bosilek%22%2013%2C%2076%2C%204006%20Izgrev%2C%20Plovdiv%2C%20Bulgaria!5e0!3m2!1sen!2s!4v1692786811153!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='-top-[2rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'bg-white h-fit rounded-md ' + (map ? 'w-0 max-h-0':'w-full p-4 md:max-h-[28.9rem] max-h-[40rem]')}>
                    <div className='sm:m-4 m-2 sm:py-4 font-extrabold sm:text-3xl text-xl'>Fill in the Form</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-white  font-light focus:drop-shadow-lg hover:drop-shadow-lg duration-300 focus:border-m-m hover:border-m-m border-[1px] select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-white  font-light hover:drop-shadow-lg focus:border-m-m hover:border-m-m focus:drop-shadow-lg duration-300 border-[1px] select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-lg font-medium'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='font-light hover:drop-shadow-lg bg-white  duration-300 focus:border-m-m hover:border-m-m border-[1px] select-non appearance-none outline-none p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-1/2 sm:pl-3'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer ml-0 font-light w-fit border-[1px] p-2 px-2 bg-white hover:drop-shadow-lg focus:drop-shadow-lg duration-300 text-left sm:text-base text-sm hover:border-m-m '>{services[product] ? services[product].title:'Select service'}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-0 font-light transition-all drop-shadow-lg duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 0 ? 'font-bold text-gm':'')} key={1} value={0} >
                                        {services[0].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 1 ? 'font-bold text-gm':'')} key={2} value={1} >
                                        {services[1].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 2 ? 'font-bold text-gm':'')} key={3} value={2} >
                                        {services[2].title}
                                    </Listbox.Option>
                                </Listbox.Options>
                            </Listbox>
                        </div>
                        <div className='w-fit m-auto md:mr-auto mr-0 lg:mr-6 duration-300 my-auto'>
                            <input type='submit' className='cursor-pointer font-extrabold sm:text-xl text-lg text-white rounded-full p-2 px-3 bg-gradient-to-r from-b-l to-b-m hover:drop-shadow-lg duration-300' />
                        </div>
                    </div>
                </form>
            </div>
            </WAppear></div>
    </div>;
}

export function WFormD() {
    'use client';

    const router = useRouter();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [product, setProduct] = useState(-1);

    const [ovf, setOvf] = useState(false);

    useEffect(() => {
        const q = router.query;
        let s;

        if (q.theme != undefined) {
            s = parseInt(q.theme) - 1;
            setProduct(s);
        }

        if (q.service != undefined) {
            let i = parseInt(q.service) - 1;
            if (q.count != undefined) {
                setText(`I would like to request ${q.count} of ${services[s].services[i].title.toLowerCase()}.`)
            } else {
                setText(`I would like to request ${services[s].services[i].title.toLowerCase()}..`);
            }
        }
    }, [router]);

    const [map, setMap] = useState(false);

    return <div className='max-w-7xl m-auto flex flex-wrap'>
        <div className='lg:w-1/2 mt-24'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold mb-8'>
                {"Let's Start the Conversation"}
            </div>
            <div className='font-light sm:text-lg'>
                {"We're here to answer any questions you have about our services. Whether you're ready to take the next step or simply curious about how SeoSergeant can empower your online presence, we'd love to hear from you. Fill out the form below, and one of our dedicated experts will be in touch with you shortly. Let's begin a conversation that leads to your digital success."}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
                <div className={'duration-300 p-2  ease-in-out mr-4 cursor-pointer border-[1px] rounded-md ' + (map ? 'text-neutral-400':'bg-white border-white drop-shadow-lg')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </div>
                <div className={'duration-300 p-2  ease-in-out mr-4 cursor-pointer border-[1px] rounded-md ' + (!map ? 'text-neutral-400':'bg-white border-white drop-shadow-lg')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div>
            <div className={'relative flex drop-shadow-lg ' + (map ? 'overflow-hidden ':'before:overflow-hidden')}>
                <iframe className={'h-[26rem] rounded-md drop-shadow-lg ' + (map ? 'w-full ':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.0708881184746!2d24.78890351190992!3d42.14876984830372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd14481e2239b%3A0x381bba1dced2ae70!2sul.%20%22Bosilek%22%2013%2C%2076%2C%204006%20Izgrev%2C%20Plovdiv%2C%20Bulgaria!5e0!3m2!1sen!2s!4v1692786811153!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='-top-[2rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'bg-white h-fit rounded-md ' + (map ? 'w-0 max-h-0':'w-full p-4 md:max-h-[28.9rem] max-h-[40rem]')}>
                    <div className='sm:m-4 m-2 sm:py-4 font-extrabold sm:text-3xl text-xl'>Fill in the Form</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-white  font-light focus:drop-shadow-lg hover:drop-shadow-lg duration-300 focus:border-m-m hover:border-m-m border-[1px] select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-white  font-light hover:drop-shadow-lg focus:border-m-m hover:border-m-m focus:drop-shadow-lg duration-300 border-[1px] select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-lg font-medium'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='font-light hover:drop-shadow-lg bg-white  duration-300 focus:border-m-m hover:border-m-m border-[1px] select-non appearance-none outline-none p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-1/2 sm:pl-3'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer ml-0 font-light w-fit border-[1px] p-2 px-2 bg-white hover:drop-shadow-lg focus:drop-shadow-lg duration-300 text-left sm:text-base text-sm hover:border-m-m '>{services[product] ? services[product].title:'Select service'}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-0 font-light transition-all drop-shadow-lg duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 0 ? 'font-bold text-gm':'')} key={1} value={0} >
                                        {services[0].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 1 ? 'font-bold text-gm':'')} key={2} value={1} >
                                        {services[1].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 2 ? 'font-bold text-gm':'')} key={3} value={2} >
                                        {services[2].title}
                                    </Listbox.Option>
                                </Listbox.Options>
                            </Listbox>
                        </div>
                        <div className='w-fit m-auto md:mr-auto mr-0 lg:mr-6 duration-300 my-auto'>
                            <input type='submit' className='cursor-pointer font-extrabold sm:text-xl text-lg text-white rounded-full p-2 px-3 bg-gradient-to-r from-b-l to-b-m hover:drop-shadow-lg duration-300' />
                        </div>
                    </div>
                </form>
            </div>
            </WAppear></div>
    </div>;
}

// export function B1(props) {
//     'use client';
    
//     const [hover, setHover] = useState(false);

//     return <div className='w-fit py-2 m-auto sm:text-xl text-lg font-extrabold text-white' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
//         <Link href={props.route}>{props.text}</Link>
//         <div className='flex'>
//             <div className={'duration-300 ease-out bg-gradient-to-r from-m to-b ' + (hover ? 'w-full h-2 mb-0':'w-0 h-1 mb-1')} />
//             <div className={'duration-300 ease-out h-1 bg-white ' + (hover ? 'w-0 h-2 mb-0':'w-full mb-1')} />
//         </div>
//     </div>;
// }

export function B1L(props) {
    'use client';

    const [hover, setHover] = useState(false);

    return <div className='w-fit relative h-fit overflow-hidden rounded-full ' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}><Link href={props.link}>
        <div className={'h-full rounded-full duration-300 ease-in-out bg-gm absolute -z-10 ' + (hover ? 'w-full':'w-0')} />
        <div className={'px-4 p-2 sm:text-2xl text-xl text-white rounded-full duration-300 ' + (hover ? 'font-extrabold border-4 m-0':'border-2')}>
            {props.text}
        </div>
    </Link></div>;
}

export function WQuote(props) {
    'use client';

    const router = useRouter();

    const [product, setProduct] = useState(-1);
    const [theme, setTheme] = useState(-1);
    const [count, setCount] = useState(0);
    const [estimate, setEstimate] = useState(0);

    const capitalize = (s) => {
        let ch = s[0].toUpperCase();
        return ch + s.substring(1);
    }

    useEffect(() => {
        const q = router.query;
        const p = router.pathname.slice(1).split('/');
        let s;

        if (q.theme != undefined) {
            s = parseInt(q.theme) - 1;
            setTheme(s);
        }

        if (q.service != undefined) {
            let i = parseInt(q.service) - 1;
            setProduct(i);
        } else {
            setProduct(-1);
            setCount(-1);
        }

        if (p.length >= 2 && p[0] == 'services') {
            let i = 0;
            for (let j = 0; j < services.length; j++) {
                if (to_link(services[j].title) == p[1]) {
                    i = j;
                    break;
                }
            }

            setTheme(i);
        }
    }, [router]);

    useEffect(() => {
        setProduct(-1);
        setCount(0);
    }, [theme]);

    useEffect(() => {
        if (product == -1) return;
        let p = services[theme].services[product].price;
        p = parseFloat(p.substring(1));
        if (isNaN(count)) {
            setEstimate(0);
            return;
        }
        setEstimate(p * count);
    }, [count, theme, product])

    return <div className='max-w-7xl m-auto my-12 relative'><WAppear>
        <a id='quote' className='-top-[12rem] absolute' />
        <div className='flex flex-wrap'>
            <div className='lg:w-1/2 lg:pr-8 lg:pb-0 pb-12 mt-8'>
                <div className='sm:text-3xl text-xl font-extrabold'>
                    Get Your Instant Quote
                </div>
                <div className='sm:text-lg font-light mt-8'>
                    {"Ready to take the next step towards optimizing your online presence? Our instant quote tool makes it easy to get a quick estimate for the services that can transform your digital success. Simply provide a few details about your needs, and we'll promptly deliver a tailored quote that aligns with your goals. Let's unlock your brand's potential together."}
                </div>
            </div>
            <div className='lg:w-2/5 w-full mr-0 mx-auto'>
                <div className='rounded-md sm:p-8 p-4 w-full drop-shadow-lg bg-white duration-300'>
                    <div className='sm:text-3xl text-xl font-extrabold sm:mb-8 mb-4'>
                        Get Your Quote
                    </div>
                    <div className='sm:ml-4'>
                        <div className='flex flex-wrap'>
                            <div className='sm:text-lg font-medium mt-4 my-2'>
                                Theme
                            </div>
                            <div className='sm:w-2/3 w-full mx-auto mr-2'>
                                <Listbox value={theme} onChange={setTheme} >
                                    <Listbox.Button className='py-2 w-full max-w-[20rem] duration-300'>{<div className='cursor-pointer hover:border-m text-left ml-0 font-light border-[1px] p-2 px-2  sm:text-base text-sm bg-white hover:drop-shadow-lg duration-300'>{services[theme] ? services[theme].title : 'Select theme'}</div>}</Listbox.Button>
                                    <Listbox.Options className='absolute z-50 drop-shadow-lg m-0 font-light transition-all duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 0 ? 'font-bold text-gm':'')} key={1} value={0} >
                                            {services[0].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 1 ? 'font-bold text-gm':'')} key={2} value={1} >
                                            {services[1].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 2 ? 'font-bold text-gm':'')} key={3} value={2} >
                                            {services[2].title}
                                        </Listbox.Option>
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className={'sm:text-lg font-medium mt-4 my-2 ' + (theme == -1 ? 'opacity-60':'')}>
                                Service
                            </div>
                            <div className='sm:w-2/3 w-full mx-auto mr-2'>
                                <Listbox value={product} onChange={setProduct} disabled={ theme == -1 }>
                                    <Listbox.Button className='py-2 w-full duration-300'>
                                        <div className={'cursor-pointer w-full sm:text-base text-sm ml-0 font-light text-left max-w-[20rem] border-[1px] p-2 px-2 bg-white duration-300 ' + (theme == -1 ? 'opacity-60':'hover:drop-shadow-lg ')}>{services[theme] && services[theme].services[product] ? services[theme].services[product].title:'Select service'}</div>
                                    </Listbox.Button>
                                    <Listbox.Options className='absolute drop-shadow-lg z-50 m-0 font-light transition-all duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 0 ? 'font-bold text-gm':'')} key={1} value={0} >
                                            {services[theme] && services[theme].services[0].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 1 ? 'font-bold text-gm':'')} key={2} value={1} >
                                            {services[theme] && services[theme].services[1].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 2 ? 'font-bold text-gm':'')} key={3} value={2} >
                                            {services[theme] && services[theme].services[2].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 3 ? 'font-bold text-gm':'')} key={4} value={3} >
                                            {services[theme] && services[theme].services[3].title}
                                        </Listbox.Option>
                                        { theme != 1 ? 
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 4 ? 'font-bold text-gm':'')} key={5} value={4} >
                                            {services[theme] && services[theme].services[4].title}
                                        </Listbox.Option>
                                        :'' }
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className={'py-2 flex sm:flex-nowrap flex-wrap ' + (product == -1 ? 'opacity-60':'')}>
                            <div className={'max-w-[30%] sm:text-lg font-medium my-auto ' + (product == -1 ? '':'pr-4')}>
                                {(product != -1 ? (capitalize(services[theme].services[product].per) + ' count'):'')} 
                            </div>
                            <div className='w-2/3 mx-auto md:mr-2 md:ml-auto ml-0 my-auto sm:text-base text-sm py-2'>
                                <input onChange={(e) => setCount(isNaN(e.target.value) ? count : parseInt(e.target.value))} type="number" min='0' value={count == 0 ? '':count} placeholder={product != -1 ?`${services[theme].services[product].price} / ${services[theme].services[product].per}`:''} className={'border-[1px] select-none max-w-[12rem] outline-none font-light p-2 pr-0 bg-white duration-300 ' + (product == -1 ? '':'focus:border-m-m hover:border-m-m hover:drop-shadow-lg focus:drop-shadow-lg ')} disabled={product == -1} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-full'>
                        <div className={'sm:text-2xl duration-300 text-xl font-light my-auto ' + (estimate == 0 ? 'opacity-60':'')}>
                            <span className={'duration-300' + (estimate != 0 ? 'text-gm font-bold ':'')}>Your estimate is <span className={estimate != 0 ? 'text-b-m':''}>${estimate.toFixed(2)}</span></span>
                        </div>
                        { !count || count == 0 ? <div className='' />:
                            <div className='w-fit m-auto flex sm:text-xl bg-white hover:border-b-m border-[1px] mb-0 mt-4 text-lg font-bold rounded-full bg-gradient-to-br from-g1 hover:drop-shadow-lg to-gm duration-300 px-2 p-1 '>
                                <Link href={`/contact?theme=${theme+1}&service=${product+1}&count=${count}#contact-us`} className='my-auto flex'>Continue
                                <div className='my-auto ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </WAppear></div>;
}


export function CProcess(props) {
    return <div className={'w-full relative overflow-hidden duration-500 ease-in-out ' + (props.step == props.n ? 'h-screen':'h-0 opacity-0')}>
        <div className='absolute min-h-full min-w-full -z-10 bg-black'>
            <Image src={`/img/${props.n}.jpg`} layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-40' />
        </div>
        <div className='opacity-grad w-full flex h-screen'>
            <div className='max-w-7xl w-full m-auto mb-0 pt-36 sm:pb-24 pb-12 max-h-screen overflow-y-scroll noscroll'>
                <WAppear className=''>
                    {props.children}
                </WAppear>
            </div>
        </div>
    </div>;
}

export function WProcess() {
    'use client';

    const topP = useRef(null);
    const bottomP = useRef(null);
    const ref = useRef(null);
    const inner = useRef(null);

    const [positionClass, setPositionClass] = useState('fixed top-0');
    const [top, setTop] = useState(-1);
    const [bottom, setBottom] = useState(-1);
    const [step, setStep] = useState(1);
    const [stepB, setStepB] = useState(-1);

    useEffect(() => {
        if (stepB == -1) return;
        const partH = (bottom - top) / 6;

        let f = partH * (stepB - 1);
        window.scrollTo(0, f);

        setStepB(-1);
    }, [stepB]);

    useEffect(() => {
        if (ref.current != null) {
            setTop(topP.current.getBoundingClientRect().top);
            setBottom(bottomP.current.getBoundingClientRect().top);
        }

        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(topP.current.getBoundingClientRect().top);
                setBottom(bottomP.current.getBoundingClientRect().top);
            }
        });
    }, []);

    useEffect(() => {
        if (top == -1) {
            setStep(1);
            return;
        }

        const partH = (bottom - top) / 6;
        
        const f = bottom - top - partH;
        const c = -top + partH / 2;
        
        let step = (c / f) * 6;
        step = Math.round(step);
        step = Math.max(1, step);
        step = Math.min(5, step);
        setStep(step);

        // let w = (c / f) * 100;
        // w = Math.max(w, 5);
        // indicator.current.style.width = w + '%'

        console.log(c, f);

        // if (top < 0 && c < f) setPositionClass('fixed top-0');
        // else if (c >= f) setPositionClass('absolute bottom-0');
        // else setPositionClass('fixed top-0');
    }, [top, bottom]);

    return <div ref={ref} className='relative'>
        <div ref={topP} />
        <div className={'left-1/2 -translate-x-1/2 min-h-screen w-full ' + positionClass} ref={inner}>
            <div className='w-full'>
                <CProcess step={step} n={1}>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        <div className='font-extrabold mb-2 sm:text-5xl text-3xl'>Welcome to SeoSergeant</div>
                        Your Partner in Digital Success!
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='md:w-1/2 md:pr-8 md:pb-0 pb-8'>
                            <div className='my-16 sm:text-lg text-white'>
                                {"We're thrilled to welcome you to SeoSergeant, where your journey to online excellence begins. Our mission is to empower businesses like yours with top-notch SEO solutions that drive growth, visibility, and results. With a team of dedicated experts and a passion for all things SEO, we're here to guide you through the ever-evolving digital landscape."}
                            </div>
                            <div className='my-16 sm:text-lg text-white'>
                                {"Explore our range of services, discover our commitment to your success, and let's embark on a remarkable SEO journey together."}
                            </div>
                        </div>
                        <div className='md:w-1/2 m-auto md:block flex flex-wrap w-full'>
                            <div className='p-1 m-auto'>
                                <div className='m-auto sm:text-2xl text-xl my-4 hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full text-white'>
                                    <Link href='/contact'>Get Started Today</Link>
                                </div>
                            </div>
                            <div className='p-1 m-auto'>
                                <div className='m-auto sm:text-2xl text-xl my-4 flex hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full cursor-pointer text-white' onClick={() => setStepB(2)}>
                                    Next
                                    <div className='my-auto ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CProcess>
                <CProcess step={step} n={2}>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        <div className='font-extrabold mb-2 sm:text-5xl text-3xl'>You Should Choose Us</div>
                        Elevate Your Brand Online with SeoSergeant
                    </div>
                    <div className='flex flex-wrap my-24'>
                        <div className='lg:w-1/2 m-auto p-4 sm:w-1/2'>
                            <div className='sm:text-3xl text-xl font-extrabold text-white'>
                                Customized Strategies
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-b-m mt-2 mb-6'>
                                Crafting Your Path to Excellence
                            </div>
                            <div className='sm:text-lg text-white'>
                                {"Our personalized SEO strategies are designed to align seamlessly with your unique business goals and target audience. Through careful analysis and planning, we ensure every effort contributes strategically to your online success."}
                            </div>
                        </div>
                        <div className='lg:w-1/2 m-auto p-4 sm:w-1/2'>
                            <div className='sm:text-3xl text-xl font-extrabold text-white'>
                                Data-Driven Insights
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-b-m mt-2 mb-6'>
                                Navigating the Digital Landscape with Precision
                            </div>
                            <div className='sm:text-lg text-white'>
                                {"Our approach is anchored in data-driven decision-making. By harnessing the power of analytics, we gain deep insights into your online performance, allowing us to fine-tune strategies and continuously optimize for impactful results."}
                            </div>
                        </div>
                        <div className='lg:w-1/3 m-auto p-4 sm:w-1/2'>
                            <div className='sm:text-3xl text-xl font-extrabold text-white'>
                            Dedicated Support
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-b-m mt-2 mb-6'>
                            Your Success, Our Commitment
                            </div>
                            <div className='sm:text-lg text-white'>
                                {"Our team stands ready to address your questions, provide expert guidance, and adapt to your evolving needs. With a commitment to your success, we're not just your SEO provider – we're your partners in growth."}
                            </div>
                        </div>
                        <div className='lg:w-1/3 m-auto p-4 sm:w-1/2'>
                            <div className='sm:text-3xl text-xl font-extrabold text-white'>
                            Proven Results
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-b-m mt-2 mb-6'>
                            Where Success Stories Come to Life
                            </div>
                            <div className='sm:text-lg text-white'>
                                {"With a track record of successful campaigns and delighted clients, we have the experience and expertise to drive remarkable results. Our history speaks for itself, and we're excited to add your success story to our collection."}
                            </div>
                        </div>
                        <div className='lg:w-1/3 m-auto p-4 sm:w-1/2 sm:block flex flex-wrap w-full'>
                            <div className='p-1 m-auto'>
                                <div className='m-auto sm:text-2xl text-xl my-4 hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full text-white'>
                                    <Link href='/about'>Learn Out Story</Link>
                                </div>
                            </div>
                            <div className='p-1 m-auto'>
                                <div className='m-auto sm:text-2xl text-xl my-4 flex hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full cursor-pointer text-white' onClick={() => setStepB(3)}>
                                    Next
                                    <div className='my-auto ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CProcess>
                <CProcess step={step} n={3}>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        <div className='font-extrabold mb-2 sm:text-5xl text-3xl'>Explore Our SEO Solutions</div>
                        Empowering Your Digital Success
                    </div>
                    <WServicesSmall />
                    <div className='w-full flex flex-wrap -mt-12'>
                        <div className='p-1 m-auto'>
                            <div className='m-auto sm:text-2xl text-xl my-4 hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full text-white'>
                                <Link href='/services'>Explore Services</Link>
                            </div>
                        </div>
                        <div className='p-1 m-auto'>
                            <div className='m-auto sm:text-2xl text-xl my-4 flex hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full cursor-pointer text-white' onClick={() => setStepB(4)}>
                                Next
                                <div className='my-auto ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </CProcess>
                <CProcess step={step} n={4}>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        <div className='font-extrabold mb-2 sm:text-5xl text-3xl'>Hear from Our Satisfied Clients</div>
                        Real Stories, Real Results
                    </div>
                    <div className='flex flex-wrap my-16'>
                        <div className='md:w-1/3 m-auto p-4'>
                            <div className='sm:text-3xl text-xl font-bold text-white'>
                            John Davidson
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-white'>
                            CEO
                            </div>
                            <div className='sm:text-lg mt-6 text-white'>
                                <span className='text-b-m'>"</span>{"SeoSergeant has been an invaluable partner in our digital journey. Their expertise in on-page optimization transformed our search rankings, leading to a significant boost in organic traffic. Their dedication to excellence is evident in the results we've achieved together."}<span className='text-b-m'>"</span>
                            </div>
                        </div>
                        <div className='md:w-1/3 m-auto p-4'>
                            <div className='sm:text-3xl text-xl font-bold text-white'>
                            Sarah Miller
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-white'>
                            Marketing Director
                            </div>
                            <div className='sm:text-lg mt-6 text-white'>
                                <span className='text-b-m'>"</span>{"Working with SeoSergeant was a game-changer for us. Their link-building strategies not only elevated our website's authority but also generated quality traffic. Their team's commitment to understanding our brand and industry was exceptional."}<span className='text-b-m'>"</span>
                            </div>
                        </div>
                        <div className='md:w-1/3 m-auto p-4'>
                            <div className='sm:text-3xl text-xl font-bold text-white'>
                            Alex Carter
                            </div>
                            <div className='sm:text-xl text-lg font-bold text-white'>
                            E-commerce Entrepreneur
                            </div>
                            <div className='sm:text-lg mt-6 text-white'>
                                <span className='text-b-m'>"</span>{"SeoSergeant's expertise in e-commerce SEO was evident from day one. They optimized our product pages, implemented structured data, and improved our site's overall performance. The increase in sales and organic traffic speaks volumes about their impact."}<span className='text-b-m'>"</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap -mt-12'>
                        <div className='p-1 m-auto'>
                            <div className='m-auto sm:text-2xl text-xl my-4 flex hover:mb-6 hover:mt-2 duration-300 font-bold w-fit px-3 p-2 border-[3px] rounded-full cursor-pointer text-white' onClick={() => setStepB(5)}>
                                Next
                                <div className='my-auto ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </CProcess>
                <CProcess step={step} n={5}>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        <div className='font-extrabold mb-2 sm:text-5xl text-3xl'>Get in Touch with Us</div>
                        Your Success Starts Here
                    </div>
                    <WForm />
                </CProcess>
            </div>
        </div>
        <div className='h-[400vh]' />
        <div ref={bottomP} className='absolute' />
    </div>;
}

function CServicesSmall(props) {
    'use client';

    const [hover, setHover] = useState(false);

    return <div className='p-4 mx-auto lg:w-1/3 md:w-1/2 w-full flex'>
        <div className='p-4 border-[1px] text-white my-2 duration-300 text-center flex flex-wrap'>
            <div className='sm:text-3xl text-xl text-p font-bold w-full'>
                {props.s.title}
            </div>
            <div className='sm:text-lg font-light py-4 m-auto w-full'>
                {props.s.text_short}
            </div>
            <div className='m-auto mb-0 w-full'>
                <div className='sm:text-xl w-fit m-auto text-lg font-extrabold' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Link href={'/services/' + to_link(props.s.title)}>See More</Link>
                    <div className={'h-2 ease-in-out duration-300 bg-b-m ' + (hover ? 'w-full':'w-0')} />
                </div>
            </div>
        </div>
    </div>;
}

export function WServicesSmall() {
    const s = services.map((v, i) => {
        return <CServicesSmall key={i} s={v} />
    });

    return <div className='max-w-7xl m-auto my-16'><WAppear>
        <div className='flex flex-wrap mt-8'>
            {...s}
        </div>
    </WAppear></div>
}

function CServicesSmallD(props) {
    'use client';

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);

    return <div className='p-4 mx-auto lg:w-1/3 md:w-1/2 w-full flex'>
        <div className='p-6 bg-white rounded-md drop-shadow-lg my-2 duration-300 text-center flex flex-wrap'>
            <div className='sm:text-3xl text-xl text-p font-bold w-full'>
                {props.s.title}
            </div>
            <div className='sm:text-lg font-light py-4 m-auto w-full'>
                {props.s.text_short}
            </div>
            <div className='m-auto mb-0 w-full flex flex-wrap'>
                <div className='sm:text-xl w-fit m-auto text-lg font-extrabold' onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
                    <Link href={'/services/' + to_link(props.s.title)}>See More</Link>
                    <div className={'h-2 ease-in-out duration-300 bg-b-m ' + (hover1 ? 'w-full':'w-0')} />
                </div>
                <div className='sm:text-xl w-fit m-auto text-lg font-extrabold' onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                    <Link href={`/contact?theme=${props.i + 1}#quote`}>Select</Link>
                    <div className={'h-2 ease-in-out duration-300 bg-b-m ' + (hover2 ? 'w-full':'w-0')} />
                </div>
            </div>
        </div>
    </div>;
}

export function WServicesSmallD() {
    const s = services.map((v, i) => {
        return <CServicesSmallD key={i} s={v} i={i} />
    });

    return <div className='max-w-7xl m-auto my-16'><WAppear>
        <div className='sm:text-3xl text-xl font-extrabold'>
            Explore Our Services
        </div>
        <div className='flex flex-wrap mt-8'>
            {...s}
        </div>
    </WAppear></div>
}


function CFaqSmall(props) {
    return <div className='p-2'><Link href={'/faq#' + props.text.toLowerCase().replaceAll(' ', '-')} className='flex my-2 hover:mt-0 hover:mb-4 duration-300'>
        <div className='my-auto mr-4 bg-b-m  font-extrabold text-white rounded-xl drop-shadow-md px-2 p-1'>
            <div className='whitespace-nowrap'>
                Q {props.n}
            </div>
        </div>    
        <div className='rounded-xl font-medium sm:text-lg text-p w-5/6 my-auto'>
            {props.text}
        </div>
    </Link></div>;
}

export function WFaqSmall() {
    const q = faq.map((v, i) => {
        return <CFaqSmall key={i} n={i+1} text={v.q} />
    });

    return <div className='w-fit m-auto px-3'><WAppear className=''>
        <div className='flex relative w-fit'>
            <div className='w-fit'>
                {...q}
            </div>
        </div>
    </WAppear></div>;
}

function CFaq(props) {
    return <div className='duration-500'><WAppear>
        <a className='-top-[9rem] relative' id={props.q.toLowerCase().replaceAll(' ', '-')} />
        <div>
            <div className='sm:text-5xl text-3xl font-extrabold'>
                Q {props.n}
            </div>
            <div className='sm:text-2xl text-xl font-bold underline decoration-4 decoration-b-m mt-2'>
                {props.q}
            </div>
            <div className='sm:text-lg mt-4 font-medium'>
                {props.a}
            </div>
        </div>
    </WAppear></div>;
}

export function WFaq() {
    const q = faq.map((v, i) => {
        return <CFaq key={i} n={i+1} a={v.a} q={v.q} />
    });

    return <div className='max-w-5xl flex flex-wrap m-auto my-16'>
        {...q}
    </div>;
}

export function P1(props) {
    return <div className='md:w-1/2 m-auto my-12'><WAppear className=''>
        <div className='md:pr-8'>
            <div className='sm:text-3xl text-xl font-extrabold'>
                {props.title}
            </div>
            <div className='sm:text-xl text-lg font-bold text-b-m'>
                {props.slogan}
            </div>
            <div className='sm:text-lg font-light mt-4'>
                {props.text}
            </div>
        </div>
    </WAppear></div>;
}

export function P1L(props) {
    return <div className='max-w-7xl m-auto my-12'><WAppear className='flex flex-wrap-reverse'>
        <div className='md:w-3/5 md:pr-8 md:pb-0 pt-8 my-4'>
            <div className='sm:text-3xl text-xl font-extrabold'>
                {props.title}
            </div>
            <div className='sm:text-lg font-light mt-4'>
                {props.text}
            </div>
        </div>
        <div className='relative md:w-2/5 w-full md:min-h-full min-h-[12rem]'>
            <Image layout='fill' objectFit='cover' alt={`${props.title} image`} objectPosition='center' src={props.img} className='h-full w-full rounded-md drop-shadow-lg' />
            <div className='w-full h-full shine z-20 absolute' />
        </div>
    </WAppear></div>;
}

export function P1R(props) {
    return <div className='max-w-7xl m-auto my-12'><WAppear className='flex flex-wrap'>
        <div className='relative md:w-2/5 w-full md:min-h-full min-h-[12rem]'>
            <Image layout='fill' objectFit='cover' alt={`${props.title} image`} objectPosition='center' src={props.img} className='h-full w-full rounded-md drop-shadow-lg' />
            <div className='w-full h-full shine z-20 absolute' />
        </div>
        <div className='md:w-3/5 md:pl-8 md:pb-0 pt-8 my-4'>
            <div className='sm:text-3xl text-xl font-extrabold'>
                {props.title}
            </div>
            <div className='sm:text-lg font-light mt-4'>
                {props.text}
            </div>
        </div>
    </WAppear></div>;
}

function CServices(props) {
    const s = services[props.i];
    const sub_s = s.services.map((v, i) => {
        return <div className='mx-auto lg:w-auto sm:w-1/2 w-full my-2 px-2' key={i}>
            <div className='sm:text-lg font-bold px-3 p-1 bg-gradient-to-br from-b-m to-b-l text-white rounded-full drop-shadow-lg duration-300 flex'>
                <div className='my-auto mr-2 text-gm'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                    </svg>
                </div>
                <Link href={'/services/' + to_link(s.title) + '/#' + to_link(v.title)}>{v.title}</Link>
            </div>
        </div>;
    });

    return <div><WAppear>
        <div className='p-6'>
            <div className='sm:text-3xl text-xl font-bold sm:flex'>
                {s.title}
                <div className='sm:mx-4 sm:text-lg font-bold text-white bg-b-m px-2 rounded-full h-fit w-fit sm:my-auto my-2'>
                    {sub_s.length} services
                </div>
            </div>
            <div className=''>
                <div className='my-auto'>
                    <div className='md:pr-4 sm:text-lg md:pb-0 pb-4 pt-4'>
                        {s.text_long}
                    </div>
                </div>
            </div>
            <div className='flex w-full my-6'>
                <div className='w-fit m-auto border-[1px] px-4 p-3 rounded-full hover:drop-shadow-lg duration-300 hover:border-b-m bg-white'><Link href={'/services/' + to_link(s.title)} className='flex'>
                    <div className='sm:text-xl text-lg font-bold'>
                        See More
                    </div>
                    <div className='my-auto ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </Link></div>
            </div>
        </div>
    </WAppear></div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <CServices i={i} />
    })

    return <div className='max-w-7xl m-auto my-16'>
        {...s}
    </div>;
}

function CService(props) {
    return <div className={'sm:p-4 relative p-2 mx-auto flex sm:w-1/2 '}>
        <a id={to_link(props.s.title)} className='-top-[12rem] absolute' />
        <div className='sm:p-6 p-4 bg-white rounded-md drop-shadow-lg flex flex-wrap my-4 duration-300'>
            <div className='sm:text-3xl text-xl font-bold w-full text-p'>
                {props.s.title}
            </div>
            <div className='w-full mb-6 mt-4'>
                <div className='w-fit m-auto border-[1px] px-3 p-1 text-center rounded-full flex sm:text-lg font-bold'>
                    <div className='text-b-m'>
                        {props.s.price}
                    </div>
                    <div className='ml-1'>per {props.s.per}</div>
                </div>
            </div>
            <div className='sm:text-xl font-light w-full my-4 mb-8'>
                {props.s.text}
            </div>
            <div className='my-auto w-full flex flex-wrap-reverse mb-0 p-1'>
                <div className='w-fit m-auto px-3 h-fit p-2 flex sm:text-lg rounded-full font-bold bg-white hover:drop-shadow-lg border-[1px] hover:border-b-m duration-300'>
                    <Link href={`/contact?theme=${props.theme + 1}&service=${props.i + 1}#contact-us`}>
                        Select
                    </Link>
                    <div className='my-auto ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className='w-fit m-auto h-fit px-3 p-2 sm:text-lg font-bold flex rounded-full bg-white hover:drop-shadow-lg border-[1px] hover:border-b-m duration-300'>
                    <Link href={`?service=${props.i + 1}#quote`}>
                        Get a Quote
                    </Link>
                    <div className='my-auto ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export function WService(props) {
    const s = props.s.services.map((v, i) => {
        return <CService s={v} i={i} theme={props.i} key={i} />
    });

    return <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
        {...s}
    </WAppear></div>;
}

function CFeature(props) {
    return <div className='max-w-7xl m-auto relative my-12'><WAppear>
        <a className='absolute -top-[10rem]' id={'f' + props.i} />
        <div className='flex flex-wrap'>
            <div className='md:w-1/2 w-full md:pr-8 md:pb-0 pb-8'>
                <div className='sm:text-3xl text-xl font-extrabold'>
                    {props.title}
                </div>
                <div className='sm:text-lg mt-4'>
                    {props.text}
                </div>
            </div>
            <div className='md:w-1/2 md:min-h-full md:h-auto h-[12rem] relative w-full'>
                <Image src={`/img/${props.i + 0}.jpg`} layout='fill' objectFit='cover' alt='design picture' objectPosition='center' className='rounded-2xl drop-shadow-lg' />
                <div className='absolute right-0 top-0 bg-gm text-white p-4 rounded-tr-2xl rounded-bl-[3rem] drop-shadow-lg'>
                    {icons[props.i]}
                </div>
            </div>
        </div>
    </WAppear></div>;
}

export function WFeature() {
    return <div className='my-16'>
        <CFeature i={1} title='Rapid Creative Mastery' text="Witness the extraordinary as our team of seasoned designers transforms ideas into mesmerizing visual stories in the blink of an eye. In just 48 hours, we breathe life into your concepts, infusing them with a blend of creativity and mastery that captivates hearts and minds. With an unparalleled commitment to swift excellence, we redefine what's possible in the world of design. Experience the exhilaration of seeing your vision materialize faster than you ever thought possible." />
        <CFeature i={2} title='Bespoke Design Express' text="Welcome to a realm where design is not just a service but an artful expression of your brand's essence. Our designers take the time to immerse themselves in your story, capturing its very essence in designs that resonate. Every pixel, every brushstroke, meticulously chosen to weave a narrative that's uniquely yours. Our bespoke design approach ensures that your identity is not just represented, but celebrated in every piece we create. Immerse yourself in a design experience tailored exclusively to you." />
        <CFeature i={3} title='Seamless Collaboration' text="Collaboration lies at the heart of our design process. We believe in the power of your perspective, and that's why we've designed a journey that's as inclusive as it is creative. Your ideas and feedback serve as the North Star guiding our designers to craft designs that mirror your vision. Through open communication, shared brainstorming, and transparent iteration cycles, we ensure that your voice is heard at every step. Join us in a partnership that brings your imagination to life." />
        <CFeature i={4} title='Innovative Design Impact' text="Design is not just about appearances; it's about impact. Our team excels in creating designs that transcend the visual realm, making a strategic impression that resonates with your audience. By combining cutting-edge trends with your brand's personality, we craft designs that go beyond aesthetics, influencing emotions and sparking conversations. With us, your brand becomes a driving force that leaves a lasting mark, solidifying your position as an industry leader." />
    </div>
}

export function Cta(props) {
    return <div className='sm:max-w-7xl m-auto my-16'><WAppear className='flex flex-wrap'>
        <div className='md:w-2/3'>
            <div className='sm:text-3xl text-xl font-extrabold'>
                {props.title}
            </div>
            <div className='mt-4 sm:text-lg'>
                {props.text}
            </div>
        </div>
        <div className='md:w-1/3 my-auto'>
            <div className='w-fit m-auto h-fit px-3 p-2 sm:text-lg rounded-full bg-white hover:border-gm hover:drop-shadow-lg border-[1px] hover:border-m-m duration-300'>
                <Link href={props.route}>
                    {props.cta}
                </Link>
            </div>
        </div>
    </WAppear></div>;
}