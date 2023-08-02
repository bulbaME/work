import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { ProductCard } from "@/app/_modules/product_card";
import { services } from "@/app/data.json";
import { SpliterSvg } from "@/app/_modules/spliter";
import { FeedbackWidget } from "@/app/_modules/widgets";

const service = services[2];

export default function Main() {
    return <>
        <Header page={7} />
        <div className='w-fit m-auto text-5xl font-bold p-16 text-center text-p-d'>
            {service.title}
            <div className='mt-8 text-2xl max-w-5xl font-medium opacity-80'>{service.text}</div>
        </div>

        <div className='flex flex-wrap m-auto max-w-7xl'>
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M45.3,-81.1C57.3,-71.5,64.8,-56.6,72.9,-42.2C81.1,-27.8,89.9,-13.9,90.3,0.2C90.7,14.3,82.6,28.7,73.5,41.5C64.5,54.3,54.4,65.6,42,74.8C29.6,83.9,14.8,90.9,-0.3,91.4C-15.5,92,-30.9,86.2,-42.2,76.4C-53.4,66.6,-60.5,52.8,-67.6,39.4C-74.7,26,-82,13,-84.3,-1.3C-86.6,-15.7,-84,-31.3,-76.8,-44.7C-69.7,-58,-57.9,-69,-44.4,-77.8C-30.8,-86.5,-15.4,-93,0.6,-94C16.6,-95,33.2,-90.7,45.3,-81.1Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[0].text} title={service.sub_services[0].title} price={service.sub_services[0].price} per={service.sub_services[0].per} />
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M46.5,-78.4C60.1,-72.6,71,-60,76.4,-45.8C81.8,-31.5,81.6,-15.8,79.6,-1.2C77.5,13.4,73.5,26.7,66.2,37.7C59,48.7,48.6,57.4,37,65.2C25.4,73.1,12.7,80.2,-0.9,81.8C-14.5,83.3,-29,79.3,-42.4,72.5C-55.9,65.7,-68.3,56.2,-77.2,43.6C-86.1,31.1,-91.4,15.5,-91.1,0.2C-90.7,-15.1,-84.6,-30.3,-75.8,-42.8C-66.9,-55.3,-55.2,-65.3,-42.1,-71.3C-29,-77.3,-14.5,-79.5,1,-81.1C16.4,-82.8,32.8,-84.1,46.5,-78.4Z" transform="translate(100 100)" />
                </svg>
            } text={service.sub_services[1].text} title={service.sub_services[1].title} price={service.sub_services[1].price} per={service.sub_services[1].per} />
            <ProductCard svg={
                <svg viewBox="0 0 200 200" width="370" height="260" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M36.8,-66.3C48.3,-57.2,58.7,-48.5,65.5,-37.6C72.4,-26.6,75.7,-13.3,77,0.8C78.4,14.8,77.7,29.7,72.1,42.7C66.5,55.8,55.9,67.1,43,73.1C30.2,79.1,15.1,79.9,0.2,79.6C-14.8,79.3,-29.5,78,-42,71.7C-54.4,65.5,-64.6,54.3,-71.5,41.6C-78.5,28.8,-82.1,14.4,-80.9,0.7C-79.7,-13,-73.7,-26,-67.7,-40.4C-61.7,-54.8,-55.8,-70.6,-44.5,-79.9C-33.2,-89.2,-16.6,-91.9,-2,-88.5C12.7,-85.1,25.3,-75.4,36.8,-66.3Z" transform="translate(100 100)" />
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