import Link from "next/link";
import Image from "next/image";

import { faq, services } from "@/public/json/data.json";

export function CAnchor(props) {
    return <div className='sm:p-4 p-2 m-auto sm:w-fit w-full'>
        <div className='sm:px-4 px-2 sm:p-3 p-1 bg-white text-b-m border-[1px] hover:border-b-l hover:drop-shadow-lg duration-300 rounded-full sm:text-xl font-bold'>
            <div className='w-fit m-auto flex'>
                <div className=''><Link href={'/#' + props.text.toLowerCase().replaceAll(' ', '-')}>{props.text}</Link></div>
                <div className='ml-2 my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>;
}

function CFeature(props) {
    return <div className='sm:my-12 my-6 p-4 sm:w-1/2'>
        <a id={props.title.toLowerCase().replaceAll(' ', '-')} className="">
            <div className='sm:text-2xl text-lg font-bold text-b-m flex'>
                <div className='mr-2 my-auto'>{props.title}</div>
                <div className='my-auto'>
                    {props.img}
                </div>
            </div>
            <div className='sm:text-xl mt-2 font-light'>{props.text}</div>
        </a>
    </div>;
}

export function WFeatures() {
    return <div className='max-w-7xl m-auto p-2 my-16 flex flex-wrap'>
        <CFeature title='Explore the World' text="Reach new markets, connect with diverse audiences, and expand your horizons with accurate and culturally-sensitive translations. Translator Daddy ensures your message resonates with every language and culture." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>

        } />
        <CFeature title='Trustworthy Translations' text="Rest easy knowing that your content is in safe hands. Our team of skilled linguists and subject matter experts guarantee precise, reliable, and confidential translations for all your documents." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        } />
        <CFeature title='Swift Turnaround' text="Time is of the essence, and we understand that! Experience prompt delivery without compromising on quality. At Translator Daddy, we prioritize efficiency to keep you ahead in the fast-paced global landscape." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        } />
        <CFeature title='Personalized Approach' text="Every client is unique, and so are their translation needs. Our tailored solutions and dedicated project managers ensure your requirements are met with utmost care and attention." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>          
        } />
        <CFeature title='Scale Your Success' text="Seamlessly scale your international presence with Translator Daddy by your side. We adapt to your growing demands and cater to projects of any size, maintaining consistency throughout." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        } />
        <CFeature title='Global Reach' text="With a vast network of language experts worldwide, Translator Daddy can handle translations for an extensive range of languages, making sure your voice echoes globally." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
            </svg>      
        } />
        <CFeature title='Cutting-edge Technology' text="Stay at the forefront of the translation industry with our advanced tools and technology. From translation memory to AI-powered assistance, we leverage the latest innovations to enhance accuracy and efficiency." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>  
        } />
        <CFeature title='Customer Satisfaction' text="Your success is our success. We pride ourselves on providing top-notch customer support, making your experience with Translator Daddy truly rewarding and hassle-free." img={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        } />
    </div>
}

export function P1L(props) {
    return <div className='max-w-7xl m-auto p-6 my-6'>
        <div className='rounded-2xl border-[1px] flex flex-wrap-reverse'>
            <div className='md:w-2/3 p-4 h-fit w-full'>
                <div className='sm:text-2xl text-lg font-bold text-b-m'>
                    {props.title}
                </div>
                <div className='sm:text-lg mt-4'>
                    {props.text}
                </div>
            </div>
            <div className={'md:w-1/3 w-full md:h-auto h-[15rem] md:mb-0 mb-6 md:rounded-r-2xl md:rounded-tl-none rounded-t-2xl img-' + props.img} />
        </div>
    </div>;
}

export function P1R(props) {
    return <div className='max-w-7xl m-auto p-6 my-6'>
        <div className='rounded-2xl border-[1px] flex flex-wrap'>
            <div className={'md:w-1/3 w-full md:h-auto h-[15rem] md:mb-0 mb-6 md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl img-' + props.img} />
            <div className='md:w-2/3 w-full p-4 h-fit'>
                <div className='sm:text-2xl text-lg font-bold text-b-m'>
                    {props.title}
                </div>
                <div className='sm:text-lg mt-4'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}

export function WGetStarted() {
    return <div className='my-16 p-6 bg-b-m'>
        <div className='max-w-7xl m-auto p-6 text-white'>
            <div className='mb-8 font-extrabold sm:text-3xl text-xl text-center'>
                Get Started Today
            </div>
            <div className='my-8 flex flex-wrap'>
                <div className='md:w-1/3 text-center mx-auto p-4 flex flex-wrap min-h-full'>
                    <div className='sm:text-lg font-medium m-auto mt-0 pb-8'>
                        {"Reach out to our friendly team to discuss your translation needs and explore how Translator Daddy can cater to your specific requirements."}
                    </div>
                    <div className='sm:text-xl text-lg font-bold mb-0 m-auto w-fit p-3 px-4 border-[1px] rounded-full hover:border-white hover:drop-shadow-lg bg-b-m duration-300'>
                        <Link href='/contact'>Contact Us</Link>
                    </div>
                </div>
                <div className='md:w-1/3 text-center mx-auto p-4 flex flex-wrap min-h-full md:my-0 my-8'>
                    <div className='sm:text-lg font-medium m-auto mt-0 pb-8'>
                        {"Ready to embark on your global journey? Get a quick, customized quote for your translation project."}
                    </div>
                    <div className='sm:text-xl text-lg font-bold mb-0 m-auto w-fit p-3 px-4 border-[1px] rounded-full hover:border-white hover:drop-shadow-lg bg-b-m duration-300'>
                        <Link href='/contact#contact-us'>Request a Quote</Link>
                    </div>
                </div>
                <div className='md:w-1/3 text-center mx-auto p-4 flex flex-wrap min-h-full'>
                    <div className='sm:text-lg font-medium m-auto mt-0 pb-8'>
                        {"Discover the full range of services, industry expertise, and success stories of Translator Daddy on our website. Uncover the ways we can empower your multilingual success."}
                    </div>
                    <div className='sm:text-xl text-lg font-bold mb-0 m-auto w-fit p-3 px-4 border-[1px] rounded-full hover:border-white hover:drop-shadow-lg bg-b-m duration-300'>
                        <Link href='/services'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function CAboutSmall(props) {
    return <div className='my-8 md:w-1/2 w-full px-4'>
        <div className='font-bold sm:text-xl text-lg mb-2 text-b-d underline flex'>
            <Link href={'/about#' + props.title.toLowerCase().replaceAll(' ', '-')}>{props.title}</Link>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        <div className='sm:text-lg font-medium'>
            {props.text}
        </div>
    </div>;
}

export function WAboutSmall() {
    return <div className='max-w-7xl m-auto p-6 my-16'>
        <div className='sm:text-3xl text-xl font-bold text-b-m text-center'>
            Learn More About Us!
        </div>
        <div className='flex flex-wrap'>
            <CAboutSmall title='Learn Our Story' text="Discover the journey that led to the establishment of Translator Daddy and our unwavering commitment to empowering global communication." />
            <CAboutSmall title='Meet Our Team' text="Get to know the dedicated linguists and language enthusiasts behind Translator Daddy, driving our mission forward with passion and expertise." />
            <CAboutSmall title='Explore Our Values' text="Delve into the core values that define our approach to translation services and how they shape our dedication to excellence." />
            <CAboutSmall title='Discover Our Expertise' text="Learn about the industries we serve and how our specialized knowledge ensures accurate and culturally relevant translations." />
            <CAboutSmall title='Join Our Mission' text="Partner with Translator Daddy to bridge cultures and unlock global opportunities. Let's make a difference together in the world of multilingual communication." />
        </div>
    </div>
}

function CFaqSmall(props) {
    return <div className='sm:text-xl text-sm font-bold p-4 border-[1px] rounded-2xl bg-white hover:border-b-l hover:drop-shadow-lg duration-300'>
        <Link href={'/faq#' + props.text.toLowerCase().replaceAll(' ', '-')}>{props.text}</Link>
    </div>;
}

export function WFaqSmall() {
    const q = faq.map((v, i) => {
        return <div key={i} className='md:w-1/3 w-1/2 p-4 m-auto'>
            <CFaqSmall text={v.q} n={i+1} />
        </div>;
    });

    return <div className='max-w-7xl m-auto p-2 flex flex-wrap my-16'>
        {...q}
    </div>;
}

function CFaq(props) {
    return <div className='my-12'><a id={props.title.toLowerCase().replaceAll(' ', '-')}>
        <div className='sm:text-2xl text-lg font-bold text-b-m'>
            {props.n}. <a className='underline ml-2' href=''>{props.title}</a>
        </div>
        <div className='mt-4 sm:text-lg font-medium'>
            {props.text}
        </div>
    </a></div>;
}

export function WFaq() {
    const a = faq.map((v, i) => {
        return <CFaq key={i} title={v.q} text={v.a} n={i+1} />;
    });

    return <div className='max-w-7xl m-auto p-6 my-16'>
        {...a}
    </div>;
}

function CServices(props) {
    return <div className='rounded-2xl border-[1px] flex flex-wrap my-12'>
            <div className={'md:w-1/3 w-full md:h-auto h-[15rem] md:mb-0 mb-6 md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl img-' + props.img} />
            <div className='md:w-2/3 p-4 h-fit w-full'>
                <div className='sm:text-2xl text-lg font-bold text-b-m'>
                    {props.title}
                </div>
                <div className='sm:text-lg mt-4'>
                    {props.text}
                </div>
                <div className='w-fit my-8 m-auto'>
                    <div className='sm:text-xl font-bold p-3 px-4 my-4 mx-8 bg-white border-[1px] rounded-full hover:border-b-l duration-300 hover:drop-shadow-lg'>
                        <Link href={props.route}>{"Learn More"}</Link>
                    </div>
                </div>
            </div>
    </div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <CServices key={i} title={v.title} text={v.text_long} route={v.link} img={12+i} />
    });

    return <div className='p-6 max-w-7xl m-auto'>
        {...s}
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4 md:w-1/3 sm:w-1/2 w-full mx-auto flex flex-wrap'><Link href={props.route} className='flex'>
        <div className='bg-white border-[1px] rounded-2xl p-4 text-center my-4 flex flex-wrap hover:mb-6 hover:mt-2 hover:border-b-l hover:drop-shadow-lg duration-300'>
            <div className='text-b-m sm:text-xl font-bold w-full m-auto mt-0'>
                {props.title}
            </div>
            <div className='text-black sm:text-lg font-medium w-full m-auto mb-0 pt-8'>
                {props.text}
            </div>
        </div>
        </Link></div>;
}

export function WServicesSmall() {
    return <div className='max-w-7xl m-auto p-2 my-16'>
        <div className='sm:text-3xl text-xl p-4 font-extrabold text-b-m text-center'>
            Discover Our Services
        </div>
        <div className='flex mt-8 flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} route={services[0].link} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} route={services[1].link} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} route={services[2].link} />
        </div>
    </div>;
}

function CService(props) {
    return <div className='p-4 m-auto'>
        <div className='rounded-2xl text-center border-[1px] bg-white'>
            <div className='sm:text-2xl text-lg p-4 font-bold text-b-m pt-8'>
                {props.title}
            </div>
            <div className='my-4 py-4 bg-b-m text-white w-full drop-shadow-lg'>
                <div className='w-fit m-auto flex'>
                    <div className='sm:text-lg font-extrabold'>{props.price}</div>
                    <div className='mx-2 my-auto'>/</div>
                    <div className='sm:text-lg text-bold my-auto'>{props.per}</div>
                </div>
            </div>
            <div className='sm:text-lg font-medium p-4'>
                {props.text}
            </div>
            <div className='sm:text-xl w-fit m-auto font-bold p-3 px-4 my-4 bg-white border-[1px] rounded-full hover:border-b-l duration-300 hover:drop-shadow-lg'>
                <Link href='/contact#contact-us'>{"Select"}</Link>
            </div>
        </div>
    </div>;
}

export function WService(props) {
    const s = props.s.map((v, i) => {
        return <div className='md:w-2/5 m-auto' key={i}>
            <CService title={v.title} text={v.text} price={v.price} per={v.per} />
        </div>;
    });

    return <div className='max-w-7xl m-auto p-6 flex flex-wrap'>
        {...s}
    </div>;
}