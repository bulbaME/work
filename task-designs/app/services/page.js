import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { ProductCard } from "../_modules/product_card";
import { services } from "@/app/data.json"; 
import { Paragraph } from "../_modules/paragraph";
import Statistics from "../_modules/statistics";
import { ButtonDark } from "../_modules/buttons";

export default function Main() {
    return <>
        <Header page={3} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 mb-0 text-4xl sm:text-6xl font-semibold'>Transform Your Brand with Our Services!</div>
        <div className='max-w-7xl m-auto md:flex my-16'>
            <ProductCard title={services[0].title} descr={services[0].descr} link={services[0].link} />
            <ProductCard title={services[1].title} descr={services[1].descr} link={services[1].link} />
            <ProductCard title={services[2].title} descr={services[2].descr} link={services[2].link} />
        </div>
        <div className='max-w-3xl text-center font-bold m-auto p-10 text-xl'>{"Are you ready to take your brand to the next level? Let our team of expert designers and creative thinkers help you create stunning visual solutions that captivate your audience and drive business growth. Contact us today to discuss your design needs and embark on a design journey that will transform your brand. Together, let's create something extraordinary!"}</div>
        <div className='w-fit m-auto mb-32'>
            <ButtonDark text='Learn more about us' route='/about' />
        </div>
        <Paragraph img='/img/17.jpg' title='Redefining Digital Presence: Crafted with Design Excellence' text="At our design-focused hub, we believe that every pixel matters. We obsess over the details, meticulously crafting visually stunning landing pages that seamlessly blend aesthetics with functionality. Our team of talented designers and developers are passionate about creating digital experiences that not only look beautiful but also deliver exceptional user experiences. We understand the importance of a strong first impression, and our mission is to help you make a statement in the crowded digital world. Step into our world and let us redefine what's possible for your online presence."  />
        <div className='my-16'>
            <Statistics />
        </div>
        <Footer />
    </>;
}