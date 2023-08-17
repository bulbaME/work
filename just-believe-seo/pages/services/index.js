import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WFeautres, WServices, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg1 w-full'>
            <div className='max-w-7xl m-auto p-6 text-center py-12'>
                <div className='sm:text-3xl text-xl text-white font-extrabold'>
                    {"Our SEO Services - Elevate Your Digital Presence!"}
                </div>
                <div className='sm:text-xl text-white opacity-70 font-bold mt-4'>
                    {"Discover a world of tailored SEO solutions that drive results!"}
                </div>
            </div>
        </div>
        <WServices />
        <WFeautres />
        <div className='max-w-7xl m-auto p-6 my-12 flex flex-wrap'>
            <div className='text-center font-semibold sm:text-xl pb-4 md:w-2/3'>
                {"Curious to know more about JustBelieveSeo and our journey in the world of SEO? Explore our About page to discover the story behind our success, our team of dedicated experts, and our commitment to helping businesses like yours thrive in the digital landscape."}
            </div>
            <div className='md:w-1/3 h-fit m-auto px-4 text-center'>
                <div className='w-fit m-auto px-4 py-3 font-extrabold my-3 sm:text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href='/about'>Learn Our Story</Link>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}