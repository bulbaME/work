import Header from "@/app/_modules/header";
import Footer from "@/app/_modules/footer";
import { services } from "@/app/data.json";
import { Paragraph, ProductCard } from "@/app/_modules/widgets";
import { ButtonL } from "@/app/_modules/buttons";

const service = services[0];

export default function Main() {
    return <>
        <Header page={5} />
        <div className='max-w-7xl m-auto text-center p-4'>
            <div className='font-bold text-4xl my-12'>
                { service.title }
            </div>
            <div className='w-[20rem] h-px bg-r-l m-auto' />
            <div className='font-semibold text-xl max-w-2xl m-auto my-12 p-4'>
                { service.text }
            </div>
        </div>
        <div className='max-w-7xl p-4 m-auto my-12 flex flex-wrap'>
            <ProductCard title={service.services[0].title} text={service.services[0].text} price={service.services[0].price} per={service.services[0].per} />
            <ProductCard title={service.services[1].title} text={service.services[1].text} price={service.services[1].price} per={service.services[1].per} />
            <ProductCard title={service.services[2].title} text={service.services[2].text} price={service.services[2].price} per={service.services[2].per} />
        </div>
        <div className='max-w-7xl p-4 m-auto'>
            <Paragraph img='/img/15.jpg' route='/contact' route_text="Build a Timeless Brand. Get in Touch Today!" title='Craft a Lasting Brand Identity' text="Our Elegant Branding Solutions are designed to help your business make a lasting impression. From conceptualizing a captivating logo to developing comprehensive brand guidelines, our talented designers will create a brand identity that truly reflects your unique essence. By harmonizing colors, typography, and visual elements, we ensure a cohesive and visually appealing representation of your brand. Elevate your professionalism and establish a memorable brand identity that sets you apart from the competition." />
        </div>
        <div className='background-2 py-32 pb-28'>
            <div className='text-center m-auto w-fit text-white font-bold text-4xl'>
                Let&apos;s Bring Your Vision to Life
                <div className='my-4' /> 
                <ButtonL route='/contact' text="Contact us today" />
            </div>
        </div>
        <Footer />    
    </>;
}