import Header from "../_modules/header";
import Footer from "../_modules/footer";
import { ProductCard } from "../_modules/product_card";

import { services } from "../data.json";
import { Paragraph } from "../_modules/paragraph";
import { expirience } from "../data.json"

export default function Main() {
    return <>
        <Header page={4} />
        <div className='background-4 my-6 text-5xl font-extrabold text-center text-slate-800 px-3 py-10 m-2'>
            Our services.
        </div>
        <div className='font-bold p-10 text-2xl text-center'>
        Ready to supercharge your brand&apos;s messaging and drive remarkable results? Contact us now to explore our comprehensive range of copywriting services and unleash the power of persuasive content. Get in touch today for a personalized consultation and let us transform your brand&apos;s story into a compelling narrative that resonates with your audience
        </div>
        <div className='flex flex-wrap w-full'>
            <ProductCard link={services[0].link} title={services[0].title} descr={services[0].descr} />
            <ProductCard link={services[1].link} title={services[1].title} descr={services[1].descr} />
            <ProductCard link={services[2].link} title={services[2].title} descr={services[2].descr} />
        </div>
        <Paragraph img='/img/13.jpg' text="At XCopywriter, we offer expert website copywriting, engaging content creation, and impactful social media copywriting services. Our team of skilled copywriters crafts compelling and persuasive content tailored to your brand, helping you captivate your audience, establish thought leadership, and drive engagement. With our services, you can elevate your brand's messaging, boost online visibility, and achieve tangible results." />
        <Footer />
    </>;
}