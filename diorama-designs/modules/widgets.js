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
                setText(`I would like to request ${services[s].services[i].title.toLowerCase()} for ${q.count} ${services[s].services[i].per_plur}.`)
            } else {
                setText(`I would like to request ${services[s].services[i].title.toLowerCase()}..`);
            }
        }
    }, [router]);

    const [map, setMap] = useState(false);

    return <div className='max-w-7xl m-auto flex flex-wrap'>
        <div className='lg:w-1/2 mt-24'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold mb-8 text-white'>
                {"Get in Touch"}
            </div>
            <div className='font-light sm:text-lg text-white'>
                {"Feel free to reach out to us with any questions, inquiries, or collaboration opportunities. We're here to listen, assist, and turn your design aspirations into reality. Complete the form below, and our team will get back to you promptly. Your creative journey starts here."}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
                <div className={'duration-300 p-2  ease-in-out mr-4 cursor-pointer border-[1px] ' + (map ? 'text-neutral-600 border-neutral-600 hover:border-g-m ':'bg-black border-black text-g-m drop-shadow-lg')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={'duration-300 p-2  ease-in-out mr-4 cursor-pointer border-[1px] ' + (!map ? 'text-neutral-600 border-neutral-600 hover:border-g-m ':'bg-black border-black text-g-m drop-shadow-lg')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className={'relative flex ' + (map ? 'overflow-hidden ':'before:overflow-hidden')}>
                <iframe className={'h-[26rem] ' + (map ? 'w-full ':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.445220899905!2d24.74566311186875!3d42.119351071096226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd04499103277%3A0x1f9ea4936e643df1!2sul.%20%22Pere%20Toshev%22%20115%2C%2032%2C%204004%20g.k.%20Hristo%20Botev-South%2C%20Plovdiv%2C%20Bulgaria!5e0!3m2!1sen!2s!4v1692884967817!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='-top-[2rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'bg-black h-fit text-white ' + (map ? 'w-0 max-h-0':'w-full p-4 md:max-h-[28.9rem] max-h-[40rem]')}>
                    <div className='sm:m-4 m-2 sm:py-4 font-extrabold sm:text-3xl text-xl'>Send Us a Letter</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-black  font-light duration-300 focus:border-g-m hover:border-g-m border-[1px] border-neutral-800 select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-black font-light focus:border-g-m hover:border-g-m duration-300 border-[1px] border-neutral-800 select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-lg font-medium'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='font-light bg-black  duration-300 focus:border-g-m hover:border-g-m border-[1px] border-neutral-800 select-none appearance-none outline-none p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-1/2 sm:pl-3'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer ml-0 font-light w-fit border-[1px] border-neutral-800 p-2 px-2 bg-black  duration-300 text-left sm:text-base text-sm hover:border-g-m '>{services[product] ? services[product].title:'Select service'}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-0 font-light transition-all drop-shadow-lg duration-300 border-[1px] border-neutral-800 bg-black sm:text-base text-sm select-none outline-none'>
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
                        <div className='w-fit m-auto md:mr-auto mr-0 lg:mr-6 duration-300 my-4 hover:mb-6 hover:mt-2 hover:border-r-l flex border-[2px] p-2 rounded-full border-neutral-800'>
                            <input type='submit' className='cursor-pointer font-bold sm:text-xl text-lg text-white rounded-full px-1 duration-300' />
                            <div className='text-r-l'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
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
            let i = -1;
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
        if (product == -1 || !services[theme].services[product]) return;
        let p = services[theme].services[product].price;
        p = parseFloat(p.substring(1).replaceAll(',', ''));
        if (isNaN(count)) {
            setEstimate(0);
            return;
        }
        setEstimate(p * count);
    }, [count, theme, product])

    return <div className='max-w-7xl m-auto my-12 relative'><WAppear>
        <a id='quote' className='-top-[12rem] absolute' />
        <div className='flex flex-wrap'>
            <div className='lg:w-1/2 text-white lg:pr-8 lg:pb-0 pb-12'>
                <div className='sm:text-3xl text-xl font-extrabold'>
                    Get Your Instant Quote
                </div>
                <div className='sm:text-lg font-light mt-8'>
                    {"Experience the essence of creativity with Diorama Designs. Our passion for design and innovation fuels every project we undertake. Whether you're seeking a captivating website, a standout brand identity, inspiring interior transformations, or engaging digital experiences, we're here to turn your vision into reality. Our team of experts is dedicated to crafting designs that not only captivate but also communicate your unique story. With Diorama Designs, you're not just getting a service – you're getting a journey through imagination and excellence. Get your instant quote now and let's embark on a design adventure together."}
                </div>
            </div>
            <div className='lg:w-2/5 w-full mr-0 mx-auto'>
                <div className='bg-black text-white w-full duration-300'>
                    <div className='sm:p-8 p-4 '>
                        <div className='sm:text-3xl text-xl font-extrabold sm:mb-8 mb-4'>
                            Quote
                        </div>
                        <div className='sm:ml-4'>
                            <div className='flex flex-wrap'>
                                <div className='sm:text-lg font-medium mt-4 my-2'>
                                    Theme
                                </div>
                                <div className='sm:w-2/3 w-full mx-auto mr-2'>
                                    <Listbox value={theme} onChange={setTheme} >
                                        <Listbox.Button className='py-2 w-full max-w-[20rem] duration-300'>{<div className='cursor-pointer hover:border-g-m text-left ml-0 font-light border-[1px] border-neutral-800 p-2 px-2  sm:text-base text-sm bg-black duration-300'>{services[theme] ? services[theme].title : 'Select theme'}</div>}</Listbox.Button>
                                        <Listbox.Options className='absolute z-50 drop-shadow-lg m-0 font-light transition-all duration-300 border-[1px] border-neutral-800 bg-black sm:text-base text-sm'>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 0 ? 'font-bold text-gm':'')} key={1} value={0} >
                                                {services[0].title}
                                            </Listbox.Option>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 1 ? 'font-bold text-gm':'')} key={2} value={1} >
                                                {services[1].title}
                                            </Listbox.Option>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 2 ? 'font-bold text-gm':'')} key={3} value={2} >
                                                {services[2].title}
                                            </Listbox.Option>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 3 ? 'font-bold text-gm':'')} key={4} value={3} >
                                                {services[3].title}
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
                                            <div className={'cursor-pointer w-full sm:text-base text-sm ml-0 font-light text-left max-w-[20rem] border-[1px] p-2 px-2 border-neutral-800 bg-black duration-300 ' + (theme == -1 ? 'opacity-60':'hover:border-g-m ')}>{services[theme] && services[theme].services[product] ? services[theme].services[product].title:'Select service'}</div>
                                        </Listbox.Button>
                                        <Listbox.Options className='absolute drop-shadow-lg z-50 m-0 font-light transition-all duration-300 border-[1px] border-neutral-800 bg-black sm:text-base text-sm'>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 0 ? 'font-bold text-gm':'')} key={1} value={0} >
                                                {services[theme] && services[theme].services[0].title}
                                            </Listbox.Option>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 1 ? 'font-bold text-gm':'')} key={2} value={1} >
                                                {services[theme] && services[theme].services[1].title}
                                            </Listbox.Option>
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 2 ? 'font-bold text-gm':'')} key={3} value={2} >
                                                {services[theme] && services[theme].services[2].title}
                                            </Listbox.Option>
                                            { theme == 3 ? 
                                            <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 3 ? 'font-bold text-gm':'')} key={4} value={3} >
                                                {services[theme] && services[theme].services[3].title}
                                            </Listbox.Option>
                                            :'' }
                                        </Listbox.Options>
                                    </Listbox>
                                </div>
                            </div>
                            <div className={'py-2 flex sm:flex-nowrap flex-wrap ' + (product == -1 ? 'opacity-60':'')}>
                                <div className={'max-w-[30%] sm:text-lg font-medium my-auto ' + (product == -1 ? '':'pr-4')}>
                                    {(product != -1 && services[theme].services[product] ? (capitalize(services[theme].services[product].per_plur)):'Count')} 
                                </div>
                                <div className='w-2/3 mx-auto md:mr-2 md:ml-auto ml-0 my-auto sm:text-base text-sm py-2'>
                                    <input onChange={(e) => setCount(isNaN(e.target.value) ? count : parseInt(e.target.value))} type="number" min='0' value={count <= 0 ? '':count} placeholder={product != -1 && services[theme].services[product] ?`${services[theme].services[product].price} / ${services[theme].services[product].per}`:''} className={'border-[1px] select-none max-w-[12rem] outline-none font-light p-2 pr-0 border-neutral-800 bg-black duration-300 ' + (product == -1 || !services[theme].services[product] ? '':'focus:border-g-m hover:border-g-m hover:drop-shadow-lg focus:drop-shadow-lg ')} disabled={product == -1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='line' />
                    <div className='w-full bg-white sm:p-8 p-4 flex flex-wrap '>
                        <div className={'sm:text-2xl duration-300 text-xl text-black font-light my-auto ' + (estimate == 0 ? 'opacity-60 mx-auto':'mx-0')}>
                            <span className={'duration-300 ' + (estimate != 0 ? 'text-gm font-bold ':'')}><span className={estimate != 0 ? 'text-g-m':''}>$</span>{estimate.toFixed(2)}</span>
                        </div>
                        <div className={'flex sm:text-xl bg-white text-lg font-bold rounded-full hover:border-r-l duration-300 text-black overflow-hidden ' + (!count || count <= 0 || theme == -1 || !services[theme].services[product] ? 'w-0':'w-fit px-2 p-1 border-[1px] m-auto mr-0 ')}>
                            <Link href={`/contact?theme=${theme+1}&service=${product+1}&count=${count}#contact-us`} className='my-auto flex'>Continue
                            <div className='my-auto ml-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </WAppear></div>;
}


export function CProcess(props) {
    'use client';

    const sel = props.n == props.step;
    const ref = useRef(null);
    const [top, setTop] = useState(-1);

    useEffect(() => {
        if (sel) {
            if (top < 100 && props.n < 9) props.setStep(props.n + 1);
        } else {
            if (top > 100 && props.step > props.n) props.setStep(props.n);
        }
    }, [top])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(ref.current.getBoundingClientRect().top);
            }
        });
    }, []);

    return <div className='' ref={ref}><WAppear className='relative text-white'>
        <a id={'s' + props.n} className='-top-[20rem] absolute' />
        <div className={'sm:text-3xl text-xl duration-300 ease-in-out font-bold text-p flex mt-4 ' + (props.n == props.step ? 'text-g-m':'text-white')}>
            <div className='mr-4 sm:scale-150 my-auto'>
                {icons[props.n]}    
            </div>
            {props.title}
        </div>
        <div className='sm:text-lg font-light mt-6'>
            {props.text.map((v, i) => <div key={i} className='my-6'>{v}</div>)}
        </div>
    </WAppear></div>
}

export function WProcess() {
    'use client';

    const ref = useRef(null);
    const bar = useRef(null);
    const barHolder = useRef(null);
    const topP = useRef(null);
    const bottomP = useRef(null);
    const [top, setTop] = useState(-1);
    const [bottom, setBottom] = useState(-1);
    const [step, setStep] = useState(1);

    const [barClass, setBarClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(topP.current.getBoundingClientRect().top);
                setBottom(bottomP.current.getBoundingClientRect().top);
            }
        });

    }, []);

    useEffect(() => {
        if (barHolder.current == null) return;

        let s = '';
        if (top > 80) s = 'absolute';
        else if (bottom < barHolder.current.clientHeight + 80) s = 'absolute bottom-0'
        else {
            s = 'fixed top-[5rem]';
        }

        setBarClass(s);
    }, [top, bottom]);

    
    return <div ref={ref} className='w-full relative overflow-hidden py-10'>
        <WAppear className='max-w-7xl m-auto text-white'>
            <div className='sm:text-5xl text-3xl font-extrabold'>
                {"Our Design Process"}
            </div>
            <div className='sm:text-3xl text-xl font-light text-g-m mt-2'>
                {"Crafting Stories Through Space"}
            </div>
            <div className='sm:text-lg mt-6 font-light'>
                {"At Diorama Designs, our design process is a carefully orchestrated journey that transforms your ideas into immersive narratives, brought to life through architecture and artistry. We believe that each project is a unique story waiting to be told, and our process ensures that every detail aligns with your vision and resonates with your aspirations."}
            </div>
        </WAppear>
        <div ref={topP} />
        <div className={'w-full duration-300 transition-all z-20 h-fit ' + barClass} ref={barHolder}>
            <div className='max-w-6xl m-auto sm:px-14 sm:py-10 py-8 relative sm:flex'>
                <div className='flex backdrop-blur w-fit sm:m-0 m-auto rounded-full p-2' ref={bar}>
                    <div className='w-fit px-5 p-2 rounded-full bg-g-m'>
                        <div className='text-white font-extrabold sm:text-4xl text-2xl'>Step {step}</div>
                    </div>
                    <div className={'sm:text-3xl text-xl font-light text-white hover:text-t-l my-auto duration-300 ease-in-out overflow-hidden ' + (step == 9 ? 'w-0':'mx-8')}><Link href={'#s' + (step + 1)} className='flex'>
                        Next
                        <div className='my-auto ml-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </Link></div>
                </div>
                <div className='m-auto sm:mr-0 sm:mt-auto mt-4 w-fit font-bold text-white hover:border-r-l flex border-[2px] rounded-full px-3 p-1 backdrop-blur duration-300 ease-in-out'><Link href='/services' className='flex'>
                    Our services
                    <div className='my-auto ml-2 text-r-l'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                </Link></div>
            </div>
        </div>
        <div className='max-w-6xl m-auto pt-32'>
            <CProcess    n={1} bar={bar} title='Discovery and Ideation' step={step} setStep={setStep} 
                text={[
                    "Our journey begins with a deep dive into your aspirations, preferences, and the story you want to tell through your space. We engage in thorough conversations and collaborative brainstorming sessions to understand your objectives, functional requirements, and aesthetic desires. This phase sets the foundation for the creative journey ahead.",
                ]}
            />
            <CProcess    n={2} bar={bar} title='Conceptualization' step={step} setStep={setStep} 
                text={[
                    "Armed with insights from the discovery phase, our team of designers, architects, and artists conceptualize a design narrative that encapsulates your vision. We create mood boards, sketches, and initial concepts that capture the essence of the story your space will convey. This stage is all about exploring possibilities and refining ideas.",
                ]}
            />
            <CProcess    n={3} bar={bar} title='Design Development' step={step} setStep={setStep} 
                text={[
                    "Once a concept is chosen, we delve deeper into its development. Detailed architectural plans, 3D renderings, and material selections start shaping your space's tangible form. This is where your vision begins to take shape, and we ensure that every detail aligns with the overarching narrative, from the flow of spaces to the smallest design elements.",
                ]}
            />
            <CProcess    n={4} bar={bar} title='Collaboration and Feedback' step={step} setStep={setStep} 
                text={[
                    "Your input is invaluable. We collaborate closely, sharing our progress and inviting your feedback. Your thoughts guide us, ensuring that the design evolves in a direction that resonates with you. Whether it's about refining the color palette or adjusting spatial layouts, your insights play a pivotal role in refining the design.",
                ]}
            />
            <CProcess    n={5} bar={bar} title='Materialization and Selection' step={step} setStep={setStep} 
                text={[
                    "Materials are the textures that weave the fabric of your story. We meticulously select materials, finishes, and textures that complement the design narrative. Every choice, from flooring to lighting fixtures, is curated to evoke the intended emotions and sensations within the space.",
                ]}
            />
            <CProcess    n={6} bar={bar} title='Crafting Immersive Details' step={step} setStep={setStep} 
                text={[
                    "Details make a design come alive. We focus on intricate details that infuse character and uniqueness into your space. From custom-made furniture pieces to bespoke artistic installations, these details enrich the narrative, adding layers of depth and meaning.",
                ]}
            />
            <CProcess    n={7} bar={bar} title='Implementation and Construction' step={step} setStep={setStep} 
                text={[
                    "As the design crystallizes, we work hand-in-hand with skilled contractors and artisans to bring the design to life. This phase is a delicate balance of creativity and technical execution, ensuring that the vision seamlessly transitions from paper to reality.",
                ]}
            />
            <CProcess    n={8} bar={bar} title='Quality Assurance' step={step} setStep={setStep} 
                text={[
                    "Quality is our hallmark. Rigorous quality checks and assessments are conducted to ensure that the finished space meets the highest standards. Each detail is meticulously inspected to guarantee that the narrative is faithfully represented.",
                ]}
            />
            <CProcess    n={9} bar={bar} title='Unveiling Your Story' step={step} setStep={setStep} 
                text={[
                    "The moment arrives to reveal the transformed space to you. As you step into the world we've created, we share in the excitement of seeing your vision fully realized. Your story is now a tangible reality, inviting you to experience it in all its immersive glory.",
                ]}
            />
        </div>
        <div ref={bottomP} className='absolute mt-10' />
    </div>;
}

function CServicesSmall(props) {
    'use client';

    const [hover, setHover] = useState(false);

    const s = props.s.services.map((v, i) => {
        'use client';
        const [hover, setHover] = useState(false);

        return <div key={i} className='my-3'><Link href={'/services/' + to_link(v.title)} className='flex' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={'w-2 h-2 rounded-full my-auto mx-4 duration-300 ' + (!hover ? 'bg-g-m':'bg-r-l')} />
            <div>
                {v.title}
            </div>
        </Link></div>;
    });

    return <div className='p-4 mx-auto lg:w-1/2 w-full flex'>
        <div className='p-8 bg-black text-white my-2 duration-300 flex flex-wrap'>
            <div className='sm:text-3xl text-xl text-p font-bold w-full'>
                {props.s.title}
            </div>
            <div className='sm:text-lg font-medium pt-6 pb-2 m-auto w-full'>
                {props.s.text_short}
            </div>
            <div>
                {...s}
            </div>
            <div className='m-auto mb-0 w-full pt-10'>
                <div className='sm:text-xl px-4 p-2 border-[2px] border-white hover:border-g-m hover:text-g-m duration-300 rounded-full w-fit m-auto text-lg font-light' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Link href={'/services/' + to_link(props.s.title)}>See More</Link>
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
        <div className='sm:text-5xl text-3xl font-extrabold text-white'>
            {"Diverse Design Services"}
        </div>
        <div className='sm:text-3xl text-xl font-light text-g-m mt-2'>
            {"Your Vision, Our Creation"}
        </div>
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
    'use client';
    const [hover, setHover] = useState(false);

    return <div className='p-2 text-white'><Link href={'/faq#' + props.text.toLowerCase().replaceAll(' ', '-')} className='flex my-2 hover:mt-0 hover:mb-4 duration-300' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='my-auto mr-4 bg-b-m  font-extrabold text-white rounded-xl drop-shadow-md px-2 p-1'>
            <div className='whitespace-nowrap bg-black rounded-full pr-2'>
                <span className={'px-2 duration-300 rounded-full mr-2 ' + (hover ? 'bg-r-l':'bg-g-m')}>Q&A</span> {props.n}
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
    'use client';

    const router = useRouter();
    const [active, setActive] = useState(false);

    useEffect(() => {
        const a = router.asPath.split('#')[1];
        if (a == undefined) {
            setActive(false);
            return;
        }

        if (to_link(props.q) == a) setActive(true);
        else setActive(false);
    }, [router.asPath]);

    return <div className='duration-500 text-white'><WAppear>
        <a className='-top-[9rem] relative' id={props.q.toLowerCase().replaceAll(' ', '-')} />
        <div className='flex'>
            <div className={'sm:text-5xl text-3xl font-extrabold duration-300 ' + (active ? 'text-r-l':'text-g-m')}>
                {props.n}
            </div>
            <div className='ml-4'>
                <div className='sm:text-2xl text-xl font-bold'>
                    {props.q}
                </div>
                <div className='sm:text-lg mt-4 font-medium'>
                    {props.a}
                </div>
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
    return <div className='m-auto'><WAppear className=''>
        <div className='md:pr-8 text-white'>
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

export function P1S(props) {
    return <div className='md:w-1/2 m-auto'><WAppear className=''>
        <div className='md:pr-8'>
            <div className='sm:text-xl text-lg text-g-m font-bold'>
                {props.title}
            </div>
            <div className='sm:text-xl text-lg font-bold text-b-m'>
                {props.slogan}
            </div>
            <div className='sm:text-lg font-light mt-4 text-white'>
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

    return <div className='md:w-1/2 flex'><WAppear className='flex flex-wrap text-white'>
        <div className='sm:text-3xl text-xl font-bold sm:flex w-full m-auto'>
            {s.title}
        </div>
        <div className='w-full m-auto'>
            <div className='my-auto'>
                <div className='md:pr-4 sm:text-lg md:pb-0 pb-4 pt-4'>
                    {s.text_long}
                </div>
            </div>
        </div>
        <div className='flex mb-0 m-auto w-full pt-8'>
            <div className='w-fit m-auto border-[2px] border-neutral-600 hover:border-g-m px-4 p-3 rounded-full duration-300 hover:border-b-m '><Link href={'/services/' + to_link(s.title)} className='flex'>
                <div className='sm:text-xl text-lg font-bold'>
                    Check Out Our {sub_s.length} Services
                </div>
                <div className='my-auto ml-3 text-g-m'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </Link></div>
        </div>
    </WAppear></div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <CServices i={i} />
    })

    return <div className='max-w-7xl m-auto my-16 flex flex-wrap'>
        {...s}
    </div>;
}

function CService(props) {
    return <div className={'sm:p-4 relative p-2 mx-auto lg:w-auto md:w-1/2 flex'}>
        <a id={to_link(props.s.title)} className='-top-[12rem] absolute' />
        <div className='sm:p-6 p-4 bg-black text-white text-center flex flex-wrap my-4 duration-300'>
            <div className='sm:text-3xl text-xl font-bold w-full text-p'>
                {props.s.title}
            </div>
            <div className='w-full mb-6 mt-4'>
                <div className='w-fit m-auto px-3 p-1 text-center rounded-full flex sm:text-lg font-bold'>
                    <div className=''>
                        <span className='text-r-l'>$</span>{props.s.price.slice(1)}
                    </div>
                    <div className='ml-1 font-light'>/ {props.s.per}</div>
                </div>
            </div>
            <div className='sm:text-xl font-light w-full my-4 mb-8'>
                {props.s.text}
            </div>
            <div className='my-auto w-full flex flex-wrap mb-0 p-1'>
                <div className='w-fit m-auto px-3 h-fit p-2 flex sm:text-lg rounded-full hover:border-g-m font-bold hover:drop-shadow-lg border-[2px] border-neutral-800 hover:border-b-m duration-300'>
                    <Link href={`/contact?theme=${props.theme + 1}&service=${props.i + 1}#contact-us`}>
                        Select
                    </Link>
                    <div className='my-auto ml-2 text-g-m'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className='w-fit m-auto px-3 h-fit p-2 my-4 flex sm:text-lg rounded-full hover:border-r-l font-bold hover:drop-shadow-lg border-[2px] border-neutral-800 hover:border-b-m duration-300'>
                    <Link href={`?theme=${props.theme + 1}&service=${props.i + 1}#quote`}>
                        Get a Quote
                    </Link>
                    <div className='my-auto ml-2 text-r-l'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
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

    return <div className='max-w-7xl m-auto'><WAppear className='flex lg:flex-nowrap flex-wrap'>
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