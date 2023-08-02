import { services } from "@/public/json/data.json"
import Link from "next/link";
 
export function CFeautre(props) {
    return <div className='m-auto py-4'>
        <div className='flex'>
            <div className='text-c w-fit sm:pr-3 pr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='w-5/6'>
                <div className='font-extrabold sm:text-xl'>
                    {props.title}
                </div>
                <div className='font-medium sm:text-lg mt-2'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}

export function P1L(props) {
    const text = props.text.map((v, i) => {
        return <div className='my-2' key={i}>
            {v}
        </div>;
    });
    
    return <div className='flex lg:flex-nowrap flex-wrap max-w-7xl m-auto p-6 my-16'>
        <div className={'border-[1px] border-neutral-300 lg:min-w-[25rem] lg:min-h-[25rem] w-full lg:py-4 py-16 lg:mb-auto mb-12 my-auto p-4 text-white font-extrabold text-5xl img' + props.img}>
            {props.slogan}
        </div>
        <div className='lg:pl-8 my-auto'>
            <div className='font-black sm:text-3xl text-xl text-p-b mb-4'>
                {props.title}
            </div>
            <div className='sm:text-lg font-semibold'>
                {...text}
            </div>
        </div>
    </div>;
}

export function P2L(props) {
    const text = props.text.map((v, i) => {
        return <div className='my-2' key={i}>
            {v}
        </div>;
    });
    
    return <div className='flex lg:flex-nowrap flex-wrap max-w-7xl m-auto p-6 my-16'>
        <div className={'border-[1px] border-neutral-300 lg:min-w-[25rem] lg:min-h-[25rem] w-full lg:py-4 py-16 lg:mb-auto mb-12 my-auto p-4 text-white font-extrabold text-5xl img' + props.img}>
            {props.slogan}
        </div>
        <div className='lg:pl-8 my-auto'>
            <div className='font-black sm:text-3xl text-xl text-b-c mb-4'>
                {props.title}
            </div>
            <div className='sm:text-lg font-semibold'>
                {...text}
            </div>
        </div>
    </div>;
}

export function P1R(props) {
    const text = props.text.map((v, i) => {
        return <div className='my-2' key={i}>
            {v}
        </div>;
    });
    
    return <div className='flex lg:flex-nowrap flex-wrap-reverse max-w-7xl m-auto p-6 my-16'>
        <div className='lg:pr-8 my-auto'>
            <div className='font-black sm:text-3xl text-xl text-p-b mb-4'>
                {props.title}
            </div>
            <div className='sm:text-lg font-semibold'>
                {...text}
            </div>
        </div>
        <div className={'border-[1px] border-neutral-300 lg:min-w-[25rem] lg:min-h-[25rem] w-full lg:py-4 py-16 lg:mb-auto mb-12 my-auto p-4 text-white font-extrabold text-5xl img' + props.img}>
            {props.slogan}
        </div>
    </div>;
}

export function P2R(props) {
    const text = props.text.map((v, i) => {
        return <div className='my-2' key={i}>
            {v}
        </div>;
    });
    
    return <div className='flex lg:flex-nowrap flex-wrap-reverse max-w-7xl m-auto p-6 my-16'>
        <div className='lg:pr-8 my-auto'>
            <div className='font-black sm:text-3xl text-xl text-b-c mb-4'>
                {props.title}
            </div>
            <div className='sm:text-lg font-semibold'>
                {...text}
            </div>
        </div>
        <div className={'border-[1px] border-neutral-300 lg:min-w-[25rem] lg:min-h-[25rem] w-full lg:py-4 py-16 lg:mb-auto mb-12 my-auto p-4 text-white font-extrabold text-5xl img' + props.img}>
            {props.slogan}
        </div>
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4 hover:pb-6 hover:pt-2 hover:drop-shadow-lg duration-300'><Link href={props.link}>
        <div className='bg-white border-[1px] border-neutral-300 p-4 rounded-3xl'>
            <div className='text-center sm:text-2xl text-lg font-bold text-b'>
                {props.title}
            </div>
            <div className='text-xl mt-6 text-center font-semibold'>
                {props.text}
            </div>
        </div>
        </Link></div>;
}

export function WServicesSmall() {
    const s = services.map((v, i) => {
        return <div className='md:w-1/3 sm:w-1/2 m-auto w-full'>
            <CServicesSmall title={v.title} text={v.text_short} link={v.link} key={i} />
        </div>;
    });

    return <div className='my-16 max-w-7xl m-auto p-2 py-6'>
            <div className='font-black sm:text-3xl text-center p-4 text-xl text-p-b mb-8'>
                Discover Our Services
            </div>
            <div className='flex flex-wrap'>
                {...s}
            </div>
    </div>;
}

function CFeatures(props) {
    return <div className='lg:w-1/3 sm:w-1/2 p-4'>
        <div className='p-4 sm:text-xl'>
            <div className='flex'>
                <div className='my-auto text-b mr-2'>
                    {props.img}
                </div>
                <div className='font-bold text-b sm:text-2xl text-lg'>
                    {props.title}
                </div>
            </div>
            <div className='font-medium mt-2'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WFeautres() {
    return <div className='max-w-7xl m-auto p-2 my-16 py-6'>
            <div className='font-black sm:text-3xl text-center p-4 text-xl text-p-b mb-8'>
                Key Features for Your Digital Growth
            </div>
            <div className='flex flex-wrap'>
                <CFeatures title='Data-Driven Strategies' text="We formulate our SEO strategies based on data and analytics, ensuring that every decision we make is backed by insights and measurable results." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                } />
                <CFeatures title='Customized Solutions' text="We understand that each business is unique, which is why we offer tailored SEO solutions that align with your specific goals and industry demands." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                } />
                <CFeatures title='Ethical SEO Practices' text="Our commitment to ethical SEO practices means your website's success is built on sustainable and long-lasting foundations, avoiding any risk of penalties from search engines." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                } />
                <CFeatures title='Transparent Reporting' text="Stay informed about your SEO progress with detailed and transparent reporting. We provide regular updates and analysis, so you can track the effectiveness of our efforts." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                } />
                <CFeatures title='Proven Results' text="Our track record of delivering exceptional results speaks for itself. We have helped numerous clients achieve higher search rankings, increased organic traffic, and improved conversions." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                } />
                <CFeatures title='Technical Expertise' text="Our team comprises experienced SEO professionals with in-depth technical knowledge, ensuring that your website's technical aspects are optimized for better performance." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                } />
                <CFeatures title='Continuous Optimization' text="SEO is an ongoing process, and we continuously analyze, optimize, and adapt our strategies to ensure your website remains at the forefront of search engine results." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                } />
                <CFeatures title='Quality Content Creation' text="Engage your audience with valuable and compelling content crafted by our experienced writers. Our content marketing strategies drive brand authority and conversions." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                    </svg>

                } />
                <CFeatures title='Dedicated Support' text="Our team is always ready to assist you with any questions or concerns. We provide excellent customer support to ensure your satisfaction and success." img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                } />
            </div>
    </div>;
}

function CServices(props) {
    return <div className='p-4 md:w-1/2 my-8'>
        <div className='p-4 flex flex-wrap h-full'>
            <div className='my-4 flex w-full'>
                <div className='font-extrabold sm:text-3xl text-xl text-p-b my-auto'>
                    {props.title}
                </div>
                <div className='sm:text-lg font-bold px-3 p-1 m-auto mx-4 border-[1px] rounded-full w-fit border-neutral-300'>
                        3 services
                </div>
            </div>
            <div className='my-auto py-4'>
                <div className='my-2 font-bold sm:text-lg'>
                    {props.slogan}
                </div>
                <div className='sm:text-lg my-2 font-medium'>
                    {props.text}
                </div>
            </div>
            <div className='flex mb-0 w-fit m-auto'>
                <div className='w-fit px-4 py-3 font-extrabold my-3 mx-6 text-xl bg-p-b rounded-full text-white hover:mb-5 hover:mt-1 h-fit hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href='/contact#contact-us'>Select</Link>
                </div>
                <div className='w-fit px-4 py-3 font-extrabold my-3 mx-6 text-xl bg-white rounded-full text-p-b hover:mb-5 hover:mt-1 h-fit hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href={props.route}>See more</Link>
                </div>
            </div>
        </div>
    </div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <CServices text={v.text_long} slogan={v.text_short} title={v.title} route={v.link} key={i} />;
    });

    return <div className='max-w-7xl p-2 m-auto flex flex-wrap my-16'>
        {...s}
    </div>;
}

function CService(props) {
    return <div className='lg:w-1/3 sm:w-1/2 w-full mx-auto py-4'><Link href='/contact#contact-us'>
        <div className='bg-white border-[1px] p-4 m-4 border-neutral-300 rounded-3xl hover:mb-8 hover:mt-0 flex flex-wrap h-full hover:drop-shadow-lg duration-300'>
            <div className='text-center sm:text-2xl text-lg font-extrabold text-b-c mx-auto w-full'>
                {props.title}
            </div>
            <div className='flex w-fit m-auto my-2 sm:text-lg h-fit'>
                <div className='px-2 p-1 bg-c rounded-full text-white font-bold drop-shadow-md'>
                    {props.price}
                </div>
                <div className='ml-2 my-auto font-semibold'>
                    per {props.per}
                </div>
            </div>
            <div className='text-center sm:text-lg font-semibold my-4'>
                {props.text}
            </div>
            <div className='w-fit m-auto mb-0 pt-4 py-2'>
                <div className='text-neutral-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </Link></div>;
}

export function WService(props) {
    const s = props.s.map((v, i) => {
        return <CService key={i} {...v}  />
    });

    return <div className='flex flex-wrap max-w-7xl p-2 m-auto my-12'>
        {...s}
    </div>;
}

function CTestimonials(props) {
    return <div className='p-4 lg:w-1/3 sm:w-1/2 w-full'>
        <div className='flex flex-wrap h-full border-[1px] rounded-3xl p-4 hover:drop-shadow-lg duration-300 bg-stone-100'>
            <div className='font-extrabold sm:text-2xl text-lg'>
                {props.name}
            </div>
            <div className='sm:text-lg font-semibold mt-4'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WTestimonials() {
    return <div className='max-w-7xl m-auto p-2 my-12'>
        <div className='font-extrabold sm:text-3xl text-xl text-center text-p-b mb-8'>Testimonials</div>
        <div className='flex flex-wrap'>
            <CTestimonials name='Sarah Andrews, CEO' text="SeoMeteor has been an absolute game-changer for our company! Their SEO strategies have significantly improved our website's visibility, leading to a steady influx of qualified leads. Our organic traffic has soared, and we now rank at the top for several key industry keywords. The team's expertise and dedication to our success are unmatched. Thank you, SeoMeteor, for helping TechGenius thrive in the digital landscape!" />
            <CTestimonials name='John Lawson, Founder' text="Working with SeoMeteor has been an incredible experience! Their approach to SEO is strategic and tailored to our eco-friendly brand. Not only did they boost our rankings, but they also optimized our website's technical aspects, resulting in faster load times and an overall better user experience. EcoBloom's online presence has never been stronger, and we owe it all to the fantastic team at SeoMeteor!" />
            <CTestimonials name='Emily Chen, Marketing Manager' text="SeoMeteor has been an invaluable partner for our fashion brand. Their content marketing expertise has taken our blog to new heights, attracting more readers and engagement. The increase in organic traffic has been impressive, and we've seen a significant rise in sales as a result. SeoMeteor's team is proactive, communicative, and always ready to provide valuable insights. We highly recommend them for anyone serious about boosting their online presence!" />
        </div>
    </div>;
}