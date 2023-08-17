import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, WAppear, WProcess, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-1 w-full h-[10rem] -mb-[4rem]' />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl font-bold text-white text-center underline decoration-8 decoration-m-m'>
                Our Services.
            </div>
        </WAppear></div>
        <WServices />
        <P1L title="Our Services" slogan="Bridging Language Gaps, Unlocking Possibilities" img='/img/6.jpg' text="Welcome to our Services page, where language is transformed into a bridge connecting people, cultures, and opportunities. At StealthTranslator, we offer a comprehensive range of translation and localization solutions designed to meet your unique communication needs. From accurate document translations to dynamic multimedia adaptations, our services are tailored to ensure your message resonates globally. Discover the world of possibilities that language can unlock and explore how our expertise can elevate your reach, impact, and connections. Explore our diverse service offerings below and take the first step towards seamless communication on a global scale." />
        <WProcess />
        <Footer />
    </>;
}