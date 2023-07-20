import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, ServiceCard } from "@/modules/widgets";
import { services } from "@/public/json/data.json";

const s = services[0];

export default function x() {
    return <> 
        <Header page={5} />
        <div className='text-center text-4xl sm:text-7xl text-white font-bold underline decoration-v1-l p-4 sm:py-16'>
            {s.title}
        </div>
        <div className='max-w-5xl text-xl sm:text-3xl m-auto text-center text-white font-medium my-8 sm:my-16 p-4'>
            {s.text}
        </div>
        <div className='flex flex-wrap max-w-7xl m-auto my-36'>
            <ServiceCard title={s.services[0].title} text={s.services[0].text} price={s.services[0].price} per={s.services[0].per} />
            <ServiceCard title={s.services[1].title} text={s.services[1].text} price={s.services[1].price} per={s.services[1].per} />
            <ServiceCard title={s.services[2].title} text={s.services[2].text} price={s.services[2].price} per={s.services[2].per} />
        </div>
        <Paragraph img='/img/12.jpg' route_text='Where Creativity Meets Functionality' title="Crafting Digital Experiences, One Click at a Time" text="At DiscountDesigner, our Website Design and Development services combine creativity with cutting-edge technology to craft exceptional digital experiences. We take pride in designing visually stunning websites that not only capture your brand's essence but also engage and captivate your audience. From intuitive user interfaces to seamless navigation, every aspect of our web design is carefully tailored to leave a lasting impression. Our skilled developers bring these designs to life, ensuring your website performs flawlessly on all devices. Whether you need a sleek corporate website or a robust e-commerce platform, we are here to elevate your online presence and provide you with a digital edge that sets you apart from the competition." route='/contact' />
        <Footer />
    </>;
}