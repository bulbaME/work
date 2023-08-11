import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1, WAppear, WForm, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-gradient-to-br from-r to-y bg-opacity-0'><WAppear>
            <div className='sm:text-4xl text-center text-2xl font-bold text-white'>
                {"Our Story"}
            </div>
            <div className='sm:text-2xl text-center text-lg font-bold text-white mt-4'>
                {"Crafting Words, Shaping Worlds"}
            </div>
        </WAppear></div>
        <P1 img='/img/2.jpg' title="About Us" slogan="Where Language Meets Inspiration" text="At Lockes Copywriting, we are more than just wordsmiths – we are storytellers, dream weavers, and architects of impact. Our journey began with a passion for language, a love for communication, and an unwavering belief in the power of words to shape perceptions, inspire action, and transcend boundaries." />
        <P1 img='/img/3.jpg' title="Founder's Vision" slogan="Driven by Vision, Defined by Words" text="Lockes Copywriting was born out of the desire to bridge the gap between ideas and their full potential. Every word we craft is a testament to our commitment to turning visions into vivid narratives that resonate with audiences across cultures, industries, and platforms." />
        <P1 img='/img/4.jpg' title="Our Approach" slogan="Merging Creativity with Purpose" text="As a team of dedicated creatives, we thrive on the artistry of language and the precision of strategy. Our goal is simple yet profound: to transform your thoughts into expressions that captivate, inform, and ultimately drive results. Whether it's a compelling brand story, an SEO-optimized blog post, or engaging social media content, we pour our expertise and passion into every piece we create." />
        <P1 img='/img/5.jpg' title="Your Story, Our Purpose" slogan="Your Aspirations, Our Inspiration" text="But our story isn't just about us; it's about you. We understand that your brand, your message, and your aspirations are at the heart of our collaboration. Through open dialogue, meticulous research, and collaborative effort, we ensure that every piece of content we produce resonates with your voice, values, and goals." />
        <P1 img='/img/6.jpg' title="Join Our Journey" slogan="Transforming Ideas into Influence" text="Welcome to our world of words. We invite you to explore our journey, learn about our team, and join us in crafting stories that leave a lasting impact. Together, let's transform ideas into influence, and let words transcend boundaries." />
        <div className='max-w-5xl m-auto text-white py-12'><WAppear className='flex flex-wrap'>
            <div className='md:w-2/3 sm:text-lg'>
                {"Ready to take the next step? Reach out to us today and let's start crafting the perfect words for your brand. Whether you have questions, ideas, or a project in mind, we're here to listen and bring your vision to life. Connect with us now and let's embark on a journey of creative collaboration!"}
            </div>
            <div className='md:w-1/3 m-auto md:mt-auto mt-8'>
                <div className='w-fit p-3 px-5 my-4 hover:p-2 hover:px-3 hover:drop-shadow-lg duration-300 ease-in-out m-auto sm:text-xl font-bold rounded-tl-2xl rounded-br-2xl transition-all bg-gradient-to-br from-r-o to-o-y text-white'>
                    <Link href='/contact'>Reach out today</Link>
                </div>
            </div>
        </WAppear></div>
        <Footer />
    </>;
}