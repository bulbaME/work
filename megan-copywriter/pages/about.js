import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear, WFaq, WForm, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg-2 pt-12'>
            <div className='max-w-7xl m-auto py-12'>
                {/* <WAppear> */}
                        <div className='relative w-fit m-auto sm:text-5xl text-3xl font-bold'>
                            {"About us"}
                            <div className='absolute bottom-0 w-full h-2 bg-b-m' />
                        </div>
                {/* </WAppear> */}
            </div>
        </div>
        <P1L 
            title='Unleashing the Power of Words'
            text="At Megan Copywriter, we believe that words have the unparalleled ability to transcend mere text and create meaningful connections. Founded with a passion for the art of storytelling, we are dedicated to helping businesses and individuals harness the true potential of copywriting. Our journey began with a simple realization: every brand, every idea, and every message deserves to be heard with clarity, emotion, and impact."
            img='/img/2.jpg'
        />
        <P1R
            title='Crafting Compelling Narratives'
            text="At the heart of our mission is the art of crafting compelling narratives. We understand that behind every brand, there's a unique story waiting to be told. Our team of seasoned copywriters brings these stories to life, translating your vision into words that resonate deeply with your audience. Whether it's an engaging website, an attention-grabbing social media campaign, or a thought-provoking blog post, we know how to capture the essence of your message and infuse it with the power to inspire action."
            img='/img/3.jpg'
        />
        <P1L 
            title='Tailored Solutions for Every Journey'
            text="We recognize that each journey is distinct, and so are the needs of our clients. Our approach revolves around understanding your goals, values, and challenges. By delving into the core of your brand, we're able to create tailor-made solutions that reflect your unique identity. From startups to established enterprises, we collaborate closely with you to ensure that your voice is authentically echoed through every piece of content we create."
            img='/img/4.jpg'
        />
        <P1R
            title='Your Success, Our Reward'
            text="Our commitment to your success is unwavering. We measure our accomplishments not merely by the words we write, but by the results you achieve. Whether it's increasing brand engagement, driving conversions, or simply leaving a lasting impression, our satisfaction lies in witnessing your triumphs."
            img='/img/5.jpg'
        />
        <P1L 
            title='Join Us on this Journey'
            text="We invite you to explore the power of words with us. Let's embark on a journey where ideas are transformed into narratives, and narratives into impactful content. Together, we'll shape stories that captivate, resonate, and inspire. Your brand's story is unique, and we're here to ensure it's told in a way that makes a lasting impact."
            img='/img/6.jpg'
        />
        <WForm />
        <WServicesSmall />
        <Footer />
    </>;
}