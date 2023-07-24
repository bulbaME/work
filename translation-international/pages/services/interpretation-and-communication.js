import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, ServiceCard, WidgetFeatures } from "@/modules/widgets";
import Link from "next/link";

import { services } from "@/public/json/data.json";

const s = services[2];

export default function X() {
    return <>
        <Header page={7} />
        <div className='max-w-6xl m-auto p-4 mt-10 flex-wrap'>
            <div className='text-black font-bold text-3xl'>{s.title}</div>
            <div className='my-8 text-xl font-semibold text-y-d'>{s.text_short}</div>
        </div>
        <div className='max-w-6xl m-auto mb-36 flex flex-wrap'>
            <ServiceCard title={s.services[0].title} text={s.services[0].text} price={s.services[0].price} per={s.services[0].per} />
            <ServiceCard title={s.services[1].title} text={s.services[1].text} price={s.services[1].price} per={s.services[1].per} />
            <ServiceCard title={s.services[2].title} text={s.services[2].text} price={s.services[2].price} per={s.services[2].per} />
        </div>
        <Paragraph img='/img/12.jpg' text={s.text_long} />
        <WidgetFeatures />
        <div className='max-w-6xl p-4 m-auto my-24'>
            <div className='text-xl text-y-d font-semibold'>
                {"Unlock the power of effective global communication with Translation International. Whether you need precise document translations, captivating multilingual content, or seamless interpretation services, we have the expertise to meet your language needs. Let's build bridges between cultures and empower your success on the global stage. Reach out to our friendly team today and start your journey towards effective global communication!"}
            </div>
            <div className='text-2xl font-bold text-center my-8 underline decoration-y-l hover:decoration-b-l duration-300 decoration-4'>
                <Link href='/contact'>{"Ready to Connect with the World? Contact Us Today!"}</Link>
            </div>
        </div>
        <Footer />
    </>;
}