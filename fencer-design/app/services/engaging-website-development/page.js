import Header from "@/app/_modules/header";
import Footer from "@/app/_modules/footer";
import { services } from "@/app/data.json";
import { Paragraph, ProductCard } from "@/app/_modules/widgets";
import { ButtonL } from "@/app/_modules/buttons";

const service = services[1];

export default function Main() {
    return <>
        <Header page={6} />
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
            <Paragraph img='/img/13.jpg' route='/contact' route_text="Make an Impact Online. Contact Us Now!" title='Create Digital Experiences that Captivate' text="With our Engaging Website Development services, we specialize in crafting immersive digital experiences that captivate your audience. Our skilled designers and developers combine stunning visuals, user-friendly interfaces, and seamless functionality to create websites that leave a lasting impact. Whether you need a responsive website, an e-commerce platform, or a portfolio showcase, we have the expertise to bring your online presence to life. Get ready to engage your visitors and make a memorable impression in the digital landscape." />
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