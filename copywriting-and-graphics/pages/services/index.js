import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { ServicesC, ServicesSmallW, FeatureW, Cta, PLD } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

export default function X() {
    return <>
        <Header page={3} />
        <div className='w-full bg-h bg-3 py-[6rem]'>
            <div className='max-w-7xl m-auto w-full p-4'>
                <div className='text-center text-r-l font-bold sm:text-3xl text-xl my-4'>
                    {"Crafting Solutions Tailored for You!"}
                </div>
                <div className='text-center text-white font-bold sm:text-5xl text-3xl'>
                    Our Expert Services
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto bg-b bg-4 py-16'>
            <ServicesC img='/img/11.jpg' title={services[0].title} text={services[0].text_long} link={services[0].link} />
            <ServicesC img='/img/12.jpg' title={services[1].title} text={services[1].text_long} link={services[1].link} />
            <ServicesC img='/img/13.jpg' title={services[2].title} text={services[2].text_long} link={services[2].link} />
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
            <PLD 
                title='Inspire and Persuade with Our Compelling Copy'
                slogan='Words That Inspire, Content That Persuades!'
                text="The right words have the power to inspire, and at Copywriting and Graphics, we take inspiration to the next level. Our compelling copy is tailored to motivate your audience, spark their curiosity, and drive them to take action. Whether it's crafting captivating blog posts, email campaigns, or sales copy, our team of experienced copywriters has the know-how to create content that connects with your readers on a deep, emotional level. Let your brand's story inspire and persuade your audience to become your most loyal customers."
                keys={['Emotional Appeal', 'Brand Story', 'Authentic Voice']}
                img='/img/9.jpg'
            />
        </div>
        <Footer />
    </>;
}