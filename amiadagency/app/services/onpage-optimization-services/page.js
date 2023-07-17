import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { ProductCard } from "@/app/_modules/product_card";
import { services } from "@/app/data.json";
import { FeedbackWidget } from "@/app/_modules/widgets";
import { SpliterSvg } from "@/app/_modules/spliter";

const service = services[0];

export default function Main() {
    return <>
        <Header page={5} />
        <div className='w-fit m-auto text-5xl font-bold p-16 text-center text-p-d'>
            {service.title}
            <div className='mt-8 text-2xl max-w-5xl font-medium opacity-80'>{service.text}</div>
        </div>

        <div className='flex flex-wrap m-auto max-w-7xl'>
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="270" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M39.8,-68.3C51.4,-62.4,60.2,-51.1,69.2,-38.9C78.1,-26.6,87.2,-13.3,87.2,0C87.3,13.4,78.4,26.8,69.6,39.3C60.8,51.8,52.1,63.4,40.5,70.8C28.9,78.1,14.5,81.2,-0.2,81.5C-14.8,81.8,-29.7,79.5,-42.9,73.1C-56.2,66.7,-68,56.4,-74.1,43.5C-80.2,30.7,-80.7,15.3,-80.3,0.2C-79.9,-14.9,-78.5,-29.7,-71.9,-41.6C-65.2,-53.5,-53.2,-62.4,-40.3,-67.6C-27.5,-72.7,-13.7,-74,0.2,-74.4C14.2,-74.7,28.3,-74.2,39.8,-68.3Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[0].text} title={service.sub_services[0].title} price={service.sub_services[0].price} per={service.sub_services[0].per} />
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="270" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M44.3,-73.6C58,-68.9,69.9,-58.1,76,-44.8C82.1,-31.5,82.3,-15.8,82.7,0.2C83.1,16.2,83.7,32.4,76.9,44.6C70.2,56.7,56.1,64.7,42.1,70.9C28,77.1,14,81.4,-0.3,82C-14.7,82.6,-29.4,79.5,-43.3,73.2C-57.3,67,-70.5,57.7,-75.8,45C-81,32.2,-78.3,16.1,-78.6,-0.2C-78.9,-16.5,-82.2,-32.9,-77.8,-47C-73.3,-61.1,-61.1,-72.9,-46.8,-77.3C-32.6,-81.8,-16.3,-78.9,-0.5,-78C15.3,-77.2,30.7,-78.4,44.3,-73.6Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[1].text} title={service.sub_services[1].title} price={service.sub_services[1].price} per={service.sub_services[1].per} />
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="270" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M44.8,-80.4C56.4,-70.9,63,-55.5,68.5,-41.1C74.1,-26.8,78.6,-13.4,78.2,-0.2C77.8,12.9,72.6,25.9,65.4,37.5C58.2,49,49.1,59.2,37.9,69.1C26.7,78.9,13.4,88.4,0,88.4C-13.4,88.5,-26.7,79,-38.6,69.5C-50.4,60,-60.6,50.4,-69.2,38.8C-77.9,27.3,-84.9,13.6,-87,-1.2C-89.1,-16.1,-86.4,-32.2,-78.9,-45.8C-71.5,-59.4,-59.3,-70.5,-45.4,-78.7C-31.4,-86.9,-15.7,-92.1,0.4,-92.9C16.6,-93.7,33.2,-90,44.8,-80.4Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[2].text} title={service.sub_services[2].title} price={service.sub_services[2].price} per={service.sub_services[2].per} />
        </div>
        <div className='my-52' />
        <SpliterSvg svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="1242" height="121" viewBox="0 0 1242 121" fill="none">
            <path d="M1242 31L1148.59 0.880273L1169.21 96.8388L1242 31ZM1.99031 92.2007C51.0191 86.4494 150.142 77.677 253.69 76.2576C357.624 74.8329 464.596 80.8594 530.17 104.015L535.83 87.985C467.081 63.708 357.312 57.8356 253.457 59.2592C149.215 60.6881 49.4982 69.5112 0.00969059 75.3165L1.99031 92.2007ZM530.17 104.015C561.262 114.995 603.805 119.909 652.782 120.67C701.919 121.432 758.203 118.015 817.14 111.946C935.021 99.8078 1064.1 76.9982 1168.94 55.3952L1165.51 38.745C1060.96 60.2869 932.498 82.9777 815.399 95.0357C756.845 101.065 701.279 104.42 653.046 103.672C604.654 102.921 564.307 98.0409 535.83 87.985L530.17 104.015Z" fill="#8FC3D9"/>
            </svg>
        } />
        <FeedbackWidget />
        <Footer />
    </>;
}