import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1, WAppear, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='w-full bg-2'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                    {"About Hello Translaters"}
                </div>
                <div className='sm:text-2xl text-xl font-bold text-center text-p mt-4'>
                    {"Empowering Global Connections Through Words"}
                </div>
            </WAppear></div>
        </div>
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <P1 
                title="Our Story"
                slogan="Crafting Connections Beyond Words"
                text="Here at Hello Translaters, we believe that language is more than just a means of communication; it's a bridge that connects people, cultures, and ideas. Our journey began with a passion for breaking down linguistic barriers, and today, we stand as a beacon of seamless global communication."
            />
            <P1 
                title="Expertise and Excellence"
                slogan="Your Partner in Precision"
                text="Welcome to the heart of precision and dedication. With a team of expert linguists, we ensure that every word carries its intended meaning, resonating with diverse audiences worldwide. Our commitment to excellence goes beyond translation; it's about crafting connections that leave a lasting impact."
            />
            <P1 
                title="Collaborative Approach"
                slogan="Your Vision, Our Mission"
                text="Your vision fuels our mission. We understand the importance of collaboration in achieving exceptional results. With a client-centric approach, we work closely with you to ensure that every translation aligns seamlessly with your goals, resonating with your audience on a profound level."
            />
            <P1 
                title="Beyond Words"
                slogan="Empowering Connections, One Language at a Time"
                text="Our purpose extends beyond words; it's about fostering connections that transcend boundaries. With each translation, we strive to create a world where ideas flow freely, cultures unite, and understanding prevails. Join us in our mission to make the world a smaller, more connected place."
            />
            <P1 
                title="Bridging Worlds"
                slogan="Where Cultural Nuances Thrive"
                text="In a world rich with diversity, cultural nuances matter. At Hello Translaters, we don't just translate; we adapt, infusing each word with cultural authenticity. Our goal is to help you navigate the intricate tapestry of global communication while staying true to the essence of your message."
            />
            <P1 
                title="Embracing Diversity"
                slogan="We Speak the Language of Unity"
                text="Diversity is the heartbeat of our world, and languages are its vibrant threads. At Hello Translaters, we celebrate this diversity by seamlessly bridging gaps between languages, cultures, and communities. Our commitment to understanding and respect forms the cornerstone of our approach, ensuring that your messages transcend boundaries while preserving their unique essence."
            />
        </div>
        <WServicesSmall />
        <div className='max-w-7xl m-auto my-16'><WAppear>
            <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                Ready to Elevate Your Communication? <br /> <span className='underline decoration-m decoration-8 hover:decoration-b duration-300'><Link href='/contact'>Reach Out</Link></span> to Us Today!
            </div>
        </WAppear></div>
        <Footer />
    </>;
}