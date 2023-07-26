import Image from "next/image";
import Link from "next/link";

import { services } from "@/public/json/data.json";

export function Img(props) {
    return <div>
        <Image src={props.src} width={1000} height={500} alt='Loading...' className='rounded-3xl drop-shadow-lg' />
    </div>
}

export function PL(props) {
    return <div className='m-auto my-24'>
        <div className='mb-4 text-center sm:text-4xl text-2xl font-bold'>
            {props.title}
        </div>
        <div className='flex flex-wrap-reverse p-8 rounded-[3rem] bg-white drop-shadow-lg  sm:mt-auto m-auto mt-8 '>
            <div className='sm:w-2/3 sm:pr-4 sm:mt-auto m-auto mt-8'>
                <div className='mb-4 font-semibold underline sm:text-2xl text-lg text-g'>
                    <Link href={props.cta_link}>{props.cta}</Link>
                </div>
                <div className='font-medium sm:text-2xl text-lg m-auto'>
                    {props.text}
                </div>
            </div>
            <div className='sm:w-1/3 sm:pl-4 m-auto'>
                <Img src={props.img} />
            </div>
        </div>
    </div>;
}

export function PR(props) {
    return <div className='m-auto my-24'>
        <div className='mb-4 text-center sm:text-4xl text-2xl font-bold'>
            {props.title}
        </div>
        <div className='flex flex-wrap p-8 rounded-[3rem] bg-white drop-shadow-lg'>
            <div className='sm:w-1/3 sm:pr-4 m-auto'>
                <Img src={props.img} />
            </div>
            <div className='sm:w-2/3 sm:pl-4 sm:mt-auto m-auto mt-8'>
                <div className='mb-4 font-semibold underline sm:text-2xl text-lg text-g'>
                    <Link href={props.cta_link}>{props.cta}</Link>
                </div>
                <div className='font-medium sm:text-2xl text-lg m-auto'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}

export function P2R(props) {
    return <div className='m-auto my-24 p-8'>
    <div className='mb-2 sm:text-2xl text-lg font-bold text-g'>
        {props.slogan}
    </div>
    <div className='mb-4 sm:text-4xl text-2xl font-bold'>
        {props.title}
    </div>
    <div className='flex flex-wrap mt-8'>
        <div className='sm:w-1/3 sm:pr-4 m-auto'>
            <Image src={props.img} width={1000} height={500} alt='Loading...' className='rounded-[3rem] drop-shadow-lg' />
        </div>
        <div className='sm:w-2/3 sm:pl-4 sm:mt-auto m-auto mt-8'>
            <div className='font-medium sm:text-2xl text-lg m-auto'>
                {props.text}
            </div>
        </div>
    </div>
</div>;
}

function CServicesSmall(props) {
    return <div className='p-4 m-auto w-[19rem] h-[20rem] drop-shadow-lg'>
        <div className='p-6 bg-2 rounded-[3rem] py-8 w-full h-full flex flex-wrap'>
            <div className='my-auto text-center text-3xl font-bold text-white drop-shadow-md w-full mt-0'>
                {props.title}
            </div>
            <div className='font-medium text-white my-auto text-center text-xl w-full m-auto'>
                {props.text}
            </div>
            <div className='bg-white p-3 px-4 font-bold h-fit w-fit m-auto rounded-full mb-0 text-xl drop-shadow-lg hover:mb-4 duration-300'>
                <Link href={props.link}>Discover</Link>
            </div>
        </div>
    </div>;
}

export function WServicesSmall() {
    const s = services.map((v, i) => {
        return <div className='m-auto'><CServicesSmall key={i} text={v.text_short} title={v.title} link={v.link} /></div>
    });

    return <div className='my-24 m-auto max-w-7xl p-4'>
        <div className='mb-4 text-center sm:text-4xl text-2xl font-bold'>
            Discover our services
        </div>
        <div className='flex flex-wrap w-full'>
            {...s}
        </div>
    </div>;
}

export function Cta(props) {
    return <div className='my-24 max-w-5xl m-auto p-4'>
        <div className='sm:text-4xl text-2xl font-bold text-center'>
            {props.title}
        </div>
        <div className='py-8 text-b-c text-center sm:text-2xl text-lg font-semibold'>
            {props.text}
        </div>
        <div className='p-3 px-4 font-bold text-2xl bg-b-c drop-shadow-lg text-white rounded-full w-fit m-auto my-8 hover:mt-4 hover:mb-12 duration-300'>
            <Link href={props.route}>{props.cta}</Link>
        </div>
    </div>;
}

function CFeature(props) {
    return <div className='p-8 m-auto'>
        <div className='p-8 rounded-[2rem] bg-white drop-shadow-lg'>
            <div className='p-4 m-auto w-fit'>
                {props.img}
            </div>
            <div className='sm:text-4xl text-2xl mt-8 font-bold text-center drop-shadow-md'>
                {props.title}
            </div>
            <div className='text-center mt-4 sm:text-2xl text-lg font-medium'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WWhyUs() {
    return <div className='my-24 max-w-7xl p-4 m-auto'>
        <div className='mb-2 text-center sm:text-4xl text-2xl font-bold'>
            Why choose us?
        </div>
        <div className='mb-4 sm:text-2xl text-center text-lg font-bold text-g'>
            Your Partner in Success
        </div>
        <div className='sm:text-2xl text-lg font-medium  max-w-5xl m-auto my-8 p-8'>
            {"Partnering with DesignsRiver means more than just acquiring design services. We are committed to fostering long-term relationships with our clients and becoming an extension of your team. Here's why we stand out as your ideal design partner:"}
        </div>
        <div className='flex flex-wrap'>
            <div className='sm:w-1/2'>
                <CFeature title='Unmatched Expertise' text="Our team of talented designers brings years of experience and a diverse skill set to every project." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-14 h-14">
                    <path fillRule="evenodd" d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z" clipRule="evenodd" />
                    </svg>
                } />
            </div>
            <div className='sm:w-1/2'>
                <CFeature title='Timely Delivery' text="We value your time and ensure that every project is delivered within the agreed timeframe." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-14 h-14">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                    </svg>
                } />
            </div>
            <div className='sm:w-1/2'>
                <CFeature title='Exceptional Support' text="From ideation to execution and beyond, we offer reliable support and open communication." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-14 h-14">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                    </svg>                  
                } />
            </div>
            <div className='sm:w-1/2'>
                <CFeature title='Affordable Pricing' text="Our services are competitively priced to provide you with the best value for your investment." img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-14 h-14">
                    <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                    </svg>
                } />
            </div>
        </div>
    </div>;
}

export function P3L(props) {
    return <div className='m-auto my-24'>
        <div className='flex flex-wrap-reverse p-4 sm:mt-auto m-auto mt-8 '>
            <div className='sm:w-2/3 sm:pr-4 sm:mt-auto m-auto mt-8'>
                <div className='sm:text-4xl text-2xl font-bold'>
                    {props.title}
                </div>
                <div className='font-bold sm:text-2xl text-lg text-g mb-4'>
                    {props.slogan}
                </div>
                <div className='font-medium sm:text-2xl text-lg'>
                    {props.text}
                </div>
            </div>
            <div className='sm:w-1/3 sm:pr-4 m-auto'>
                <Image src={props.img} width={1000} height={500} alt='Loading...' className='rounded-[3rem] drop-shadow-lg' />
            </div>
        </div>
    </div>;
}

function CServices(props) {

    return <div className='m-auto p-12'> 
        <div className={'bg-white rounded-[3rem] drop-shadow-lg '}>
            <div>
                <Image src={props.img} width={1000} height={500} alt='Loading...' className='rounded-t-[3rem]' />
            </div>
            <div className='sm:text-4xl text-center my-8 m-auto text-2xl font-bold drop-shadow-md '>
                {props.title}
            </div>
            <div className='sm:text-xl font-semibold text-center text-b-c'>
                {props.text}
            </div>
            <div className='pt-12 pb-6 hover:pt-8 hover:pb-10 duration-300'>
                <div className='w-fit m-auto text-2xl font-bold text-white bg-b-c drop-shadow-lg rounded-full p-3 px-4'>
                    <Link href={props.link}>See more</Link>
                </div>
            </div>
        </div>
    </div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <div className='lg:w-1/2 m-auto'><CServices link={v.link} title={v.title} props={v.props} text={v.text_short}  key={i} img={`/img/${15+i}.jpg`} /></div>
    });

    return <div className='max-w-7xl p-4 m-auto flex flex-wrap'>
        {...s}
    </div>;
}

function CService(props) {
    return <div className='p-8 py-12'>
        <div className='p-4 px-8 bg-2 rounded-[3rem] drop-shadow-lg'>
            <div className='sm:text-3xl text-xl font-bold text-center text-white'>
                {props.title}
            </div>
            <div className='flex my-8 w-fit m-auto'>
                <div className='m-auto font-bold text-white text-2xl'>
                    {props.price}
                </div>
                <div className='my-auto ml-1 font-bold text-lg text-white'>/ {props.per}</div>
            </div>
            <div className='sm:text-xl text-center text-white font-medium'>
                {props.text}
            </div>
        </div>
        <div className='w-fit m-auto text-2xl text-c-g bg-white rounded-full p-3 px-4 drop-shadow-lg font-bold duration-300 mt-8 mb-0 hover:mt-4 hover:mb-4'>
            <Link href='/contact'>Choose</Link>
        </div>
    </div>;
}

export function WService(props) {
    const s = props.services.map((v, i) => {
        return <div className='lg:w-1/3 m-auto'><CService title={v.title} text={v.text} price={v.price} per={v.per} key={i} /></div>
    });

    return <div className='max-w-7xl m-auto p-4 flex flex-wrap'>
        {...s}
    </div>;
}