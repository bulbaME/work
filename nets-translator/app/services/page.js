import { BigButtonGreen } from "../_modules/bit_button";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { Paragraph } from "../_modules/paragraph";
import { ProductCard } from "../_modules/product_card";

import { services } from "@/app/data.json";
import { Rating } from "../_modules/widgets";

export default function Main() {
    return <>
        <Header page={4} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-5xl sm:text-5xl font-semibold'>Elevate Your Communication</div>
        <div className='max-w-3xl p-5 my-10 m-auto font-medium text-3xl'>{"Embrace the Power of Our Services Today. Discover the perfect language solutions for your needs on our Services Page. Break through language barriers and unlock a world of possibilities. Invest in effective communication and seize new opportunities now."}</div>
        <div className='flex flex-wrap max-w-6xl m-auto'>
            <ProductCard title={services[0].title} descr={services[0].text} link={services[0].link} />
            <ProductCard title={services[1].title} descr={services[1].text} link={services[1].link} />
            <ProductCard title={services[2].title} descr={services[2].text} link={services[2].link} />
        </div>
        <div className='max-w-4xl m-auto'>
            <Paragraph img='/img/8.jpg' title='Expand Your Reach, Ignite Your Success' text="Ready to unlock your business's global potential? Contact us today to discuss your language needs, request a personalized quote, or explore how our services can fuel your international growth. Take the next step towards success and let us be your trusted language partner." />
        </div>
        <Rating />
        <div className='my-20'>
            <BigButtonGreen text='Reach us today' route='/contact' />
        </div>
        <Footer />
    </>;
}