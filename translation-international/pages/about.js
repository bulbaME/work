import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, WidgetFeatures, WidgetServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='max-w-6xl m-auto p-4 mt-10 flex-wrap'>
            <div className='text-y-d font-semibold text-xl'>{"Connecting Cultures, Breaking Barriers - Our Story"}</div>
            <div className='text-black font-bold text-3xl'>{"Empowering Global Communication Through Language"}</div>
            <div className='my-8 text-xl font-semibold'>{"At Translation International, our journey began with a passion for languages and a vision to connect cultures. Since our founding, we have grown into a leading language services company, driven by a mission to empower global communication and foster understanding among diverse communities. Our team of expert linguists, language enthusiasts, and professionals are dedicated to delivering precise, culturally sensitive translations that transcend boundaries. Join us on this exciting adventure as we continue to build bridges of communication worldwide."}</div>
        </div>
        <Paragraph img='/img/6.jpg' title='Bridging the Gaps, Connecting Cultures' text="Our mission is to bridge the gaps between people, businesses, and cultures by providing accurate and culturally sensitive language solutions. We understand that effective communication is the foundation of successful interactions, whether in business, education, or personal relationships. With this understanding, we are dedicated to delivering language services that resonate with audiences worldwide." />
        <Paragraph img='/img/9.jpg' title='Passionate Linguists, Expert Translators' text="At the heart of Translation International lies our team of passionate linguists, language enthusiasts, and expert translators. Each member brings a wealth of experience, linguistic proficiency, and cultural awareness to the table. We handpick our translators, ensuring they are not only skilled in the target language but also possess an in-depth understanding of the nuances, idioms, and cultural customs associated with it." />
        <Paragraph img='/img/8.jpg' title='Comprehensive Language Solutions' text="Our comprehensive range of language solutions caters to diverse needs, whether you're a multinational corporation, a growing business, or an individual seeking to connect with international audiences. From precise document translations and creative content creation to seamless interpretation and localization, we have the expertise and resources to address your unique language requirements." />
        <Paragraph img='/img/10.jpg' title='Join Us on the Journey' text="We invite you to join us on this exciting journey of empowering global communication through language. Together, let's break barriers, foster connections, and unlock the potential of effective communication across borders. Experience the transformative power of language with Translation International and connect with the world in a whole new way. Welcome to our language-loving community!" />
        <WidgetFeatures />
        <WidgetServicesSmall />
        <div className='my-36 text-center max-w-6xl m-auto p-4 text-3xl font-bold'>
            <div>
                {"Have questions or need more information?"}
            </div>
            <div className='underline decoration-y-l decoration-4 hover:decoration-b-l duration-300'>
                <Link href='/contact'>{"Reach out to our friendly team today!"}</Link>
            </div>
        </div>
        <Footer /> 
    </>;
}