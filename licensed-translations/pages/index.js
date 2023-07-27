import Header from "@/modules/header";
import { Button, WFeatures, WProcess, WStats } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={1} />
        <div className='banner-bg sm:min-h-b-h-1 md:bg-center bg-left  p-4 sm:pt-10'>
            <div className='max-w-7xl m-auto p-4'>
                <div className='md:w-[55%]'>
                    <div className='font-bold text-b-l sm:text-2xl text-lg'>{"Breaking Barriers, Bridging Cultures, and Connecting Hearts."}</div>
                    <div className='font-bold text-b-m sm:text-5xl text-3xl mt-4'>{"Unlock the World with Licensed Translation Services"}</div>
                    <div className='mt-8 sm:text-2xl text-b-m font-medium text-lg'>
                        {"Welcome to Licensed Translation, Your Gateway to Global Communication!"} <br />
                        {"Our professional translation services break down language barriers, enabling seamless communication and understanding across borders. With a team of skilled linguists and subject matter experts, we deliver accurate and culturally sensitive translations for all your needs. Whether it's legal documents, business communications, marketing materials, or personal correspondence, we've got you covered. Join our global community and experience the power of language in uniting the world. Get started today!"}
                    </div>
                    <div className='flex mt-14'>
                        <Button text="Get a Quote" route='/contact' />
                        <Button text="Discover our services" route='/services' />
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto p-4 sm:mt-16'>
            <WFeatures />
            <WStats />
            <WProcess />
        </div>
    </>;
}