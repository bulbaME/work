import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFeature } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='relative bg-1'>
            <div className='max-w-7xl m-auto pb-[5%]'><WAppear>
                <div className='text-center sm:text-5xl text-3xl font-extrabold text-white'>
                    About Us
                </div>
            </WAppear></div>
        </div>
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold underline decoration-4 decoration-m-l'>
                {"About Design 4 My Budget"}
            </div>
            <div className='sm:text-base text-sm my-8 font-medium'>
                {"Welcome to Design 4 My Budget, where affordability meets excellence in design. We are a team of passionate creatives dedicated to making outstanding design accessible to everyone, regardless of budget constraints. Our mission is to transform your ideas into visually captivating realities that leave a lasting impact. With a keen eye for detail and a commitment to innovative solutions, we're here to turn your vision into art."}
            </div>
            <div className='sm:text-base text-sm my-8 font-medium'>
                {"At Design 4 My Budget, we believe that every project, no matter the size or scope, deserves exceptional design. Our journey began with the goal of bridging the gap between affordability and creativity, empowering individuals and businesses to showcase their unique identities without compromising on quality. With years of experience and a portfolio spanning various industries, we are here to guide you through the design process and create a personalized experience tailored to your needs."}
            </div>
        </WAppear></div>
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-3xl text-xl font-extrabold underline decoration-4 decoration-m-l'>
                {"Our Approach"}
            </div>
            <div className='sm:text-base text-sm my-8 font-medium'>
                {"Our approach to design is rooted in collaboration, innovation, and a deep understanding of our clients' aspirations. We take the time to truly comprehend your vision, goals, and challenges. This enables us to craft solutions that not only reflect your personality and values but also resonate with your target audience. Our team thrives on creativity and thrives in an environment that encourages exploration and experimentation."}
            </div>
        </WAppear></div>
        <WFeature />
        <div className='max-w-5xl m-auto my-24'><WAppear>
            <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                Get In Touch
            </div>
            <div className='mt-4 text-center sm:text-xl font-medium'>
                {"Ready to take the next step towards turning your ideas into stunning designs? We're excited to hear from you! Reach out to us today to discuss your project and explore the possibilities."}
            </div>
            <div className='w-fit sm:text-xl text-lg mt-10 m-auto p-3 px-4 font-bold border-[1px] bg-white rounded-full hover:drop-shadow-lg duration-300 hover:border-m-l'>
                <Link href='/contact'>Contact us</Link>
            </div>
        </WAppear></div>
        <Footer />
    </>;
}