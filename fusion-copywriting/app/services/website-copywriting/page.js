import Header from "@/app/_modules/header";
import { services } from "../../data.json"
import Footer from "@/app/_modules/footer";
import { SubProductCard } from "@/app/_modules/product_card";
import { Paragraph } from "@/app/_modules/paragraph";
import { Rating } from "@/app/_modules/exp_widget";
import BigButton from "@/app/_modules/big_button";

const service = services[0];
const products = service.sub_services;

export default function Main() {
    return <>
    <Header />
    <div className='background-5 my-6 text-5xl font-extrabold text-center text-slate-800 px-3 py-10 m-2'>
            Website copywriting.
    </div>
    <Paragraph text={service.text} img='/img/18.jpg' />
    <div className='flex flex-wrap w-full'>
        <SubProductCard title={products[0].title} price={products[0].price} descr={products[0].descr} />
        <SubProductCard title={products[1].title} price={products[1].price} descr={products[1].descr} />
        <SubProductCard title={products[2].title} price={products[2].price} descr={products[2].descr} />
    </div>
    <Rating />
    <BigButton text='Learn more about our company' route='/about' />
    <Footer />
    </>;
}