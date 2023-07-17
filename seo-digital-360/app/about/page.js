import { BannerTop } from "../_modules/banner";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { Paragraph, ParagraphL } from "../_modules/paragraph";
import { Rating } from "../_modules/widgets";
import { FeedbackCard } from "../_modules/feedback_card";
import { Banner } from "../_modules/banner";

export default function Main() {
    return <>
        <Header page={4} />
        <BannerTop img='/img/10.jpg' title='About our company' />
        <Paragraph img='/img/16.jpg' title='Driving Digital Success: Empowering Businesses with Innovative Solutions' text="Welcome to Seo Digital 360, a trailblazer in the world of digital solutions. With a deep understanding of the evolving digital landscape, we specialize in providing innovative strategies and services that help businesses thrive in the online realm. Our mission is to empower our clients by harnessing the power of cutting-edge technologies and industry expertise. From tailored web development to data-driven marketing campaigns, we are committed to driving digital success and exceeding client expectations." />
        <div className='background-1 w-full p-8'>
            <Rating />
        </div>
        <ParagraphL img='/img/17.jpg' title='Our Expert Team: A Fusion of Creativity and Technical Proficiency' text="At Seo Digital 360, we have assembled a team of digital enthusiasts who are passionate about what they do. With a perfect fusion of creativity and technical proficiency, our experts bring a wealth of experience and knowledge to every project. From skilled web developers and designers to strategic marketers and data analysts, our team collaborates seamlessly to deliver comprehensive solutions that propel businesses forward. We pride ourselves on staying ahead of industry trends and constantly refining our skills to ensure we provide our clients with the best-in-class digital solutions." />
        <Paragraph img='/img/18.jpg' title='Client-Centric Approach: Your Success is Our Top Priority' text="Client satisfaction lies at the heart of everything we do. We believe in building strong and enduring partnerships with our clients, working closely with them to understand their unique goals, challenges, and target audiences. By adopting a client-centric approach, we tailor our services to meet specific needs, providing personalized strategies that drive tangible results. Our commitment to transparent communication, timely delivery, and exceptional customer service sets us apart. With Seo Digital 360, you can trust that your business objectives will always be our top priority as we strive to exceed your expectations and unlock your digital potential." />
        <div className='background-1 w-full p-8'>
                <div className='w-fit m-auto pt-8 md:pt-16 text-white text-5xl font-bold decoration-g-l'>
                    Our feedback
                </div>
                <div className='max-w-7xl m-auto p-6'>
                <div className='m-auto flex'>
                    <FeedbackCard img='/img/3.jpg' title='John Anderson, CEO' text="Working with Seo Digital 360 has been a game-changer for our business. Their expertise in SEO has helped us climb the search engine rankings, resulting in a significant increase in organic traffic and conversions. Their personalized approach and attention to detail make them stand out from the crowd. We highly recommend their services to any business looking to dominate the online landscape." />
                    <img src='/img/5.png' className='invert-[0.6] w-fit h-fit m-auto lg:block hidden' />
                </div>
                <div className='m-auto flex'>
                    <img src='/img/6.png' className='invert-[0.6] w-fit h-fit m-auto lg:block hidden' />
                    <FeedbackCard img='/img/4.jpg' title='Michael Johnson, Director of Marketing' text="We couldn't be happier with the results Seo Digital 360 has achieved for our website. Their strategic SEO efforts have put us ahead of the competition and allowed us to reach a wider audience. Our online visibility has soared, leading to a substantial boost in website traffic and a surge in qualified leads. Seo Digital 360's team is incredibly knowledgeable, responsive, and dedicated. They have truly exceeded our expectations." />
                </div>
            </div>
        </div>
        <Banner cta_route='/contact' cta='Reach us' img='/img/9.jpg' title={<>Ready to supercharge your online presence?<br />Contact us now!</>} text="" />
        <Footer page={4} />
    </>;
}