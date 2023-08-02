import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";

import { SpliterSvg } from "../_modules/spliter";
import { ServiceCard } from "../_modules/product_card";
import { services } from "@/app/data.json";
import { WidgetFeatures } from "../_modules/widgets";
import { ButtonLG } from "../_modules/buttons"; 

export default function Main() {
    return <>
        <Header page={3} />
        <div className='w-fit m-auto text-5xl font-bold p-16 text-center text-p-d'>
            Our services
            <div className='mt-8 text-3xl font-medium opacity-80'>Select a service that suits your company</div>
        </div>
        <SpliterSvg svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="153" viewBox="-50 -50 1230 203" fill="none">
            <path d="M0 150L86.5743 152.212L45.2029 76.1304L0 150ZM715.5 66.4999L717.841 73.6251L715.5 66.4999ZM1066 24L1066 16.5L1066 24ZM1313.5 57.9998L1248.82 0.410928L1231.29 85.22L1313.5 57.9998ZM62.3474 124.606C113.648 101.879 181.242 88.5197 293.38 113.323L296.62 98.6769C181.723 73.2635 110.824 86.7242 56.2717 110.891L62.3474 124.606ZM293.38 113.323C455.881 149.265 586.457 116.794 717.841 73.6251L713.159 59.3747C582.543 102.292 455.119 133.734 296.62 98.6769L293.38 113.323ZM717.841 73.6251C752.055 62.3834 814.149 51.8222 880.572 44.0744C946.835 36.3454 1016.65 31.5 1066 31.5L1066 16.5C1015.89 16.5 945.456 21.4045 878.834 29.1754C812.372 36.9277 748.945 47.6164 713.159 59.3747L717.841 73.6251ZM1066 31.5C1120.57 31.5 1192.8 42.0374 1246.05 51.7112L1248.73 36.9527C1195.32 27.2507 1121.99 16.5 1066 16.5L1066 31.5Z" fill="#F5B0B0"/>
            </svg>
        } />
        <div className='max-w-7xl m-auto p-4 mb-24'>
            <ServiceCard img='/img/29.png' link={services[0].link} title={services[0].title} text={services[0].text} />
            <ServiceCard img='/img/28.png' link={services[1].link} title={services[1].title} text={services[1].text} />
            <ServiceCard img='/img/30.png' link={services[2].link} title={services[2].title} text={services[2].text} />
        </div>
        <WidgetFeatures />
        <div className='flex flex-wrap max-w-7xl m-auto p-8 my-24 text-center'>
            <div className='text-5xl sm:w-2/3 my-10 font-semibold text-p-d'>
                {"Don't Let Your Competitors Outrank You - Act Now!"}
            </div>
            <ButtonLG route='/contact' text='Reach us today!' />
        </div>
        <Footer />
    </>;
}