import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, CtaL, FeatureW, PLD, PLL, PRD, TestimonyW } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={1} />
        <div className='bg-b bg-1 flex flex-wrap'>
            <div className='h-fit m-auto w-full mt-[6rem]'>
                <PLL 
                    title='Elevate Your Brand with Compelling Copy'
                    slogan='Crafting Words that Captivate, Connect, and Convert!'
                    text="Welcome to Copywriting and Graphics, where captivating copy meets conversion-focused content. Our expert copywriters craft compelling messages that captivate your audience, connect with their emotions, and drive conversions. Elevate your brand's communication and storytelling with our persuasive copy that leaves a lasting impact on your readers. Let's transform your brand's voice into an unforgettable story that drives results and success."
                    img='/img/10.jpg'
                    keys={[]}
                />
            </div>
            <div className='my-16 mt-8 w-fit m-auto'>
                <CtaL text="Drive conversions and increase sales with our conversion-focused copywriting. Let's take your business to the next level." cta="Boost Your Sales Now!" cta_route='/contact' />
            </div>
        </div>
        <div className='max-w-7xl m-auto bg-b bg-4'>
            <PLD 
                title='Unlock the Power of Persuasive Copywriting'
                slogan='Words That Work Wonders!'
                text="Welcome to Copywriting and Graphics, where words work wonders for your business. Our expert copywriting services are designed to captivate your audience, spark their interest, and drive meaningful action. Whether you need compelling website content, attention-grabbing marketing materials, or engaging social media posts, our team of skilled copywriters knows just how to craft words that resonate and leave a lasting impact on your target audience. Elevate your brand with our persuasive copywriting and watch as your business thrives in today's competitive market."
                keys={['Persuasive Copywriting', 'Compelling Content', 'Captivating Messages']}
                img='/img/8.jpg'
            />
            <PRD 
                title='Drive Conversions with Our Professional Copywriting'
                slogan='Crafting Messages that Convert!'
                text="At Copywriting and Graphics, we understand that words have the power to convert prospects into loyal customers. Our professional copywriting services are dedicated to helping your business achieve just that. Through strategic storytelling, compelling calls-to-action, and persuasive language, we transform your message into a driving force that compels your audience to take action. Partner with us to craft messages that resonate, inspire, and, most importantly, convert."
                keys={['Professional Copywriters', 'Expert Writing', 'Strategic Messaging']}
                img='/img/6.jpg'
            />
            <PLD 
                title='Inspire and Persuade with Our Compelling Copy'
                slogan='Words That Inspire, Content That Persuades!'
                text="The right words have the power to inspire, and at Copywriting and Graphics, we take inspiration to the next level. Our compelling copy is tailored to motivate your audience, spark their curiosity, and drive them to take action. Whether it's crafting captivating blog posts, email campaigns, or sales copy, our team of experienced copywriters has the know-how to create content that connects with your readers on a deep, emotional level. Let your brand's story inspire and persuade your audience to become your most loyal customers."
                keys={['Emotional Appeal', 'Brand Story', 'Authentic Voice']}
                img='/img/9.jpg'
            />
        </div>
        <div className='bg-b bg-1 flex flex-wrap'>
            <div className='max-w-7xl m-auto p-4'>
                <FeatureW />
            </div>
        </div>
        <div className='max-w-7xl m-auto bg-b bg-5'>
            <div className='py-16'>
                <Cta cta="Transform Your Brand's Voice!" cta_route='/contact' text="Let our expert copywriters transform your brand's communication with captivating content. Connect with your audience like never before." />
            </div>
            <TestimonyW />
        </div>
        <Footer />
    </>;
}