import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { Paragraph, ParagraphL } from "@/app/_modules/paragraph";
import { SubProductCard } from "@/app/_modules/product_card";
import { BigButtonGreen } from "@/app/_modules/bit_button";

import { services } from "@/app/data.json"; 

const service = services[0].sub_services;

export default function Main() {
    return <>
        <Header page={5} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-5xl font-bold'>{services[0].title}</div>
        <div className='max-w-3xl p-5 my-10 m-auto font-medium text-3xl'>{"Transforming Words, Connecting Worlds: Our Document Translation, Your Global Impact."}</div>
        <div className='flex flex-wrap max-w-6xl m-auto'>
            <SubProductCard title={service[0].title} descr={service[0].text} price={service[0].price} />
            <SubProductCard title={service[1].title} descr={service[1].text} price={service[1].price} />
            <SubProductCard title={service[2].title} descr={service[2].text} price={service[2].price} />
        </div>
        <div className='max-w-4xl m-auto'>
            <Paragraph img='/img/9.jpg' title='Our Document Translation Services' text="In today's interconnected world, effective communication is paramount for businesses and individuals alike. At Nets Translator, we understand the power of words and the impact they can have on connecting cultures and driving success. Our document translation services are designed to bridge language barriers, enabling you to communicate your message accurately and seamlessly to a global audience." />
            <ParagraphL img='/img/10.jpg' title='Translating Documents with Care and Nuance' text="Whether you need legal documents, business materials, or academic papers translated, our team of skilled translators are here to help. With a deep understanding of language nuances and subject matter expertise, we ensure that every document is translated with utmost precision, maintaining the integrity and essence of the original content. We go beyond mere translation, providing culturally sensitive adaptations that resonate with your target audience." />
            <Paragraph img='/img/11.jpg' title='Expand Your Reach with Document Translation' text="By choosing our document translation services, you unlock a world of opportunities. Expand your business into new markets, reach a diverse customer base, and establish meaningful connections with international partners. Present your brand, products, and services in a way that resonates with local audiences, demonstrating your commitment to their needs and preferences. Our accurate and professional translations help you navigate global landscapes with confidence and clarity." />
            <ParagraphL img='/img/12.jpg' title='Our Commitment to Your Documents' text="At Nets Translator, we prioritize quality, confidentiality, and timely delivery. We understand that your documents are sensitive and important, which is why we handle them with the utmost care and maintain strict data security measures. Whether you require certified translations, legal document translations, or precise technical translations, we have the expertise and resources to fulfill your requirements." />
            <div className='my-3 mb-16'>
                <BigButtonGreen text='Reach us today' route='/contact' /> 
            </div>
        </div>
        <Footer />
    </>;
}