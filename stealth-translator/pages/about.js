import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={2} />
        <div className='bg-1 w-full h-[10rem] -mb-[4rem]' />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl font-bold text-white text-center underline decoration-8 decoration-m-m'>
                About Us.
            </div>
        </WAppear></div>
        <P1L 
            title="Who We Are"
            slogan="Unveiling the Essence of StealthTranslator"
            text="At StealthTranslator, we are more than just a translation company. We are a global bridge, connecting cultures, breaking barriers, and ensuring effective communication across borders. With a passion for languages and a commitment to excellence, we have embarked on a journey to redefine how the world communicates."
            img='/img/5.jpg'
        />
        <P1R
            title="Our Mission"
            slogan="Empowering Global Communication, One Word at a Time"
            text="Our mission is to empower individuals, businesses, and organizations to overcome language obstacles and expand their reach. By providing accurate and culturally-sensitive translations, we aim to foster understanding and collaboration on a global scale. We believe that every word has the potential to inspire, educate, and transform, and we're dedicated to making those words accessible to all."
            img='/img/3.jpg'
        />
        <P1L 
            title="Our Approach"
            slogan="Merging Expertise and Innovation for Seamless Translations"
            text="At StealthTranslator, our approach combines the expertise of skilled linguists with the innovation of cutting-edge technology. Every translation is a labor of love, meticulously crafted to preserve the nuances, context, and intent of the original message. With a commitment to accuracy and cultural sensitivity, we ensure that your content resonates naturally in any language."
            img='/img/4.jpg'
        />
        <P1R 
            title="Our Team"
            slogan="Linguists, Innovators, Culture Enthusiasts"
            text="Our team is a dynamic blend of linguistic talents, technology enthusiasts, and passionate culture ambassadors. With diverse backgrounds and a shared dedication to excellence, we come together to bridge gaps and create meaningful connections. Each member of our team contributes a unique perspective to our collective pursuit of language harmony."
            img='/img/2.jpg'
        />
        <P1L 
            title="Join the Journey"
            slogan="Partner with Us to Redefine Communication"
            text="We invite you to join us on this exciting journey of breaking down language barriers and building bridges of understanding. Whether you're an individual seeking to connect with the world or a business expanding your global footprint, StealthTranslator is your trusted partner. Together, we're shaping a future where words are not just translated, but also embraced across borders."
            img='/img/1.jpg'
        />
        <div className='max-w-7xl m-auto py-8'><WAppear>
            <div>
                <div className='sm:text-3xl text-xl font-bold text-white'>{"Your Communication Journey Begins Here"}</div>
                <div className='flex flex-wrap mt-8'>
                    <div className='sm:text-lg font-light text-white md:w-2/3 md:pb-0 pb-8'>
                        {"Ready to break language barriers and enhance global connections? Reach out to us now to discuss your translation needs, inquire about our services, or simply say hello. Let's embark on a journey of effective communication together. Contact StealthTranslator today."}
                    </div>
                    <div className='sm:text-xl text-lg font-light px-4 p-3 rounded-full border-[1px] border-white text-white m-auto w-fit duration-300 hover:bg-black hover:border-m-m'>
                        <Link href='/contact'>Contact us</Link>
                    </div>
                </div>
            </div>
        </WAppear></div>
        <WServicesSmall />
        <Footer />
    </>;
}