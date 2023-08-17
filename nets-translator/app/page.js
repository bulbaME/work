import Link from "next/link";
import Footer from "./_modules/footer";
import Header from "./_modules/header";
import PageTitle from "./_modules/page-title";
import { Paragraph, ParagraphL } from "./_modules/paragraph";
import { FeatureCard } from "./_modules/feature-card";
import { BigButton, BigButtonGreen } from "./_modules/bit_button";
import { Rating } from "./_modules/widgets";

export default function Main() {
    return <>
        <Header page={1} />
        <div className='h-'>
            <div className='absolute overflow-hidden h-fit w-fit max-h-screen'>
                <div className='background-2 absolute w-full h-full z-10' />
                <div className='absolute w-full z-20 h-full'>
                    <div className='text-3xl text-center my-2 md:my-20 2xl:my-52 sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold w-fit m-auto text-white'>Connecting Cultures <br /> One Language at a Time</div>
                    <div className='m-auto my-10 md:my-32 lg:my-64'>
                        <BigButton text='Contact us' route='/contact' />
                    </div>
                </div>
                <img src='/img/1.jpg' className='w-full' />
            </div>
            <img src='/img/1.jpg' className='w-full max-h-screen' />
        </div>
        <div className='max-w-5xl m-auto font-medium text-2xl p-8 my-10'>
            <div className='font-semibold text-3xl'>
                {"Breaking Barriers, Embracing Global Connections: Your Gateway to Seamless Translation Services"}
            </div>
            <div className='my-10'>{"At Nets Translator, we believe that language should never be a barrier to communication. Whether you're a business expanding into international markets, a traveler exploring new cultures, or an individual seeking to connect with people from around the world, our comprehensive translation services are here to bridge the gap and bring you closer to your global aspirations."}</div>
            <div className='my-10'>{"Unlock a world of possibilities with our team of highly skilled translators who possess expertise in a wide range of languages and industries. From document translation to website localization, we offer accurate, reliable, and culturally sensitive solutions tailored to your specific needs."}</div>
            <BigButtonGreen text='See our services' route='/services'  />
        </div>
        <div className='max-w-4xl m-auto'>
            <Paragraph img='/img/2.jpg' title="Empowering Global Connections: Break Language Barriers with Nets Translator" text="At Nets Translator, we are not just translators; we are facilitators of meaningful connections. We understand that language goes beyond words—it carries emotions, ideas, and cultural nuances. Our team is passionate about breaking down language barriers and fostering understanding between diverse communities. We believe that every conversation, every document, and every interaction is an opportunity to bridge gaps and build bridges. Join us in this mission as we empower individuals, businesses, and organizations to communicate effectively and make a lasting impact in a globalized world." />
        </div>
        <div className='max-w-4xl m-auto'>
            <div className='font-bold text-4xl underline decoration-g-l m-auto w-fit p-1'>
                <a id='why-us' className='decoration-g-l'>Why choose Nets Translator?</a>
            </div>
            <div className='flex flex-wrap'>
                <FeatureCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                } title='Exceptional Quality' descr="Our dedicated team of language experts ensures precise and nuanced translations, capturing the essence of your content while maintaining linguistic integrity." />
                <FeatureCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                } title='Fast Turnaround' descr="We understand the importance of time in today's fast-paced world. Count on us to deliver your translations promptly without compromising on quality." />
                <FeatureCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                } title='Versatile Solutions' descr="From professional documents to marketing materials, websites to legal contracts, our extensive range of services covers all your translation requirements." />
                <FeatureCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                } title='Confidentiality and Security' descr="Your privacy is of utmost importance to us. We employ strict security measures to protect your sensitive information throughout the translation process." />
                <FeatureCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                } title='Transparent Pricing' descr="We offer competitive and transparent pricing, with no hidden fees. Get a clear understanding of the cost involved upfront, ensuring complete peace of mind." />
                <FeatureCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                } title='Personalized Customer Service' descr="We value your satisfaction and provide personalized attention to understand and address your unique requirements." />
            </div>
            <div className='font-semibold text-3xl max-w-3xl m-auto p-8'>{"Take the first step towards a truly global presence. Experience the power of seamless language translation with Nets Translator."}</div>
            <div className='m-auto mb-10 mt-2 duration-300'>
                <BigButtonGreen text='Check out our offerings' route='/services'  />
            </div>
            <ParagraphL img='/img/3.jpg' title='Discover the Power of Translation' text='Join thousands of satisfied clients who have entrusted us with their translation needs. Let us break down language barriers and connect you with the world. Discover the possibilities today!' />
            <div className='my-10'>
                <BigButton text='Reach us now' route='/contact' />
            </div>

            <div className='font-semibold text-3xl max-w-3xl my-16 m-auto p-8'>{"Start your journey with Nets Translator and embrace the power of effective communication without limits. Together, let's transcend languages and unlock new horizons."}</div>
        </div>
        <Rating />
        <Footer />
    </>;
}