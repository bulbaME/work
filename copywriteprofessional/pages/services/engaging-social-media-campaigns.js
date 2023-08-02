import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, ServiceCard, WidgetCta, WidgetFeatures } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[1];

export default function page() {
    return <>
        <Header page={6} />
        <div className='sm:mt-0 -mt-[8rem]' />
        <Paragraph title={s.title} slogan='Spark Social Success' text={s.text} img='/img/17.jpg' />
        <div className='max-w-7xl m-auto p-4 flex flex-wrap'>
            <ServiceCard title={s.services[0].title} text={s.services[0].text} price={s.services[0].price} per={s.services[0].per} />
            <ServiceCard title={s.services[1].title} text={s.services[1].text} price={s.services[1].price} per={s.services[1].per} />
            <ServiceCard title={s.services[2].title} text={s.services[2].text} price={s.services[2].price} per={s.services[2].per} />
            <ServiceCard title={s.services[3].title} text={s.services[3].text} price={s.services[3].price} per={s.services[3].per} />
        </div>
        <WidgetCta title="Transform Your Brand's Voice Today" text="Unlock the power of compelling copy. Get in touch with us today to discuss your copywriting needs and elevate your brand's messaging." cta='Contact us' route='/contact' />
        <WidgetFeatures />
        <Footer />
    </>;
}