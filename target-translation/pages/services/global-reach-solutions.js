import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { ParagraphBanner, ServiceCard, WidgetShortAbout } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[0];

export default function X() {
    return <>
        <Header page={5} />
        <div className='max-w-7xl p-8 m-auto text-center'>
            <div className='text-3xl sm:text-5xl font-extrabold underline decoration-c-l'>
                {s.title}
            </div>
            <div className='text-xl sm:text-3xl font-semibold mt-8 mb-16 max-w-5xl m-auto'>
                {s.text}
            </div>
        </div>
        <div className='max-w-7xl m-auto p-8 flex flex-wrap'>
            <ServiceCard title={s.services[0].title} text={s.services[0].text} price={s.services[0].price} per={s.services[0].per} />
            <ServiceCard title={s.services[2].title} text={s.services[2].text} price={s.services[2].price} per={s.services[2].per} />
            <ServiceCard title={s.services[1].title} text={s.services[1].text} price={s.services[1].price} per={s.services[1].per} />
            <ServiceCard title={s.services[3].title} text={s.services[3].text} price={s.services[3].price} per={s.services[3].per} />
        </div>
        <ParagraphBanner title='Expand Your Global Presence' slogan='Breaking Barriers, Connecting Worlds' bg='5' text="Reach new horizons with our Global Reach Solutions. From website localization that resonates with international audiences to multilingual social media management that engages followers worldwide, our language services transcend borders, unlocking opportunities in every corner of the globe. Harness the power of international SEO optimization and virtual multilingual customer support to create a seamless global experience for your business."  />
        <WidgetShortAbout />
        <Footer />
    </>;
}