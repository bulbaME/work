import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import send_form from "@/modules/send_form";
import icons from "@/public/json/icons";
import { services } from "@/public/json/data";

// import { services } from "@/public/json/data.json";

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
        <div className='lg:w-1/2 my-auto'><WAppear>
            <div className='sm:text-4xl text-2xl font-extrabold mb-8'>
                {"Let's Start Creating Together"}
            </div>
            <div className='font-medium sm:text-lg'>
                {"Your journey to exceptional design begins here. Whether you have a specific project in mind or need guidance on where to start, our team is eager to assist you. By filling out the contact form below, you're taking the first step toward turning your design aspirations into reality. We're dedicated to crafting designs that not only meet your budget but also exceed your expectations. Let's collaborate and bring your unique vision to life – we can't wait to hear from you!"}
            </div>
        </WAppear></div>
        <div className='lg:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
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
            </div>
            <div className={'flex relative ' + (map ? 'overflow-hidden drop-shadow-lg':'')}>
                <iframe className={'duration-300 ease-in-out h-[28.9rem] ' + (map ? 'w-full rounded-2xl':'w-0 opacity-0')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.897347662034!2d-100.34857072338032!3d44.373698171077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878012030935fdcf%3A0x97785b84e021f29e!2s415%20N%20Evans%20St%2C%20Pierre%2C%20SD%2057501%2C%20USA!5e0!3m2!1sen!2s!4v1692002849344!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='-top-[12rem] absolute' />
                <a id='quote' className='-top-[12rem] absolute' />
                <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white drop-shadow-lg h-fit duration-300 ease-in-out md:max-h-[28.9rem] max-h-[40rem] ' + (map ? 'w-0 opacity-0':'rounded-2xl w-full p-4')}>
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

export function CProcess(props) {
    return <div className={'absolute overflow-hidden ease-in-out duration-300 top-1/2 -translate-y-1/2 ' + (props.n == props.step ? 'h-full ':'h-0 opacity-0 ') + (props.step >= props.n ? 'bottom-0':'top-0')}>
        <div className='flex'>
            <div className='mr-4 bg-white sm:p-4 p-3 rounded-full drop-shadow-md text-g-l'>
                <div className='scale-[120%]'>{icons[props.n]}</div>
            </div>
            <div className='sm:text-3xl text-xl font-bold my-auto'>
                {props.title}
            </div>
        </div>
        <div className='lg:text-2xl md:text-xl mt-8'>
            {props.text}
        </div>
    </div>;
}

export function WProcess() {
    'use client';

    const bar = useRef(null);
    const ref = useRef(null);
    const inner = useRef(null);

    const [positionClass, setPositionClass] = useState('absolute');
    const [top, setTop] = useState(-1);
    const [bottom, setBottom] = useState(5);
    const [step, setStep] = useState(1);
    const [stepB, setStepB] = useState(-1);

    const step_buttons = []
    for (let i = 0; i < 10; i++) {
        const e = <div className={'absolute z-20 ease-in-out duration-300 cursor-pointer -translate-x-1/2 -translate-y-1/2 drop-shadow-md flex rounded-full ' + (step == i+1 ? 'sm:w-14 sm:h-14 w-10 h-10 bg-g-l ':'sm:w-10 sm:h-10 w-8 h-8 sm:hover:w-12 sm:hover:h-12 bg-m-l ')} id={'sb-' + i} onClick={() => setStepB(i)}>
            <div className={'m-auto text-white ease-in-out duration-300 font-bold md:text-2xl sm:text-lg ' + (step == i+1 ? 'scale-[80%] sm:scale-[100%]':'scale-[60%] sm:scale-[80%]')}>{icons[i+1]}</div>
        </div>;

        step_buttons.push(e);
    }

    const update_step_buttons = () => {
        for (let i = 0; i < 10; i++) {
            const e = document.getElementById('sb-' + i);
            if (e == null) continue;
            if (bar.current == null) continue;
            e.style.left = bar.current.clientWidth * (i / 9) + 'px';
            e.style.top = bar.current.clientHeight / 2 + 'px';
        }
    }

    useEffect(() => {
        if (stepB == -1) return;
        let f = (bottom - top - inner.current.clientHeight) / 10 * (stepB + 1);
        f += ref.current.offsetTop;
        window.scrollTo(0, f);
    }, [stepB]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current != null) {
                setTop(ref.current.getBoundingClientRect().top);
                setBottom(ref.current.getBoundingClientRect().bottom);
            }
        });

        update_step_buttons();
        window.addEventListener('resize', () => {
            update_step_buttons();
        });
    }, []);

    useEffect(() => {
        const f = bottom - top - inner.current.clientHeight;
        const c = -top;
        
        let step = (c / f) * 10;
        step = Math.round(step);
        step = Math.max(1, step);
        step = Math.min(10, step);
        setStep(step);

        if (top < 0 && c < f) setPositionClass('fixed top-0');
        else if (c >= f) setPositionClass('absolute bottom-0');
        else setPositionClass('absolute');

        console.log(c, f)

    }, [top, bottom]);

    return <div ref={ref} className='relative'>
        <div className={'max-w-7xl left-1/2 -translate-x-1/2 min-h-screen flex w-full pt-14 sm:pt-20 ' + positionClass} ref={inner}><WAppear className='flex flex-wrap w-full'>
            <div className='m-auto w-full'>
                <div className='sm:text-4xl text-2xl font-extrabold'>
                    {"Our Design Process"}
                </div>
                <div className='sm:text-2xl text-lg font-extrabold mt-4 text-m-l'>
                    {"Turning Ideas into Art"}
                </div>
            </div>
            <div className='relative w-full md:max-h-[24rem] sm:max-h-[26rem] max-h-[28rem] sm:mt-10 mt-4 h-full'>
                <CProcess step={step} n={1} title='Discovery and Consultation' text="We start by getting to know you and your project inside out. Our design experts will engage in an in-depth conversation to understand your goals, target audience, brand identity, and any unique challenges you face. This initial consultation helps us lay the foundation for a design that's uniquely tailored to your needs." />
                <CProcess step={step} n={2} title='Conceptualization and Ideation' text="Once we have a clear understanding of your project, our creative minds come together to brainstorm ideas. We explore various concepts, color schemes, typography options, and visual styles. This collaborative ideation phase results in a mood board that captures the essence of your project and guides the design direction." />
                <CProcess step={step} n={3} title='Design Development' text="With a well-defined concept, our expert designers roll up their sleeves and begin crafting your design. Whether it's a logo, website, interior space, or packaging, we meticulously bring every element to life. Our designers blend their creativity with your preferences to create a design that not only looks stunning but also aligns with your project's goals." />
                <CProcess step={step} n={4} title='Iteration and Feedback' text="Your input is invaluable to us. We present the initial design drafts for your review and gather your feedback. This iterative process ensures that your vision remains at the forefront. We carefully listen to your insights and make necessary adjustments, refining the design until it's precisely what you envisioned." />
                <CProcess step={step} n={5} title='Finishing Touches' text="As the design takes shape, we focus on the finer details that make it exceptional. We refine the color palettes, tweak typography, and enhance visual elements. Our meticulous attention to detail ensures that the design is not only visually appealing but also functional and user-friendly." />
                <CProcess step={step} n={6} title='Presentation and Approval' text="We present the refined design to you, showcasing how we've translated your ideas into a remarkable visual representation. Your approval is crucial before we move forward, ensuring that you're completely satisfied with the direction we've taken. We're committed to making sure the design resonates with your vision." />
                <CProcess step={step} n={7} title='Implementation and Production' text="With your green light, we set the wheels in motion. Depending on the project, this might involve coding and development for websites, actual production for physical designs, or final preparations for marketing materials. Our experienced team ensures a seamless implementation process." />
                <CProcess step={step} n={8} title='Quality Assurance' text="Before the final delivery, we conduct thorough quality assurance checks. We scrutinize every detail, ensuring that the design meets our high standards and is error-free. This step guarantees that what you receive is of the utmost quality and aligns with your expectations." />
                <CProcess step={step} n={9} title='Delivery and Support' text="Your completed project is delivered to you in the format that suits your needs. But our support doesn't end here – we're committed to ensuring your continued satisfaction. Should you need any adjustments or further assistance, we're here to support you every step of the way." />
                <CProcess step={step} n={10} title='Celebrating Success' text={<>
                    <div>
                        Seeing your satisfaction and the impact of our design on your project is the most rewarding part of our journey. Your success is our success, and we celebrate the collaborative effort that led to the exceptional design solution.
                    </div>
                    <div className='mt-4'>
                        Ready to embark on a design journey that's affordable, creative, and tailored to you? Let's transform your ideas into art together! 
                    </div>
                    <div className='w-fit mt-10 m-auto p-3 px-4 font-bold border-[1px] bg-white rounded-full hover:drop-shadow-md duration-300 hover:border-g-l'>
                        <Link href='/contact'>Get Started</Link>
                    </div>
                </>} />
            </div>
            <div className='sm:w-4/5 w-full relative m-auto py-5' ref={bar}>
                {...step_buttons}
                <div className='h-4 bg-white drop-shadow-md rounded-full'></div>
            </div>
        </WAppear></div>
        <div className='h-[500vh]' />
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4 m-auto lg:w-1/3 sm:w-1/2'>
        <div className='p-6 bg-white rounded-2xl drop-shadow-lg'>
            <div className='sm:text-2xl text-lg font-bold text-center'>
                {props.s.title}
            </div>
            <div className='sm:text-lg font-medium text-center my-8'>
                {props.s.text_short}
            </div>
            <div className='flex sm:text-lg text-center'>
                <div className='w-fit mt-10 m-auto p-3 px-4 font-extrabold bg-g-l text-white rounded-full hover:drop-shadow-lg duration-300'>
                    <Link href={`/contact?theme=${props.i + 1}`}>Select</Link>
                </div>
                <div className='w-fit mt-10 m-auto p-3 px-4 font-bold border-[1px] bg-white rounded-full hover:drop-shadow-lg duration-300 hover:border-g-l'>
                    <Link href={props.s.link}>See More</Link>
                </div>
            </div>
        </div>
    </div>;
}

export function WServicesSmall() {
    return <div className='max-w-7xl m-auto my-24'><WAppear>
        <div className='sm:text-4xl text-2xl font-extrabold text-center'>
            Explore Our Services
        </div>
        <div className='flex flex-wrap mt-8'>
            <CServicesSmall s={services[0]} i={0} />
            <CServicesSmall s={services[1]} i={1} />
            <CServicesSmall s={services[2]} i={2} />
        </div>
    </WAppear></div>;
}

export function CFeature(props) {
    return <div className='p-4 lg:w-1/3 md:w-1/2 mx-auto flex'>
        <div className='bg-white p-6 rounded-2xl drop-shadow-lg flex flex-wrap'>
            <div className='sm:text-2xl text-lg font-bold text-center pb-6 w-full m-auto mt-0'>
                {props.title}
            </div>
            <div className='m-auto w-fit text-m-l scale-125 border-[1px] p-2 rounded-full drop-shadow-lg bg-white border-m-l'>
                {icons[props.icon]}
            </div>
            <div className='text-center sm:text-base text-sm font-medium pt-6 m-auto mb-0'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WFeature() {
    return <div className='max-w-7xl m-auto'><WAppear>
        <div className='sm:text-3xl text-xl font-extrabold underline decoration-4 decoration-m-l'>
            {"Why Choose Us?"}
        </div>
        <div className='flex flex-wrap'>
            <CFeature icon='11'  title='Affordable Brilliance' text="We believe that exceptional design shouldn't come at a high price. Our commitment to affordability ensures that you receive top-quality designs without breaking the bank." />
            <CFeature icon='12'  title='Tailored to You' text="Your vision is our inspiration. We work closely with you to create designs that reflect your style and purpose, ensuring a personalized touch in every project." />
            <CFeature icon='13'  title='Experienced Craftsmanship' text="Our team of skilled designers combines passion with expertise, channeling creativity into every project. With a diverse skill set, we're equipped to tackle various design needs." />
            <CFeature icon='14'  title='Clear Communication' text="Communication is key, and we value your input throughout the design journey. Collaboration is at the heart of our process, resulting in designs that align perfectly with your vision." />
            <CFeature icon='15'  title='Exceptional Results' text="We don't just design – we create experiences. Our designs go beyond aesthetics, striving to evoke emotions, tell stories, and make a lasting impression." />
        </div>
    </WAppear></div>
}

function CServices(props) {
    return <div className='max-w-7xl m-auto'><WAppear className=''>
        <div className='border-[1px] border-m-l p-6 rounded-2xl bg-white drop-shadow-lg'>
            <div className='sm:text-2xl text-lg font-bold'>
                {props.s.title}
            </div>
            <div className='flex flex-wrap my-8'>
                <div className='md:w-1/3 w-full'>
                    <div className='sm:text-base text-sm font-bold mb-6 underline decoration-m-l decoration-2'>
                        We Offer You 4 Services: 
                    </div>
                    <div className='text-center sm:text-base text-sm font-bold my-3 border-[1px] px-3 p-2 rounded-full hover:drop-shadow-lg hover:border-m-l duration-300 bg-white'>
                        <Link href={`/contact?theme=${props.i+1}&service=1#contact-us`}>{props.s.services[0].title}</Link>
                    </div>
                    <div className='text-center sm:text-base text-sm font-bold my-3 border-[1px] px-3 p-2 rounded-full hover:drop-shadow-lg hover:border-m-l duration-300 bg-white'>
                        <Link href={`/contact?theme=${props.i+1}&service=2#contact-us`}>{props.s.services[1].title}</Link>
                    </div>
                    <div className='text-center sm:text-base text-sm font-bold my-3 border-[1px] px-3 p-2 rounded-full hover:drop-shadow-lg hover:border-m-l duration-300 bg-white'>
                        <Link href={`/contact?theme=${props.i+1}&service=3#contact-us`}>{props.s.services[2].title}</Link>
                    </div>
                    <div className='text-center sm:text-base text-sm font-bold my-3 border-[1px] px-3 p-2 rounded-full hover:drop-shadow-lg hover:border-m-l duration-300 bg-white'>
                        <Link href={`/contact?theme=${props.i+1}&service=4#contact-us`}>{props.s.services[3].title}</Link>
                    </div>
                </div>
                <div className='md:w-2/3 w-full md:pl-6 md:pb-0 pt-6 my-auto mb-0'>
                    <div className='sm:text-base text-sm font-medium'>
                        {props.s.text_long}
                    </div>
                    <div className='flex sm:text-lg text-center'>
                        <div className='w-fit mt-10 m-auto p-3 px-4 font-extrabold bg-m-l text-white rounded-full hover:drop-shadow-lg duration-300'>
                            <Link href={`/contact?theme=${props.i + 1}`}>Select</Link>
                        </div>
                        <div className='w-fit mt-10 m-auto p-3 px-4 font-bold border-[1px] bg-white rounded-full hover:drop-shadow-lg duration-300 hover:border-m-l'>
                            <Link href={props.s.link}>See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </WAppear></div>;
}

export function WServices() {
    return <div>
        <CServices s={services[0]} i={0} />
        <CServices s={services[1]} i={1} />
        <CServices s={services[2]} i={2} />
    </div>
}

function CService(props) {
    return <div className='md:w-2/5 p-4 mx-auto flex'><Link className='flex mx-auto w-full' href={`${services[props.theme].link}/?theme=${props.theme+1}&service=${props.i+1}#contact-us`}>
        <div className='bg-white p-6 rounded-2xl border-[1px] hover:drop-shadow-lg duration-300 w-full hover:border-m-l'>
            <div className='sm:text-2xl text-lg font-extrabold text-center'>
                {props.s.title}
            </div>
            <div className='w-fit m-auto font-bold sm:text-lg my-6 px-3 p-2 border-[1px] bg-white drop-shadow-md rounded-full border-m-l'>
                {props.s.price} per {props.s.per}
            </div>
            <div className='text-center font-medium sm:text-base text-sm'>
                {props.s.text}
            </div>
        </div>
    </Link></div>;
}

export function WService(props) {
    return <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
        <CService s={props.s[0]} theme={props.i} i={0} />
        <CService s={props.s[1]} theme={props.i} i={1} />
        <CService s={props.s[2]} theme={props.i} i={2} />
        <CService s={props.s[3]} theme={props.i} i={3} />
    </WAppear></div>;
}