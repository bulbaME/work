import Footer from "@/modules/footer"
import Header from "@/modules/header"
import { WAboutSmall, WService } from "@/modules/widgets"
import { services } from "@/public/json/data.json"

const s = services[1]

export default function X() {
    return <> 
        <Header page={7} />
        <div className='max-w-7xl m-auto p-6 py-10 text-center'>
            <div className='sm:text-3xl text-xl font-bold text-b-m'>
                {s.title}
            </div>
            <div className='sm:text-xl text-lg text-b-d font-bold my-4'>
                {s.text_short}
            </div>
        </div>
        <WService s={s.services} />
        <div className='max-w-7xl m-auto p-6 sm:text-lg font-medium my-12'>
            <div className='p-4 border-[1px] rounded-2xl'>
                {s.text_long}
            </div>
        </div>
        <WAboutSmall />
        <Footer />
    </>
}