import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { Paragraph, ParagraphLightL } from "@/app/_modules/paragraph";
import { SubProductCard } from "@/app/_modules/product_card";
import { services } from "@/app/data.json";
import { Button } from "@/app/_modules/buttons";

const service = services[2];

export default function Main() {
    return <>
        <Header page={7} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 mb-0 text-4xl sm:text-6xl font-semibold'>{service.title}</div>
        <div className='max-w-3xl text-center font-bold m-auto p-10 text-xl'>{service.descr}</div>
        <div className='md:flex max-w-7xl m-auto'>
            <SubProductCard title={service.sub_services[0].title} descr={service.sub_services[0].descr} price={service.sub_services[0].price} />
            <SubProductCard title={service.sub_services[1].title} descr={service.sub_services[1].descr} price={service.sub_services[1].price} />
            <SubProductCard title={service.sub_services[2].title} descr={service.sub_services[2].descr} price={service.sub_services[2].price} />
        </div>
        <div className='w-full bg-gray-900 p-10 my-16'>
            <div className='max-w-3xl m-auto mb-10 text-white text-xl text-center'>{"Make an Impact with Captivating Visual Communications. In today's visually-driven world, it's crucial to have print and digital designs that captivate your audience and effectively convey your message. Our talented design team specializes in creating stunning print collateral and digital graphics that grab attention, tell your brand story, and leave a lasting impression. Whether you need eye-catching brochures, business cards, posters, or engaging digital graphics for your website, social media, or online campaigns, we've got you covered. Ready to make your brand shine? Reach out to us today and let's bring your vision to life through captivating designs that make an impact."}</div>
            <div className='w-fit m-auto'>
                <Button text='Get in touch with us' route='/contact' />
            </div>
        </div>
        <ParagraphLightL img='/img/15.jpg' title='Captivating Visual Communications' text="In the fast-paced world of marketing, visual communications play a vital role in capturing attention and conveying messages effectively. Our print and digital design service offers a wide range of creative solutions to meet your needs. Whether it's designing eye-catching brochures, business cards, or posters for your print collateral or creating stunning digital graphics for social media campaigns and online promotions, our team of talented designers is dedicated to creating captivating visuals that leave a lasting impact. With a keen eye for aesthetics and a deep understanding of your brand, we ensure that every design element aligns with your brand identity and resonates with your target audience." />
        <Footer />
    </>;
}