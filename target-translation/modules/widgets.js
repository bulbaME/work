import Link from "next/link";
import Image from "next/image";

export function WidgetWhyChooseUs() {
    return <div className='max-w-7xl p-8 m-auto'>
        <div className='text-c-m text-xl sm:text-3xl font-bold'>
            {"Your Global Voice, Our Precision"}
        </div>
        <div className='text-black text-5xl sm:text-8xl font-extrabold my-2 mb-8'>
            {"Why choose us?"}
        </div>
        <div className='flex my-12 sm:ml-10'>
            <div className='sm:p-6 sm:px-8 p-4'><Dot /></div>
            <div className=''>
                <div className='font-bold text-4xl sm:text-6xl'>{"Excellence in Every Word"}</div>
                <div className='font-semibold text-2xl sm:text-4xl mt-4 max-w-2xl'>{"Our team of skilled linguists, native speakers, and subject matter experts ensure accurate and culturally relevant translations that resonate with your target audience."}</div>
            </div>
        </div>
        <div className='flex my-12 sm:ml-10'>
            <div className='sm:p-6 sm:px-8 p-4'><Dot /></div>
            <div className=''>
                <div className='font-bold text-4xl sm:text-6xl'>{"Timely and Dependable"}</div>
                <div className='font-semibold text-2xl sm:text-4xl mt-4 max-w-2xl'>{"We understand the importance of timely delivery, and our efficient workflows allow us to meet your deadlines without compromising quality."}</div>
            </div>
        </div>
        <div className='flex my-12 sm:ml-10'>
            <div className='sm:p-6 sm:px-8 p-4'><Dot /></div>
            <div className=''>
                <div className='font-bold text-4xl sm:text-6xl'>{"Your Trust, Our Priority"}</div>
                <div className='font-semibold text-2xl sm:text-4xl mt-4 max-w-2xl'>{"Client confidentiality is paramount. Your sensitive documents are treated with the highest level of confidentiality and secured through our state-of-the-art systems."}</div>
            </div>
        </div>
    </div>;
}

function Dot() {
    return <div className='bg-c-m w-[1rem] h-[1rem] m-auto rounded-full' />
}

export function Cta(props) {
    return <div className='m-auto w-fit my-16 p-1 text-center'>
        <div className='m-4 p-10 bg-white text-3xl sm:text-5xl font-bold hover:m-8 hover:p-6 hover:bg-g-l duration-300 ease-in-out'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function CtaC(props) {
    return <div className='m-auto w-fit my-16 p-1 text-center'>
        <div className='m-4 p-10 bg-white text-3xl sm:text-5xl font-bold hover:m-8 hover:p-6 hover:bg-c-l duration-300 ease-in-out'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function Paragraph(props) {
    return <div className='max-w-7xl flex flex-wrap p-8 my-36 m-auto'>
        <div className='sm:w-1/2 sm:pr-4 m-auto drop-shadow-xl'>
            <Image src={props.img} width={1000} height={1000} />
        </div>
        <div className='sm:w-1/2 sm:pl-4 m-auto sm:mt-auto mt-12'>
            <div className='text-xl sm:text-3xl font-semibold text-c-m'>{props.slogan}</div>
            <div className='text-4xl sm:text-6xl font-extrabold mt-2 mb-8'>
                {props.title}
            </div>
            <div className='text-2xl sm:text-4xl font-semibold'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WidgetShortAbout() {
    return <div className='my-24'>
        <div className='max-w-7xl m-auto p-8 my-16'>
            <div className='flex'>
                <div className='m-auto mx-4 text-g-d'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                    <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='text-4xl sm:text-6xl font-extrabold m-auto ml-2'>{"Languages Supported"}</div>
            </div>
            <div className='text-2xl sm:text-4xl font-semibold p-8 max-w-5xl'>{"We offer translations in a wide range of languages, from widely spoken ones to rare dialects, ensuring that your message reaches every corner of the world."}</div>
            <div className='mx-8 text-xl sm:text-3xl font-bold flex underline decoration-g-l'>
                <Link href='/services'>{"See what we offer"}</Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto p-8 my-16'>
            <div className='flex'>
                <div className='m-auto mx-4 text-g-d'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                    </svg>
                </div>
                <div className='text-4xl sm:text-6xl font-extrabold m-auto ml-2'>{"About Us"}</div>
            </div>
            <div className='text-2xl sm:text-4xl font-semibold max-w-5xl p-8'>{"Discover our story, mission, and commitment to providing exceptional language solutions for businesses, organizations, and individuals worldwide."}</div>
            <div className='mx-8 text-xl sm:text-3xl font-bold flex underline decoration-g-l'>
                <Link href='/about'>{"Learn more about us"}</Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto p-8 my-16'>
            <div className='flex'>
                <div className='m-auto mx-4 text-g-d'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>
                </div>
                <div className='text-4xl sm:text-6xl font-extrabold m-auto ml-2'>{"Our team"}</div>
            </div>
            <div className='text-2xl sm:text-4xl font-semibold max-w-5xl p-8'>{"Meet our team of language enthusiasts and experts who are passionate about helping you communicate effectively on a global scale."}</div>
            <div className='mx-8 text-xl sm:text-3xl font-bold flex underline decoration-g-l'>
                <Link href='/contact'>{"Contact us"}</Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>;
}

function Testimony(props) {
    return <div className='flex m-auto max-w-5xl p-8 my-12 sm:my-24'>
        <div className='sm:w-5/6 w-4/5'>
            <div className='bg-white text-2xl sm:text-4xl font-semibold p-8 drop-shadow-xl'>
                {props.text}
            </div>
            <div className='text-2xl sm:text-5xl font-bold text-c-m w-fit mt-8 mb-2 m-auto mr-0 text-right'>
                {props.name}
            </div>
        </div>
        <div className='sm:w-1/6 w-1/5 m-auto mb-0 pl-4'>
            <Image src={props.img} width={500} height={500} />
        </div>
    </div>;
}

export function WidgetTestimonies() {
    return <div className='max-w-7xl m-auto my-32'>
        <div className='text-center text-4xl sm:text-6xl font-extrabold p-8 -mb-16'>{"Feedack from our clients"}</div>
        <Testimony img='/img/13.png' name='John Carter, CEO' text="Global Language Solutions has been an invaluable partner in our international expansion. Their accurate translations and cultural insights have helped us connect with customers in new markets effortlessly." />
        <Testimony img='/img/14.png' name='Emily Anderson, Marketing Manager' text="The team at Global Language Solutions is prompt, professional, and provides outstanding service. They have consistently exceeded our expectations, and we highly recommend their language services." />
        <Testimony img='/img/15.png' name='Alex Chen, International Business Owner' text="We were impressed by the attention to detail and the commitment to quality demonstrated by Global Language Solutions. Their translations have been instrumental in our success in the global market." />
    </div>;
}

export function ParagraphBanner(props) {
    return <div className='max-w-7xl m-auto my-24'>
        <div className='text-lg sm:text-2xl font-bold text-c-l p-8 pb-0'>
            {props.slogan}
        </div>
        <div className='p-8 text-bold text-4xl sm:text-6xl font-extrabold pt-4'>
            {props.title}
        </div>
        <div className={'w-full text-2xl sm:text-4xl font-semibold p-8 text-white bg-img-' + props.bg}>
            {props.text}
        </div>
    </div>
}

export function ServicesCard(props) {
    return <div className='m-auto bg-white drop-shadow-xl p-8 my-16'>
        <div className='flex'>
            <div className='w-1/3 sm:w-1/6 m-auto mx-0'>
                <Image src={props.img} width={512} height={512} />
            </div>
            <div className='m-auto text-2xl sm:text-5xl font-extrabold text-left w-fit ml-8'>
                {props.title}
            </div>
        </div>
        <div className='text-2xl sm:text-4xl font-semibold my-12'>
            {props.text}
        </div>
        <div className='w-fit m-auto'>
            <Link href={props.link}>
                <div className='flex pb-1 pt-4 hover:pb-5 hover:pt-0 duration-300'>
                    <div className='text-3xl font-extrabold pr-2'>
                        {"See more"}
                    </div>
                    <div className='m-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </Link>
            <div className='w-full h-2 bg-g-l' />
        </div>
    </div>
}

export function ServiceCard(props) {
    return <div className='max-w-lg m-auto py-16 p-4'>
        <div className='text-center'>
            <div className='font-extrabold text-3xl sm:text-5xl'>
                {props.title}
            </div>
            <div className='flex w-fit m-auto my-4'>
                <div className='text-2xl sm:text-4xl font-extrabold underline decoration-c-l m-auto mx-0'>{props.price}</div>
                <div className='mx-2 text-xl m-auto font-bold'>/</div>
                <div className='text-lg sm:text-2xl m-auto font-bold mx-0 w-fit text-left'>{props.per}</div>
            </div>
        </div>
        <div className='bg-white drop-shadow-xl p-4 mt-8 mb-4 text-xl sm:text-3xl font-semibold text-center'>
            {props.text}
        </div>
        <div className='w-fit m-auto p-3 text-3xl font-extrabold text-c-m hover:text-g-l duration-300'>
            <Link href='/contact'>Select</Link>
        </div>
    </div>;
}