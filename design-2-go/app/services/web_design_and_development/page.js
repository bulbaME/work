import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { ParagraphLightL } from "@/app/_modules/paragraph";
import { SubProductCard } from "@/app/_modules/product_card";
import { services } from "@/app/data.json";
import { Button } from "@/app/_modules/buttons";

const service = services[1];

export default function Main() {
    return <>
        <Header page={6} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 mb-0 text-4xl sm:text-6xl font-semibold'>{service.title}</div>
        <div className='max-w-3xl text-center font-bold m-auto p-10 text-xl'>{service.descr}</div>
        <div className='md:flex max-w-7xl m-auto'>
            <SubProductCard title={service.sub_services[0].title} descr={service.sub_services[0].descr} price={service.sub_services[0].price} />
            <SubProductCard title={service.sub_services[1].title} descr={service.sub_services[1].descr} price={service.sub_services[1].price} />
            <SubProductCard title={service.sub_services[2].title} descr={service.sub_services[2].descr} price={service.sub_services[2].price} />
        </div>
        <div className='w-full bg-gray-900 p-10 my-16'>
            <div className='max-w-3xl m-auto mb-10 text-white text-xl text-center'>{"Elevate Your Online Presence with a Stunning Website. In today's digital world, a professionally designed and user-friendly website is essential to engage your audience, showcase your products or services, and drive conversions. Our expert team of web designers and developers will work closely with you to understand your business goals and create a website that not only looks impressive but also provides an exceptional user experience across all devices. Ready to take your online presence to new heights? Reach out to us today and let's discuss how we can bring your digital success story to life."}</div>
            <div className='w-fit m-auto'>
                <Button text='Get in touch with us' route='/contact' />
            </div>
        </div>
        <ParagraphLightL img='/img/16.jpg' title='Engaging Online Experiences' text="In today's digital landscape, a compelling and user-friendly website is crucial for your online success. Our web design and development service focuses on creating engaging online experiences that captivate your visitors and drive conversions. From intuitive navigation and visually appealing layouts to seamless functionality and responsive design, we work diligently to create websites that deliver exceptional user experiences across all devices. Whether you need a simple portfolio site or a complex e-commerce platform, our team has the expertise to bring your vision to life." />
        <Footer />
    </>;
}