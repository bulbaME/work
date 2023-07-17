import Header from "@/app/_modules/header";
import Footer from "@/app/_modules/footer";
import { SubProductCard } from "../../_modules/product_card";
import { services } from "@/app/data.json"
import { Paragraph, ParagraphL } from "@/app/_modules/paragraph";

const service = services[2];

export default function Main() {
    return <>
        <Header page={7} />
        <div className='max-w-5xl text-white m-auto text-center'>
            <div className='font-bold text-3xl md:text-5xl mt-10'>{service.title}</div>
            <div className='text-xl m-6'>{service.text}</div>
        </div>
        <div className='max-w-7xl m-auto my-10'>
            <SubProductCard title={service.sub_services[0].title} descr={service.sub_services[0].text} price={service.sub_services[0].price} />
            <SubProductCard title={service.sub_services[1].title} descr={service.sub_services[1].text} price={service.sub_services[1].price} />
            <SubProductCard title={service.sub_services[2].title} descr={service.sub_services[2].text} price={service.sub_services[2].price} />
        </div>
        <Paragraph img='/img/10.jpg' title='Unleashing SEO Potential' text="Our data-driven SEO audits provide valuable insights and strategic recommendations to optimize your website's performance. We dig deep into the data, analyzing technical aspects, content effectiveness, and user behavior, to uncover optimization opportunities that can propel your SEO efforts to new heights. With a meticulous approach, our experienced team identifies areas of improvement, pinpoints potential roadblocks, and provides actionable steps to enhance your website's search visibility, user experience, and overall SEO success." />
        <ParagraphL img='/img/11.jpg' title='Optimizing the Foundation' text="During our comprehensive technical SEO audit, we meticulously examine your website's crawlability, indexability, site speed, mobile-friendliness, and other critical technical factors. By identifying and resolving issues that may hinder search engine crawling and indexing, we ensure that your website is optimized for maximum visibility and performance. Our data-driven approach uncovers technical bottlenecks and provides clear recommendations to enhance your website's technical foundation, resulting in improved search rankings and better user experience." />
        <Footer page={7} />
    </>;
} 