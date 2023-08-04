import { useEffect, useRef, useState } from "react";
import { services, faq } from "@/public/json/data.json";
import Link from "next/link";

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


export function FeatureSmall(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'lg:w-1/4 sm:w-1/2 flex my-8 px-2 duration-500 ease-in-out ' + (shown ? ' opacity-100':' opacity-0 mt-0 mb-16')}>
        <div className='mr-1.5 mt-1 text-g-m'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        </div>
        <div className='w-5/6'> 
            <div className='sm:text-xl text-lg font-bold'>
                {props.title}
            </div>
            <div className='sm:text-lg font-medium mt-6'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function CAchievments(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'max-w-7xl duration-500 py-6 m-auto ease-in-out ' + (shown ? 'sm:p-14 p-6 opacity-100': 'opacity-0 sm:pr-28 pr-12')}>
        <div className='sm:text-4xl text-2xl font-bold mb-4'>
            {props.title}
        </div>
        <div className='sm:text-lg font-medium'>
            {props.text}
        </div>
    </div>;
}

function StepTimeline(props) {
    return <div className={'m-auto w-fit duration-300 ' + (props.n == 1 ? 'ml-0 ':'') + (props.n == 10 ? 'mr-0 ':'') + (props.step == props.n ? '':'md:py-[1rem] py-[0.5rem]')}>
        <div className={'rounded-full cursor-pointer flex duration-300 ' + (props.step == props.n ? 'md:w-[3rem] md:h-[3rem] bg-g-m w-[2rem] h-[2rem] drop-shadow-lg ':'md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem] md:bg-g-m bg-white md:border-0 border-[1px] border-g-l')} onClick={() => props.setStep(props.n)}>
            <div className={'w-fit m-auto sm:font-extrabold font-semibold sm:text-xl text-white ' + (props.n == props.step ? '':'md:block hidden')}>{props.n}</div>
        </div>
    </div>;
}

function TextTimeline(props) {
    return <div className={`absolute max-w-xl mx-auto sm:p-4 duration-300 ${props.l} ${props.sel ? 'opacity-100':' opacity-0'}`}>
        <div className='sm:text-2xl text-lg font-bold'>
            {props.title}
        </div>
        <div className='sm:text-lg font-medium mt-2'>
            {props.text}
        </div>
    </div>;
}

export function WTimeline() {
    'use client';
    const ref = useRef(null);
    const [step, setStep] = useState(1);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'max-w-7xl py-6 my-24 m-auto ease-in-out duration-500 ' + (shown ? 'p-6 sm:p-14':'opacity-0 pl-0 sm:pr-28 pr-12')}>
        <div className='font-bold sm:text-4xl text-2xl'>
            {"Our Design Process"}
        </div>
        <div className='font-bold sm:text-3xl text-xl text-g-m mt-2 mb-12'>
            {"Crafting Exceptional Experiences"}
        </div>
        <div className='relative p-1 my-8 sm:w-3/4'>
            <div className='absolute left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2 w-[95%] md:h-[0.7rem] h-[0.4rem] bg-black' />
            <div className='flex w-full'>
                <StepTimeline n={1} step={step} setStep={setStep} />
                <StepTimeline n={2} step={step} setStep={setStep} />
                <StepTimeline n={3} step={step} setStep={setStep} />
                <StepTimeline n={4} step={step} setStep={setStep} />
                <StepTimeline n={5} step={step} setStep={setStep} />
                <StepTimeline n={6} step={step} setStep={setStep} />
                <StepTimeline n={7} step={step} setStep={setStep} />
                <StepTimeline n={8} step={step} setStep={setStep} />
                <StepTimeline n={9} step={step} setStep={setStep} />
                <StepTimeline n={10} step={step} setStep={setStep} />
            </div>
        </div>
        <div className='my-12 relative w-full pb-[10rem]'>
            <TextTimeline title='Discovery & Consultation' l='md:ml-[0%]' sel={step == 1} text="We start by getting to know you and your brand inside out. Through in-depth consultations, we gather insights, understand your goals, and define the project scope." />
            <TextTimeline title='Creative Brief & Research' l='md:ml-[8%]' sel={step == 2} text="Next, we develop a comprehensive creative brief based on our discussions and conduct extensive research to gain a deep understanding of your industry, target audience, and competitors." />
            <TextTimeline title='Ideation & Conceptualization' l='md:ml-[16%]' sel={step == 3} text="With a solid foundation in place, our creative minds dive into the world of ideas. We brainstorm, sketch, and explore various design concepts that align perfectly with your brand identity." />
            <TextTimeline title='Design Development' l='md:ml-[23%]' sel={step == 4} text="Once the best concepts are selected, our design team brings them to life. We meticulously craft designs that balance creativity and functionality, ensuring a seamless user experience." />
            <TextTimeline title='Client Collaboration & Feedback' l='md:ml-[31%]' sel={step == 5} text="We value your input every step of the way. We present our design concepts for your feedback and collaborate closely to refine the designs until they perfectly capture your vision." />
            <TextTimeline title='Iterative Design Refinements' l='md:ml-[39%]' sel={step == 6} text="Through multiple iterations, we fine-tune the designs, ensuring every detail is meticulously polished and aligns perfectly with your brand's personality and objectives." />
            <TextTimeline title='Quality Assurance & Testing' l='md:ml-[47%]' sel={step == 7} text="Before delivering the final product, we conduct thorough quality assurance and testing to ensure the designs are pixel-perfect and function flawlessly across all devices." />
            <TextTimeline title='Client Approval & Delivery' l='md:ml-[55%]' sel={step == 8} text="Once you're delighted with the designs, we seek your final approval. After that, we prepare the deliverables, ensuring a smooth handover of the design assets." />
            <TextTimeline title='Post-Launch Support' l='md:ml-[62%]' sel={step == 9} text="Our commitment doesn't end with the delivery. We provide post-launch support, addressing any questions or concerns to ensure your complete satisfaction." />
            <TextTimeline title='Continued Collaboration' l='md:ml-[70%]' sel={step == 10} text="As your brand evolves, we are here to support you on your design journey. Whether you need updates, new campaigns, or fresh ideas, we continue to collaborate and grow together." />
        </div>
    </div>;
}

function CServicesSmall(props) {
    return <div className='md:w-1/3 p-4 text-center mx-auto sm:w-1/2 min-h-full'><Link href={props.route}>
        <div className='border-[1px] p-4 border-black flex flex-wrap h-full bg-stone-100 hover:drop-shadow-lg duration-300'>
            <div className='sm:text-2xl text-lg font-bold w-full'>
                {props.title}
            </div>
            <div className='sm:text-lg font-medium my-4 w-full'>
                {props.text}
            </div>
            <div className='sm:text-lg my-auto mb-0 font-bold text-center underline decoration-g-m decoration-4 pt-4 w-full'>
                4 services
            </div>
        </div></Link>
    </div>;
} 

export function WServicesSmall() {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'max-w-7xl m-auto my-12 py-6 duration-500 ease-in-out ' + (shown ? 'sm:p-14 p-6 opacity-100':'sm:pr-28 pr-12 opacity-0')}>
        <div className='font-bold sm:text-4xl text-2xl'>
            {"Discover our services"}
        </div>
        <div className='font-bold sm:text-3xl text-xl text-g-m mt-2 mb-12'>
            {"Design Excellence Unleashed"}
        </div>
        <div className='flex flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} route={services[0].link} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} route={services[1].link} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} route={services[2].link} />
        </div>
    </div>;
} 

export function P1L(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'max-w-7xl m-auto my-20 flex flex-wrap-reverse duration-500 ease-in-out py-6 ' + (shown ? 'sm:p-14 p-6':'sm:pr-28 pr-12 opacity-0')}>
        <div className='lg:w-2/3 lg:py-0 py-8'>
            <div className='font-bold sm:text-4xl text-2xl'>
                {props.title}
            </div>
            <div className='my-8 sm:text-lg font-medium'>
                {props.text}
            </div>
        </div>
        <div className='lg:w-1/3 lg:pl-8 w-full lg:h-auto'>
            <div className={'min-w-full min-h-full text-white sm:text-5xl text-3xl font-bold p-6 img-' + props.img}>
                {props.slogan}
            </div>
        </div>
    </div>;
}

export function WCta(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'max-w-7xl m-auto my-16 flex flex-wrap-reverse duration-500 ease-in-out py-6 ' + (shown ? 'sm:p-14 p-6':'sm:pr-28 pr-12 opacity-0')}>
        <div className='md:w-1/3 w-fit m-auto'>
            <div className='sm:text-4xl text-2xl font-bold md:pr-4 text-center'>
                {props.title}
            </div>
            <div className='sm:text-2xl text-lg font-bold w-fit mx-auto my-8 p-3 px-4 border-[1px] bg-stone-100 hover:border-g-m hover:drop-shadow-lg duration-300'>
                <Link href={props.route}>{props.cta}</Link>
            </div>
        </div>
        <div className='sm:text-lg font-medium md:w-2/3 md:pl-4 md:py-0 py-8'>
            {props.text}
        </div>
    </div>;
}

function CFaqSmall(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'p-4 md:w-1/2 duration-500 ease-in-out ' + (shown ? '':'pr-8 pl-0 opacity-0')}><Link href={'/faq#' + props.text.toLowerCase().replaceAll(' ', '-')}>
        <div className='p-4 font-bold sm:text-lg hover:drop-shadow-lg duration-300 border-[1px] bg-stone-100 hover:border-g-m'>
            {props.text}
        </div>
        </Link></div>;
}

export function WFaqSmall() {
    const q = faq.map((v, i) => {
        return <CFaqSmall key={i} text={v.q} />
    });

    return <div className='max-w-7xl flex flex-wrap m-auto duration-500 ease-in-out py-6 sm:p-14 p-6'>
        {...q}
    </div>;
}

function CFaq(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);
    
    return <div ref={ref} className={'p-4 duration-500 py-12 ease-in-out ' + (shown ? '':'pr-8 pl-0 opacity-0')}>
        <a className='-top-[7rem] relative' id={props.q.toLowerCase().replaceAll(' ', '-')} />
        <div>
            <div className='sm:text-4xl text-2xl font-bold'>
                {props.q}
            </div>
            <div className='sm:text-lg mt-4'>
                {props.a}
            </div>
        </div>
    </div>;
}

export function WFaq() {
    const q = faq.map((v, i) => {
        return <CFaq key={i} a={v.a} q={v.q} />
    });

    return <div className='max-w-7xl flex flex-wrap m-auto duration-500 ease-in-out py-6 p-6 sm:p-14'>
        {...q}
    </div>;
}

export function P2L(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    return <div ref={ref} className={'max-w-7xl m-auto flex flex-wrap-reverse duration-500 ease-in-out py-6 ' + (shown ? 'sm:p-14 p-6':'sm:pr-28 pr-12 opacity-0')}>
        <div className=''>
            <div className='font-bold sm:text-4xl text-2xl'>
                {props.title}
            </div>
            <div className='font-bold sm:text-2xl text-lg text-g-m my-2'>
                {props.slogan}
            </div>
            <div className='my-8 sm:text-lg font-medium'>
                {props.text}
            </div>
        </div>
    </div>;
}

function CServices(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);

    const s = props.s.map((v, i) => {
        return <div key={i} className='sm:text-lg font-semibold my-2'>
            - {v.title}
        </div>;
    });

    return <div ref={ref} className={'max-w-7xl m-auto flex flex-wrap duration-500 ease-in-out py-6 ' + (shown ? 'sm:p-10 p-2':'sm:pr-20 pr-6 opacity-0')}>
        <div className='sm:text-3xl text-xl font-bold'>
            {props.title}
        </div>
        <div className='flex flex-wrap mt-4'>
            <div className='sm:text-lg md:w-3/5 pr-4 font-medium'>
                {props.text}
            </div>
            <div className='md:pl-4 md:w-2/5 md:my-0 my-8'>
                <div className='sm:text-lg font-bold underline decoration-g-m decoration-4 mb-4'>
                    4 services available
                </div>
                <div>
                    {...s}
                </div>
                <div className='flex mt-8 m-auto w-2/3 ml-0'>
                    <div className='sm:text-lg font-bold p-2 px-3 w-fit m-auto border-[1px] hover:border-g-m hover:drop-shadow-lg duration-300 bg-stone-100'>
                        <Link href={props.route}>See more</Link>
                    </div>
                    <div className='sm:text-lg font-bold p-2 px-3 w-fit m-auto border-[1px] hover:border-g-m hover:drop-shadow-lg duration-300 bg-stone-100'>
                        <Link href='/contact'>Select</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export function WServices() {
    return <div className='max-w-7xl m-auto flex flex-wrap py-6 p-4'>
        <CServices title={services[0].title}  text={services[0].text_long} route={services[0].link} s={services[0].services} />
        <CServices title={services[1].title}  text={services[1].text_long} route={services[1].link} s={services[1].services} />
        <CServices title={services[2].title}  text={services[2].text_long} route={services[2].link} s={services[2].services} />
    </div>;
}

function CService(props) {
    return <div className='p-4 mx-auto lg:w-1/4 md:w-1/2 flex'>
        <div className='p-4 bg-stone-100 border-[1px] border-black flex flex-wrap h-full w-full'>
            <div className='text-center w-full font-bold sm:text-2xl text-lg h-fit m-auto mt-0'>
                {props.title}
            </div>
            <div className='w-full py-2 mt-0 m-auto'>
                <div className='w-fit m-auto flex'>
                    <div className='bg-g-m w-fit p-1 sm:text-lg font-bold text-white'>{props.price}</div>
                    <div className='w-fit sm:text-lg font-semibold ml-2 my-auto'> / {props.per}</div>
                </div>
            </div>
            <div className='py-6 text-center font-medium sm:text-lg my-auto mb-0'>
                {props.text}
            </div>
            <div className='m-auto text-center font-bold sm:text-xl text-lg mb-0 underline decoration-g-m decoration-4'>
                <Link href='/contact'>Select</Link>
            </div>
        </div>
    </div>;
}

export function WService(props) {
    'use client';
    const ref = useRef(null);

    const shown = useIsInViewport(ref);


    const s = props.s.map((v, i) => {
        return <CService key={i} title={v.title} text={v.text} price={v.price} per={v.per} />
    });

    return <div ref={ref} className={'max-w-7xl m-auto flex flex-wrap-reverse duration-500 ease-in-out py-6 ' + (shown ? 'sm:p-10 p-2':'sm:pr-20 pr-4 opacity-0')}>
        {...s}
    </div>;
}