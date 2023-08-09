import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAbout, WAppear, WFaq, WFaqSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='w-full bg-2'>
            <WAppear>
                <div className='text-center font-extrabold sm:text-5xl text-3xl text-p mb-8'>
                    About us
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {"Our Journey"}
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {"Bridging Cultures, Connecting Hearts"}
                </div>
            </WAppear>
        </div>
        <WAbout />
        <div className='max-w-4xl m-auto flex my-16'><WAppear>
            <div className='font-medium sm:text-lg text-center'>
                {"Your voice matters to us. Whether you have questions, ideas, or a project you'd like to discuss, we're here to listen and help. Let's start a conversation and work together to break down language barriers, amplify your message, and connect with the world. Fill out the contact form below, and one of our friendly team members will be in touch with you shortly. Let's embark on a journey of communication without limits."}
            </div>
            <div>
                <div className='bg-white p-2 px-5 my-8 sm:text-2xl text-center text-xl font-bold w-fit m-auto rounded-full border-[2px] hover:border-m hover:mt-6 hover:mb-10 hover:drop-shadow-lg duration-300 ease-in-out'>
                    <Link href='/contact'>{"Let's Start Communicating"}</Link>
                </div>
            </div>
        </WAppear></div>
        <Footer />
    </>;
}