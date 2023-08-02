import BigButton from './_modules/big_button';
import { ExpWidget } from './_modules/exp_widget';
import FeatureCard from './_modules/feature_card';
import Footer from './_modules/footer';
import Header from './_modules/header';
import { Paragraph } from './_modules/paragraph';
import ProductCard from './_modules/product_card';
import Link from 'next/link';

export default function Main() {
    return <>
        <Header page={1} />
        <div className='background-1 my-6 text-5xl font-extrabold text-center text-slate-800 px-3 py-10 m-2'>
            Make your dreams come true.
        </div>
        <Paragraph img='/img/2.jpg' text="Captivating copy has the ability to sway hearts, change minds, and ignite action. At XCopywriter, we understand the profound impact that well-crafted words can have on your business. That's why we are here to revolutionize your brand's messaging through the art of copywriting." />
        <BigButton text='Contact us now' route='contact' />
        <div className='text-4xl mt-20 text-balck font-bold bg-csblue-l hover:bg-cspink duration-300 w-fit p-1'>Why choose us?</div>
        <div className='flex flex-wrap w-full'>
            <FeatureCard img='/img/3.png' title='Expert Team of Skilled Copywriters' descr="Our copywriting company boasts a team of highly skilled and experienced copywriters who excel in the art of persuasive writing. With their expertise and industry knowledge, we ensure that every piece of copy we produce is tailored to your brand's unique voice and resonates with your target audience." />
            <FeatureCard img='/img/5.png' title='Customized Copy for Every Platform' descr="We understand that different platforms require different approaches to effectively engage your audience. Whether it's website content, social media posts, email campaigns, or print materials, our copywriters excel at adapting their writing style to suit each platform. We provide customized copy that not only fits the medium but also maximizes its impact and drives results." />
            <FeatureCard img='/img/6.png' title='Strategic Approach to Copywriting' descr="Our copywriting company takes a strategic approach to every project we undertake. We delve deep into understanding your brand, target audience, and marketing goals. By aligning our copywriting efforts with your overall marketing strategy, we ensure that every word serves a purpose and contributes to your business's growth. Our strategic copywriting helps you establish a strong brand presence and stand out from the competition." />
            <FeatureCard img='/img/4.png' title='Timely Delivery and Reliable Service' descr="We value your time and understand the importance of meeting deadlines. When you work with our copywriting company, you can expect prompt and timely delivery of your copy. Our reliable service ensures that you can count on us to meet your project timelines, allowing you to focus on other aspects of your business without worrying about delays or missed opportunities." />
        </div>
        <Paragraph img='/img/14.jpg' text="Ready to transform your brand's messaging and drive impactful results? Explore our range of services, including expert website copywriting, thought-provoking content creation, and captivating social media copywriting. Take the first step towards elevating your brand's communication by checking out our services and unlocking the power of persuasive words today." />
        <div className='m-auto w-fit'>
            <Link className='p-1 underline font-bold text-4xl decoration-csblue-l hover:decoration-cspink duration-300' href='/services'>See our services</Link>
        </div>
        <ExpWidget />
        <Paragraph img='/img/15.jpg' text="At XCopywriter, we understand the critical role that compelling copy plays in driving business growth and success. Our team of skilled copywriters is here to help you unlock the full potential of your brand through persuasive and impactful messaging." />
        <div className='p-8 font-semibold text-2xl'>Unlock the true potential of your business with our expert copywriting services. Contact us today for a consultation and let&apos;s take your brand to new heights through the power of words.</div>
        <BigButton text='Contact us' route='/contact' />
        <Footer />
    </>;
}