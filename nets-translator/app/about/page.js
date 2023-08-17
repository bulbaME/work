import { BigButtonGreen } from "../_modules/bit_button";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { Paragraph, ParagraphL } from "../_modules/paragraph";
import { Rating } from "../_modules/widgets";

export default function Main() {
    return <>
        <Header page={3} />
        <div className='max-w-4xl m-auto'>
            <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-5xl sm:text-5xl font-semibold'> Discover Our Story</div>
            <div className='max-w-3xl p-5 my-10 m-auto font-medium text-3xl'>{"Unveiling the Power of Language and Connection. Explore our About Page to uncover the passion and expertise that drive us to break down language barriers and foster global connections. Join us on a captivating journey."}</div>
            <Paragraph img='/img/6.jpg' title='Company Overview' text="Welcome to Nets Translator, a premier translation company specializing in bridging language barriers. Since our establishment in 2009, we have been dedicated to facilitating effective communication across languages and cultures. With our expertise in everything related to translation, we deliver accurate and culturally sensitive translations tailored to the unique needs of our clients." />
            <ParagraphL img='/img/7.jpg' title='Mission and Vision' text="At Nets Translator, our mission is to break down language barriers and foster global understanding through seamless translation solutions. We envision a world where language is not an obstacle but a catalyst for collaboration and connection. Through our language services, we aim to empower individuals, businesses, and organizations to communicate effectively and make a lasting impact in a diverse and interconnected world." />
            <Paragraph img='/img/4.jpg' title='Core Values' text="Our core values guide our every endeavor at Nets Translator. Integrity is the cornerstone of our operations, ensuring that our translations are accurate, reliable, and faithful to the original message. Excellence drives us to consistently deliver high-quality results that exceed client expectations. We embrace innovation, leveraging cutting-edge translation technologies to enhance efficiency and precision. Lastly, our commitment to exceptional customer service ensures that each client receives personalized attention and a seamless experience." />
            <ParagraphL img='/img/5.jpg' title='Expert Team' text="At Nets Translator, we have assembled a team of highly skilled translators and language experts. Our dedicated professionals possess extensive experience in a wide range of languages and industries, enabling us to provide specialized translation services tailored to our clients' specific requirements. With their linguistic proficiency, subject matter expertise, and attention to detail, our team ensures that every translation project is executed with the utmost precision and cultural sensitivity." />
        </div>
        <BigButtonGreen text='Get in touch with us' route='/contact' />
        <Rating />
        <Footer />
    </>;
}