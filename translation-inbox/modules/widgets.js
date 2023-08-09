import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import send_form from "@/modules/send_form";

import { services, faq } from "@/public/json/data.json";

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

    return <div ref={ref} className={(props.className ?? '') + ' sm:py-10 py-6 duration-500 ease-in-out transition-all ' + (shown ? 'sm:p-10 p-6 opacity-100':'pl-0 sm:pl-0 sm:pr-20 pr-12 opacity-0')}>
        {props.children}
    </div>;
}

function CProcessStep(props) {
    'use client';

    const sel = props.n == props.step;
    const ref = useRef(null);
    const [top, setTop] = useState(-1);

    useEffect(() => {
        if (sel) {
            if (top < 100 && props.n < 8) props.setStep(props.n + 1);
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


    return <div className='mb-8 flex' ref={ref} onClick={() => props.setStep(props.n)}>
        <div className={'rounded-full bg-gradient-to-br from-m to-p flex duration-300 drop-shadow-lg cursor-pointer ' + (sel ? 'w-[3rem] h-[3rem] font-bold text-white':'w-[2.5rem] h-[2.5rem] m-[0.25rem] font-semibold text-neutral-200')}>
            <div className='m-auto sm:text-xl text-lg'>
                {props.stepR}
            </div>
        </div>
        <div className={'duration-300 mt-[1rem] w-3/4 ' + (sel ? 'md:pl-16 md:pr-16 pl-8 pr-8':'md:pl-32 md:pr-0 pl-16 pr-0 opacity-50')}>
            <div className='sm:text-2xl text-lg font-bold text-p-b'>
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
            <div className='sm:text-5xl text-3xl font-extrabold text-m-p'>
                {"Our Translation Process"}
            </div>
            <div className='flex relative my-12'>
                <div className='absolute bg-white w-[1rem] ml-[1rem] h-full rounded-full drop-shadow-lg -z-10' />
                <div>
                    <CProcessStep n={1} step={step} setStep={setStep} stepR='I'  
                        title="Document Submission"
                        text="Kickstart the translation process by submitting your document through our user-friendly platform. Whether it's a business report, marketing collateral, or personal correspondence, we've got you covered."
                    />
                    <CProcessStep n={2} step={step} setStep={setStep} stepR='II'  
                        title="Analysis and Evaluation"
                        text="Our expert linguists carefully analyze your document's content, context, and intended audience. This evaluation ensures that we understand the nuances and intricacies of your message."
                    />
                    <CProcessStep n={3} step={step} setStep={setStep} stepR='III'  
                        title="Language Pair Selection"
                        text="Based on the analysis, we determine the best-suited language pairs for translation. Whether it's a single language or multiple languages, your content will be handled with precision and cultural sensitivity."
                    />
                    <CProcessStep n={4} step={step} setStep={setStep} stepR='IV'  
                        title="Translation by Professionals"
                        text="Our skilled translators, well-versed in the subject matter and cultural nuances, begin the translation process. Your content's essence and intent are preserved while ensuring accurate linguistic representation."
                    />
                    <CProcessStep n={5} step={step} setStep={setStep} stepR='V'  
                        title="Quality Assurance"
                        text="We subject the translated content to rigorous quality checks. Our proofreaders and editors meticulously review the translation, refining grammar, style, and consistency to ensure a polished final result."
                    />
                    <CProcessStep n={6} step={step} setStep={setStep} stepR='VI'  
                        title="Finalization and Approval"
                        text="With your feedback integrated (if provided), the translated content undergoes final adjustments. Once approved, we prepare the content for delivery while maintaining the utmost confidentiality."
                    />
                    <CProcessStep n={7} step={step} setStep={setStep} stepR='VII'  
                        title="Timely Delivery"
                        text="The translated content is securely delivered to you within the agreed timeframe. Whether it's a critical business document or personal project, we understand the importance of timely delivery."
                    />
                    <CProcessStep n={8} step={step} setStep={setStep} stepR='VIII'  
                        title="Post-Translation Support"
                        text="Our commitment to you doesn't end with delivery. We're here to address any post-translation queries, ensuring that you're completely satisfied with the outcome and ready to communicate effectively."
                    />
                </div>
            </div>
        </WAppear></div>
    </div>;
}

export function WForm() {
    'use client';

    const router = useRouter();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [product, setProduct] = useState('Select service');

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
        <div className='md:w-1/2 my-auto'><WAppear>
            <div className='sm:text-4xl text-2xl font-bold text-p-b mb-8'>
                {"Connect with Us for Seamless Global Communication"}
            </div>
            <div className='font-medium sm:text-lg'>
                {"Ready to embark on your global communication journey? Our team at TranslationInbox is here to assist you every step of the way. Whether you have questions about our services, need a personalized quote, or are eager to get started, we're just a message away. Fill out the contact form below, and one of our dedicated representatives will reach out to you promptly. Let's break down language barriers and amplify your message together!"}
            </div>
        </WAppear></div>
        <div className='md:w-1/2 w-full h-full'><WAppear>
            <div className='my-4 flex'>
                <div className={'duration-300 p-3 rounded-xl mr-4 cursor-pointer ' + (map ? 'text-neutral-400':'bg-white text-p-b drop-shadow-lg')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </div>
                <div className={'duration-300 p-3 rounded-xl mr-4 cursor-pointer ' + (!map ? 'text-neutral-400':'bg-white text-p-b drop-shadow-lg')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div>
            <iframe className={'w-full drop-shadow-lg rounded-xl h-[28.9rem] ' + (map ? '':'hidden')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5854371766764!2d-84.51184732355468!3d39.047570637828564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b0c7a1ccda01%3A0x3090f5fa8921755e!2s3315%20Eugenia%20Ave%2C%20Covington%2C%20KY%2041015%2C%20USA!5e0!3m2!1sen!2s!4v1691570255134!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <a id='contact-us' className='-top-[12rem] relative' />
            <a id='quote' className='-top-[12rem] relative' />
            <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white drop-shadow-lg rounded-xl h-fit p-4 ' + (map ? 'hidden':'')}>
                <div className='sm:m-4 m-2 sm:py-4 font-bold sm:text-4xl text-2xl text-p-b'>Contact form</div>
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
                            <Listbox.Button className='overflow-visible py-6 hover:pt-4 hover:pb-8 duration-300 w-fit'>{<div className='cursor-pointer sm:ml-3 ml-0 font-semibold sm:text-lg w-fit text-black border-[1px] p-2 px-3 rounded-lg bg-white hover:drop-shadow-lg duration-300 text-left'>{product}</div>}</Listbox.Button>
                            <Listbox.Options className='absolute z-50 m-3 -mt-5 transition-all duration-300 border-[1px] rounded-lg bg-white sm:text-lg'>
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
                        <input type='submit' className='cursor-pointer sm:ml-3 ml-0 font-semibold sm:text-xl text-lg text-white border-[1px] p-2 px-3 rounded-2xl bg-gradient-to-br from-p to-b hover:drop-shadow-lg duration-300' />
                    </div>
                </div>
            </form>
            </WAppear></div>
    </div>;
}

function CFeature(props) {
    return <div className='md:my-16 my-8'><WAppear>
        <div className='flex text-p-b'>
            <div className='my-auto mr-2'>
                {props.img}
            </div>
            <div className='sm:text-2xl text-lg font-bold my-auto'>
                {props.title}
            </div>
        </div>
        <div className='sm:text-lg font-medium mt-8'>
            {props.text}
        </div>
    </WAppear></div>;
}

export function WFeature() {
    return <div className='max-w-7xl m-auto my-16'><WAppear>
        <div className='sm:text-5xl text-3xl font-bold text-m-p'>
            {"Why You Should Choose Us?"}
        </div>
        <div className='flex flex-wrap'>
            <div className='md:w-1/2'>
                <CFeature title="Global Communication, Local Touch" text="Embark on a journey that unites cultures, people, and ideas. With TranslationInbox, your words resonate across borders while retaining the essence of your message. Our expert linguists ensure that your content maintains its authenticity, no matter the language." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83L6.927 5.62a1.453 1.453 0 001.91 2.02l.175-.087a.5.5 0 01.224-.053h.146a.5.5 0 01.447.724l-.028.055a.4.4 0 01-.357.221h-.502a2.26 2.26 0 00-1.88 1.006l-.044.066a2.099 2.099 0 001.085 3.156.58.58 0 01.397.547v1.05a1.175 1.175 0 002.093.734l1.611-2.014c.192-.24.296-.536.296-.842 0-.316.128-.624.353-.85a1.363 1.363 0 00.173-1.716l-.464-.696a.369.369 0 01.527-.499l.343.257c.316.237.738.275 1.091.098a.586.586 0 01.677.11l1.297 1.297z" clipRule="evenodd" />
                    </svg>
                } />
                <CFeature title="Empowering Connections, One Word at a Time" text="Every word carries the potential to create understanding, inspire action, and forge connections. At TranslationInbox, we empower your words to reach farther, touch deeper, and resonate longer. Your ideas deserve to be heard – let us amplify them." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                }/>
                <CFeature title="Secure and Confidential" text="Trust is the cornerstone of communication. With TranslationInbox, your privacy is paramount. Our state-of-the-art security measures ensure that your content remains confidential and protected, giving you peace of mind as you transcend linguistic frontiers." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                } />
            </div>
            <div className='md:w-1/2 md:mt-[10rem] -mt-8'>
                <CFeature title="Your Message, Any Language" text="From technical documents to heartfelt correspondence, our comprehensive language solutions cover it all. We provide translation services for businesses, individuals, and organizations, helping you effortlessly connect with a global audience." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z" />
                    </svg>
                } />
                <CFeature title="Experience the Power of TranslationInbox" text="Join the ranks of satisfied clients who have harnessed the potential of global communication through TranslationInbox. Experience the difference that accurate, culturally sensitive translation can make – start your journey today." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>
                } />
            </div>
        </div>
    </WAppear></div>;
}

export function GoButton(props) {
    'use client';

    const [hover, setHover] = useState(false);

    return <div className='p-1 m-auto'>
        <div className='text-xl w-fit flex m-auto font-bold border-[1px] p-2 px-4 rounded-full my-4 hover:mt-2 hover:mb-6 duration-300 bg-white hover:drop-shadow-lg hover:border-m' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div>
                    <Link href={props.link}>{props.text}</Link>
                </div>
                <div className={'transition-all duration-300 my-auto overflow-hidden ease-in-out ' + (hover ? 'ml-2 w-[1rem] opacity-100':'w-0 opacity-0 ml-0')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </div>
        </div>
    </div>
}

function CServicesSmall(props) {
    return <div className='p-4 m-auto md:w-1/3 w-full py-8'>
        <div className='bg-white rounded-xl p-4 drop-shadow-lg py-6'>
            <div className='sm:text-3xl text-xl font-bold text-p-b text-center'>
                {props.title}
            </div>
            <div className='my-4 w-fit m-auto sm:text-lg font-bold bg-p text-white p-1 px-3 rounded-full'>
                4 services
            </div>
            <div className='font-medium text-center sm:text-lg my-8'>
                {props.text}
            </div>
            <GoButton link={props.link} text='See more' />
        </div>
    </div>;
}

export function WServicesSmall() {
    return <div className='max-w-7xl m-auto py-8'><WAppear>
        <div className='text-center font-bold sm:text-5xl text-3xl text-m-p mb-8'>
            {"Discover Our Services"}
        </div>
        <div className='flex flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} link={services[0].link} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} link={services[1].link} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} link={services[2].link} />
        </div>
    </WAppear></div>;
}

function CFaqSmall(props) {
    return <div className='p-2 py-4'><Link href={'/faq#' + props.text.toLowerCase().replaceAll(' ', '-')} className='flex'>
        <div className='my-auto mr-4 bg-p-b w-[2rem] h-[2rem] font-extrabold text-white flex rounded-full drop-shadow-lg pt-1 -ml-[1.25rem]'>
            <div className='m-auto'>
                {props.n}
            </div>
        </div>    
        <div className='rounded-xl font-bold sm:text-xl text-p-b text-lg w-5/6 my-auto'>
            {props.text}
        </div>
    </Link></div>;
}

export function WFaqSmall() {
    const q = faq.map((v, i) => {
        return <CFaqSmall key={i} n={i+1} text={v.q} />
    });

    return <div className='max-w-xl m-auto px-3'><WAppear className=''>
        <div className='flex relative'>
            <div className='absolute bg-white drop-shadow-lg rounded-full w-[0.5rem] h-[95%] top-1/2 -translate-y-1/2' />
            <div className=''>
                {...q}
            </div>
        </div>
    </WAppear></div>;
}

function CFaq(props) {
    return <div className='duration-500'><WAppear>
        <a className='-top-[9rem] relative' id={props.q.toLowerCase().replaceAll(' ', '-')} />
        <div>
            <div className='sm:text-4xl text-2xl font-bold text-p-b'>
                {props.n}. {props.q}
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

    return <div className='max-w-7xl flex flex-wrap m-auto'>
        {...q}
    </div>;
}

function CAboutL(props) {
    return <div className='m-auto'><WAppear className='flex flex-wrap'>
        <div className='md:pr-4 md:w-1/3 w-full md:h-auto h-[12rem] md:pb-0 pb-8'>
            <div className='relative w-full h-full'>
                <Image layout='fill' objectFit='cover' objectPosition='center' src={props.img} className='h-full rounded-xl drop-shadow-lg' />
            </div>
        </div>
        <div className='md:w-2/3 md:pl-4'>
            <div className='sm:text-4xl text-2xl font-bold text-m-p'>
                {props.title}
            </div>
            <div className='sm:text-xl text-lg font-bold text-p-b mt-6'>
                {props.slogan}
            </div>
            <div className='sm:text-lg font-medium my-2'>
                {props.text}
            </div>
        </div>
    </WAppear></div>;
}

function CAboutR(props) {
    return <div className='m-auto'><WAppear className='flex flex-wrap-reverse '>
        <div className='md:w-2/3 md:pr-4'>
            <div className='sm:text-4xl text-2xl font-bold text-m-p'>
                {props.title}
            </div>
            <div className='sm:text-xl text-lg font-bold text-p-b mt-6'>
                {props.slogan}
            </div>
            <div className='sm:text-lg font-medium my-2'>
                {props.text}
            </div>
        </div>
        <div className='md:pl-4 md:w-1/3 w-full md:h-auto h-[12rem] md:pb-0 pb-8'>
            <div className='relative w-full h-full'>
                <Image layout='fill' objectFit='cover' objectPosition='center' src={props.img} className='h-full rounded-xl drop-shadow-lg' />
            </div>
        </div>
    </WAppear></div>;
}

export function WAbout() {
    return <div className='max-w-7xl m-auto'>
        <CAboutL img='/img/2.jpg' title="Our Journey" slogan="Tracing Our Path: From Words to Worlds" text="At TranslationInbox, our journey began with a simple yet powerful vision: to eliminate language barriers and foster meaningful connections worldwide. With each translation, we've woven a tapestry of understanding, respect, and cross-cultural communication." />
        <CAboutR img='/img/7.jpg' title="Our Mission" slogan="Empowering Communication, One Language at a Time" text="Our mission is clear: to empower individuals, businesses, and organizations to communicate effortlessly across languages. We believe that every word matters, every message deserves to be heard, and every cultural nuance should be preserved." />
        <CAboutL img='/img/6.jpg' title="Our Approach" slogan="Precision and Heart in Every Translation" text="At TranslationInbox, we're not just translators; we're language enthusiasts, cultural advocates, and communication facilitators. Our approach blends linguistic precision with an understanding of the human connection that transcends borders." />
        <CAboutR img='/img/4.jpg' title="Our Team" slogan="Diverse Minds, Unified Goal" text="Our team is a tapestry of diverse linguists, professionals, and enthusiasts. We bring together a wealth of language skills, industry expertise, and global perspectives to create translations that are accurate, nuanced, and impactful." />
        <CAboutL img='/img/5.jpg' title="Our Impact" slogan="Connecting Worlds, One Translation at a Time" text="Every translation we undertake has a story – a story of connection, of understanding, and of making a difference. We're proud to play a role in enabling businesses to expand internationally, families to stay connected, and cultures to intertwine." />
        <CAboutR img='/img/3.jpg' title="Our Promise" slogan="Your Words, Our Commitment" text="With TranslationInbox, you're not just a client; you're a partner in our mission. We promise accuracy, cultural sensitivity, and a dedication to maintaining the authenticity of your message in every language we translate." />
        <CAboutL img='/img/1.jpg' title="Our Future" slogan="Expanding Horizons, Enriching Lives" text="As we look ahead, our commitment to innovation and excellence remains unwavering. We're excited to continue expanding our services, embracing emerging technologies, and making the world a more interconnected place, one translation at a time." />
    </div>;
}

function CServices(props) {
    const s = props.s.map((v, i) => {
        return <div className='font-bold flex sm:text-lg sm:w-1/2 sm:px-4' key={i}>
            <div className='w-2 h-2 my-auto mr-4 bg-m-p rounded-full' />
            <div className='my-auto'>
                {v.title}
            </div>
        </div>;
    });

    return <div><WAppear className='flex flex-wrap my-8'>
        <div className='md:w-1/3 bg-white p-4 py-6 drop-shadow-lg rounded-xl text-center md:pr-4 md:mb-0 mb-8'>
            <div className='sm:text-3xl text-xl font-bold text-p-b'>
                {props.title}
            </div>
            <div className='sm:text-xl text-lg font-semibold my-4'>
                {props.text_short}
            </div>
            <div className='flex'>
                <GoButton link={props.link} text='Discover' />
                <GoButton link={`/contact?theme=${props.n}#contact-us`} text='Select' />
            </div>
        </div>
        <div className='md:w-2/3 pl-4 my-auto'>
            <div className='font-medium sm:text-lg'>
                {props.text_long}
            </div>
            <div className='flex flex-wrap mt-8'>
                {...s}
            </div>
        </div>
    </WAppear></div>;
}

export function WServices() {
    return <div className='max-w-7xl m-auto'>
        <CServices n={1} title={services[0].title} text_short={services[0].text_short} text_long={services[0].text_long} link={services[0].link} s={services[0].services} />
        <CServices n={2} title={services[1].title} text_short={services[1].text_short} text_long={services[1].text_long} link={services[1].link} s={services[1].services} />
        <CServices n={3} title={services[2].title} text_short={services[2].text_short} text_long={services[2].text_long} link={services[2].link} s={services[2].services} />
    </div>;
}

function CService(props) {
    const s = props.s.services[props.i]

    return <div className='p-4 md:w-2/5 mx-auto'>
        <div className='bg-white rounded-xl drop-shadow-lg p-4 h-full flex flex-wrap'>
            <div className='sm:text-3xl text-xl font-bold text-m-p text-center w-full mt-0'>
                {s.title}
            </div>
            <div className='w-fit px-4 p-2 m-auto my-4 border-[1px] rounded-full h-fit sm:text-xl text-lg font-semibold'>
                <div>Only <span className='font-extrabold underline decoration-m decoration-4'>{s.price}</span> / word</div>
            </div>
            <div className='my-4 mb-8 sm:text-xl text-lg font-medium text-center w-full'>
                {s.text}
            </div>
            <div className='w-full'>
                <GoButton link={`/contact?theme=${props.ti+1}&service=${props.i+1}#contact-us`} text='Select' />
            </div>
        </div>
    </div>;
}

export function WService(props) {
    const s = props.s.services.map((v, i) => {
        return <CService key={i} i={i} s={props.s} ti={props.i} />
    });

    return <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
        {...s}
    </WAppear></div>;
}
