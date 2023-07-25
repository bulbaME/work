import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { ServicesC, ServicesSmallW } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='w-full bg-h bg-3 py-[6rem]'>
            <div className='max-w-7xl m-auto w-full p-4'>
                <div className='text-center text-r-l font-bold sm:text-3xl text-xl my-4'>
                    {"Crafting Solutions Tailored for You!"}
                </div>
                <div className='text-center text-white font-bold sm:text-5xl text-3xl'>
                    Our Expert Services
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto bg-b bg-4'>
            <ServicesC img='' />
        </div>
        <Footer />
    </>;
}