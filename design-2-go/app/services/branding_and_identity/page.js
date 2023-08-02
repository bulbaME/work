import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { Paragraph, ParagraphLightL } from "@/app/_modules/paragraph";
import { SubProductCard } from "@/app/_modules/product_card";
import { services } from "@/app/data.json";
import { Button } from "@/app/_modules/buttons";

const service = services[0];

export default function Main() {
    return <>
        <Header page={5} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 mb-0 text-4xl sm:text-6xl font-semibold'>{service.title}</div>
        <div className='max-w-3xl text-center font-bold m-auto p-10 text-xl'>{service.descr}</div>
        <div className='md:flex max-w-7xl m-auto'>
            <SubProductCard title={service.sub_services[0].title} descr={service.sub_services[0].descr} price={service.sub_services[0].price} />
            <SubProductCard title={service.sub_services[1].title} descr={service.sub_services[1].descr} price={service.sub_services[1].price} />
            <SubProductCard title={service.sub_services[2].title} descr={service.sub_services[2].descr} price={service.sub_services[2].price} />
        </div>
        <div className='w-full bg-gray-900 p-10 my-16'>
            <div className='max-w-3xl m-auto mb-10 text-white text-xl text-center'>{"Stand Out from the Crowd with a Strong Brand Presence. Your brand is more than just a logo; it's the emotional connection you build with your customers. Our comprehensive branding and identity services are designed to help you establish a unique and powerful brand presence. From developing a compelling brand strategy to designing captivating visual elements and crafting consistent brand messaging, we will work collaboratively with you to create a brand that resonates with your target audience and drives loyalty. Ready to make a lasting impact? Contact us now and let's embark on a branding journey that will set you apart from the competition."}</div>
            <div className='w-fit m-auto'>
                <Button text='Get in touch with us' route='/contact' />
            </div>
        </div>
        <ParagraphLightL img='/img/14.jpg' title='Establishing Strong Brand Presences' text="Building a strong brand presence is essential for standing out in today's competitive market. Our branding and identity service helps you establish a unique and memorable brand that resonates with your target audience. We dive deep into understanding your brand's values, target market, and industry landscape to develop comprehensive branding strategies. From crafting compelling brand stories to designing captivating visual elements, such as logos, color palettes, and typography, we create cohesive brand identities that create meaningful connections with your customers and set you apart from the competition." />
        <Footer />
    </>;
}