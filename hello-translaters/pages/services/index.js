import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WProcess, WServices } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='w-full bg-2'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                    {"Our Translation Services"}
                </div>
                <div className='sm:text-2xl text-xl font-bold text-center text-p mt-4'>
                    {"Transcending Language Barriers, Elevating Communication"}
                </div>
            </WAppear></div>
        </div>
        <WServices />
        <WProcess />
        <div className='max-w-7xl m-auto my-16'><WAppear>
            <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                Ready to Elevate Your Communication? <br /> <span className='underline decoration-m decoration-8 hover:decoration-b duration-300'><Link href='/contact'>Reach Out</Link></span> to Us Today!
            </div>
        </WAppear></div>
        <Footer />
    </>;
}