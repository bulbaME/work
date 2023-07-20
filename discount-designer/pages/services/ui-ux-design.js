import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, ServiceCard } from "@/modules/widgets";
import { services } from "@/public/json/data.json";

const s = services[2];

export default function X() {
    return <> 
        <Header page={7} />
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
        <Paragraph img='/img/14.jpg' route_text='Where User Needs Shape Every Pixel' title="Engaging Experiences, Unmatched User Delight" text="At DiscountDesigner, our UI/UX Design services prioritize user satisfaction and engagement above all else. We believe that a great user experience is the key to winning hearts and boosting conversions. Our team of experts combines creativity with user-centered design principles to create interfaces that are not only visually appealing but also intuitive and easy to navigate. From wireframing and prototyping to pixel-perfect designs, we ensure every interaction is seamless and enjoyable. Whether it's a mobile app or a website, our focus on usability and aesthetics guarantees an experience that keeps users coming back for more, turning them into loyal advocates of your brand." route='/contact' />
        <Footer />
    </>;
}