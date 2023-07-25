import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, CtaL, PLD, PRD, ServicesSmallW } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='w-full bg-h bg-3 py-[6rem]'>
            <div className='max-w-7xl m-auto w-full p-4'>
                <div className='text-center text-r-l font-bold sm:text-3xl text-xl my-4'>
                    {"Journey of Creativity and Innovation!"}
                </div>
                <div className='text-center text-white font-bold sm:text-5xl text-3xl'>
                    Discover Our Story
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto bg-b bg-4'>
            <PLD 
                title='Elevating Brands with Persuasive Copy'
                slogan='Where Words Make a Difference!'
                text="Welcome to Copywriting and Graphics, your go-to destination for expert copywriting services. We specialize in crafting compelling copy that captivates, convinces, and converts your audience. As passionate wordsmiths, we understand the power of language and its ability to elevate your brand to new heights."
                keys={[]}
                img='/img/1.jpg'
            />
            <PRD 
                title="Your Storytelling Partner"
                slogan='Bringing Your Vision to Life!'
                text="Our journey began with a shared passion for storytelling. We believe that every brand has a unique story to tell, and our mission is to be your storytelling partner. We dive deep into understanding your brand's identity, values, and target audience, ensuring that every word we write aligns seamlessly with your brand's voice."
                keys={[]}
                img='/img/8.jpg'
            />
            <ServicesSmallW />
            <PLD 
                title='Persuasion at Its Finest'
                slogan='Compelling Words, Tangible Results!'
                text="At Copywriting and Graphics, persuasion is an art form. Our copywriters have honed their skills to craft messages that resonate with your audience and inspire action. Whether it's a compelling call-to-action, persuasive product descriptions, or engaging website content, we know how to drive results through strategic storytelling."
                keys={[]}
                img='/img/3.jpg'
            />
            <PRD 
                title="Let's Write Your Success Story"
                slogan='Crafting Your Path to Triumph!'
                text="Join us at Copywriting and Graphics, where we are committed to writing your success story. Let's collaborate to bring your brand's vision to life, inspire your audience, and make your copy a driving force behind your business triumphs. Together, we'll create a narrative that leaves a lasting impression and propels your brand towards success."
                keys={[]}
                img='/img/4.jpg'
            />
            <div className='py-16'>
                <CtaL cta="Transform Your Brand's Voice!" cta_route='/contact' text="Let our expert copywriters transform your brand's communication with captivating content. Connect with your audience like never before." />
            </div>
        </div>
        <Footer />
    </>;
}