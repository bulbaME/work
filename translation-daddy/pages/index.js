import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CAnchor, P1L, P1R, WAboutSmall, WFeatures, WGetStarted, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='max-w-7xl m-auto p-6 banner-main drop-shadow-lg'>
            <div className='sm:w-1/2 w-2/3 my-16'>
                <div className='sm:text-5xl text-2xl text-b-m font-extrabold'>
                    {"Your Gateway to Multilingual Excellence!"}
                </div>
                <div className='sm:text-xl text-lg text-b-d font-bold my-4'>
                    {"Breaking Barriers, Bridging Cultures - Empowering Global Communication!"}
                </div>
                <div className='sm:text-lg my-12 font-light'>
                    {"Are you looking to conquer the world with your business, but language barriers are holding you back? Look no further! Translator Daddy is your ultimate language partner, providing expert translation services to unlock the true potential of your global ventures."}
                </div>
                <div className='w-fit m-auto my-8 flex flex-wrap'>
                    <div className='sm:text-xl font-bold p-3 px-4 my-4 mx-8 bg-white border-[1px] rounded-full hover:border-b-l duration-300 hover:drop-shadow-lg'>
                        <Link href='/contact#contact-us'>{"Get a Quote"}</Link>
                    </div>
                    <div className='sm:text-xl font-bold p-3 px-4 my-4 mx-8 bg-white border-[1px] rounded-full hover:border-b-l duration-300 hover:drop-shadow-lg'>
                        <Link href='/about'>{"Learn More"}</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='my-12 flex flex-wrap p-2 max-w-7xl m-auto'>
            <CAnchor text="Explore the World" />
            <CAnchor text="Trustworthy Translations" />
            <CAnchor text="Swift Turnaround" />
            <CAnchor text="Personalized Approach" />
            <CAnchor text="Scale Your Success" />
            <CAnchor text="Global Reach" />
            <CAnchor text="Cutting-edge Technology" />
            <CAnchor text="Customer Satisfaction" />
        </div>
        <WFeatures />
        <P1L img='1' title='Welcome to Translator Daddy - Your Multilingual Language Partner' text="Welcome to Translator Daddy, your trusted language partner for all your translation needs. We are dedicated to breaking down language barriers and empowering global communication. Our mission is to enable businesses and individuals to expand their horizons and connect with diverse audiences worldwide through accurate and culturally-sensitive translations. Whether you are a business looking to expand internationally or an individual seeking personal translation services, Translator Daddy is here to help you navigate the multilingual landscape with ease." />
        <P1R img='2' title='Experience the Translator Daddy Difference' text="At Translator Daddy, we go beyond just providing translations. We are passionate language enthusiasts who believe in the transformative power of communication. Our dedication to accuracy, cultural sensitivity, and customer-centricity sets us apart in the industry, making Translator Daddy your ideal language ally." />
        <WGetStarted />
        <P1L img='3' title='Why Choose Translator Daddy?' text="At Translator Daddy, we understand the significant impact that accurate and culturally-sensitive translations can have on your business or personal endeavors. Our team of skilled linguists and subject matter experts is committed to delivering the highest quality for your content. We recognize the importance of confidentiality and security, ensuring that your documents and information are safeguarded throughout the translation process. With a strong commitment to punctuality, we make it our priority to deliver your projects on time, no matter how tight the deadline." />
        <P1R img='4' title='Our Commitment to Excellence' text="At Translator Daddy, we take immense pride in delivering unparalleled translation services. Our approach revolves around precision and a deep understanding of various cultures, ensuring that your message is effectively conveyed to your target audience. Each project is handled with meticulous attention to detail, tailored to your specific needs, and designed to achieve the best possible outcomes. Your success is our success, and we strive to exceed your expectations with every translation project we undertake." />
        <P1L img='5' title='Unlock Global Opportunities' text="As the world becomes increasingly interconnected, accurate translation has become more critical than ever before. Translator Daddy opens the doors to new markets and opportunities, allowing you to reach diverse audiences around the world. Our expert team ensures that your content is not only linguistically accurate but also culturally relevant, making a lasting impact on your international customers. With Translator Daddy by your side, you can confidently communicate your message and offerings to a global audience." />        
        <WAboutSmall />
        <WServicesSmall />
        <div className='max-w-4xl m-auto p-6 my-16 text-center'>
            <div className='sm:text-lg font-bold mb-4 text-b-d'>
                {"Discover the full range of our multilingual solutions. From document translation to localization, we have the expertise you need."}
            </div>
            <div className='sm:text-xl font-bold p-3 px-4 my-4 mx-auto w-fit bg-white border-[1px] rounded-full hover:border-b-l duration-300 hover:drop-shadow-lg'>
                <Link href='/services'>{"Explore Our Services"}</Link>
            </div>
        </div>
        <Footer />
    </>;
}