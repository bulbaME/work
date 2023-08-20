import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import send_form from "@/modules/send_form";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import icons from "./icons";
import { faq } from "@/modules/data";

import { services } from "@/modules/data";

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

    return <div ref={ref} className={(props.className ?? '') + ' duration-500 ease-in-out transition-all sm:px-10 px-6 ' + (shown ? 'opacity-100 sm:py-10 py-6':'-pt-[8rem] pb-[8rem] opacity-0')}>
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

    return <div className='max-w-7xl m-auto my-16 flex flex-wrap'>
        <div className='lg:w-1/2 my-8'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold mb-8'>
                {"Get in Touch with Us Today"}
            </div>
            <div className='font-medium sm:text-lg'>
                {"Whether you're ready to take the next step towards boosting your online visibility or you simply have a question, our team is here to assist you. Feel free to reach out to us using the contact form below. We're excited to hear from you and discuss how we can help you achieve your digital goals."}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            {/* <div className='my-4 flex'>
                <div className={'duration-300 p-2 rounded-2xl ease-in-out mr-4 cursor-pointer border-[1px] ' + (map ? 'text-neutral-400':'bg-white drop-shadow-lg border-g-l')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </div>
                <div className={'duration-300 p-2 rounded-2xl ease-in-out mr-4 cursor-pointer border-[1px] ' + (!map ? 'text-neutral-400':'bg-white drop-shadow-lg border-g-l')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div> */}
            <div className={'relative ' + (map ? 'overflow-hidden drop-shadow-lg':'')}>
                {/* <iframe className={'duration-300 ease-in-out h-[28.9rem] ' + (map ? 'w-full rounded-2xl':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.897347662034!2d-100.34857072338032!3d44.373698171077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878012030935fdcf%3A0x97785b84e021f29e!2s415%20N%20Evans%20St%2C%20Pierre%2C%20SD%2057501%2C%20USA!5e0!3m2!1sen!2s!4v1692002849344!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                <a id='contact-us' className='-top-[12rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white rounded-2xl drop-shadow-lg h-fit duration-300 ease-in-out md:max-h-[28.9rem] max-h-[40rem] p-4 border-[1px]'}>
                    <div className='sm:m-4 m-2 sm:py-4 font-extrabold sm:text-3xl text-xl'>Reach out</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-bold'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-white hover:drop-shadow-lg focus:drop-shadow-lg duration-300 border-[1px] text-b-d  rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-bold'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-white hover:drop-shadow-lg focus:drop-shadow-lg duration-300 border-[1px] text-b-d rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-lg font-bold'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='bg-white hover:drop-shadow-lg focus:drop-shadow-lg duration-300 border-[1px] text-b-d select-none rounded-lg appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-1/2 sm:pl-3'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer ml-0 font-bold rounded-lg w-fit text-black border-[1px] p-2 px-2 bg-white hover:drop-shadow-lg duration-300 text-left sm:text-base text-sm hover:border-m'>{services[product] ? services[product].title:'Select service'}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-0 rounded-lg drop-shadow-lg font-light transition-all duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 0 ? 'font-bold':'')} key={1} value={0} >
                                        {services[0].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 1 ? 'font-bold':'')} key={2} value={1} >
                                        {services[1].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 2 ? 'font-bold':'')} key={3} value={2} >
                                        {services[2].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 3 ? 'font-bold':'')} key={4} value={3} >
                                        {services[3].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 4 ? 'font-bold':'')} key={5} value={4} >
                                        {services[4].title}
                                    </Listbox.Option>
                                </Listbox.Options>
                            </Listbox>
                        </div>
                        <div className='w-fit m-auto lg:mr-6 duration-300 py-2 hover:pt-0 hover:pb-4 my-auto'>
                            <input type='submit' className='cursor-pointer font-bold sm:text-xl text-lg text-white border-[1px] p-2 px-3 rounded-lg bg-gradient-to-br from-m to-b hover:drop-shadow-lg duration-300' />
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

export function B1(props) {
    return <div className='w-fit m-auto text-black sm:text-xl text-lg font-bold my-4 px-3 p-2 bg-white border-[1px] rounded-full hover:mt-2 hover:mb-6 hover:drop-shadow-lg hover:border-m duration-300'>
        <Link href={props.link}>{props.text}</Link>
    </div>;
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
        if (product == -1) return;
        let p = services[theme].services[product].price;
        p = parseFloat(p.substring(1));
        if (isNaN(count)) {
            setEstimate(0);
            return;
        }
        setEstimate(p * count);
    }, [count, theme, product])

    return <div className='max-w-7xl m-auto my-24 relative'><WAppear>
        <a id='quote' className='-top-[12rem] absolute' />
        <div className='flex flex-wrap'>
            <div className='lg:w-1/2 lg:pr-8 lg:pb-0 pb-12 mt-8'>
                <div className='sm:text-3xl text-xl font-extrabold'>
                    Unlock the Power of Precision
                </div>
                <div className='sm:text-xl text-lg font-bold text-p mt-2'>
                    Get Your Instant Quote!
                </div>
                <div className='sm:text-lg font-medium mt-8'>
                    {"At Hello Translaters, we believe in transparency and simplicity. Use our Quote Calculator below to receive a quick and accurate estimate for your translation needs. Just tell us about the topic, select the service you need, and provide the word count. Your personalized quote will be ready in seconds. Take the first step towards clear, effective communication on a global scale!"}
                </div>
            </div>
            <div className='lg:w-2/5 w-full mr-0 mx-auto'>
                <div className='bg-white rounded-2xl drop-shadow-lg sm:p-8 p-4 w-full'>
                    <div className='sm:text-3xl text-xl font-extrabold sm:mb-8 mb-4'>
                        Get Personal Quote
                    </div>
                    <div className='sm:ml-4'>
                        <div className='flex flex-wrap'>
                            <div className='sm:text-lg font-bold mt-4 my-2'>
                                Theme
                            </div>
                            <div className='sm:w-2/3 w-full mx-auto mr-2'>
                                <Listbox value={theme} onChange={setTheme} >
                                    <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer hover:border-m ml-0 font-bold rounded-lg w-full text-black border-[1px] p-2 px-2 bg-white sm:text-base text-sm hover:drop-shadow-lg duration-300 text-left'>{services[theme] ? services[theme].title : 'Select theme'}</div>}</Listbox.Button>
                                    <Listbox.Options className='absolute z-50 m-0 font-light rounded-lg drop-shadow-lg transition-all duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 0 ? 'font-bold':'')} key={1} value={0} >
                                            {services[0].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 1 ? 'font-bold':'')} key={2} value={1} >
                                            {services[1].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 2 ? 'font-bold':'')} key={3} value={2} >
                                            {services[2].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 3 ? 'font-bold':'')} key={4} value={3} >
                                            {services[3].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (theme == 4 ? 'font-bold':'')} key={5} value={4} >
                                            {services[4].title}
                                        </Listbox.Option>
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className={'sm:text-lg font-bold mt-4 my-2 ' + (theme == -1 ? 'opacity-60':'')}>
                                Service
                            </div>
                            <div className='sm:w-2/3 w-full mx-auto mr-2'>
                                <Listbox value={product} onChange={setProduct} disabled={ theme == -1 }>
                                    <Listbox.Button className='py-2 duration-300'>
                                        <div className={'cursor-pointer sm:text-base text-sm ml-0 font-bold rounded-lg w-fit text-black border-[1px] p-2 px-2 bg-white duration-300 text-left ' + (theme == -1 ? 'opacity-60':'hover:drop-shadow-lg hover:border-m ')}>{services[theme] && services[theme].services[product] ? services[theme].services[product].title:'Select service'}</div>
                                    </Listbox.Button>
                                    <Listbox.Options className='absolute z-50 m-0 font-light rounded-lg drop-shadow-lg transition-all duration-300 border-[1px] bg-white sm:text-base text-sm'>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 0 ? 'font-bold':'')} key={1} value={0} >
                                            {services[theme] && services[theme].services[0].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 1 ? 'font-bold':'')} key={2} value={1} >
                                            {services[theme] && services[theme].services[1].title}
                                        </Listbox.Option>
                                        <Listbox.Option className={'cursor-pointer px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == 2 ? 'font-bold':'')} key={3} value={2} >
                                            {services[theme] && services[theme].services[2].title}
                                        </Listbox.Option>
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className={'py-2 flex sm:flex-nowrap flex-wrap ' + (product == -1 ? 'opacity-60':'')}>
                            <div className={'sm:text-lg font-bold my-auto ' + (product == -1 ? '':'mr-4')}>
                                {(product != -1 ? (capitalize(services[theme].services[product].per) + ' count'):'')} 
                            </div>
                            <div className='sm:w-2/3 w-full mx-auto mr-2 my-auto sm:text-base text-sm py-2'>
                                <input onChange={(e) => setCount(isNaN(e.target.value) ? count : parseInt(e.target.value))} type="number" min='0' value={count == 0 ? '':count} placeholder={product != -1 ?`${services[theme].services[product].price} / ${services[theme].services[product].per}`:''} className={'border-[1px] select-none outline-none rounded-lg font-bold placeholder:font-normal p-2 pr-0 duration-300 ' + (product == -1 ? '':'focus:drop-shadow-lg hover:drop-shadow-lg focus:border-m hover:border-m')} disabled={product == -1} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-4'>
                        <div className={'sm:text-3xl text-xl font-bold my-auto ' + (estimate == 0 ? 'opacity-60':'')}>
                            <span className={'' + (estimate != 0 ? 'text-p font-extrabold ':'')}>≈ ${estimate.toFixed(2)}</span>
                        </div>
                        { !count || count == 0 ? <div className='' />:
                            <div className='w-fit m-auto mr-0 sm:text-xl mt-4 mb-0 text-lg font-bold text-white hover:mb-2 hover:mt-2 hover:drop-shadow-lg duration-300 bg-gradient-to-br from-m to-b px-3 p-2 rounded-lg'>
                                <Link href={`/contact?theme=${theme+1}&service=${product+1}&count=${count}#contact-us`} >Continue</Link>
                            </div>
                        }
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
            if (top < 100 && props.n < 4) props.setStep(props.n + 1);
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

    return <div className='mt-24' ref={ref}><WAppear className='relative'>
        <a id={'fa-' + props.n} className='-top-[18rem] absolute' />
        <div className='sm:text-5xl text-3xl font-extrabold'>
            Step {props.n}
        </div>
        <div className='sm:text-3xl text-xl font-bold text-p mt-4'>
            {props.title}
        </div>
        <div className='sm:text-lg font-medium mt-6'>
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

    const elems = [];

    for (let i = 0; i < 4; i++) {
        const e = <div className='absolute -translate-x-1/2 -translate-y-1/2 z-30' id={'eb-' + i}>
            <Link href={'/#fa-' + (i+1)}>
                <div className={'flex my-2 text-white bg-gradient-to-br border-white from-m to-b hover:drop-shadow-lg duration-300 ease-in-out sm:w-[3rem] sm:h-[3rem] w-[2.5rem] h-[2.5rem] rounded-full ' + (step == i + 1 ? '':'border-4')}>
                    <div className='m-auto'>
                        {icons[i+1]}
                    </div>
                </div>
            </Link>
        </div>;

        elems.push(e);
    }

    const update_elems = () => {
        if (bar.current == null) return;
        for (let i = 0; i < 4; i++) {
            const e = document.getElementById('eb-' + i);
            let l = 0;
            l = 64 + bar.current.offsetWidth * (i / 3);
            e.style.left = l + 'px';
            e.style.marginTop = - bar.current.offsetHeight / 2 + 'px';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(topP.current.getBoundingClientRect().top);
                setBottom(bottomP.current.getBoundingClientRect().top);
            }
        });

        update_elems();
        window.addEventListener('resize', () => {
            update_elems();
        });
    }, []);

    useEffect(() => {
        if (barHolder.current == null) return;

        let s = '';
        if (top > 160) s = 'absolute';
        else if (bottom < barHolder.current.clientHeight + 160) s = 'absolute bottom-0'
        else {
            s = 'fixed top-[10rem]';
        }

        setBarClass(s);
    }, [top, bottom]);

    
    return <div ref={ref} className='w-full relative overflow-hidden py-10'>
        <WAppear className='max-w-7xl m-auto'>
            <div className='sm:text-5xl text-3xl font-extrabold'>
                {"A Journey in Translation Excellence"}
            </div>
            <div className='sm:text-3xl text-xl font-normal text-p mt-2'>
                {"Our Four-Step Process"}
            </div>
        </WAppear>
        <div ref={topP} />
        <div className={'w-full duration-300 transition-all z-20 h-fit ' + barClass} ref={barHolder}>
            <div className='max-w-xl m-auto px-16 sm:py-10 py-8 relative'>
                <div className='sm:h-8 h-6 bg-white drop-shadow-lg' ref={bar} />
                {...elems}
            </div>
        </div>
        <div className='max-w-7xl m-auto sm:py-16 py-8'>
            <CProcess    n={1} bar={bar} title='Discovery and Alignment' step={step} setStep={setStep} 
                text={[
                    "At the heart of successful communication lies understanding. We kick off by delving deep into your project, exploring its nuances, objectives, and context. Our collaboration is designed to align our strategy seamlessly with your vision, setting the stage for translations that resonate across cultures.",
                    "In this phase, we immerse ourselves in your project's essence, absorbing its intricacies and identifying the key messages that must transcend language barriers. By aligning our approach with your goals, we lay the groundwork for a translation that captures not only the words but the spirit behind them."
                ]}
            />
            <CProcess    n={2} bar={bar} title='Expert Linguists and Context Mastery' step={step} setStep={setStep} 
                text={[
                    "Precision requires expertise, and that's precisely what our linguists bring to the table. We handpick specialists who possess in-depth knowledge of your project's subject matter. Their industry-specific insights allow them to grasp the intricacies of technical jargon, specialized terminology, and cultural undertones.",
                    "In this phase, our linguists engage in exhaustive research to master your project's context. They explore the nuances of your industry's language, ensuring that every translation is not only accurate but also culturally resonant. By meticulously dissecting the intricacies of your subject matter, we ensure that your message reaches its target audience with unmatched precision."
                ]}
            />
            <CProcess    n={3} bar={bar} title='Transformation and Adaptation' step={step} setStep={setStep} 
                text={[
                    "Translations are more than words; they're a bridge of understanding between cultures. Our creative linguists embark on the transformational journey of transcreation, preserving the essence of your original content while seamlessly adapting it to the nuances of the target language and culture.",
                    "This is where your message takes on a new form, carefully shaped to evoke the same emotions and resonate equally with diverse audiences. Our linguists combine their linguistic prowess with creative finesse, ensuring that your message maintains its authenticity and power across borders."
                ]}
            />
            <CProcess    n={4} bar={bar} title='Quality Assurance and Collaboration' step={step} setStep={setStep} 
                text={[
                    "Our commitment to excellence doesn't end with the transformation. In this crucial phase, we subject each translation to rigorous quality assurance checks. A second set of expert eyes reviews the translation, ensuring accuracy, consistency, and adherence to your expectations.",
                    "Collaboration takes center stage here. We value your input and feedback, considering them integral to the refinement process. Our collaborative approach ensures that the final translation captures your vision impeccably and exceeds your expectations."
                ]}
            />
        </div>
        <div ref={bottomP} className='absolute mt-10' />
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4 mx-auto md:w-1/2 w-full flex'><Link href={props.s.link} className='flex'>
        <div className='p-4 bg-stone-100 border-[1px] rounded-2xl my-2 hover:mt-0 hover:mb-4 duration-300 hover:drop-shadow-lg'>
            <div className='sm:text-xl text-lg text-p font-extrabold'>
                {props.s.title}<span className='whitespace-nowrap sm:text-base text-sm text-white px-2 p-1 bg-gradient-to-br from-m to-b rounded-full mx-4'>3 services</span>
            </div>
            <div className='sm:text-lg font-medium mt-4'>
                {props.s.text_short}
            </div>
        </div>
    </Link></div>;
}

export function WServicesSmall() {
    const s = services.map((v, i) => {
        return <CServicesSmall key={i} s={v} />
    });

    return <div className='max-w-7xl m-auto my-24'><WAppear>
        <div className='sm:text-5xl text-3xl font-extrabold text-center'>
            {"Explore Our Services"}
        </div>
        <div className='flex flex-wrap mt-8'>
            {...s}
        </div>
    </WAppear></div>
}

function CFaqSmall(props) {
    return <div className='p-2'><Link href={'/faq#' + props.text.toLowerCase().replaceAll(' ', '-')} className='flex my-2 hover:mt-0 hover:mb-4 duration-300'>
        <div className='my-auto mr-4 bg-p  font-extrabold text-white rounded-xl drop-shadow-lg px-2 p-1'>
            <div className=''>
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
            <div className='sm:text-4xl text-2xl font-extrabold'>
                Q {props.n}
            </div>
            <div className='sm:text-2xl text:xl font-bold text-p mt-2'>
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
    return <div className='md:w-1/2'><WAppear>
        <div className='sm:text-3xl text-xl font-extrabold'>
            {props.title}
        </div>
        <div className='mt-2 mb-6 sm:text-xl text-lg font-bold text-p'>
            {props.slogan}
        </div>
        <div className='sm:text-lg font-medium'>
            {props.text}
        </div>
    </WAppear></div>;
}

function CServices(props) {
    const s = services[props.i];
    const sub_s = s.services.map((v, i) => {
        return <div className='mx-auto my-2 px-4' key={i}>
            <div className='sm:text-lg text-sm font-extrabold text-white text-center px-3 p-2 rounded-full bg-gradient-to-br from-m to-b hover:drop-shadow-lg duration-300'>
                <Link href={s.link + '/#' + to_link(v.title)}>{v.title}</Link>
            </div>
        </div>;
    });

    return <div><WAppear>
        <div className='p-6'>
            <div className='sm:text-3xl text-xl font-extrabold '>
                {s.title}
            </div>
            <div className='sm:text-xl text-lg text-p font-extrabold mt-2 mb-6'>
                {s.text_short}
            </div>
            <div className='md:pr-4 font-medium sm:text-lg md:pb-0 pb-4'>
                {s.text_long}
            </div>
            <div className='flex flex-wrap my-8'>
                {...sub_s}
            </div>
            <div className='flex w-full'>
                <div className='w-fit m-auto border-[1px] px-4 p-3 rounded-full bg-stone-100 hover:drop-shadow-lg duration-300 hover:bg-white hover:border-m'><Link href={s.link} className='flex'>
                    <div className='sm:text-xl text-lg font-bold'>
                        Discover
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
    return <div className={'sm:p-4 relative p-1 mx-auto flex lg:w-1/3 md:w-1/2' + (props.i == 0 ? 'ml-0':'') + (props.i == 4 ? 'mr-0':'')}>
        <a id={to_link(props.s.title)} className='-top-[12rem] absolute' />
        <div className='p-6 bg-white flex flex-wrap rounded-2xl my-4 drop-shadow-lg duration-300'>
            <div className='sm:text-2xl text-xl text-center font-extrabold w-full text-p'>
                {props.s.title}
            </div>
            <div className='my-4 w-full'>
                <div className='flex w-fit m-auto border-[1px] px-3 p-2 rounded-full'>
                    <div className='sm:text-lg font-extrabold text-grad'>{props.s.price}</div>
                    <div className='my-auto sm:text-lg font-medium ml-1'>per {props.s.per}</div>
                </div>
            </div>
            <div className='sm:text-lg font-medium w-full text-center my-8'>
                {props.s.text}
            </div>
            <div className='my-auto w-full flex mb-0 p-1'>
                <div className='w-fit m-auto px-3 p-2 sm:text-lg bg-gradient-to-br from-m to-b font-extrabold text-white rounded-full mt-2 mb-0 hover:drop-shadow-lg hover:mt-0 hover:mb-2 duration-300'>
                    <Link href={`/contact?theme=${props.theme + 1}&service=${props.i + 1}#contact-us`}>
                        Select
                    </Link>
                </div>
                <div className='w-fit m-auto px-3 p-2 sm:text-lg border-[1px] bg-white rounded-full mt-2 mb-0 hover:drop-shadow-lg hover:mt-0 hover:mb-2 duration-300'>
                    <Link href={`?service=${props.i + 1}#quote`}>
                        Get a Quote
                    </Link>
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
