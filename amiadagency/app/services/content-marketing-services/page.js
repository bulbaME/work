import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { ProductCard } from "@/app/_modules/product_card";
import { services } from "@/app/data.json";
import { SpliterSvg } from "@/app/_modules/spliter";
import { FeedbackWidget } from "@/app/_modules/widgets";

const service = services[1];

export default function Main() {
    return <>
        <Header page={6} />
        <div className='w-fit m-auto text-5xl font-bold p-16 text-center text-p-d'>
            {service.title}
            <div className='mt-8 text-2xl max-w-5xl font-medium opacity-80'>{service.text}</div>
        </div>

        <div className='flex flex-wrap m-auto max-w-7xl'>
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M45.1,-76.3C59.4,-69.8,72.6,-59.7,79.5,-46.4C86.4,-33.1,86.9,-16.5,85,-1.1C83.2,14.4,79,28.8,72.4,42.5C65.7,56.3,56.7,69.4,44.2,77.9C31.8,86.5,15.9,90.4,1.6,87.7C-12.7,84.9,-25.4,75.4,-39.8,68C-54.2,60.6,-70.4,55.3,-78.4,44.3C-86.3,33.3,-86.1,16.7,-82.8,1.9C-79.4,-12.8,-72.9,-25.6,-65.7,-37.8C-58.4,-49.9,-50.3,-61.5,-39.2,-69.9C-28.1,-78.3,-14.1,-83.5,0.7,-84.6C15.4,-85.8,30.7,-82.8,45.1,-76.3Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[0].text} title={service.sub_services[0].title} price={service.sub_services[0].price} per={service.sub_services[0].per} />
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M46.5,-78.4C60.1,-72.6,71,-60,76.4,-45.8C81.8,-31.5,81.6,-15.8,79.6,-1.2C77.5,13.4,73.5,26.7,66.2,37.7C59,48.7,48.6,57.4,37,65.2C25.4,73.1,12.7,80.2,-0.9,81.8C-14.5,83.3,-29,79.3,-42.4,72.5C-55.9,65.7,-68.3,56.2,-77.2,43.6C-86.1,31.1,-91.4,15.5,-91.1,0.2C-90.7,-15.1,-84.6,-30.3,-75.8,-42.8C-66.9,-55.3,-55.2,-65.3,-42.1,-71.3C-29,-77.3,-14.5,-79.5,1,-81.1C16.4,-82.8,32.8,-84.1,46.5,-78.4Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[1].text} title={service.sub_services[1].title} price={service.sub_services[1].price} per={service.sub_services[1].per} />
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M46.8,-80.9C61.2,-72.8,73.8,-61.3,79.6,-47.3C85.3,-33.2,84.4,-16.6,84.2,-0.1C84,16.4,84.5,32.7,78.8,47C73.2,61.2,61.2,73.3,47.1,78.9C32.9,84.5,16.4,83.5,0.6,82.5C-15.3,81.5,-30.5,80.4,-41.8,73.1C-53,65.9,-60.2,52.4,-65.9,39.2C-71.6,26,-75.7,13,-76.9,-0.7C-78.1,-14.4,-76.5,-28.8,-71,-42.2C-65.4,-55.7,-56,-68.1,-43.5,-77.3C-31,-86.5,-15.5,-92.5,0.4,-93.1C16.2,-93.7,32.4,-89,46.8,-80.9Z" transform="translate(100 100)" />
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