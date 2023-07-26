import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, WServices, WWhyUs } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='w-full bg-1 py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {"Our Creative Offerings - Shaping Brands with Design Excellence"}
            </div>
            <div className='sm:text-2xl text-lg text-center text-c font-bold mt-4'>
                {"Empowering Brands with Innovation, One Design at a Time."}
            </div>
        </div>
        <WServices />
        <WWhyUs />
        <Cta route='/contact' cta='Reach out today' title='Where Vision Meets Reality' text="Empower Your Brand's Growth - Discover Our Design Solutions." />
        <Footer />
    </>;
}