import Header from "@/app/_modules/header";
import Footer from "@/app/_modules/footer";
import { SubProductCard } from "../../_modules/product_card";
import { services } from "@/app/data.json"
import { Paragraph, ParagraphL } from "@/app/_modules/paragraph";

const service = services[0];

export default function Main() {
    return <>
        <Header page={5} />
        <div className='max-w-5xl text-white m-auto text-center'>
            <div className='font-bold text-3xl md:text-5xl mt-10'>{service.title}</div>
            <div className='text-xl m-6'>{service.text}</div>
        </div>
        <div className='max-w-7xl m-auto my-10'>
            <SubProductCard title={service.sub_services[0].title} descr={service.sub_services[0].text} price={service.sub_services[0].price} />
            <SubProductCard title={service.sub_services[1].title} descr={service.sub_services[1].text} price={service.sub_services[1].price} />
            <SubProductCard title={service.sub_services[2].title} descr={service.sub_services[2].text} price={service.sub_services[2].price} />
        </div>
        <Paragraph img='/img/12.jpg' title='The Power of Optimized On-Page SEO' text="Optimized on-page SEO is the cornerstone of successful digital marketing strategies. By strategically optimizing various on-page elements, you can enhance your website's search engine visibility, improve user experience, and drive targeted organic traffic. Our team of SEO experts specializes in on-page optimization, ensuring that your website is fully optimized to maximize its potential in search engine rankings." />
        <ParagraphL img='/img/13.jpg' title='Driving Targeted Traffic and Enhanced User Experience' text="Our on-page optimization services begin with comprehensive keyword research. By identifying the most relevant and high-converting keywords for your business, we ensure that your website aligns with search intent and attracts the right audience. From there, we strategically integrate these keywords into your website's meta tags, headers, URLs, and content, optimizing each element to signal to search engines the relevance and value your website offers." />
        <Footer page={7} />
    </>;
} 