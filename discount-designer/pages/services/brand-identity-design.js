import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, ServiceCard } from "@/modules/widgets";
import { services } from "@/public/json/data.json";

const s = services[1];

export default function x() {
    return <> 
        <Header page={6} />
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
        <Paragraph img='/img/13.jpg' route_text='Transforming Visions into Visual Stories' title="Defining Your Brand's Signature, Making It Unforgettable" text="At DiscountDesigner, our Brand Identity Design services are dedicated to giving your brand a distinct and unforgettable personality. We understand that your brand is more than just a logo; it's a story waiting to be told. Our expert designers take the time to understand your values, aspirations, and target audience, translating them into an authentic visual language. From crafting timeless logos to defining color palettes and typography, we create a cohesive brand identity that communicates your unique story. Empower your brand to stand out in a crowded market, build trust with customers, and establish a lasting connection with our transformative design solutions." route='/contact' />
        <Footer />
    </>;
}