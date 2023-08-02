import Header from "../_modules/header";
import Footer from "../_modules/footer";
import { Paragraph, ParagraphL } from "../_modules/paragraph";
import BigButton from "../_modules/big_button";

export default function Main() {
    return <>
        <Header page={2} />
        <div className='background-4 my-6 text-5xl font-extrabold text-center text-slate-800 px-3 py-10 m-2'>
            About us.
        </div>
            <div className='text-2xl m-auto p-7 font-semibold'>
                At XCopywriter, we are passionate about the power of words. We believe that compelling copy has the ability to transform businesses, connect with audiences, and drive measurable results. As a leading copywriting service provider, we are dedicated to helping brands harness the full potential of persuasive writing.
            </div>
            <ParagraphL img='/img/7.jpg' text="With years of industry experience and a team of skilled copywriters, we have honed our craft to deliver exceptional copy that captivates, engages, and converts. Our goal is simple: to create copy that not only tells your brand's story but also elicits an emotional response and compels action." />
            <Paragraph img='/img/8.jpg' text="What sets us apart is our deep understanding of the nuances of effective copywriting. We go beyond mere words and strive to understand your brand's unique voice, values, and target audience. Our collaborative approach ensures that every piece of copy we produce reflects your brand identity and resonates with your ideal customers." />
            <ParagraphL img='/img/9.jpg' text="Whether you need attention-grabbing headlines, persuasive website content, captivating blog articles, compelling product descriptions, or engaging social media posts, we have the expertise to deliver exceptional results. Our copywriting services are tailored to your specific needs, and we take pride in delivering high-quality work that exceeds your expectations." />
            <Paragraph img='/img/10.jpg' text="But it's not just about crafting beautifully written copy. We also take a strategic approach to copywriting, aligning our efforts with your overall marketing strategy. We work closely with you to understand your goals, target audience, and key messages. This enables us to create copy that not only communicates your brand's value proposition but also drives tangible business outcomes." />
            <ParagraphL img='/img/11.jpg' text="Our commitment to excellence extends beyond the words on the page. We value collaboration, communication, and reliability. When you partner with us, you can expect timely delivery, open lines of communication, and a seamless experience from start to finish. We are dedicated to your success and strive to build long-term partnerships based on trust and exceptional results." />
            <Paragraph img='/img/12.jpg' text="Unlock the power of persuasive words with XCopywriter Services. Let us help you create a compelling narrative that connects with your audience, drives engagement, and propels your business forward. Contact us today to discuss your copywriting needs and embark on a journey to elevate your brand's messaging to new heights." />
            <BigButton text='Contact us' route='/contact' />
        <Footer />
    </>;
}