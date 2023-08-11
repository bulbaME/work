import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import icons from "@/public/json/icons";
import send_form from "@/modules/send_form";

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

    return <div ref={ref} className={(props.className ?? '') + ' sm:py-10 py-6 duration-500 ease-out transition-all ' + (shown ? 'sm:p-14 p-8 opacity-100':'pl-0 sm:pl-0 sm:pr-28 pr-16 opacity-0')}>
        {props.children}
    </div>;
}

export function CFeature(props) {
    return <div className='mt-24'><WAppear className='relative flex flex-wrap'>
        <a id={'fa-' + props.n} className='-top-[8rem] absolute' />
        <div className='sm:w-1/2 sm:pr-8 pr-2'>
            <div className='sm:text-4xl text-xl font-bold text-white'>
                {props.title}
            </div>
            <div className='sm:text-2xl text-lg font-bold text-o'>
                {props.slogan}
            </div>
        </div>
        <div className='sm:w-1/2 sm:pl-8 text-white sm:text-lg sm:mt-0 mt-4'>
            {props.text}
        </div>
    </WAppear></div>
}

export function CFeatureSub(props) {
    return <div className=''><WAppear className='relative flex'>
        <a id={'fa-' + props.n} className='-top-[8rem] absolute' />
        <div className='w-1/2 sm:pr-8 pr-2 flex h-fit'>
            <div className='mr-4 my-auto text-o'>
                {icons[props.n]}
            </div>
            <div className='sm:text-3xl text-lg font-bold text-white my-auto mt-1'>
                {props.title}
            </div>
        </div>
        <div className='w-1/2 sm:pl-8 text-white sm:text-lg'>
            {props.text}
        </div>
    </WAppear></div>
}

export function WFeature() {
    'use client';

    const ref = useRef(null);
    const bar = useRef(null);
    const barHolder = useRef(null);
    const indicatorBar = useRef(null);
    const img = useRef(null);
    const [top, setTop] = useState(-1);
    const [bottom, setBottom] = useState(-1);

    const [barClass, setBarClass] = useState('');
    const [imgClass, setImgClass] = useState('');

    const elems = [];

    for (let i = 0; i < 16; i++) {
        const e = <div className='absolute -translate-x-1/2 -translate-y-1/2 z-30' id={'eb-' + i}>
            <Link href={'/#fa-' + (i+1)}>
                <div className={'bg-gradient-to-br from-r-o to-o-y drop-shadow-lg flex my-2 text-white duration-300 ease-in-out ' + (i % 4 == 0 ? 'sm:w-[3rem] sm:h-[3rem] w-[2.5rem] h-[2.5rem] hover:w-[2.7rem] hover:h-[2.7rem] rounded-tl-2xl rounded-br-2xl':'w-[2rem] h-[2rem] hover:w-[1.8rem] hover:h-[1.8rem] rounded-full')}>
                    {i % 4 == 0 ? 
                    <div className='m-auto drop-shadow-lg sm:scale-125 w-5 h-5'>
                        {icons[i+1]}
                    </div>
                    :
                    <div className='m-auto font-bold sm:text-xl sm:pt-0 pt-0.5 drop-shadow-md'>
                        {i % 4}
                    </div>
                    }
                </div>
            </Link>
        </div>;

        elems.push(e);
    }

    const update_elems = () => {
        if (bar.current == null) return;
        for (let i = 0; i < 16; i++) {
            const e = document.getElementById('eb-' + i);
            let l = 0;
            if (i % 4 == 0) l = 64 + bar.current.offsetWidth * (i / 14.5);
            else {
                l = 64 + bar.current.offsetWidth * ((i - i % 4) / 14.5) + bar.current.offsetWidth * ((i % 4) / 18);
            }
            e.style.left = l + 'px';
            e.style.marginTop = - bar.current.offsetHeight / 2 + 'px';
        }
    }

    const update_indicator = () => {
        if (indicatorBar.current == null) return;
        let p = bottom - top - 410;
        let t = Math.max(0, -top - 64);
        t = Math.min(t, p - 16);

        indicatorBar.current.style.left = 64 + (t / p) * bar.current.clientWidth + 'px';
        indicatorBar.current.style.marginTop = - bar.current.offsetHeight / 2 + 'px';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(ref.current.getBoundingClientRect().top);
                setBottom(ref.current.getBoundingClientRect().bottom);
            }
        });

        update_elems();
        window.addEventListener('resize', () => {
            update_elems();
        });
    }, []);

    useEffect(() => {
        if (img.current == null || barHolder.current == null) return;

        let s = '';
        if (top > img.current.clientHeight - barHolder.current.clientHeight) s = 'absolute';
        else if (bottom < img.current.clientHeight) s = 'absolute bottom-0 right-0'
        else {
            s = 'fixed bottom-0';
            let p = bottom - top - 410;
            let t = Math.max(0, -top - 64);
            t = Math.min(t, p - 16);

            let l = (t / p) * bar.current.clientWidth;
            l = Math.max(l - img.current.clientWidth / 2 + 64, 0);
            l = Math.min(l, barHolder.current.clientWidth - img.current.clientWidth);

            barHolder.current.style.left = -l + 'px';
        }

        setBarClass(s);

        s = '';
        if (top > barHolder.current.clientHeight) s = 'absolute';
        else if (bottom < img.current.clientHeight) s = 'absolute bottom-0'
        else s = 'fixed top-0';

        setImgClass(s);

        update_indicator();
        barHolder.current.scrollLeft = 100;
    }, [top, bottom]);

    
    return <div ref={ref} className='w-full relative overflow-hidden pb-10'>
        <div ref={img} className={'max-h-screen min-h-screen min-w-full bg-black -z-10 ' + imgClass}>
            <Image src='/img/1.jpg' layout='fill' objectFit='cover' objectPosition='center' alt='' className='min-h-full min-w-full opacity-[.4] blur' />
        </div>
        <div className={'w-full bg-black duration-300 transition-all z-20 min-w-[60rem] ' + barClass} ref={barHolder}>
            <div className='max-w-5xl m-auto px-16 sm:py-10 py-8 relative'>
                <div className='sm:h-1.5 h-1 bg-white w-full' ref={bar} />
                {...elems}
                <div className='z-40 absolute bg-r drop-shadow-md -translate-x-1/2 -translate-y-1/2 rounded-full w-1 sm:h-3/5 h-3/4 ' ref={indicatorBar} />
            </div>
        </div>
        <div className='max-w-7xl m-auto sm:py-16 py-8'>
            <CFeature    n={1} bar={bar} title='Lockes Copywriting' slogan="Turning Ideas into Impact" text="In a digital landscape where attention is scarce and competition is fierce, the ability to transform mere ideas into impactful messages is your beacon of success. Lockes Copywriting stands as your creative forge, where concepts and thoughts are meticulously sculpted into narratives that transcend boundaries." />
            <CFeatureSub n={2} bar={bar} title='Elevating Expressions' 
                text="We don't just deal in words; we elevate expressions. Every syllable is an opportunity, and our wordsmiths passionately craft each sentence to resonate with your audience's deepest aspirations."
            />
            <CFeatureSub n={3} bar={bar} title='The Alchemy of Impact' 
                text="Watch as casual visitors are drawn in by the gravitational pull of our carefully chosen phrases. With the precision of an artist and the insight of a strategist, we turn these visitors into devoted customers."
            />
            <CFeatureSub n={4} bar={bar} title='Imprinting Indelibly' 
                text="When our words intertwine with your brand, they become more than ink on a page – they imprint themselves onto minds and hearts. Your message leaves a lasting impression, compelling a return to your brand's story time and again."
            />
            <CFeature    n={5} bar={bar} title='Key to Connection' slogan="Our Artistry, Your Advantage" text="In a world inundated with messages, the difference between being heard and being felt lies in forging genuine connections. Lockes Copywriting is your golden key to unlocking connections that transcend the ordinary." />
            <CFeatureSub n={6} bar={bar} title='Artistry in Action' 
                text="We don't just write; we paint your narratives with artistry. Every piece of content we create carries a piece of your brand's soul, establishing an emotional connection that resonates deeply."
            />
            <CFeatureSub n={7} bar={bar} title='Amplification of Voice' 
                text="Your voice, carried by our words, finds resonance like never before. Through the art of language, we amplify your message, ensuring that it reaches hearts and minds in ways you've never imagined.."  />
            <CFeatureSub n={8} bar={bar} title='Beyond the Surface' 
                text="Dive beneath the surface, where authentic connections thrive. Our copy delves into the core of your brand, extracting its essence and infusing it into content that speaks directly to your audience's needs."
            />
            <CFeature  n={9} bar={bar} title='Unlocking Potential' slogan="Copy that Converts" text="Information alone doesn't create conversions; it's the strategic orchestration of words that sparks action. Lockes Copywriting empowers your content to convert curious onlookers into committed enthusiasts." />
            <CFeatureSub n={10} bar={bar} title='The Science of Persuasion' 
                text="Every word we pen is backed by the science of persuasion. Our copy is strategically designed to guide readers seamlessly towards a desired outcome, converting mere interest into decisive action."  />
            <CFeatureSub n={11} bar={bar} title='Compelling Calls to Action' 
                text="It's not just about words; it's about results. Watch as your conversion rates surge, driven by the alchemy of our meticulously crafted content, meticulously designed to initiate responses."
            />
            <CFeatureSub n={12} bar={bar} title='Metrics That Matter' 
                text="When our words intertwine with your brand, they become more than ink on a page – they imprint themselves onto minds and hearts. Your message leaves a lasting impression, compelling a return to your brand's story time and again."
            />
            <CFeature    n={13} bar={bar} title='Your Vision, Our Words' slogan="Crafting a Shared Future" text="A vision is only as powerful as the words that articulate it. Lockes Copywriting is your creative compass, translating your dreams into meticulously crafted words that guide your audience towards a shared future."  />
            <CFeatureSub n={14} bar={bar} title='Crafting Possibilities' 
                text="Our seasoned wordsmiths collaborate with you to meticulously shape your vision into compelling narratives. Together, we craft content that doesn't just inform, but ignites imagination and possibility." 
            />
            <CFeatureSub n={15} bar={bar} title='Precision in Expression' 
                text="Every word is chosen with precision, every sentence with intention. Your vision is translated with accuracy, ensuring that every nuance and subtlety are captured in the language we use." 
            />
            <CFeatureSub n={16} bar={bar} title='Nurturing Dreams' 
                text="We understand that your dreams are the cornerstone of your journey. Lockes Copywriting is more than a service; we're partners in your pursuit, nurturing your aspirations and helping them blossom into reality." 
            />
        </div>
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
        <div className='lg:w-1/2 my-auto text-white'><WAppear>
            <div className='sm:text-4xl text-2xl font-bold mb-8 decoration-o decoration-4'>
                {"Get in Touch"}
            </div>
            <div className='font-medium sm:text-lg'>
                {"Have questions, ideas, or a project in mind? We're excited to hear from you! Fill out the form below, and let's embark on a journey of collaboration and creativity. Your vision is our inspiration, and together, we'll craft content that leaves a lasting impact. Don't hesitate – reach out today and let's transform words into something extraordinary."}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
                <div className={'duration-300 p-2 rounded-tl-2xl text-white rounded-br-2xl ease-in-out mr-4 cursor-pointer border-[1px] ' + (map ? 'text-neutral-600 border-neutral-600':'bg-gradient-to-br from-r-o to-o-y text-p-b border-o drop-shadow-lg')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </div>
                <div className={'duration-300 p-2 rounded-tl-2xl text-white rounded-br-2xl ease-in-out mr-4 cursor-pointer border-[1px] ' + (!map ? 'text-neutral-600 border-neutral-600':'bg-gradient-to-br from-r-o to-o-y text-p-b border-o drop-shadow-lg')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div>
            <div className={'flex relative ' + (map ? 'overflow-hidden':'')}>
                <iframe className={'drop-shadow-lg duration-300 ease-in-out h-[28.9rem] ' + (map ? 'w-full rounded-2xl':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5854371766764!2d-84.51184732355468!3d39.047570637828564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b0c7a1ccda01%3A0x3090f5fa8921755e!2s3315%20Eugenia%20Ave%2C%20Covington%2C%20KY%2041015%2C%20USA!5e0!3m2!1sen!2s!4v1691570255134!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='-top-[12rem] absolute' />
                <a id='quote' className='-top-[12rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white drop-shadow-lg h-fit duration-300 ease-in-out md:max-h-[28.9rem] max-h-[40rem] ' + (map ? 'w-0 opacity-0':'rounded-tl-2xl rounded-br-2xl w-full p-4')}>
                    <div className='sm:m-4 m-2 sm:py-4 font-bold sm:text-4xl text-2xl underline decoration-o decoration-4'>Contact form</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-xl font-semibold'>
                            Your name
                        </div>
                        <input required placeholder='John Doe' className='bg-stone-100 text-b-d  rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-xl font-semibold'>
                            Your E-mail
                        </div>
                        <input required placeholder='johndoe@example.com' type='email' className='bg-stone-100 text-b-d rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-xl font-semibold'>
                            Describe your needs
                        </div>
                        <textarea placeholder='Type here...' className='bg-stone-100 text-b-d select-none rounded-lg appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className='flex flex-wrap'>
                        <div className='w-fit'>
                            <Listbox value={product} onChange={setProduct} >
                                <Listbox.Button className='py-6 hover:pt-4 hover:pb-8 duration-300 w-fit'>{<div className='cursor-pointer sm:ml-3 ml-0 font-semibold sm:text-lg w-fit text-black border-[1px] p-2 px-3 rounded-tl-xl rounded-br-xl hover:border-o bg-white hover:drop-shadow-lg duration-300 text-left'>{product}</div>}</Listbox.Button>
                                <Listbox.Options className='absolute z-50 m-3 -mt-5 transition-all duration-300 border-[1px] bg-white sm:text-lg'>
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
                        <div className='w-fit m-auto lg:mr-6 duration-300 py-4 hover:pt-2 hover:pb-6 my-auto'>
                            <input type='submit' className='cursor-pointer sm:ml-3 ml-0 font-semibold sm:text-xl text-lg text-white border-[1px] p-2 px-3 rounded-2xl bg-gradient-to-br from-r-o to-o-y hover:drop-shadow-lg duration-300' />
                        </div>
                    </div>
                </form>
            </div>
            </WAppear></div>
    </div>;
}

function CServicesSmall(props) {
    return <div className='lg:w-1/3 w-full m-auto'><WAppear><Link href={props.link}>
        <div className='border-[1px] border-neutral-600 text-white p-6 rounded-tl-2xl rounded-br-2xl hover:border-white hover:drop-shadow-lg  duration-300 ease-in-out my-4 hover:mt-0 hover:mb-8'>
            <div className='sm:text-2xl text-lg text-center font-bold'>
                {props.title}
            </div>
            <div className='my-4 w-fit sm:text-lg font-semibold p-2 px-3 bg-gradient-to-br from-r-o to-o-y rounded-tl-2xl rounded-br-2xl m-auto relative'>
                <div className='absolute bg-r w-5 top-0 right-0 -translate-y-1/3 translate-x-1/3 h-5 rounded-full drop-shadow-md' />
                3 complete services
            </div>
            <div className='sm:text-lg mt-8 text-center'>
                {props.text}
            </div>
        </div>
    </Link></WAppear></div>;
}

export function WServicesSmall() {
    return <div className='max-w-7xl m-auto my-24'>
        <div className='text-center font-bold text-white sm:text-5xl text-3xl'>
            <WAppear>{"Discover our services"}</WAppear>
        </div>
        <div className='flex flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} link={services[0].link} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} link={services[1].link} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} link={services[2].link} />
        </div>
    </div>;
}

export function P1(props) {
    'use client';

    const ref = useRef(null);
    const [top, setTop] = useState(-1);
    const [bottom, setBottom] = useState(-1);
    const [blur, setBlur] = useState('');


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(ref.current.getBoundingClientRect().top);
                setBottom(ref.current.getBoundingClientRect().bottom);
            }
        });
    }, []);

    useEffect(() => {
        if (top < ref.current.clientHeight + 100 && top > 100) setBlur('blur-none');
        else setBlur('blur-md')
    }, [top, bottom]);

    
return <div className='h-fit relative' ref={ref}>
        <div className='absolute h-full min-w-full overflow-hidden bg-black -z-10'>
            <Image src={props.img} layout='fill' objectFit='cover' alt='' objectPosition='center' className={'min-w-full duration-500 ease-in-out opacity-[.35] ' + blur} />
        </div>
        <div className='max-w-4xl m-auto sm:py-20 py-12'>
        <WAppear>
            <div className='text-center font-bold sm:text-3xl text-xl text-white'>
                {props.title}
            </div>
            <div className='text-center font-bold sm:text-xl text-lg text-o'>
                {props.slogan}
            </div>
            <div className='sm:text-lg text-white mt-8 text-center'>
                {props.text}
            </div>
        </WAppear>
        </div>
    </div>;
}

function CServices(props) {
    const s = props.s;
    const sub_services = s.services.map((v, i) => {
        return <div key={i} className='flex'>
            <div className='w-2 h-2 rounded-full bg-r drop-shadow-md mt-4' />
            <div className='sm:text-lg w-5/6 my-2 font-bold hover:underline transition-all duration-300 ease-in-out hover:drop-shadow-md mx-2 hover:ml-4 hover:mr-0 decoration-r decoration-4'>
                <Link href={`${s.link}#${to_link(v.title)}`}>{v.title}</Link>
            </div>
        </div>;
    });

    return <div className='py-8'><WAppear className='flex flex-wrap'>
        <div className='md:w-2/3 md:pr-4 my-auto'>
            <div className='sm:text-3xl text-xl font-bold text-white'>
                {s.title}
            </div>
            <div className='sm:text-lg text-white mt-4'>
                {s.text_long}
            </div>
            <div className='flex md:w-2/3 mt-8'>
                <div className='w-fit p-3 px-5 hover:p-2 hover:px-3 hover:my-1 my-0 hover:drop-shadow-lg duration-300 ease-in-out m-auto sm:text-xl font-bold rounded-tl-2xl rounded-br-2xl transition-all bg-gradient-to-br from-r-o to-o-y text-white'>
                    <Link href={`/contact?theme=${props.i + 1}#contact-us`}>Select</Link>
                </div>
                <div className='w-fit p-3 px-5 hover:drop-shadow-lg duration-300 ease-in-out m-auto sm:text-xl font-bold rounded-tl-2xl rounded-br-2xl transition-all bg-gradient-to-br border-[1px] border-neutral-600 hover:border-o text-white'>
                    <Link href={s.link}>Explore</Link>
                </div>
            </div>
        </div>
        <div className='md:w-1/3 sm:w-auto w-full m-auto md:pl-4 md:pt-0 pt-8 my-auto'>
            <div className='bg-white rounded-tl-2xl rounded-br-2xl p-6'>
                <div className='sm:text-xl text-lg font-bold w-fit text-center text-white m-auto p-2 px-4 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br drop-shadow-md from-r-o to-o-y'>
                    {"3 services available"}
                </div>
                <div className='mt-4'>
                    {...sub_services}
                </div>
            </div>
        </div>
    </WAppear></div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <CServices s={v} key={i} i={i} />
    });

    return <div className='max-w-7xl m-auto'>
        {...s}
    </div>;
}

function CService(props) {
    return <div className='p-4 m-auto md:w-1/3 sm:w-1/2 w-full'>
        <div className='bg-white p-6 py-8 rounded-tl-2xl rounded-br-2xl relative'>
            <div className='absolute rounded-full drop-shadow-md bg-gradient-to-br from-r to-o p-3 py-2 top-0 right-0 translate-x-5 -translate-y-1/2 flex'>
                <div className='sm:text-xl text-lg font-bold text-white'>{props.s.price}</div>
                <div className='my-auto ml-2 sm:text-lg font-semibold text-white'>
                    / {props.s.per}
                </div>
            </div>
            <div className='sm:text-2xl text-xl font-bold text-center'>
                {props.s.title}
            </div>
            <div className='my-8 text-center sm:text-lg'>
                {props.s.text}
            </div>
            <div className=''>
                <div className='w-fit p-3 px-5 hover:drop-shadow-lg duration-300 ease-in-out m-auto sm:text-xl font-bold rounded-tl-2xl rounded-br-2xl transition-all bg-gradient-to-br border-[1px] bg-white border-neutral-400 hover:border-o'>
                    <Link href={`/contact?theme=${props.theme+1}&service=${props.i+1}#contact-us`}>Select</Link>
                </div>
            </div>
        </div>
    </div>;
}

export function WService(props) {
    const s = props.s.services.map((v, i) => {
        return <CService s={v} theme={props.i} key={i} i={i} />;
    });

    return <div className='max-w-7xl m-auto py-8'><WAppear className='flex flex-wrap'>
        {...s}
    </WAppear></div>;
}