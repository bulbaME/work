import Link from "next/link";
import Image from "next/image";
import { services } from "@/public/json/data.json";

export function Button(props) {
    return <div className='w-fit p-3 px-4 bg-b-m text-white rounded-lg m-auto font-bold sm:text-xl my-4 hover:mt-2 hover:mb-6 duration-300 hover:drop-shadow-lg'>
        <Link href={props.route}>{props.text}</Link>
    </div>;
} 

export function ButtonL(props) {
    return <div className='w-fit p-3 px-4 bg-white text-b-d rounded-lg m-auto font-bold sm:text-xl my-4 hover:mt-2 hover:mb-6 duration-300 hover:drop-shadow-lg'>
        <Link href={props.route}>{props.text}</Link>
    </div>;
} 

function CFeatures(props) {
    return <div className='p-6 max-w-[30rem] m-auto'>
        <div className='p-6 bg-white drop-shadow-lg text-b-m text-center'>
            <div className='sm:text-4xl text-2xl font-bold'>
                {props.title}
            </div>
            <div className='p-4 m-auto w-fit my-8'>
                {props.img}
            </div>
            <div className='sm:text-2xl text-lg font-medium text-b-d'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WFeatures() {
    return <div className='py-16 flex flex-wrap max-w-7xl m-auto p-8'>
        <div className='w-full text-center sm:text-5xl text-3xl font-bold text-b-m mb-8'>
            Why Choose Licensed Translation?
        </div>
        <CFeatures title='Expert Linguists' text="Our team consists of language experts who are not only fluent in multiple languages but also possess in-depth knowledge of various industries. This expertise ensures that your content is translated with precision and contextual understanding." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
        } />
        <CFeatures title='Comprehensive Services' text="From legal and financial documents to technical manuals and creative marketing content, we offer a wide range of translation services. No project is too big or too small for us to handle." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
            </svg>
        } />
        <CFeatures title='Cultural Sensitivity' text="We understand the significance of cultural nuances in effective communication. Our translators are well-versed in the cultural norms of different regions, ensuring your message is delivered appropriately and respectfully." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
            </svg>
        } />
        <CFeatures title='Fast Turnaround' text="We value your time and understand the importance of meeting deadlines. Our streamlined process and efficient team enable us to deliver translations promptly without compromising on quality." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
            </svg>
        } />
        <CFeatures title='Confidentiality' text="Your trust is essential to us. We adhere to strict security measures to protect your sensitive information and ensure confidentiality at all times." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        } />
    </div>;
}

function CProcessR(props) {
    return <div className='my-16 flex w-full'>
        <div className='flex m-auto bg-white drop-shadow-lg sm:min-w-[10rem] sm:min-h-[10rem] min-h-[5rem] min-w-[5rem] w-fit h-fit font-bold text-b-m text-5xl sm:text-7xl'><div className='m-auto'>{props.n}</div></div>
        <div className='text-b-m my-auto ml-8'>
            <div className='font-bold sm:text-4xl text-2xl mb-6'>{props.title}</div>
            <div className='font-medium sm:text-2xl text-lg text-b-d'>{props.text}</div>
        </div>
    </div>;
}

function CProcessL(props) {
    return <div className='my-16 flex w-full'>
        <div className='text-b-m my-auto mr-8'>
            <div className='font-bold sm:text-4xl text-2xl mb-6'>{props.title}</div>
            <div className='font-medium sm:text-2xl text-lg text-b-d'>{props.text}</div>
        </div>
        <div className='flex m-auto mr-0 bg-white drop-shadow-lg sm:min-w-[10rem] sm:min-h-[10rem] min-h-[5rem] min-w-[5rem] w-fit h-fit font-bold text-b-m text-5xl sm:text-7xl'><div className='m-auto'>{props.n}</div></div>
    </div>;
}

export function WProcess() {
    return <div className='py-16 max-w-7xl m-auto p-8'>
        <div className='w-full text-center sm:text-5xl text-3xl font-bold text-b-m mb-8'>Our Translation Process</div>
        <div className='flex flex-wrap'>
            <CProcessR title='Project Assessment' text="We start by understanding your requirements and project scope to provide a tailored solution for your translation needs." n={1} />
            <CProcessL title='Expert Translation' text="Our proficient linguists take care of the translation process while ensuring accuracy, clarity, and cultural relevancy." n={2} />
            <CProcessR title='Quality Assurance' text="Every translation goes through a rigorous quality check to ensure it meets our high standards before delivery." n={3} />
            <CProcessL title='On-time Delivery' text="We are committed to delivering your translated content within the agreed timeframe." n={4} />
            <CProcessR title='Client Satisfaction' text="Your satisfaction is our priority. We welcome your feedback and make any necessary revisions to ensure you are fully content with our services." n={5} />
        </div>
    </div>;
}

export function Cta(props) {
    return <div className='py-16 bg-b-m'>
        <div className='max-w-5xl text-center m-auto p-8'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                {props.title}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-b-l my-4'>
                {props.slogan}
            </div>
            <div className='sm:text-2xl text-lg font-medium text-white my-12'>
                {props.text}
            </div>
            <div className='p-1'>
                <ButtonL text={props.cta} route={props.route} />
            </div>
        </div>
    </div>;
}

function CStats(props) {
    return <div className='md:w-1/2 p-4 m-auto my-12 '>
        <div className='sm:text-4xl text-2xl font-bold text-b-m'>
            {props.title}
        </div>
        <div className='sm:ml-12 mx-8 sm:my-8 my-4'>
            <div className='font-medium sm:text-2xl text-lg text-b-d'>
                {props.t1}
            </div>
            { props.s1 ? 
                <div className='flex my-8'>
                    <div className='w-fit mr-4 font-bold lg:text-3xl text-xl text-b-m whitespace-nowrap'>
                        {props.s1}%
                    </div>
                    <div className='w-3/4 relative h-fit m-auto'>
                        <div className='w-full bg-white drop-shadow-md h-[1rem] rounded-full' />
                        <div className={'absolute -mt-[1rem] bg-b-m drop-shadow-md h-[1rem] rounded-full ' + props.w1} />
                        <div className='absolute -mt-[1.25rem] left-1/2 -translate-x-1/2 sm:w-[0.8rem] w-[0.5rem] h-[1.5rem] bg-b-d rounded-[0.3rem]' /> 
                    </div>
                </div>
            :'' }
        </div>
        <div className='sm:ml-12 mx-8 my-16'>
            <div className='font-medium sm:text-2xl text-lg text-b-d'>
                {props.t2}
            </div>
            { props.s2 ? 
                <div className='flex my-8'>
                    <div className='w-fit mr-4 font-bold lg:text-3xl text-xl text-b-m whitespace-nowrap'>
                        {props.s2}%
                    </div>
                    <div className='w-3/4 relative h-fit m-auto'>
                        <div className='w-full bg-white drop-shadow-md h-[1rem] rounded-full' />
                        <div className={'absolute -mt-[1rem] bg-b-m drop-shadow-md h-[1rem] rounded-full ' + props.w2} />
                        <div className='absolute -mt-[1.25rem] left-1/2 -translate-x-1/2 sm:w-[0.8rem] w-[0.5rem] h-[1.5rem] bg-b-d rounded-[0.3rem]' /> 
                    </div>
                </div>
            :'' }
        </div>
    </div>;
}

export function WStats() {
    return <div className='py-16 max-w-7xl m-auto p-8'>
        <div className='text-center font-bold sm:text-5xl text-3xl text-b-m'>The Power of Language Translation</div>
        <div className='flex flex-wrap'>
            <CStats 
                title='Educational Reach' 
                t1="E-learning platforms offering courses in multiple languages attract 60% more enrollments from international learners compared to monolingual platforms." 
                s1='+ 60' 
                w1='w-[80%]'
                t2="Universities that provide multilingual support in virtual classrooms report a 35% improvement in international student satisfaction and engagement." 
                s2='+ 35'
                w2='w-[70%]'
            />
            <CStats 
                title='Legal Efficiency' 
                t1="Law firms that utilize professional legal translation services save an average of 30% on time spent reviewing translated documents compared to in-house translations." 
                s1='+ 30' 
                w1='w-[65%]'
                t2="Accurate and certified translations in legal proceedings result in a 90% higher success rate for international litigation cases." 
                s2='+ 90'
                w2='w-[95%]'
            />
            <CStats
                title='Market Research Insights'
                t1="Companies that translate market research surveys into local languages gather 40% more comprehensive and reliable data from international respondents."
                s1='+ 40'
                w1='w-[70%]'
                t2="Localization of product packaging and labeling increases consumer product adoption by 25% in foreign markets."
                s2='+ 25'
                w2='w-[65%]'
            />
            <CStats
                title='Social Media Engagement'
                t1="Social media posts in multiple languages receive 70% more shares and interactions from global audiences."
                s1='+ 70'
                w1='w-[85%]'
                t2="Brands that communicate with customers in their native language on social media platforms experience a 60% increase in brand loyalty and advocacy."
                s2='+ 60'
                w2='w-[80%]'
            />
        </div>
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-6 m-auto md:w-1/4 py-16'>
        <div className='sm:text-4xl text-center text-2xl text-white font-bold mb-8'>
            {props.title}
        </div>
        <div className='bg-white p-6 drop-shadow-lg text-center font-medium text-b-d sm:text-2xl text-lg'>
            {props.text}
        </div>
        <div className='p-1 mt-8'>
            <ButtonL text='See more' route={props.link} />
        </div>
    </div>;
}

export function WServicesSmall() {
    return <div className='bg-b-m py-16'>
        <div className='max-w-7xl p-4 m-auto'>
            <div className='text-center font-bold sm:text-5xl text-3xl text-white'>Services we provide</div>
            <div className='flex flex-wrap'>
                <CServicesSmall title={services[0].title} text={services[0].text_short} link={services[0].link}  />
                <CServicesSmall title={services[1].title} text={services[1].text_short} link={services[1].link}  />
                <CServicesSmall title={services[2].title} text={services[2].text_short} link={services[2].link}  />
                <CServicesSmall title={services[3].title} text={services[3].text_short} link={services[3].link}  />
            </div>
        </div>
    </div>;
}

export function P1L(props) {
    return <div className='py-16 max-w-7xl m-auto p-4'>
        <div className='text-left'>
            <div className='sm:text-4xl text-2xl font-bold text-b-m'>{props.title}</div>
            <div className='sm:text-2xl text-lg font-bold text-b-l'>{props.slogan}</div>
        </div>
        <div className='flex flex-wrap my-8'>
            <div className='md:w-1/3 md:pr-8 md:mb-auto my-auto mb-8'>
                <Image src={props.img} width={1000} height={500} alt='Image' />
            </div>
            <div className='md:w-2/3 my-auto font-medium text-b-d sm:text-2xl text-lg'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function P1D(props) {
    return <div className='bg-b-m py-16'>
        <div className='max-w-7xl m-auto p-4'>
            <div className='text-left'>
                <div className='sm:text-4xl text-2xl font-bold text-white'>{props.title}</div>
                <div className='sm:text-2xl text-lg font-bold text-b-l'>{props.slogan}</div>
            </div>
            <div className='flex flex-wrap my-8'>
                <div className='md:w-1/3 md:pr-8 md:mb-auto my-auto mb-8'>
                    <Image src={props.img} width={1000} height={500} alt='Image' />
                </div>
                <div className='md:w-2/3 my-auto font-medium text-white sm:text-2xl text-lg'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}

function CServices(props) {
    return <div className='py-12'>
        <div className='sm:text-4xl text-2xl font-bold text-b-m mb-8'>
            {props.title}
        </div>
        <div className='flex flex-wrap'>
            <div className='md:w-4/5 my-auto pr-8 sm:text-2xl text-lg font-medium text-b-d'>
                {props.text}
            </div>
            <div className='p-4 flex md:flex-wrap md:w-1/6 w-full m-auto md:px-6'>
                <div className='w-full bg-b-m p-2 mx-4 rounded-lg text-2xl font-bold text-white text-center my-4 hover:mb-6 hover:mt-2 hover:drop-shadow-lg duration-300'>
                    <Link href='/contact'>Select</Link>
                </div>
                <div className='w-full bg-b-m p-2 mx-4 rounded-lg text-2xl font-bold text-white text-center my-4 hover:mb-6 hover:mt-2 hover:drop-shadow-lg duration-300'>
                    <Link href={props.link}>More</Link>
                </div>
            </div>
        </div>
    </div>;
}

export function WServices() {
    return <div className='py-16'>
        <CServices title={services[0].title} text={services[0].text_long} link={services[0].link} />
        <CServices title={services[1].title} text={services[1].text_long} link={services[1].link} />
        <CServices title={services[2].title} text={services[2].text_long} link={services[2].link} />
        <CServices title={services[3].title} text={services[3].text_long} link={services[3].link} />
    </div>;
}

function CService(props) {
    return <a href='/contact'><div className='py-8 p-4 hover:pt-4 hover:pb-12 duration-300'>
        <div className='bg-white drop-shadow-lg text-center'>
            <div className='p-6 sm:text-4xl text-2xl font-bold text-b-m'>
                {props.title}
            </div>
            <div className='w-full bg-b-m p-4'>
                <div className='flex w-fit m-auto'>
                    <div className='sm:text-4xl text-2xl font-bold text-white'>
                        {props.price}
                    </div>
                    <div className='my-auto ml-2 text-white text-xl font-bold'>
                        / {props.per}
                    </div>
                </div>
            </div>
            <div className='p-6 sm:text-2xl text-lg font-medium text-b-d text-center'>
                {props.text}
            </div>
        </div>
    </div></a>;
}

export function WService(props) {
    const s = props.s.map((v, i) => {
        return <div className='sm:w-2/5 m-auto'>
            <CService key={i} {...v} />
        </div>;
    });

    return <div className='flex flex-wrap'>
        {...s}
    </div>
}