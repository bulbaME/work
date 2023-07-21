import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { ParagraphBanner, ServiceCard, WidgetShortAbout } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[1];

export default function X() {
    return <>
        <Header page={6} />
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
        <ParagraphBanner title='Ensure Accuracy and Authenticity' slogan='Precision Sealed, Trust Secured' bg='7' text="Certify your success with our Certified Document Translation services. Our meticulous linguists and subject matter experts provide precise translations for legal documents, immigration papers, certificates, and official business records. With a focus on confidentiality and security, we deliver translations that stand up to scrutiny and instill trust in your legal and official matters."  />
        <WidgetShortAbout />
        <Footer />
    </>;
}