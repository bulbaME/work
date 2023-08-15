import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import send_form from "@/modules/send_form";
import { Router, useRouter } from "next/router";
import Image from "next/image";

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

    return <div ref={ref} className={(props.className ?? '') + ' duration-500 ease-out transition-all sm:px-10 px-6 ' + (shown ? 'opacity-100 sm:py-10 py-6':'-pb-20 pt-20 opacity-0')}>
        {props.children}
    </div>;
}

export function WForm() {
    'use client';

    const router = useRouter();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [product, setProduct] = useState('Select service');

    const [ovf, setOvf] = useState(false);

    useEffect(() => {
        const q = router.query;
        let s;

        if (q.theme != undefined) {
            s = parseInt(q.theme) - 1;
            setProduct(services[s].title);
        }

        if (q.service != undefined) {
            let i = parseInt(q.service) - 1;
            setText(`I would like to request ${services[s].services[i].title.toLowerCase()}..`);
        }
    }, [router]);

    const [map, setMap] = useState(false);

    return <div className='max-w-7xl m-auto my-16 flex flex-wrap'>
        <div className='lg:w-1/2 my-8'><WAppear>
            <div className='sm:text-4xl text-2xl font-extrabold mb-8'>
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
                <a id='quote' className='-top-[12rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white drop-shadow-lg h-fit duration-300 ease-in-out md:max-h-[28.9rem] max-h-[40rem] p-4 border-[1px]'}>
                    <div className='sm:m-4 m-2 sm:py-4 font-bold sm:text-4xl text-2xl'>Reach out</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-bold'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-stone-100 text-b-d  rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-lg font-bold'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-stone-100 text-b-d rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-lg font-bold'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='bg-stone-100 text-b-d select-none rounded-lg appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-1/2 sm:pl-3'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-2 duration-300'>{<div className='cursor-pointer ml-0 font-bold rounded-lg w-fit text-black border-[1px] p-2 px-2 bg-white hover:drop-shadow-lg duration-300 text-left'>{product}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-0 rounded-lg drop-shadow-lg transition-all duration-300 border-[1px] bg-white sm:text-lg'>
                                    <Listbox.Option className={'cursor-pointer font-semibold px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == services[0].title ? 'text-m-p':'')} key={1} value={services[0].title} >
                                        {services[0].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer font-semibold px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == services[1].title ? 'text-m-p':'')} key={2} value={services[1].title} >
                                        {services[1].title}
                                    </Listbox.Option>
                                    <Listbox.Option className={'cursor-pointer font-semibold px-3 my-2 hover:pl-5 hover:pr-1 duration-300 ' + (product == services[2].title ? 'text-m-p':'')} key={3} value={services[2].title} >
                                        {services[2].title}
                                    </Listbox.Option>
                                </Listbox.Options>
                            </Listbox>
                        </div>
                        <div className='w-fit m-auto lg:mr-6 duration-300 py-2 hover:pt-0 hover:pb-4 my-auto'>
                            <input type='submit' className='cursor-pointer font-bold sm:text-xl text-lg text-white border-[1px] p-2 px-3 rounded-2xl bg-gradient-to-br from-g-l to-g-m hover:drop-shadow-lg duration-300' />
                        </div>
                    </div>
                </form>
            </div>
            </WAppear></div>
    </div>;
}

function CProcessStep(props) {
    'use client';

    const sel = props.n == props.step;
    const ref = useRef(null);
    const [top, setTop] = useState(-1);

    useEffect(() => {
        if (sel) {
            if (top < 200 && props.n < 10) props.setStep(props.n + 1);
        } else {
            if (top > 200 && props.step > props.n) props.setStep(props.n);
        }
    }, [top])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(ref.current.getBoundingClientRect().top);
            }
        });
    }, []);


    return <div className='sm:mb-24 mb-16' ref={ref} onClick={() => props.setStep(props.n)}>
        <div className={'absolute rounded-full bg-gradient-to-br flex duration-300 cursor-pointer ' + (sel ? '-right-[1rem] w-[4rem] h-[4rem] drop-shadow-lg font-bold text-white from-g-l to-g2-l':'-right-[1rem] w-[2rem] h-[2rem] m-[1rem] font-semibold from-white to-white')}>
            <div className='m-auto sm:text-xl text-lg'>
                {props.stepR}
            </div>
        </div>
        <div className={'duration-300 mt-[1rem] w-3/4 ' + (sel ? 'md:pl-32 md:pr-0 pl-16 pr-0':'md:pl-0 md:pr-32 pl-0 pr-16 opacity-40')}>
            <div className='sm:text-3xl text-xl font-bold text-p-b'>
                {props.title}
            </div>
            <div className='mt-4 font-medium sm:text-lg'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WProcess() {
    'use client';

    const [step, setStep] = useState(1);

    return <div className='max-w-7xl m-auto my-16 flex flex-wrap'>
        <div className='w-full'><WAppear>
            <div className='sm:text-5xl text-3xl font-black'>
                {"SEO Success"}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m'>
                {"Our Proven Process"}
            </div>
            <div className='flex relative my-12'>
                <div className='absolute bg-white w-[0.5rem] translate-x-1/2 my-[2rem] ml-[1rem] h-full rounded-full right-[1rem] -z-10' />
                <div>
                    <CProcessStep n={1} step={step} setStep={setStep} stepR='I'  
                        title="Discovery Phase"
                        text="We begin by understanding your business, goals, and target audience. Through in-depth discussions and analysis, we identify your unique selling points and competition landscape."
                    />
                    <CProcessStep n={2} step={step} setStep={setStep} stepR='II'  
                        title="Keyword Research & Strategy"
                        text="Our team conducts comprehensive keyword research to uncover the terms your audience is searching for. We then create a personalized strategy to target these keywords effectively."
                    />
                    <CProcessStep n={3} step={step} setStep={setStep} stepR='III'  
                        title="On-Page Optimization"
                        text="We optimize your website's structure, content, and meta elements for search engines. This step involves enhancing page titles, meta descriptions, headers, and ensuring content alignment with targeted keywords."
                    />
                    <CProcessStep n={4} step={step} setStep={setStep} stepR='IV'  
                        title="Technical SEO Enhancement"
                        text="We perform a detailed technical audit to address any issues that might affect your website's performance in search results. From site speed improvements to schema markup implementation, we ensure your site is search engine-friendly."
                    />
                    <CProcessStep n={5} step={step} setStep={setStep} stepR='V'  
                        title="Content Enhancement"
                        text="Our content experts work to enhance existing content and create new, high-quality pieces that resonate with your audience. This includes informative articles, engaging blog posts, and compelling landing pages."
                    />
                    <CProcessStep n={6} step={step} setStep={setStep} stepR='VI'  
                        title="Link Building & Outreach"
                        text="Building high-quality backlinks is crucial. We identify authoritative sources in your industry and implement a targeted outreach strategy to earn valuable links that boost your site's authority."
                    />
                    <CProcessStep n={7} step={step} setStep={setStep} stepR='VII'  
                        title="Local SEO (If Applicable)"
                        text="For local businesses, we optimize your presence on Google My Business, ensure consistent local citations, and implement location-specific strategies for higher visibility in local searches."
                    />
                    <CProcessStep n={8} step={step} setStep={setStep} stepR='VIII'  
                        title="Monitoring & Analysis"
                        text="We continuously monitor your website's performance using advanced analytics tools. This allows us to make data-driven adjustments and measure the effectiveness of our strategies."
                    />
                    <CProcessStep n={9} step={step} setStep={setStep} stepR='IX'  
                        title="Transparent Reporting"
                        text="Regular reports keep you informed about the progress of your SEO campaign. We provide insights into keyword rankings, traffic growth, and other key performance indicators."
                    />
                    <CProcessStep n={10} step={step} setStep={setStep} stepR='X'  
                        title="Ongoing Optimization"
                        text="SEO is a dynamic field. We adapt to changes in search engine algorithms, industry trends, and your business goals. Our team constantly optimizes strategies to ensure consistent growth."
                    />
                </div>
            </div>
            <div className='flex flex-wrap mt-12'>
                <div className='sm:text-xl text-lg md:w-1/2 md:text-left text-center font-medium'>
                    {"Ready to see your website climb the ranks and attract more organic traffic? Contact us for a free consultation and discover how our proven SEO process can drive your online success."}
                </div>
                <div className='md:w-1/2 m-auto py-4'>
                    <div className='w-fit m-auto sm:text-2xl text-xl font-bold text-center flex border-[1px] p-3 px-4 rounded-full duration-300 hover:bg-white hover:drop-shadow-lg hover:border-g-l'>
                        <div className='my-auto mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <Link href='/#quote'>{"Request Free Consultation"}</Link>
                    </div>
                </div>
            </div>
        </WAppear></div>
    </div>;
}

function CServicesSmall(props) {
    return <div className='md:w-1/3 sm:w-1/2 w-full p-4 mx-auto flex'><Link href={props.link} className='flex'>
        <div className='bg-white p-4 text-black border-[1px] flex flex-wrap my-4 hover:mt-0 hover:mb-8 duration-300 hover:drop-shadow-lg'>
            <div className='sm:text-2xl text-lg font-bold w-full'>
                {props.title}
            </div>
            <div className='sm:text-lg font-medium my-8 w-full'>
                {props.text}
            </div>
            <div className='w-fit m-auto mb-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </div>
        </div>
    </Link></div>;
}

export function WServicesSmall() {
    return <div className='max-w-7xl m-auto my-24'><WAppear>
            <div className='sm:text-5xl text-3xl font-black'>
                {"Our Services"}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m'>
                {"Unlock Your Digital Potential with Our Diverse Services"}
            </div>
        <div className='flex mt-8 flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} link={services[0].link} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} link={services[1].link} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} link={services[2].link} />
        </div>
    </WAppear></div>;
}

export function P1L(props) {
    return <div className='max-w-7xl m-auto my-16'><WAppear className='flex flex-wrap-reverse'>
        <div className='md:w-2/3 md:pr-8 md:pt-0 pt-8'>
            <div className='sm:text-3xl text-xl m-auto font-extrabold'>
                {props.title}
            </div>
            <div className='sm:text-xl text-lg font-bold text-g-m mt-2 mb-10'>
                {props.slogan}
            </div>
            <div className='sm:text-lg font-medium'>
                {props.text}
            </div>
        </div>
        <div className='md:pl-4 md:w-1/3 w-full md:min-h-full md:h-auto h-[10rem] relative'>
            <Image src={props.img} layout='fill' objectFit='cover' objectPosition='center' className='min-h-full min-w-full rounded-lg' />
        </div>
    </WAppear></div>;
}

export function Cta(props) {
    return <div className='max-w-7xl m-auto my-16'><WAppear className='flex flex-wrap'>
        <div className='md:w-2/3 md:pr-8 md:pt-0 pt-8'>
            <div className='sm:text-5xl text-3xl m-auto font-extrabold'>
                {props.title}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m mt-2 mb-10'>
                {props.slogan}
            </div>
            <div className='w-fit my-auto md:mx-0 mx-auto md:mb-auto mb-10 sm:text-2xl text-xl font-bold text-center flex border-[1px] p-3 px-4 rounded-full duration-300 hover:bg-white hover:drop-shadow-lg hover:border-g-l'>
                <Link href={props.link}>{props.cta}</Link>
                <div className='ml-2 my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='md:w-1/3 my-auto'>
            <div className='sm:text-lg font-medium'>
                {props.text}
            </div>
        </div>
    </WAppear></div>;
}

function CServices(props) {
    const s = services[props.i];
    const sub_s = s.services.map((v, i) => {
        return <div className='flex my-2' key={i}>
            <div className='px-3 text-g-m my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='sm:text-lg font-bold'>
                {v.title}
            </div>
        </div>;
    });

    return <div><WAppear>
        <div className='p-6 bg-white border-[1px] drop-shadow-lg'>
            <div className='sm:text-3xl text-xl font-extrabold '>
                {s.title}
            </div>
            <div className='flex flex-wrap my-8'>
                <div className='md:w-1/2 md:pr-4 font-medium sm:text-lg md:pb-0 pb-4'>
                    {s.text_long}
                </div>
                <div className='md:w-1/2 md:pl-4'>
                    {...sub_s}
                </div>
            </div>
            <div className='flex w-full'>
                <div className='w-fit m-auto md:mb-auto mb-10 sm:text-xl text-lg font-bold text-center flex border-[1px] p-3 px-4 rounded-full duration-300 bg-white hover:drop-shadow-lg hover:border-g-l'>
                    <Link href={`/contact?theme=${props.i+1}#contact-us`}>Select</Link>
                </div>
                <div className='w-fit m-auto md:mb-auto mb-10 sm:text-xl text-lg font-bold text-center flex border-[1px] p-3 px-4 rounded-full duration-300 bg-white hover:drop-shadow-lg hover:border-g-l'>
                    <Link href={s.link}>See More</Link>
                </div>
            </div>
        </div>
    </WAppear></div>;
}

export function WServices() {
    return <div className='max-w-5xl m-auto my-16'>
        <CServices i={0} />
        <CServices i={1} />
        <CServices i={2} />
    </div>;
}

function CService(props) {
    return <div className={'sm:p-4 p-1 mx-auto flex md:w-1/3 w-1/2 ' + (props.i == 0 ? 'ml-0':'') + (props.i == 4 ? 'mr-0':'')}>
        <Link href={`/contact?theme=${props.theme + 1}&service=${props.i + 1}#contact-us`} className='flex'>
            <div className='p-4 bg-white flex flex-wrap border-[1px] my-4 hover:mb-8 hover:mt-0 hover:drop-shadow-lg duration-300'>
                <div className='sm:text-lg font-extrabold w-full'>
                    {props.s.title}
                </div>
                <div className='w-full my-6'>
                    <div className='flex'>
                        <div className='sm:text-xl text-lg font-extrabold text-g-m'>{props.s.price}</div>
                        <div className='sm:text-lg font-medium ml-2 my-auto whitespace-nowrap'>/ {props.s.per}</div>
                        <div className='ml-4 h-[1px] w-full bg-black my-auto' />
                    </div>
                </div>
                <div className='sm:text-lg font-medium w-full'>
                    {props.s.text}
                </div>
            </div>
        </Link>
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