import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WProcess, WQuote, WServicesSmall } from "@/modules/widgets";
import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen h-fit relative'>
            <div className='absolute min-h-full min-w-full overflow-hidden bg-black -z-10'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-50 blur-[2px]' />
            </div>
            <div className='max-w-6xl m-auto sm:pt-52 pt-16 sm:pb-16 pb-10 min-h-full'><WAppear className=''>
                <div className='sm:text-center font-black sm:text-5xl text-3xl text-white'>
                    OneToTranslate
                </div>
                <div className='sm:text-center font-bold sm:text-3xl text-xl text-b-l'>
                    Your Bridge to Global Communication
                </div>
                <div className='mt-36 mb-16'>
                    <div className='sm:text-xl text-lg font-bold text-white mb-4'>
                        Breaking Language Barriers, Connecting the World
                    </div>
                    <div className='sm:text-lg font-light text-white'>
                        {"At OneToTranslate, we believe that communication should know no bounds. Our platform is dedicated to helping you connect with people from all corners of the world, regardless of the language they speak. Our expert translators are committed to providing accurate and nuanced translations that preserve the essence of your message. Whether you're a business expanding into new markets or an individual looking to explore different cultures, OneToTranslate is your partner in achieving seamless global communication."}
                    </div>
                </div>
                <div className='w-full flex flex-wrap'>
                    <div className='m-auto w-fit'>
                        <div className='rounded-xl p-4 sm:text-xl w-fit m-auto text-lg font-bold bg-white text-b-m my-4 hover:mb-6 hover:mt-2 duration-300'>
                            <Link href='/contact'>Get Started</Link>
                        </div>
                    </div>
                    <div className='m-auto w-fit'>
                        <div className='rounded-xl p-4 sm:text-xl w-fit m-auto text-lg font-bold bg-white text-b-m my-4 hover:mb-6 hover:mt-2 duration-300'>
                            <Link href='/#quote'>Request a Quote</Link>
                        </div>
                    </div>
                </div>
            </WAppear></div>
        </div>
        <WProcess />
        <WQuote />
        <WServicesSmall />
        <Footer />
    </>;
}