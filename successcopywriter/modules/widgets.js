import { services } from "@/public/json/data.json";
import { faq } from "@/public/json/data.json";
import Image from "next/image";
import Link from "next/link";

function CStats(props) {
    return <div className='p-2 lg:w-1/3 w-1/2'>
        <div className='p-4 bg-white flex flex-wrap h-full rounded-lg border-[1px] hover:drop-shadow-md duration-300 border-neutral-300'>
            <div className='text-center text-o-m font-bold sm:text-3xl text-xl m-auto w-full'>
                {props.title}
            </div>
            <div className='sm:text-xl text-center font-bold text-black pt-4 mb-0 m-auto w-full'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WStats() {
    return <div className='max-w-7xl p-4 m-auto flex flex-wrap sm:my-20 my-12'>
        <CStats 
            title='Effective Conversions'
            text="Boosted Conversions by 150%"
        />
        <CStats 
            title='Client Satisfaction'
            text="95% Client Satisfaction Rate"
        />
        <CStats 
            title='Years of Excellence'
            text="10+ Years of Copywriting Excellence"
        />
        <CStats 
            title='Projects Completed'
            text="500+ Successful Projects Delivered"
        />
        <CStats 
            title='Engaging Content'
            text="1 Million+ Social Media Engagements"
        />
        <CStats 
            title='Industry Expertise'
            text="Specializing in Finance, Technology, and E-commerce"
        />
    </div>;
}

function CFeature(props) {
    return <div className='p-4 md:w-2/5 m-auto sm:sm:my-20 my-12 my-8'>
        <div className='flex'>
            <div className='my-auto pr-2 text-o-m'>
                {props.img}
            </div>
            <div className='my-auto sm:text-4xl text-2xl font-bold text-o-m'>
                {props.title}
            </div>
        </div>
        <div className='mt-8 sm:text-2xl text-lg text-black font-medium'>
            {props.text}
        </div>
    </div>;
}

export function WFeature() {
    return <div className='max-w-7xl m-auto p-2 flex flex-wrap sm:my-20 my-12'>
        <CFeature title='Expert Copywriters' text="Our team consists of expert copywriters with years of experience and a passion for crafting compelling content. Trust our skilled wordsmiths to deliver high-quality copy that aligns with your brand's voice and resonates with your target audience." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
            </svg>
        } />
        <CFeature title='Customized Solutions' text="We understand that every client is unique, and that's why we offer tailored copywriting solutions. Whether it's website copy, email campaigns, or social media content, our services are customized to meet your specific needs and goals." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z" />
            </svg>
        } />
        <CFeature title='Conversion-Focused Content' text="Our primary goal is to drive results for your business. Our copy is strategically designed to engage readers, inspire action, and boost conversions, helping you achieve your marketing objectives." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 01.615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 00-1.06 1.061l2.999 3a.75.75 0 001.06 0l3.001-3a.75.75 0 10-1.06-1.06l-1.748 1.747a41.31 41.31 0 00-.264-3.386 2.18 2.18 0 00-1.97-1.913 41.512 41.512 0 00-7.477 0 2.18 2.18 0 00-1.969 1.913 41.16 41.16 0 00-.16 1.61.75.75 0 101.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 01.615-.597A40.012 40.012 0 0110 4.5zM5.281 9.22a.75.75 0 00-1.06 0l-3.001 3a.75.75 0 101.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 001.97 1.913 41.533 41.533 0 007.477 0 2.18 2.18 0 001.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 10-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 01-.615.597 40.013 40.013 0 01-7.208 0 .68.68 0 01-.615-.597 39.785 39.785 0 01-.25-3.15l1.689 1.69a.75.75 0 001.06-1.061l-2.999-3z" clipRule="evenodd" />
            </svg>
        } />
        <CFeature title='Versatility in Industries' text="From finance to technology, e-commerce to healthcare, we have experience in diverse industries. Our ability to adapt and understand various sectors ensures that your content is relevant and impactful." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" />
            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
            </svg>
        } />
        <CFeature title='Attention to Detail' text="We believe that the little things matter. Our copywriters pay attention to every detail, from grammar and punctuation to brand consistency, ensuring a polished final product." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
        } />
        <CFeature title='Timely Delivery' text="Meeting deadlines is essential for your marketing campaigns. Count on us to deliver your projects on time, so you can launch your campaigns without delays." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
            </svg>
        } />
        <CFeature title='Collaborative Approach' text="We value open communication and collaboration. Our team works closely with you to understand your vision, provide updates, and incorporate your feedback throughout the process." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
            </svg>
        } />
        <CFeature title='Cost-Effective Solutions' text=" We offer competitive pricing without compromising on quality. Our cost-effective solutions ensure you get excellent value for your investment." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
            </svg>
        } />
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4 m-auto md:w-1/3 my-0 hover:pt-2 hover:pb-6 duration-300 hover:drop-shadow-md'>
        <a href={props.link}><div className='bg-white rounded-lg border-[1px] border-neutral-300 p-4 flex flex-wrap h-full'>
            <div className='sm:text-4xl text-2xl text-o-m font-bold text-center m-auto'>
                {props.title}
            </div>
            <div className='m-auto sm:text-2xl text-lg font-bold text-b-d text-center w-full py-4'>
                {props.l.length} services
            </div>
            <div className='sm:text-2xl text-lg text-black font-medium text-center m-auto mb-0'>
                {props.text}
            </div>
        </div></a>
    </div>;
} 

export function WServicesSmall() {
    return <div className='max-w-7xl m-auto p-2 sm:my-20 my-12'>
        <div className='p-4 font-bold sm:text-5xl text-3xl text-o-m text-center'>
            Our Services
        </div>
        <div className='mt-8 flex flex-wrap'>
            <CServicesSmall title={services[0].title} text={services[0].text_short} link={services[0].link} l={services[0].services} />
            <CServicesSmall title={services[1].title} text={services[1].text_short} link={services[1].link} l={services[1].services} />
            <CServicesSmall title={services[2].title} text={services[2].text_short} link={services[2].link} l={services[2].services} />
        </div>
    </div>;
}

export function P1L(props) {
    return <div className='max-w-7xl m-auto p-6 sm:my-20 my-12'>
        <div className='sm:text-2xl text-lg font-bold text-b-d my-4'>
            {props.slogan}
        </div>
        <div className='flex flex-wrap-reverse'>
            <div className='my-auto w-full md:w-1/2 md:mt-auto mt-4'>
                <div className='sm:text-4xl text-2xl font-bold text-o-m'>
                    {props.title}
                </div>
                <div className='mt-8 sm:text-2xl text-lg font-medium'>
                    {props.text}
                </div>
            </div>
            <div className='md:w-1/2 w-full p-6 my-auto'>
                <Image src={props.img} width={1000} height={500} alt="Copywrite" className='rounded-lg border-[1px] border-neutral-300 hover:drop-shadow-lg duration-300' />
            </div>
        </div>
    </div>;
}

export function P2L(props) {
    return <div className='max-w-7xl m-auto p-6 sm:my-20 my-12'>
        <div className='flex w-fit'>
            <div className='px-4 w-[5rem]'>
                <Image src={props.img} alt={props.title} width={500} height={500} />
            </div>
            <div className='sm:text-4xl text-2xl font-bold text-o-m text-center my-auto'>
                {props.title}
            </div>
        </div>
        <div className='sm:text-2xl text-lg font-bold text-b-d mt-12'>
            {props.slogan}
        </div>
        <div className='mt-4 sm:text-2xl text-lg font-medium'>
            {props.text}
        </div>
    </div>;
}

export function Cta(props) {
    return <div className='m-auto w-fit text-center max-w-5xl p-6 sm:my-20 my-12'>
        <div className='sm:text-3xl text-xl font-bold text-o-m'>
            {props.text}
        </div>
        <div className='w-fit m-auto'>
            <div className='sm:text-2xl text-lg px-4 font-bold text-white text-center duration-300 hover:drop-shadow-lg bg-b-d rounded-lg border-neutral-400 border-[1px] py-4 mt-16'>
                <Link href={props.route}>{props.cta}</Link>
            </div>
        </div>
    </div>;
}

function CTestimonials(props) {
    return <div className='p-4 m-auto md:w-1/2'>
        <div className='bg-white border-[1px] p-6 border-neutral-300 rounded-lg hover:drop-shadow-lg duration-300'>
            <div className='flex text-o-m'>
                <div className='w-fit my-auto p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='sm:text-4xl text-2xl font-bold my-auto'>
                    {props.name}
                </div>
            </div>
            <div className='font-medium sm:text-2xl text-lg mt-4'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WTestimonials() {
    return <div className='sm:my-20 my-12 max-w-7xl m-auto p-2'>
        <div className='p-4 text-center font-bold sm:text-5xl text-3xl text-o-m'>
            Testimonials
        </div>
        <div className='my-6 flex flex-wrap'>
            <CTestimonials name="Alex Turner, Founder" text="SuccessCopywriting took our website to a whole new level. Their website copy was not only engaging and persuasive but also perfectly captured our brand's personality. Thanks to their work, our conversions have increased significantly, and we've received numerous compliments from our customers. Highly recommended!" />
            <CTestimonials name="Sarah Johnson, Marketing Manager" text="Working with SuccessCopywriting was an absolute pleasure. Their team of talented copywriters crafted exceptional email campaigns that strengthened our customer relationships and boosted our sales. The results were beyond our expectations, and we are thrilled to continue collaborating with them for our future marketing endeavors." />
            <CTestimonials name="Michael Roberts, CEO" text="SuccessCopywriting has been an invaluable asset to our brand. Their expertise in crafting persuasive product descriptions has significantly increased our online sales. Their copy not only communicates the unique features of our products but also connects with our customers on a personal level. We couldn't be happier with the results!" />
            <CTestimonials name="Emily Ramirez, Social Media Manager" text="We were struggling to create engaging content for our social media platforms until we found SuccessCopywriting. Their social media posts were not only visually appealing but also captured the essence of our brand. Our engagement rates have soared, and our followers have multiplied since we started working with them. They truly understand what our audience wants!" />
        </div>
    </div>;
}

function CFaqSmall(props) {
    return <div className='sm:w-1/2 p-6 flex'>
        <a href={'/faq#' + props.i} className='w-full'>
            <div className='w-full sm:text-2xl text-lg h-full font-medium bg-white p-4 rounded-lg border-[1px] border-neutral-300 hover:drop-shadow-lg duration-300'>
                {props.i}. <a className='underline decoration-o-m'>{props.text}</a>
            </div>
        </a>
    </div>;
}

export function WFaqSmall() {
    const q = faq.map((v, i) => {
        return <CFaqSmall text={v.q} i={i+1} />
    });

    return <div className='my-12 max-w-7xl m-auto flex flex-wrap'>
        {...q}
    </div>;
}

function CFaq(props) {
    return <a id={props.i}><div className='my-24'>
        <div className='sm:text-4xl text-2xl font-bold text-o-m mb-8'>
            {props.q}
        </div>
        <div className='sm:text-2xl text-lg font-medium'>
            {props.a}
        </div>
    </div></a>;
} 

export function WFaq() {
    const q = faq.map((v, i) => {
        return <CFaq q={v.q} a={v.a} i={i+1} />
    });

    return <div className='my-12 max-w-7xl m-auto p-6'>
        {...q}
    </div>;
}

function CServices(props) {
    return <div className='p-4'>
        <a href={props.route}><div className='bg-white rounded-lg border-[1px] border-neutral-300 text-center hover:drop-shadow-lg duration-300'>
            <div className='p-4 font-bold sm:text-4xl text-2xl text-o-m'>
                {props.title}
            </div>
            <div className='p-4 my-8 sm:text-2xl text-lg font-medium '>
                {props.text}
            </div>
            <div className='w-full py-3 font-bold text-2xl text-white bg-o-m rounded-b-lg'>
                See more
            </div>
        </div></a>
    </div>;
}

export function WServices() {
    return <div className='max-w-7xl m-auto p-2 my-12'>
        <CServices text={services[0].text_long} title={services[0].title} route={services[0].link} />
        <CServices text={services[1].text_long} title={services[1].title} route={services[1].link} />
        <CServices text={services[2].text_long} title={services[2].title} route={services[2].link} />
    </div>;
}

function CService(props) {
    return <div className='p-4 py-8 h-full flex'>
        <div className='p-4 text-center rounded-lg flex flex-wrap h-full my-auto mt-0'>
            <div className='sm:text-4xl text-2xl font-bold text-o-m w-full'>
                {props.title}
            </div>
            <div className='flex w-fit m-auto py-8'>
                <div className='sm:text-3xl text-xl font-bold px-2 rounded-full bg-b-d text-white'>{props.price}</div>
                <div className='sm:text-2xl text-lg font-semibold pl-2 my-auto'> / {props.per}</div>
            </div>
            <div className='my-auto py-8 font-medium sm:text-2xl text-lg'>
                {props.text}
            </div>
            <div className='my-auto mb-0 rounded-b-lg w-full bg-b-d py-3 font-bold sm:text-4xl text-2xl text-white border-[1px] border-neutral-300 hover:drop-shadow-lg duration-300'>
                <Link href='/contact#contact-us'>Select</Link>
            </div>
        </div>
    </div>;
}

export function WService(props) {
    const s = props.services.map((v, i) => {
        return <div className='m-auto md:w-2/5'><CService title={v.title} text={v.text} price={v.price} per={v.per} /></div>
    });

    return <div className='p-2 max-w-7xl m-auto flex flex-wrap my-12'>
        {...s}
    </div>;
}