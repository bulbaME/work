import Link from "next/link";

import { contacts } from "@/public/json/data.json"

export function ServicesCard(props) {
    return <div className='max-w-7xl m-auto flex flex-wrap-reverse my-24'>
        <Link href={props.route} className='relative sm:w-1/2'>
            <div className='min-w-[30rem] p-4'>
                <div className='bg-white rounded-3xl sm:p-8 p-4 drop-shadow-lg mr-[9rem] ml-0 hover:mr-0 hover:ml-[9rem] duration-300'>
                    <div className='sm:text-5xl text-3xl font-bold'>{props.title}</div>
                    <div className='sm:text-2xl text-lg font-semibold text-y'>{props.text}</div>
                </div>
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 ml-4 text-3xl font-bold -z-10'>
                See more
            </div>
        </Link>
        <div className='w-1/2 p-4 m-auto min-w-[30rem]'>
            <img src={props.img} className='m-auto' />
        </div>
    </div>
}

function FeatureCard(props) {
    return <div className='flex flex-wrap my-24 sm:my-12'>
        <div className='bg-black h-1 sm:h-2 w-[1rem] sm:w-[2rem] my-4 mx-2 sm:mx-6' />
        <div className='sm:w-2/3 w-5/6 font-semibold'>
            <div className='text-2xl sm:text-4xl'>{props.title}</div>
            <div className='text-lg sm:text-2xl text-y'>{props.text}</div>
        </div>
        <div className='sm:w-1/5 w-1/4 sm:my-auto my-4 sm:px-16 m-auto'><img src={props.img} /></div>
    </div>;
}

export function WidgetFeatures() {
    return <div className='max-w-7xl m-auto p-4 my-36'>
        <div className='font-bold text-lg sm:text-2xl text-y'>
            {"Empowering Your Brand Through Words"}
        </div>
        <div className='font-bold text-4xl sm:text-6xl sm:w-2/3 my-4'>
            {"Where Captivating Copy Meets Remarkable Results"}
        </div>
        <div>
            <FeatureCard img='/img/1.png' title='Tailored Copywriting Solutions for Your Unique Brand Voice' text="Our experienced copywriters understand the importance of consistency and brand personality. We deliver customized copy that captures your brand's voice, resonates with your target audience, and sets you apart from the competition." />
            <FeatureCard img='/img/2.png' title='Drive Results with Conversion-Driven Content' text="Our copywriting services focus on more than just words. We create compelling content that drives conversions, engages your audience, and guides them along the customer journey. Experience the power of persuasive copy that delivers tangible results." />
            <FeatureCard img='/img/3.png' title='Enhance Visibility and Organic Traffic with SEO-Optimized Copy' text="Boost your search engine rankings and attract more organic traffic with our SEO-optimized copywriting. We research keywords, optimize meta tags, and craft content that not only appeals to your audience but also meets search engine guidelines." />
            <FeatureCard img='/img/4.png' title="Amplify Your Brand's Reach with Engaging Social Media Campaigns" text="Harness the power of social media with our engaging copywriting for campaigns that captivate and inspire. From attention-grabbing captions to compelling ad copy, we help you connect with your audience, increase brand awareness, and drive meaningful engagement." />
        </div>
    </div>
}

export function WidgetCta(props) {
    return <div className='w-full bg-y text-center p-4 sm:p-8 my-36'>
        <div className='max-w-7xl font-bold text-lg sm:text-3xl m-auto text-y-d'>{props.title}</div>
        <div className='max-w-7xl font-bold text-3xl sm:text-5xl m-auto py-4 text-white'>{props.text}</div>
        <div className='w-fit m-auto p-3 px-4 bg-white text-black font-bold text-3xl rounded-full pb-1 mt-4 mb-2 hover:mt-0 hover:mb-6 hover:drop-shadow-lg duration-300'>
            <Link href={props.route}>{props.cta}</Link>
        </div>
    </div>;
}

function TestimonyCard(props) {
    return <div className='p-4 m-auto max-w-lg my-4'>
        <div className='bg-white p-4 rounded-3xl drop-shadow-lg'>
            <div className='text-y text-lg sm:text-2xl font-bold'>
                {props.title}
            </div>
            <div className='text-xl sm:text-3xl mt-6 font-semibold'>
                {props.text}
            </div>
        </div>
        <div className='flex w-fit text-y m-auto my-4 mr-0'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    </div>;
}

export function WidgetTestimonies(props) {
    return <div className='my-36 max-w-7xl m-auto'>
        <div className='w-fit m-auto p-4 font-bold text-3xl sm:text-5xl text-center'>Feedback from our customers</div>
        <div className='flex flex-wrap'>
            <TestimonyCard title='John D., Website Owner' text="Working with your copywriting team was a game-changer for my website. The captivating content they created not only captured the essence of my brand but also drove more conversions. I'm thrilled with the results and highly recommend your services." />
            <TestimonyCard title='Sarah M., Social Media Marketer' text="Your social media campaigns have been a game-changer for our brand. The engaging copy and attention-grabbing captions have significantly increased our reach and engagement. It's a pleasure working with such a talented copywriting team." />
            <TestimonyCard title='Michael S., E-commerce Business Owner' text="The product descriptions your copywriters crafted for my e-commerce store have truly elevated my brand. The persuasive and SEO-friendly copy has not only attracted more customers but also boosted our sales. I couldn't be happier with the quality of your work." />
            <TestimonyCard title='Laura T., Email Marketing Manager' text="Your team's expertise in email marketing copy has had a remarkable impact on our campaigns. The conversion-focused emails they create have led to higher open rates, increased click-throughs, and ultimately, more sales. We appreciate the dedication and talent of your copywriters." />
        </div>
    </div>;
}

function Star() {
    return <div className='p-2'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg></div>;  
}


export function WidgetContacts() {
    return <div className='max-w-5xl p-4 m-auto'>
        <div className='rounded-3xl sm:rounded-[5rem] bg-white drop-shadow-lg p-8'>
            <div className='w-fit m-auto font-bold text-y text-xl sm:text-3xl text-center'>
                {"Let's Craft Compelling Copy Together"}
            </div>
            <div className='w-fit text-center m-auto font-bold text-3xl sm:text-5xl my-4'>
                {"Connect with Us and Elevate Your Copywriting Journey"}
            </div>
            <div className='flex flex-wrap mt-16'>
                <div className='flex sm:w-1/2 m-auto min-w-[15rem] w-full'>
                    <div className='w-1/6 sm:p-4 sm:m-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='sm:m-auto sm:ml-0'>
                        <div className='sm:text-3xl text-xl font-bold'>Phone number</div>
                        <div className='sm:text-2xl text-lg font-semibold'>{contacts.phone}</div>
                    </div>
                </div>
                <div className='flex sm:w-1/2 m-auto mt-8 sm:mt-0 w-full'>
                    <div className='w-1/6 sm:p-4 sm:m-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </div>
                    <div className='sm:m-auto sm:ml-0'>
                        <div className='sm:text-3xl text-xl font-bold'>E-mail</div>
                        <div className='sm:text-2xl text-lg font-semibold'>{contacts.mail}</div>
                    </div>
                </div>
            </div>
            <div className='text-3xl font-bold text-black bg-y rounded-full px-4 p-3 pb-1 w-fit m-auto mb-4 mt-12 hover:mt-8 hover:mb-8 hover:drop-shadow-lg duration-300'>
                <Link href='/contact'>See more</Link>
            </div>
        </div>
    </div>;
}

export function Paragraph(props) {
    return <div className='max-w-7xl m-auto p-4 my-36'>
        <div className='flex flex-wrap-reverse'>
            <div className='sm:w-2/3 m-auto text-left'>
                <div className='font-bold text-lg sm:text-2xl text-y'>
                    {props.slogan}
                </div>
                <div className='font-bold text-4xl sm:text-6xl my-4'>
                    {props.title}
                </div>
                <div className='sm:text-3xl text-xl font-semibold text-y'>
                    {props.text}
                </div>
            </div>
            { props.img ?
                <div className='sm:w-1/3 p-4 m-auto min-w-[15rem]'>
                    <img src={props.img} />
                </div>
            : '' }
        </div>
    </div>;
}