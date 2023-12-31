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

    return <div className='max-w-7xl m-auto my-16 flex flex-wrap'>
        <div className='lg:w-1/2 my-16'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold mb-8'>
                {"Get in Touch with Us"}
            </div>
            <div className='font-light sm:text-lg'>
                {"Ready to Begin Your Design Journey with 2 Days Design? Let's Collaborate! Fill out the form below, and let us know about your project. Whether it's a brand identity overhaul, a web presence amplification, or captivating event marketing materials, we're here to turn your ideas into stunning realities. Your vision, our expertise – together, we'll create design magic that resonates with your audience."}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
                <div className={'duration-300 p-2 rounded-2xl ease-in-out mr-4 cursor-pointer border-[1px] ' + (map ? 'text-neutral-400':'bg-white drop-shadow-lg border-white')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </div>
                <div className={'duration-300 p-2 rounded-2xl ease-in-out mr-4 cursor-pointer border-[1px] ' + (!map ? 'text-neutral-400':'bg-white drop-shadow-lg border-white')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div>
            <div className={'relative flex ' + (map ? 'overflow-hidden drop-shadow-lg':'before:overflow-hidden')}>
                <iframe className={'duration-300 ease-in-out h-[28.9rem] ' + (map ? 'w-full rounded-2xl':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.897347662034!2d-100.34857072338032!3d44.373698171077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878012030935fdcf%3A0x97785b84e021f29e!2s415%20N%20Evans%20St%2C%20Pierre%2C%20SD%2057501%2C%20USA!5e0!3m2!1sen!2s!4v1692002849344!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='-top-[2rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white rounded-2xl h-fit duration-300 ease-in-out drop-shadow-lg ' + (map ? 'w-0 max-h-0':'w-full p-4 md:max-h-[28.9rem] max-h-[40rem]')}>
                    <div className='sm:m-4 m-2 sm:py-4 font-extrabold sm:text-3xl text-xl'>Fill in the Form</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-white rounded-2xl font-light focus:drop-shadow-lg hover:drop-shadow-lg duration-300 focus:border-m-m hover:border-m-m border-[1px] select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-medium'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-white rounded-2xl font-light hover:drop-shadow-lg focus:border-m-m hover:border-m-m focus:drop-shadow-lg duration-300 border-[1px] select-none appearance-none outline-none p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-lg font-medium'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='font-light hover:drop-shadow-lg bg-white rounded-2xl duration-300 focus:border-m-m hover:border-m-m border-[1px] select-non appearance-none outline-none p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-1/2 sm:pl-3'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer ml-0 font-light w-fit border-[1px] p-2 px-2 bg-white hover:drop-shadow-lg focus:drop-shadow-lg duration-300 text-left sm:text-base text-sm hover:border-m-m rounded-2xl'>{services[product] ? services[product].title:'Select service'}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-0 font-light transition-all rounded-2xl duration-300 border-[1px] bg-white sm:text-base text-sm'>
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
                            <input type='submit' className='cursor-pointer font-extrabold sm:text-xl text-lg text-white rounded-full p-2 px-3 bg-gradient-to-br from-g1 to-gm hover:drop-shadow-lg duration-300' />
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

    return <div className='max-w-7xl m-auto my-12 relative'><WAppear>
        <a id='quote' className='-top-[12rem] absolute' />
        <div className='flex flex-wrap'>
            <div className='lg:w-1/2 lg:pr-8 lg:pb-0 pb-12 mt-8'>
                <div className='sm:text-3xl text-xl font-extrabold'>
                    Instant Quote
                </div>
                <div className='sm:text-lg font-light mt-8'>
                    {"Get an Instant Quote for Your Design Dreams! Enter a few details below, and we'll provide you with a customized quote that matches your vision and budget. Elevate your brand with designs that capture attention and leave a lasting impact. Let's bring your ideas to life, swiftly and brilliantly."}
                </div>
            </div>
            <div className='lg:w-2/5 w-full mr-0 mx-auto'>
                <div className='rounded-2xl sm:p-8 p-4 w-full drop-shadow-lg bg-white'>
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
                                    <Listbox.Button className='py-2 w-full max-w-[20rem] duration-300'>{<div className='cursor-pointer hover:border-m ml-0 font-light border-[1px] p-2 px-2 rounded-2xl text-center sm:text-base text-sm bg-white hover:drop-shadow-lg duration-300'>{services[theme] ? services[theme].title : 'Select theme'}</div>}</Listbox.Button>
                                    <Listbox.Options className='absolute z-50 drop-shadow-lg m-0 font-light transition-all duration-300 border-[1px] rounded-2xl bg-white sm:text-base text-sm'>
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
                                        <div className={'cursor-pointer w-full sm:text-base text-sm ml-0 font-light max-w-[20rem] border-[1px] p-2 px-2 bg-white duration-300 rounded-2xl text-center ' + (theme == -1 ? 'opacity-60':'hover:drop-shadow-lg ')}>{services[theme] && services[theme].services[product] ? services[theme].services[product].title:'Select service'}</div>
                                    </Listbox.Button>
                                    <Listbox.Options className='absolute drop-shadow-lg z-50 m-0 font-light transition-all duration-300 rounded-2xl border-[1px] bg-white sm:text-base text-sm'>
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
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className={'py-2 flex sm:flex-nowrap flex-wrap ' + (product == -1 ? 'opacity-60':'')}>
                            <div className={'sm:text-lg font-medium my-auto ' + (product == -1 ? '':'mr-4')}>
                                {(product != -1 ? (capitalize(services[theme].services[product].per) + ' count'):'')} 
                            </div>
                            <div className='w-2/3 mx-auto md:mr-2 md:ml-auto ml-0 my-auto sm:text-base text-sm py-2'>
                                <input onChange={(e) => setCount(isNaN(e.target.value) ? count : parseInt(e.target.value))} type="number" min='0' value={count == 0 ? '':count} placeholder={product != -1 ?`${services[theme].services[product].price} / ${services[theme].services[product].per}`:''} className={'border-[1px] rounded-2xl text-center select-none max-w-[12rem] hover:drop-shadow-lg focus:drop-shadow-lg outline-none font-light p-2 pr-0 bg-white duration-300 ' + (product == -1 ? '':'focus:border-m-m hover:border-m-m')} disabled={product == -1} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-4 w-full'>
                        <div className={'sm:text-3xl text-xl font-light my-auto ' + (estimate == 0 ? 'opacity-60':'')}>
                            <span className={'' + (estimate != 0 ? 'text-gm font-bold ':'')}>≈ ${estimate.toFixed(2)}</span>
                        </div>
                        { !count || count == 0 ? <div className='' />:
                            <div className='w-fit m-auto sm:text-xl mt-4 mr-2 mb-0 text-lg font-extrabold text-white rounded-full bg-gradient-to-br from-g1 hover:drop-shadow-lg to-gm duration-300 px-3 p-2 '>
                                <Link href={`/contact?theme=${theme+1}&service=${product+1}&count=${count}#contact-us`}>Continue</Link>
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
            if (top < 80 && props.n < 8) props.setStep(props.n + 1);
        } else {
            if (top > 80 && props.step > props.n) props.setStep(props.n);
        }
    }, [top])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(ref.current.getBoundingClientRect().top);
            }
        });
    }, []);

    return <div className='mb-24 ml-12' ref={ref}><WAppear className='relative'>
        <a id={'fa-' + props.n} className='-top-[12rem] absolute' />
        <div className='sm:text-3xl text-xl font-bold text-white mt-4'>
            {props.title}
        </div>
        <div className='sm:text-xl text-lg font-light text-m-m mt-4'>
            {props.slogan}
        </div>
        <div className='sm:text-lg font-light text-white mt-6'>
            {...props.text}
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

    for (let i = 0; i < 8; i++) {
        const e = <div className='absolute -translate-x-1/2 -translate-y-1/2 z-30' id={'eb-' + i}>
            <Link href={'/#fa-' + (i+1)}><div className={'bg-gradient-to-br duration-300 from-m-m to-m-l rounded-full sm:w-[3rem] sm:h-[3rem] w-[2.5rem] h-[2.5rem] flex ' + (step == i + 1 ? 'sm:p-2 p-1':'p-0')}>
                <div className={'flex m-auto text-m-m bg-white duration-300 ease-in-out rounded-full border-m-m w-full h-full '}>
                    <div className='m-auto'>
                        {icons[i+1]}
                    </div>
                </div>
            </div></Link>
        </div>;

        elems.push(e);
    }

    const update_elems = () => {
        if (bar.current == null) return;
        for (let i = 0; i < 8; i++) {
            const e = document.getElementById('eb-' + i);
            let l = 0;
            l = bar.current.offsetHeight * (i / 7);
            e.style.top = l + 'px';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(topP.current.getBoundingClientRect().top);
                setBottom(bottomP.current.getBoundingClientRect().top);
                update_elems();
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
        if (top > 0) s = 'absolute top-[20vh]';
        else if (bottom < barHolder.current.clientHeight) s = 'absolute bottom-[50vh]'
        else {
            s = 'fixed top-[20vh]';
        }

        setBarClass(s);
    }, [top, bottom]);

    
    return <div ref={ref} className='w-full relative overflow-hidden py-10'>
        <div className={'duration-300 sm:left-[3rem] left-[2rem] transition-all z-20 w-fit h-full max-h-[70vh] ' + barClass} ref={barHolder}>
            <div className='h-full min-h-full m-auto relative'>
                <div className='w-2 h-full bg-white drop-shadow-lg -translate-x-1/2 ' ref={bar} />
                {...elems}
            </div>
        </div>
        <div ref={topP} className='absolute top-0' />
        <WAppear className='max-w-7xl m-auto'><div className='pl-12'>
                <div className='sm:text-5xl text-3xl font-bold text-white'>
                    {"Elevate Your Experience with StealthTranslator"}
                </div>
                <div className='sm:text-3xl text-xl font-normal text-m-m mt-2'>
                    {"Unveiling Key Features"}
                </div>
            </div>
        </WAppear>
        <div className='max-w-7xl m-auto '>
            <CProcess n={1} bar={bar} step={step} setStep={setStep}
                title="Linguistic Mastery Unleashed"
                slogan="Where Words Find Their Perfect Match"
                text="At StealthTranslator, our team comprises language aficionados who possess an unparalleled mastery over the intricacies of languages. With a deep understanding of cultural nuances, idiomatic expressions, and context, our linguists ensure that every translation is a masterpiece, capturing not only the words but also the essence of your message. When you choose us, you choose precision and eloquence that bridges linguistic gaps seamlessly."
            />
            <CProcess n={2} bar={bar} step={step} setStep={setStep}
                title="Cultures Converge, Meanings Resonate"
                slogan="Beyond Translation, We Transcend Cultural Boundaries"
                text="We recognize that successful translation goes beyond words; it encompasses cultural awareness and empathy. Our translators are not just linguists, but cultural ambassadors. They meticulously consider cultural norms, idioms, and customs to ensure your message is culturally resonant. With us, your content will not merely be translated – it will be understood and embraced across cultures."
            />
            <CProcess n={3} bar={bar} step={step} setStep={setStep}
                title="Tech-Powered Precision"
                slogan="Bridging Languages at the Speed of Thought"
                text="Our commitment to innovation extends beyond language expertise. We harness the latest advancements in translation technology to expedite the process without compromising on quality. With our efficient workflow and advanced tools, your content crosses language barriers swiftly and seamlessly, bringing you closer to global audiences with every word."
            />
            <CProcess n={4} bar={bar} step={step} setStep={setStep}
                title="Versatility, Our Strong Suit"
                slogan="Every Project, a Bespoke Translation Masterpiece"
                text="Whether you're a multinational corporation or an individual seeking precise translation, our diverse services cater to your unique needs. From legal documents demanding precision to creative content requiring finesse, we craft each translation with meticulous attention. Our commitment to excellence means that regardless of the scale or complexity, every project is a testament to our dedication to perfection."
            />
            <CProcess n={5} bar={bar} step={step} setStep={setStep}
                title="Your Trust, Our Priority"
                slogan="Where Your Data Finds Utmost Protection"
                text="We understand the sensitivity of the information you entrust to us. Rest assured, your data's security is our foremost concern. Our stringent security measures ensure that your confidential information remains safeguarded throughout the translation process. Partner with us for a translation experience grounded in trust and confidentiality."
            />
            <CProcess n={6} bar={bar} step={step} setStep={setStep}
                title="Worldwide Reach, Local Feel"
                slogan="Your Message, Universally Understood"
                text="The world is your audience, and we ensure your message resonates with every corner of it. Our translations transcend linguistic boundaries, making your content accessible to diverse demographics. By carefully considering local nuances, we deliver translations that strike a chord with audiences worldwide, making your global impact feel like a local connection."
            />
            <CProcess n={7} bar={bar} step={step} setStep={setStep}
                title="Pricing Clarity, No Hidden Pathways"
                slogan="Because Honesty is Our Best Policy"
                text="We believe in building relationships founded on trust and transparency. Our pricing structure is straightforward and devoid of hidden costs. You'll always receive a clear breakdown of costs, ensuring that you know exactly what you're investing in. With us, what you see is truly what you get."
            />
            <CProcess n={8} bar={bar} step={step} setStep={setStep}
                title="Around-the-Clock Allies"
                slogan="Your Questions, Our Anytime Solutions"
                text="Translation is just the beginning of our partnership. Our dedicated support team is available 24/7 to assist you at every step of the journey. Whether you have questions, need updates, or require immediate assistance, count on us to be your dependable ally, providing solutions whenever you need them."
            />
        </div>
        <div ref={bottomP} className='absolute bottom-[70vh]' />
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4 mx-auto md:w-1/3 w-full flex'><Link href={'/services/' + to_link(props.s.title)} className='flex'>
        <div className='p-4 border-[1px] rounded-2xl bg-white hover:drop-shadow-lg my-2 duration-300 text-center hover:border-m-m'>
            <div className='sm:text-xl text-lg text-p font-bold'>
                {props.s.title}
            </div>
            <div className='sm:text-lg font-light mt-4'>
                {props.s.text_short}
            </div>
            <div className='sm:text-base text-sm font-extrabold text-white bg-gm w-fit m-auto mt-4 px-3 p-1 rounded-full border-[1px]'>
                Explore 4 Services
            </div>
        </div>
    </Link></div>;
}

export function WServicesSmall() {
    const s = services.map((v, i) => {
        return <CServicesSmall key={i} s={v} />
    });

    return <div className='max-w-7xl m-auto my-24'><WAppear>
        <div className='sm:text-3xl text-xl font-extrabold'>
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

export function P1L(props) {
    return <div className='max-w-7xl m-auto my-12'><WAppear className='flex flex-wrap-reverse'>
        <div className='md:w-1/2 md:pr-8 md:pb-0 pt-8'>
            <div className='sm:text-3xl text-xl font-extrabold'>
                {props.title}
            </div>
            <div className='sm:text-lg font-light mt-4'>
                {props.text}
            </div>
        </div>
        <div className='relative md:w-1/2 w-full md:min-h-full min-h-[12rem]'>
            <Image layout='fill' objectFit='cover' alt={`${props.title} image`} objectPosition='center' src={props.img} className='h-full w-full rounded-2xl drop-shadow-lg' />
        </div>
    </WAppear></div>;
}

export function P1R(props) {
    return <div className='max-w-7xl m-auto my-12'><WAppear className='flex flex-wrap'>
        <div className='relative md:w-1/2 w-full md:min-h-full min-h-[12rem]'>
            <Image layout='fill' objectFit='cover' alt={`${props.title} image`} objectPosition='center' src={props.img} className='h-full w-full rounded-2xl drop-shadow-lg' />
        </div>
        <div className='md:w-1/2 md:pl-8 md:pb-0 pt-8'>
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
        return <div className='mx-auto lg:w-auto sm:w-1/2 w-full my-4 px-4' key={i}>
            <div className='sm:text-lg font-medium px-3 p-1 bg-white rounded-full border-[1px] hover:drop-shadow-lg duration-300 flex'>
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
        <div className='p-6 bg-white drop-shadow-lg rounded-2xl'>
            <div className='sm:text-3xl text-xl font-bold '>
                {s.title}
            </div>
            <div className='flex flex-wrap'>
                <div className='lg:w-1/2 my-auto'>
                    <div className='md:pr-4 sm:text-lg md:pb-0 pb-4 pt-4'>
                        {s.text_long}
                    </div>
                </div>
                <div className='lg:w-1/2 my-auto w-full'>
                    <div className='lg:w-fit w-full m-auto lg:block flex flex-wrap'>
                        {...sub_s}
                    </div>
                </div>
            </div>
            <div className='flex w-full my-6'>
                <div className='w-fit m-auto border-[1px] px-4 p-3 rounded-full  hover:drop-shadow-lg duration-300 hover:border-gm bg-white'><Link href={'/services/' + to_link(s.title)} className='flex'>
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
    return <div className={'sm:p-4 relative p-2 mx-auto flex sm:w-1/2 ' + (props.i == 0 ? 'ml-0':'') + (props.i == 4 ? 'mr-0':'')}>
        <a id={to_link(props.s.title)} className='-top-[12rem] absolute' />
        <div className='sm:p-6 p-4 border-[1px] bg-white flex flex-wrap rounded-2xl my-4 hover:drop-shadow-lg duration-300'>
            <div className='sm:text-3xl text-xl font-bold w-full text-p'>
                {props.s.title}
            </div>
            <div className='sm:text-xl font-light w-full my-4'>
                {props.s.text}
            </div>
            <div className='my-auto w-full flex flex-wrap-reverse mb-0 p-1'>
                <div className='w-fit m-auto px-3 h-fit p-2 sm:text-lg rounded-full bg-white hover:drop-shadow-lg border-[1px] hover:border-m-m duration-300'>
                    <Link href={`/contact?theme=${props.theme + 1}&service=${props.i + 1}#contact-us`}>
                        Select
                    </Link>
                </div>
                <div className='w-fit m-auto h-fit px-3 p-2 sm:text-lg rounded-full bg-white hover:drop-shadow-lg border-[1px] hover:border-m-m duration-300'>
                    <Link href={`?service=${props.i + 1}#quote`}>
                        Get a Quote
                    </Link>
                </div>
                <div className='flex sm:w-fit sm:my-2 my-8  m-auto px-3 p-2 duration-300  rounded-full'>
                    <div className='sm:text-lg font-extrabold text-gm'>{props.s.price}</div>
                    <div className='my-auto sm:text-lg font-light ml-1'>/ {props.s.per}</div>
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