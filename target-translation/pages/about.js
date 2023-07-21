import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, CtaC, ParagraphBanner, WidgetTestimonies } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='w-full background-about flex'>
            <div className='max-w-7xl m-auto w-full'>
                <div className='m-auto mt-[5rem] text-center p-8 sm:max-w-[58rem]'>
                    <div className='text-white font-extrabold text-2xl sm:text-4xl decoration-g-l decoration-8'>
                        {"About Target Translation"}
                    </div>
                    <div className='text-white font-semibold text-xl sm:text-3xl my-16'>
                        {"At Target Translation, we are dedicated to breaking down language barriers and opening doors to a world of opportunities. Our journey began with a clear vision - to provide precise and culturally nuanced translations that help individuals and businesses connect with diverse global audiences. As a leading language services provider, we pride ourselves on delivering excellence in every word we translate."}
                    </div>
                </div>
            </div>
        </div>
        <ParagraphBanner slogan='Linguistic Passion, Global Expertise' title='A Team of Language Experts' bg='1' text="Our team at Target Translation is composed of passionate language enthusiasts, skilled linguists, and subject matter specialists. Each member brings a unique perspective, expertise, and dedication to delivering language solutions that resonate with audiences from different cultural backgrounds. Together, we form a cohesive unit that embraces linguistic diversity and strives for linguistic excellence." />
        <ParagraphBanner slogan='Elevating Translations, Inspiring Impact' title='Precision Beyond Borders' bg='2' text="At Target Translation, we understand the importance of conveying your message accurately and effectively. Our native-speaking translators are experts in their respective fields, ensuring that your content maintains its authenticity while catering to the cultural nuances of your target audience. We go beyond just translating words; we convey the essence and emotion of your message to create a lasting impact." />
        <ParagraphBanner slogan='Translating Connections, Fueling Success' title='Connecting Cultures, Empowering Growth' bg='3' text="We believe that language should never be a barrier to success. Target Translation serves as a language bridge, connecting cultures and empowering growth for individuals and businesses alike. Our translations facilitate meaningful interactions, enabling you to expand your global reach and seize new opportunities in the international arena." />
        <ParagraphBanner slogan='Uniting Words, Unlocking Worlds' title='Embark on Your Global Journey' bg='4' text="We invite you to embark on your global journey with Target Translation. Whether you are a multinational corporation navigating international markets or an individual seeking certified translations for personal documents, our dedicated team is here to support you every step of the way. Let us be your language partner in achieving global success." />
        <CtaC route='/contact' text='Contact Us Today' />
        <WidgetTestimonies />
        <Footer />
    </>;
}