import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P3, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={2} />
        <div className='sm:p-12 p-4 max-w-7xl m-auto py-8'>
            <div className='text-white text-center sm:text-3xl text-2xl font-bold'>
                {"Our SEO Journey"}
            </div>
            <div className='text-white text-center sm:text-2xl text-xl font-medium'>
                {"Empowering Digital Success"}
            </div>
            <div className='text-c text-center sm:text-xl text-lg font-bold mt-6'>
                {"Navigating the Path to SEO Excellence"}
            </div>
        </div>
        <div className='max-w-7xl m-auto sm:p-12 p-4'>
            <P3 img='5' title='Our Story: A Passion for SEO Excellence' text="SeoSpecializer was born out of a passion for SEO excellence and a vision to empower businesses in the digital landscape. Founded by a team of seasoned SEO experts, our journey began with a shared belief in the transformative power of search engine optimization. From the very start, we dedicated ourselves to unraveling the complexities of SEO and mastering its ever-evolving landscape. Today, our mission remains steadfast: to guide businesses towards online success through data-driven strategies and personalized solutions." />
            <P3 img='4' title='Expert Team: Your Trusted SEO Partners' text="At SeoSpecializer, our greatest asset is our expert team of SEO professionals. Each member is handpicked for their expertise, creativity, and dedication to driving results. Our diverse skill set, coupled with a deep understanding of search algorithms and user behavior, empowers us to devise powerful SEO strategies tailored to your specific needs. With a customer-centric approach, we collaborate closely with clients to ensure our SEO initiatives align seamlessly with their business objectives." />
            <P3 img='10' title='Our Approach: Data-Driven Strategies' text="Transparency and innovation are at the core of our approach. We believe in data-driven decision-making, using cutting-edge tools to analyze trends, competitor insights, and user behavior. By leveraging this wealth of information, we shape comprehensive SEO strategies that stand the test of time. Our meticulous attention to detail ensures every aspect of your website's SEO is optimized, from on-page enhancements to off-page link building, and beyond." />
            <P3 img='11' title='Client Success: Empowering Your Growth' text="Client success stories fuel our passion for what we do. We take pride in the transformative impact our SEO expertise has on businesses across various industries. From startups to established enterprises, we have helped clients unlock their website's true potential and achieve unprecedented growth. Our track record of delivering tangible results speaks volumes about our commitment to driving your business forward in the digital age." />
            <P3 img='12' title='Building Lasting Partnerships' text="At SeoSpecializer, we view every collaboration as a partnership built on trust, integrity, and shared goals. As your dedicated SEO ally, we are committed to providing ongoing support and continuous optimization to keep your website ahead of the competition. Our team is always on hand to address your queries, monitor performance, and adapt strategies to align with the ever-changing SEO landscape. Together, we strive for sustainable success and celebrate milestones as we elevate your online presence." />
        </div>
        <WServicesSmall />
        <Footer />
    </>;
}