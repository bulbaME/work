import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1, WAppear, WServicesSmallD } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-white header-title'>
                    {"Discover Our Story"}
                </div>
                <div className='sm:text-3xl text-xl text-white mt-4'>
                    {"Navigating Digital Success Together"}
                </div>
            </WAppear></div>
        </div>
        <div className='max-w-7xl m-auto flex flex-wrap w-full'>
            <P1 
                title="Our Journey to Excellence"
                slogan="Nurturing Brands, Empowering Success"
                text="At SeoSergeant, we're not just an SEO company; we're your partners on the path to digital excellence. Our journey began with a simple mission: to equip businesses with the tools they need to conquer the online realm. Guided by a passion for innovation and a commitment to results, we've evolved into a dynamic team of SEO experts dedicated to nurturing brands and empowering success."
            />
            <P1 
                title="A Team of Experts"
                slogan="Your Success, Our Expertise"
                text="Our team is the backbone of our success. With a collective wealth of experience in SEO, our experts are dedicated to crafting strategies that transcend conventional approaches. From keyword analysis to technical audits, we dig deep to uncover opportunities that drive real impact. Your success is our ultimate goal, and we're unwavering in our commitment to achieving it."
            />
            <P1 
                title="Our Core Values"
                slogan="Guided by Integrity, Excellence, and Innovation"
                text="At SeoSergeant, our core values shape every aspect of our work. Integrity is our foundation, ensuring transparency and honesty in every interaction. Excellence is our pursuit, driving us to deliver results that exceed expectations. Innovation is our compass, guiding us as we navigate the ever-evolving digital landscape. With these values at our core, we're not just your SEO partner – we're your trusted ally in achieving digital success."
            />
            <P1 
                title="Client-Centric Approach"
                slogan="Your Goals, Our North Star"
                text="Our client-centric approach is more than a strategy; it's a philosophy that underscores everything we do. We're not here to impose solutions; we're here to listen, understand, and collaborate. Your goals become our North Star as we work together to craft personalized strategies that align with your unique needs. Your success is the measure of our success, and we're committed to achieving it together."
            />
            <P1 
                title="Impactful Results"
                slogan="Transforming Visions into Reality"
                text="At SeoSergeant, we understand that results are more than metrics; they're the realization of your vision. We're proud to have transformed countless visions into reality through our data-driven strategies and unwavering dedication. With each success story, we're reminded of the power of strategic SEO and its ability to reshape brands, fuel growth, and leave an indelible mark in the digital world."
            />
            <P1 
                title="Unleash Your Potential"
                slogan="Igniting Possibilities in the Digital Landscape"
                text="At SeoSergeant, we believe that every brand has untapped potential waiting to be unleashed. Our dedication to excellence drives us to create tailor-made solutions that not only enhance your online visibility but also elevate your brand's identity. Through strategic collaboration and a relentless pursuit of innovation, we ignite possibilities that transform your digital presence into a dynamic force."
            />
        </div>
        <WServicesSmallD />
        <Footer />
    </>;
}