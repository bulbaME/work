import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear, WServices, to_link } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-white header-title'>
                    {"Our SEO Solutions"}
                </div>
                <div className='sm:text-3xl text-xl text-white mt-4'>
                    {"Elevating Your Brand's Online Presence"}
                </div>
            </WAppear></div>
        </div>
        <WServices />
        <P1L
            title="Embrace Digital Excellence"
            text="Embrace the era of digital excellence with SeoSergeant. Our mission is to equip your brand with the tools and strategies needed to thrive in the dynamic online landscape. From optimizing your online presence to connecting with your target audience, our services are designed to propel your brand forward in the digital realm."
            img="/img/6.jpg"
        />
        <P1R
            title="Your Strategic Partner in Success"
            text="At SeoSergeant, we're not just service providers; we're your strategic partners on the journey to success. Our collaborative approach involves understanding your business inside out and tailoring strategies that align with your goals. Let us be the driving force behind your digital transformation, ensuring that your brand flourishes in the online world."
            img="/img/7.jpg"
        />
        <P1L
            title="Ignite Your Digital Momentum"
            text="Ignite your brand's digital momentum with SeoSergeant. Our expertise goes beyond traditional marketing approaches; we're here to amplify your brand's impact in the digital sphere. By blending data-driven insights, creative strategies, and industry know-how, we create a dynamic online presence that captures attention and drives engagement."
            img="/img/8.jpg"
        />
        <div className='w-fit m-auto border-[1px] px-4 p-3 my-12 rounded-full hover:drop-shadow-lg duration-300 hover:border-b-m bg-white'><Link href='/contact' className='flex'>
            <div className='sm:text-xl text-lg font-bold'>
                Get Started
            </div>
            <div className='my-auto ml-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="sm:w-6 sm:h-6 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </Link></div>
        <Footer />
    </>;
}