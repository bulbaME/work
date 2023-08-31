import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear, WProcess, WQuote, WServicesSmall } from "@/modules/widgets";
import Image from "next/image";
import Link from "next/link";

function Card(props) {
    return <div className='lg:w-1/4 md:w-1/2 p-2 overflow-hidden my-auto'>
        <div className='relative my-auto'>
            <div className='p-4 rounded-2xl '>
                <div className='sm:text-xl text-lg w-fit m-auto font-medium text-white text-center mb-2 relative'>
                    <div className='text-m my-auto absolute -ml-8 top-1/2 -translate-y-1/2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    {props.title}
                </div>
                <div className='sm:text-lg font-light text-white text-center'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen h-fit relative'>
            <div className='absolute min-h-full min-w-full overflow-hidden bg-black -z-10'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-30' />
            </div>
            <div className='max-w-7xl m-auto sm:pt-28 pt-10 min-h-full'><WAppear className=''>
                <div className='mt-10'>
                    {/* <div className='sm:text-3xl text-xl font-bold text-center text-white'>
                        {"Elevate Your Brand with Seven Studio Design"}
                    </div> */}
                    <div className='sm:text-xl text-lg font-light text-m text-center'>
                        {"Innovative Design Solutions for Every Project"}
                    </div>
                </div>
                <div className='sm:text-lg font-light text-center text-white mb-10 mt-6 max-w-4xl m-auto'>
                    {"Welcome to Seven Studio Design, where creativity meets functionality. Our team of dedicated designers is here to bring your vision to life and create impactful design solutions that resonate with your target audience."}
                </div>
                <div className='w-full my-16 flex max-w-xl m-auto flex-wrap'>
                    <div className='w-fit m-auto text-white sm:text-2xl text-xl font-bold p-2 px-4 border-[2px] bg-gradient-to-br from-m to-p border-p hover:border-white duration-300 rounded-full'>
                        <Link href='/contact'>Get Started</Link> 
                    </div>
                    <div className='w-fit m-auto text-white sm:text-2xl text-xl font-bold p-2 px-4 border-[2px] bg-gradient-to-br from-m to-p border-p hover:border-white duration-300 rounded-full'>
                        <Link href='/#quote'>Get a Quote</Link> 
                    </div>
                </div>
                <div className='flex flex-wrap mt-24'>
                    <div className='w-full font-medium text-center text-white sm:text-3xl text-xl mb-6'>
                        {"What Will You Get With Us"}
                    </div>
                    <Card title='Strategic Design' text="We specialize in crafting designs that not only look stunning but also serve a purpose. Our strategic approach ensures your designs communicate your message effectively." />
                    <Card title='Diverse Expertise' text="From logo design and branding to web development and print materials, we have the expertise to handle a wide range of design projects. No project is too big or too small for us." />
                    <Card title='Client-Centric' text="Your satisfaction is our priority. We work closely with you to understand your goals, values, and preferences, ensuring that the final product reflects your unique identity." />
                    <Card title='Innovation' text="Our designers are passionate about staying on top of design trends and technologies. We infuse fresh ideas and innovation into every project, giving your brand a competitive edge." />
                </div>
            </WAppear></div>
        </div>
        <WProcess />
        <WQuote />
        <P1L 
            title='Our Approach to Design'
            text="Our approach blends innovation with strategy. We understand that design goes beyond aesthetics; it's about understanding your brand, your goals, and your audience. From brand identity and web design to print materials and user experiences, we take a holistic view of your design needs. Through collaborative partnerships and a deep understanding of your values, we ensure that each design solution is a reflection of your brand's uniqueness."
            img='/img/1.jpg'
            kt={[
                "Innovation",
                "Collaboration",
                "Uniqueness"
            ]}
        />
        <P1R 
            title='Why Choose Seven Studio Design?'
            text="Choosing Seven Studio Design means choosing a creative partner that's dedicated to your success. Our commitment to excellence drives us to push boundaries, challenge conventions, and infuse every project with fresh ideas. We pride ourselves on delivering not just designs, but experiences that resonate with your audience. With a transparent process, competitive pricing, and a passion for delivering beyond expectations, we're here to elevate your brand's presence and impact."
            img='/img/2.jpg'
            kt={[
                "Excellence",
                "Passion",
                "Impact"
            ]}
        />
        <P1L 
            title={<div className='flex hover:text-p duration-300 hover:pl-2'>
                <Link href='/contact'>Get Started Today</Link>
                <div className='ml-2 my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>}
            text="Ready to embark on a design journey that will set your brand apart? Whether you're a startup looking to establish your identity or an established business seeking a design refresh, we're here to collaborate and create. Explore our portfolio, reach out for a consultation, or use our instant quote tool to kickstart your project. Join us in bringing your vision to life and making an impact through exceptional design."
            img='/img/3.jpg'
            kt={[
                "Exploration",
                "Consultation",
                "Dedication"
            ]}
        />
        <WServicesSmall />
        <Footer />
    </>;
}