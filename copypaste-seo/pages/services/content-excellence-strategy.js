import Footer from "@/modules/footer";
import Header from "@/modules/header";

import { services } from "@/modules/data";
import { Cta, P1L, WAppear, WService } from "@/modules/widgets";
const I = 0;

const s = services[I];

export default function X() {
    return <>
        <Header page={5 + I} />
        <div className=''>
            <div className='max-w-3xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-center'>
                    {s.title}
                </div>
                <div className='sm:text-xl text-lg font-bold text-g-m text-center mt-4'>
                    {s.text_short}
                </div>
            </WAppear></div>
        </div>
        <WService s={s} i={I} />
        <P1L 
            title={s.title}
            slogan=""
            text={s.text_long}
            img={`/img/${12+I}.jpg`}
        />
        <Cta
            title='Collaborate for Excellence'
            text="Your journey towards digital excellence begins with a single step – reaching out. Our team is eager to understand your unique goals and design tailored strategies that align with your aspirations. Let's collaborate to craft your digital success story."
            cta="Collaborate with Us for Digital Excellence"
            link='/contact'
        />
        <Footer />
    </>;
}