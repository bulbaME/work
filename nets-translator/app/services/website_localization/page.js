import { BigButtonGreen } from "@/app/_modules/bit_button";
import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { Paragraph, ParagraphL } from "@/app/_modules/paragraph";
import { SubProductCard } from "@/app/_modules/product_card";

import { services } from "@/app/data.json"; 

const service = services[1].sub_services;

export default function Main() {
    return <>
        <Header page={6} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-5xl font-bold'>{services[1].title}</div>
        <div className='max-w-3xl p-5 my-10 m-auto font-medium text-3xl'>{"Speak the Language of Success: Amplify Your Online Presence with Website Localization"}</div>
        <div className='flex flex-wrap max-w-6xl m-auto'>
            <SubProductCard title={service[0].title} descr={service[0].text} price={service[0].price} />
            <SubProductCard title={service[1].title} descr={service[1].text} price={service[1].price} />
            <SubProductCard title={service[2].title} descr={service[2].text} price={service[2].price} />
        </div>
        <div className='max-w-4xl m-auto'>
            <Paragraph img='/img/17.jpg' title='Reach Customers Worldwide with Translated Websites' text="Expand your online presence and connect with customers across the globe through our website localization services. Our team of expert linguists and localization specialists will translate your website content, ensuring that your message is accurately conveyed in the target language. By localizing your website, you can captivate international audiences, build trust, and increase engagement." />
            <ParagraphL img='/img/18.jpg' title='Seamless User Experience with UI Localization' text="Achieve a seamless user experience for your international visitors through UI localization. Our team will adapt and translate user interface elements, such as buttons, menus, forms, and error messages, making navigation intuitive and user-friendly. By providing a localized interface, you can create a positive impression, increase user satisfaction, and drive conversions on your website." />
            <Paragraph img='/img/19.jpg' title='Tap into New Markets with E-commerce Localization' text="Maximize your e-commerce potential by localizing your online store. Our e-commerce localization services ensure that your product descriptions, pricing, and checkout process are tailored to each target market. By adapting your website to local preferences, currencies, and payment methods, you can enhance the shopping experience, gain trust, and drive global sales." />
            <ParagraphL img='/img/20.jpg' title='Increase Online Visibility with Multilingual SEO' text="Improve your website's search engine rankings and attract a wider audience with our multilingual SEO services. Our experts will conduct keyword research and optimize your website's meta tags, headings, and content to align with target markets. By speaking the language of your customers in search results, you can increase visibility, drive organic traffic, and grow your international reach." />
            <div className='my-3 mb-16'>
                <BigButtonGreen text='Reach us today' route='/contact' /> 
            </div>
        </div>
        <Footer />
    </>;
}