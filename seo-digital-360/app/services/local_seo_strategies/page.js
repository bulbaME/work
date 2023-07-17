import Header from "@/app/_modules/header";
import Footer from "@/app/_modules/footer";
import { SubProductCard } from "../../_modules/product_card";
import { services } from "@/app/data.json"
import { Paragraph, ParagraphL } from "@/app/_modules/paragraph";

const service = services[1];

export default function Main() {
    return <>
        <Header page={6} />
        <div className='max-w-5xl text-white m-auto text-center'>
            <div className='font-bold text-3xl md:text-5xl mt-10'>{service.title}</div>
            <div className='text-xl m-6'>{service.text}</div>
        </div>
        <div className='max-w-7xl m-auto my-10'>
            <SubProductCard title={service.sub_services[0].title} descr={service.sub_services[0].text} price={service.sub_services[0].price} />
            <SubProductCard title={service.sub_services[1].title} descr={service.sub_services[1].text} price={service.sub_services[1].price} />
            <SubProductCard title={service.sub_services[2].title} descr={service.sub_services[2].text} price={service.sub_services[2].price} />
        </div>
        <Paragraph img='/img/14.jpg' title='Reaching and Engaging Your Local Audience' text="Local SEO strategies are essential for businesses looking to attract and engage their local audience effectively. With the rise of mobile search and location-based queries, optimizing your online presence for local search visibility is crucial. Our team specializes in developing targeted local SEO strategies that ensure your business stands out in local search results. We focus on optimizing your Google My Business listing, creating localized content, and leveraging relevant local directories and citation sources. By implementing these local SEO tactics, we enhance your online visibility in your community and drive qualified local traffic to your business." />
        <ParagraphL img='/img/15.jpg' title='The Key to Local SEO Success' text="Our local SEO strategies are centered around optimizing your Google My Business listing. We ensure that your listing is complete, accurate, and engaging, providing users with essential information about your business, such as your address, phone number, business hours, and customer reviews. Additionally, we optimize your listing with relevant keywords, enticing descriptions, and eye-catching visuals. By maximizing your Google My Business presence, your business gains better visibility in local search results, Google Maps, and Google's local pack, making it easier for potential customers to find and choose your business over competitors. With our targeted local SEO strategies, you can establish a strong local online presence, attract local customers, and grow your business in your community." />
        <Footer page={7} />
    </>;
} 