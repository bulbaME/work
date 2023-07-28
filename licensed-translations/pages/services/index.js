import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P1L, WFeatures, WProcess, WServices, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='py-16 m-auto text-center bg-b-m'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                Our Services
            </div>
            <div className='sm:text-3xl text-xl font-bold text-b-l my-4'>
                Bridging Language Barriers
            </div>
        </div>
        <div className='max-w-7xl m-auto p-8'>
            <WServices />
            <WFeatures />
        </div>
        <Cta cta='Contact today' route='/contact' title='Expand Your Horizons' slogan='Reach Global Audiences with Ease' text="Break language barriers and take your business or education to new heights. Embrace professional translation services and open doors to international markets. It's time to expand your horizons!" />
        <Footer/>
    </>;
} 