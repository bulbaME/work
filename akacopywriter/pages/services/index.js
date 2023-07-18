import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, ServicesCard, WidgetCta, WidgetTestimonies } from "@/modules/widgets";
import { services } from "@/public/json/data.json";

export default function page() {
    return <>
        <Header page={3} />
        <div className='max-w-7xl m-auto background-2 py-16 p-4'>
            <div className='w-fit m-auto text-4xl text-center sm:text-6xl font-bold text-white'>
                {"Empowering Your Brand with Persuasive Copy"}
            </div>
            <div className='font-bold w-fit m-auto text-xl sm:text-4xl text-center my-4 text-y-d'>
                {"Unlock Your Brand's Potential with Our Solutions"}
            </div>
        </div>
        <Paragraph title='Elevate Your Brand with Exceptional Copywriting Services' slogan='Crafting Words that Inspire, Engage, and Propel Your Business' text="Unlock the full potential of your brand with our exceptional copywriting services. We specialize in creating captivating content that resonates with your audience, boosts conversions, and enhances your brand's online presence. From compelling website copy to persuasive social media campaigns and conversion-driven email marketing, our expert team of copywriters is here to help you elevate your brand to new heights. Experience the power of words that inspire, engage, and propel your business forward." />
        <ServicesCard title={services[0].title} text={services[0].text} route={services[0].link} img='/img/13.png' />
        <ServicesCard title={services[1].title} text={services[1].text} route={services[1].link} img='/img/14.png' />
        <ServicesCard title={services[2].title} text={services[2].text} route={services[2].link} img='/img/15.png' />
        <WidgetCta title='Transform Your Message, Ignite Your Success' text="Unlock the Power of Compelling Copywriting Today" cta='Contact us' route='/contact' />
        <WidgetTestimonies />
        <Footer />
    </>;
}